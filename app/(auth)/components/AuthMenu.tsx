import Link from "next/link"
import { auth } from "@/core/database/firebase"
import { ContextMenuTrigger } from "@radix-ui/react-context-menu"
import { useSignOut } from "react-firebase-hooks/auth"

import { Button } from "@/components/ui/button"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu"
import { Icons } from "@/components/icons"

export default function AuthMenu() {
  const [signOut, loading, error] = useSignOut(auth)
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    )
  }
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <span>...</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Link href="/settings">
            <span className="flex items-center justify-between gap-2">
              Profile settings
              <Icons.anchor />
            </span>
          </Link>
        </ContextMenuItem>
        <ContextMenuItem>
          <Button variant="destructive" onClick={() => signOut()}>
            Sign out
          </Button>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
