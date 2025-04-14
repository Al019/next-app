"use client";

import { ModeToggle } from "@/components/mode-toggle";
import SignIn from "@/components/sign-in";
import { useUserAuth } from "@/contexts/auth-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCallback } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser, LogOut } from "lucide-react";

export default function HomePage() {
  const { session, signOut } = useUserAuth();

  const getInitials = useCallback((fullName: string) => {
    const names = fullName.trim().split(" ");

    if (names.length === 0) return "";
    if (names.length === 1) return names[0].charAt(0).toUpperCase();

    const firstInitial = names[0].charAt(0);
    const lastInitial = names[names.length - 1].charAt(0);

    return `${firstInitial}${lastInitial}`.toUpperCase();
  }, []);

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="h-16 grid grid-cols-2 items-center">
          <div className="flex justify-start">
            <span>Logo</span>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center gap-2">
              {session ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar>
                      <AvatarImage
                        src={session.user.user_metadata.avatar_url}
                      />
                      <AvatarFallback>
                        {getInitials(session.user.user_metadata.full_name)}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                      <span>{session.user.user_metadata.full_name}</span>
                      <p>{session.user.email}</p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <CircleUser />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={signOut}>
                      <LogOut />
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <SignIn />
              )}
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
