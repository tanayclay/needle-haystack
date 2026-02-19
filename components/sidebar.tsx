"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sectionMeta, type Section } from "@/data/pages";

const sections: Section[] = ["library", "laboratory", "garden", "observatory", "vault"];

const sectionIcons: Record<Section, string> = {
  library: "\u{1F4DA}",
  laboratory: "\u{1F52C}",
  garden: "\u{1F33F}",
  observatory: "\u{1F52D}",
  vault: "\u{1F512}",
};

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const linkClasses = (path: string) =>
    `block px-4 py-2 text-sm transition-colors rounded-sm ${
      isActive(path)
        ? "bg-[#1a1a2e] text-[#f5f0e8]"
        : "text-stone-400 hover:text-stone-200 hover:bg-[#1a1a2e]/50"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-[#08080d] border-r border-[#1a1a2e] flex flex-col">
      {/* Logo */}
      <div className="px-4 py-6 border-b border-[#1a1a2e]">
        <Link href="/" className="block">
          <h1 className="font-serif text-lg text-[#f5f0e8] tracking-wide">
            The Archives
          </h1>
          <p className="font-mono text-xs text-stone-500 mt-1 tracking-widest uppercase">
            Digital Collection
          </p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        <Link href="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link href="/about" className={linkClasses("/about")}>
          About
        </Link>
        <Link href="/map" className={linkClasses("/map")}>
          Site Directory
        </Link>

        <div className="pt-4 pb-2 px-4">
          <span className="font-mono text-xs text-stone-600 tracking-widest uppercase">
            Collections
          </span>
        </div>

        {sections.map((section) => (
          <Link
            key={section}
            href={`/${section}`}
            className={linkClasses(`/${section}`)}
          >
            <span className="mr-2">{sectionIcons[section]}</span>
            {sectionMeta[section].name}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-[#1a1a2e]">
        <p className="font-mono text-xs text-stone-600">
          Est. 2024
        </p>
      </div>
    </aside>
  );
}
