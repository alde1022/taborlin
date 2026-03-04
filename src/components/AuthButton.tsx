"use client";

import Link from "next/link";
import { usePrivy } from "@privy-io/react-auth";

export default function AuthButton() {
  const { ready, authenticated, login, logout } = usePrivy();

  if (!ready) {
    return (
      <button
        disabled
        className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400"
      >
        Loading...
      </button>
    );
  }

  if (!authenticated) {
    return (
      <button
        onClick={login}
        className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-white"
      >
        Sign in
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/dashboard"
        className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-200 hover:bg-zinc-800"
      >
        Dashboard
      </Link>
      <button
        onClick={logout}
        className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 hover:bg-zinc-800"
      >
        Sign out
      </button>
    </div>
  );
}
