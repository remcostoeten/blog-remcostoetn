"use client";

import Image from "next/image";
import { signIn, signOut } from "next-auth/react";

export function GoogleSignInButton() {
    const handleClick = () => {
        signIn("google");
    };

    return (
        <button
            onClick={handleClick}
            className="focus:shadow-outline mt-4 flex h-14 w-full items-center justify-center rounded-lg border-2  border-black bg-white px-6 text-xl font-semibold text-black transition-colors duration-300 hover:bg-slate-200"
        >
            <span className="ml-4">Continue with Google</span>
        </button>
    );
}

export function GithubSignInButton() {
    const handleClick = () => {
        signIn("github");
    };

    return (
        <button
            onClick={handleClick}
            className="focus:shadow-outline mt-4 flex h-14 w-full items-center justify-center rounded-lg border-2 border-black bg-white px-6 text-xl font-semibold text-black transition-colors duration-300 hover:bg-slate-200"
        >
            <span className="ml-4">Continue with Github</span>
        </button>
    );
}

export function CredentialsSignInButton() {
    const handleClick = () => {
        signIn();
    };

    return (
        <button
            onClick={handleClick}
            className="focus:shadow-outline mt-4 flex h-14 w-full items-center justify-center rounded-lg border-2 border-black bg-white px-6 text-xl font-semibold text-black transition-colors duration-300 hover:bg-slate-200"
        >
            {/* <Image src={githubLogo} alt="Github Logo" width={20} height={20} /> */}
            <span className="ml-4">Continue with Email</span>
        </button>
    );
}

export function SignOut() {
    return (
        <button
            onClick={() => signOut()}
            className="focus:shadow-outline mt-4 flex h-14 w-full items-center justify-center rounded-lg border-2 border-black bg-white px-6 text-xl font-semibold text-black transition-colors duration-300 hover:bg-slate-200"
        >
            <span className="ml-4">Sign Out</span>
        </button>
    );
}