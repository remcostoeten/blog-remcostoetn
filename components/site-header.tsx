import { getServerSession } from "next-auth/next";

export default async function AuthStatus() {
  const session = await getServerSession();
  return (
    <div className="absolute top-5 flex w-full items-center justify-center">
      {session && (
        <p className="text-sm text-stone-200">
          Signed in as {session.user?.email}
        </p>
      )}

      {!session && (
        <p className="text-sm text-stone-200">
          Not signed in
        </p>
      )
      }
    </div>
  );
}
