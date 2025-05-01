"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { Dumbbell, Github, LogOut, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MainNav() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/create-plan", label: "Create Plan" },
    { href: "/my-plans", label: "My Plans" },
    { href: "/exercises", label: "Exercises" },
  ];
  
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2 px-4 sm:px-0">
          <Dumbbell className="h-6 w-6" />
          <span className="font-bold inline-block">GymFlow</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.href || pathname?.startsWith(item.href) && item.href !== "/"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-foreground/80",
                    pathname === item.href || pathname?.startsWith(item.href) && item.href !== "/"
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
      <div className="flex items-center space-x-2">
        {status === "loading" ? (
          <Button variant="ghost" size="sm" disabled>
            Loading...
          </Button>
        ) : session ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">{session.user?.name}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-red-600 cursor-pointer"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Link href="/auth/signin" className="hidden sm:block">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm" className="hidden sm:inline-flex">Sign Up</Button>
              <Button size="sm" className="sm:hidden">
                <User className="h-4 w-4" />
              </Button>
            </Link>
          </>
        )}
        <nav className="flex items-center space-x-2">
          <Link
            href="https://github.com/iamansingh0"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </div>
  );
}