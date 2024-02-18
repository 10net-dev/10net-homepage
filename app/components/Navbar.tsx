import Link from "next/link";
import { ThemeToggle } from "./Themetoggle";
import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";

export async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="fixed top-0 w-full z-50 shadow border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl">
            10<span className="text-primary"> Net</span>
          </h1>
        </Link>

        <div className="flex items-center gap-x-5">
          <a href="https://forms.gle/4ZHFbT5BTuWnfXWz7" 
          className="bg-primary text-white border-0 py-2 px-8 hover:bg-foreground rounded text-lg text-center"
          target="_blank">
              Contact Us
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
