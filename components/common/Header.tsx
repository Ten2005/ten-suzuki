"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/constants/navigation";
export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-border px-4 py-2">
      <h1 className="text-lg font-foreground bg-background">Suzuki Ten</h1>
      <nav>
        <DefaultMenu />
        <MobileMenu />
      </nav>
    </header>
  );
}

const DefaultMenu = () => {
  return (
    <ul className="hidden sm:flex items-center gap-4">
      {navigation.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="text-foreground">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden relative flex items-center justify-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:bg-accent rounded-md"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>
      {isOpen && (
        <div className="absolute top-10 right-0 bg-background shadow p-4 z-10">
          <ul className="flex flex-col gap-4 whitespace-nowrap">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
