"use client";
import { auth } from "@/core/database/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import GetTimeOfTheDay from "@/core/utils/getTimeOfTheDay";

export default function UserGreeting() {
  const [user] = useAuthState(auth);
  const timeOfTheDay = GetTimeOfTheDay();

  return (
    <h2 className="mr-2 text-xl font-bold tracking-tight">
      Good {timeOfTheDay} {user?.displayName}{" "}
      <span aria-label="waving hand" className="wave" role="img">
        👋
      </span>
    </h2>
  );
}
