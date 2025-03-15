"use client";
import { ThemeToggle } from "@/components/theme-toggler";

export default function Home() {
  return (
    <div className="p-20 flex gap-40">
      <ThemeToggle />
      <div className="h-40 w-40 bg-warning"></div>
      <p className="text-foreground">Lorem ipsum</p>
    </div>
  );
}
