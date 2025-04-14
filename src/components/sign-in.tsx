"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useUserAuth } from "@/contexts/auth-context";

export default function SignIn() {
  const { signIn } = useUserAuth();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Sign in</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Sign in with Google</DialogTitle>
        </DialogHeader>
        <DialogClose asChild>
          <Button onClick={signIn}>Continue with Google</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
