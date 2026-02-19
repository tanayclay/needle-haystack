import Link from "next/link";
import { sectionMeta, type Section } from "@/data/pages";

const sections: Section[] = ["library", "laboratory", "garden", "observatory", "vault"];

const sectionIcons: Record<Section, string> = {
  library: "\u{1F4DA}",
  laboratory: "\u{1F52C}",
  garden: "\u{1F33F}",
  observatory: "\u{1F52D}",
  vault: "\u{1F512}",
};

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Hero */}
      <div className="mb-12 text-center">
        <p className="font-mono text-xs text-stone-500 tracking-[0.3em] uppercase mb-4">
          Welcome to
        </p>
        <h1 className="font-serif text-5xl text-[#f5f0e8] mb-4">
          The Archives
        </h1>
        <p className="font-serif text-lg text-stone-400 max-w-xl mx-auto leading-relaxed">
          A digital collection of records, manuscripts, specimens, and artifacts
          carefully preserved and cataloged for posterity.
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-10">
        <div className="flex-1 h-px bg-[#1a1a2e]" />
        <span className="font-mono text-xs text-stone-600 tracking-widest uppercase">
          Collections
        </span>
        <div className="flex-1 h-px bg-[#1a1a2e]" />
      </div>

      {/* Section cards */}
      <div className="space-y-3">
        {sections.map((section) => {
          const meta = sectionMeta[section];
          return (
            <Link
              key={section}
              href={`/${section}`}
              className="block px-6 py-5 border border-[#1a1a2e] rounded-sm bg-[#0d0d14] hover:bg-[#12121a] transition-colors group"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">{sectionIcons[section]}</span>
                <div>
                  <h2 className="font-serif text-xl text-[#f5f0e8] group-hover:text-white transition-colors mb-1">
                    {meta.name}
                  </h2>
                  <p className="font-serif text-sm text-stone-500 leading-relaxed">
                    {meta.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="mt-12 text-center">
        <p className="font-mono text-xs text-stone-600">
          49 records across 5 collections
        </p>
      </div>
    </div>
  );
}
