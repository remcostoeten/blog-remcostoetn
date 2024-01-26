"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { User, getAuth, onAuthStateChanged } from "firebase/auth"

import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import Seperator from "./layout/Seperator"
import LoginLinkAuth from "./menu/LoginLinkAuth"
import MenuItem from "./menu/MenuItem"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import Sprinkle from "./effects/Sprinkle"
import AnimatedElement from "./effects/AnimatedElement"

const navigationMenu = [
    { label: "Home", icon: Icons.home, href: "/" },
    { label: "About", href: "about", icon: Icons.user },
    { label: "Blog", icon: Icons.code, href: "blog" },
    { label: "Issues", icon: Icons.todo, href: "issues" },
    { label: "Kanban", icon: Icons.kanban, href: "kanban" },
    { label: "Finance", icon: Icons.finance, href: "finance" },
    { label: "Guestbook", icon: Icons.PencilIcon, href: "guestbook" },
    { label: "Contact", icon: Icons.mail },
]

export default function SiteHeader({
    children,
}: {
    children?: React.ReactNode
}) {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const auth = getAuth()
        const unsubscribe = onAuthStateChanged(auth, setUser)
        return () => unsubscribe()
    }, [])

    const isAuthenticated = user !== null

    return (
        <>
            <AnimatedElement className="hidden max-h-[97vh] flex-col text-blacktheme dark:text-accent sm:flex h-screen sticky top-8" as="aside" opacity={0} duration={0.5} ease="EASE_IN">
                <div className="mb-6 flex items-center gap-2">
                    <div className="flex flex-col gap-2.5 text-xl">
                        <div className="relative">
                            {!isAuthenticated && (
                                <Image
                                    src="/remco-avatar-compressed.webp"
                                    alt="Remco Stoeten"
                                    width={50}
                                    height={50}
                                    className="z-20 rounded-full"
                                />
                            )}
                            {isAuthenticated && user?.photoURL && (
                                <Sprinkle opacity={0.3} starColor="pink" starCount={10}>
                                    <Avatar>
                                        <AvatarImage src={user?.photoURL} />
                                        <AvatarFallback>{user?.displayName?.[0]}</AvatarFallback>
                                    </Avatar>
                                </Sprinkle>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-blacktheme dark:text-white">
                            {isAuthenticated && user?.displayName && <>{user?.displayName}</>}{" "}
                            {!isAuthenticated && <>Remco Stoeten</>}
                        </div>
                        <div className="text-sm text-blacktheme dark:text-gray-400">
                            {!isAuthenticated && <>@remcostoeten</>}
                        </div>
                    </div>
                </div >
                <div className="mb-6 flex grow flex-col">
                    <div className="mb- flex items-center">
                        <span className="work-pulse pulser mr-2 size-2 rounded-full bg-green-400" />
                        <span className="text-sm">Open for collabs!</span>
                        <div className="ml-auto">
                            <ThemeToggle />
                        </div>
                    </div>
                    <Seperator spacing="12" />
                    <ul>
                        {navigationMenu.map((navItem, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    title={navItem.label}
                                    href={navItem.href ? navItem.href : "#"}
                                    icon={navItem.icon ? <navItem.icon /> : null}
                                    isExternal={false}
                                />
                            )
                        })}
                    </ul>
                    <LoginLinkAuth />
                </div>
                <Sprinkle randomness={25} starColor="#fff" starCount={3} className='py-2 text-neutral-400 text-cream flex justify-between flex-row h-full items-end'>
                    <p className="mb-6 flex flex-col-reverse items-start md:flex-row md:items-center">
                        With
                        <span className="mx-1 animate-pulse text-red-800">❤</span>
                        by remco stoeten
                    </p>
                </Sprinkle>
            </AnimatedElement>
        </>
    )
}
