import Image from "next/image"
import Link from "next/link"

import Form from "@/components/auth/form"

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <Link href="/">
            <Image
              src="/logo.png"
              priority
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </Link>
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p>
        </div>
        <Form type="register" />
      </div>
    </div>
  )
}
// import { getServerSession } from 'next-auth';
// import Form from './form';
// // import { redirect } from 'next/navigation';

// export default async function RegisterPage() {
//   const session = await getServerSession();
//   if (session) {
//     redirect('/');
//   }
//   return <Form />;
// }
