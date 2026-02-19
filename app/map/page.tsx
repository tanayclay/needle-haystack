import Link from "next/link";
import { pages, sectionMeta, type Section } from "@/data/pages";
import { sectionAccentClasses } from "@/lib/utils";

const sections: Section[] = ["library", "laboratory", "garden", "observatory", "vault"];

export default function MapPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="font-serif text-3xl text-[#f5f0e8] mb-2">Site Directory</h1>
      <p className="font-serif text-stone-400 mb-8">
        A complete index of all records held within The Archives.
      </p>

      {sections.map((section) => {
        const meta = sectionMeta[section];
        const accent = sectionAccentClasses(section);
        const sectionPages = pages.filter((p) => p.section === section);

        return (
          <div key={section} className="mb-8">
            <Link
              href={`/${section}`}
              className={`font-serif text-xl ${accent.text} hover:underline`}
            >
              {meta.name}
            </Link>
            <div className="mt-3 space-y-1">
              {sectionPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${section}/${page.slug}`}
                  className={`block px-4 py-2 border ${accent.border} rounded-sm ${accent.bgFaint} hover:bg-[#12121a] transition-colors`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-stone-600">
                        {page.recordId}
                      </span>
                      <span className="font-serif text-sm text-stone-300">
                        {page.title}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-stone-600">
                      {page.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}

      <div className="mt-8 pt-6 border-t border-[#1a1a2e]">
        <p className="font-mono text-xs text-stone-600">
          Total records: {pages.length} across {sections.length} collections
        </p>
      </div>
    </div>
  );
}
