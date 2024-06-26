"use client";

import { GuestbookEntry } from "../issues/compopnents/types";
import GuestBookComments from "./components/GuestBookComments";
import IntroShell from "@/components/core/layout/IntroShell";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { auth, firestore } from "@/core/database/firebase";
import {
  useGithubSignIn,
  useGoogleSignIn,
} from "@/core/hooks/signin-providers";
import { useDeleteDoc } from "@/core/hooks/useDeleteDoc";
import { convertToEmoji } from "@/core/lib/countryToFlag";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function GuestBookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [newEntry, setNewEntry] = useState("");
  const [signInWithGithub, loadingGithub, errorGithub] = useGithubSignIn();
  const [signInWithGoogle, loadingGoogle, errorGoogle] = useGoogleSignIn();
  const [isLoading, setIsLoading] = useState(false);
  const user = auth.currentUser;
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = entries.slice(indexOfFirstEntry, indexOfLastEntry);
  const [id, setId] = useState("");
  useEffect(() => {
    const entriesRef = collection(firestore, "guestbook");
    const orderedEntriesQuery = query(entriesRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(orderedEntriesQuery, (snapshot) => {
      const fetchedEntries: GuestbookEntry[] = [];
      snapshot.forEach((doc) => {
        const entry = doc.data() as GuestbookEntry;
        entry.id = doc.id;
        fetchedEntries.push(entry);
      });

      setEntries(fetchedEntries);
    });

    return () => unsubscribe();
  }, []);

  const handleNewEntryChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewEntry(event.target.value);
  };

  const handleNewEntrySubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (newEntry.trim() === "") {
      return;
    }

    const response = await fetch("https://ipapi.co/json/");
    const locationData = await response.json();
    const country = locationData.country_name;

    const entriesRef = collection(firestore, "guestbook");
    const newEntryData: Omit<GuestbookEntry, "id"> = {
      user: user?.displayName || "",
      uniqueId: user?.uid || "",
      avatar: user?.photoURL || "",
      text: newEntry,
      timestamp: serverTimestamp(),
      country: country,
    };

    await addDoc(entriesRef, newEntryData);

    setNewEntry("");
    toast("Entry posted successfully!");
  };

  const handleDeleteEntry = useDeleteDoc(
    "guestbook",
    "Entry deleted successfully!",
    "Error deleting entry!"
  );

  const handleSignIn = async (provider: "github" | "google") => {
    setIsLoading(true);
    try {
      if (provider === "github") {
        await signInWithGithub();
      } else if (provider === "google") {
        await signInWithGoogle();
      }
      toast("Signed in successfully!");
    } catch (error) {
      console.error(error);
      toast("Error signing in!");
    } finally {
      setIsLoading(false);
    }
  };
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const totalPages = Math.ceil(entries.length / entriesPerPage);

  const totalPageArray = Array.from(Array(totalPages).keys());

  return (
    <>
      <IntroShell
        title="Guestbook"
        description="It's your time to shine. Say whatever you want to say."
      />
      <AnimatePresence>
        <motion.div
          // ToDo: fix layout shift
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col gap-2">
            {currentEntries.map((entry) => (
              <GuestBookComments
                key={entry.id}
                avatarSrc={entry.avatar || null}
                nameHandle={entry.user ?? ""}
                message={entry.text || ""}
                date={
                  entry.timestamp
                    ? entry.timestamp.toDate().toLocaleString()
                    : ""
                }
                avatarFallback={"s"}
                deleteComment={
                  entry.uniqueId === user?.uid
                    ? () => handleDeleteEntry(entry.id ?? "")
                    : undefined
                }
                country={convertToEmoji(entry.country || "")}
                user={""}
              />
            ))}
            {user ? (
              <form
                className="flex flex-col items-start gap-2"
                onSubmit={handleNewEntrySubmit}
              >
                <textarea
                  value={newEntry}
                  onChange={handleNewEntryChange}
                  placeholder="Leave a message"
                  className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent p-4 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button variant="outline" type="submit">
                  Post Entry
                </Button>
              </form>
            ) : (
              <div className="flex flex-col gap-2">
                <h4 className="text-gray-400">
                  Please login in order to leave a message
                </h4>
                <div className="flex sm:items-center gap-2 sm-row">
                  <Button
                    variant="outline"
                    onClick={() => handleSignIn("github")}
                  >
                    <Icons.github className="mr-2 size-4" />
                    Sign In with Github
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleSignIn("google")}
                  >
                    <Icons.google.bnw className="mr-2 size-4" fill="white" />
                    Sign in with Google
                  </Button>
                </div>
              </div>
            )}
            <div>
              {isClient && (
                <Pagination className="cursor-pointer">
                  <PaginationContent>
                    {currentPage !== 1 && (
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => setCurrentPage(currentPage - 1)}
                        />
                      </PaginationItem>
                    )}

                    {totalPageArray.map((page) => {
                      if (totalPages <= 1) {
                        return null;
                      }
                      if (
                        page + 1 >= currentPage - 3 &&
                        page + 1 <= currentPage + 3
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationLink
                              onClick={() => setCurrentPage(page + 1)}
                              isActive={page + 1 === currentPage}
                            >
                              {page + 1}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      } else if (
                        page + 1 === currentPage - 4 ||
                        page + 1 === currentPage + 4
                      ) {
                        return <PaginationEllipsis key={`ellipsis-${page}`} />;
                      } else {
                        return null;
                      }
                    })}
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
