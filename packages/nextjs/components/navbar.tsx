"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { CustomConnectButton } from "~~/components/scaffold-stark/CustomConnectButton";


export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          PredictX
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search markets..."
              className="pl-8"
            />
          </div>
          <Link href="/markets">Markets</Link>
          <Link href="/leaderboard">Leaderboard</Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="custom-connect-wrapper">
            <CustomConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
}