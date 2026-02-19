import Link from "next/link";
import { type Section, sectionMeta, getPagesBySection } from "@/data/pages";
import { sectionAccentClasses } from "@/lib/utils";

interface SectionLandingProps {
  section: Section;
}

export default function SectionLanding({ section }: SectionLandingProps) {
  const meta = sectionMeta[section];
  const sectionPages = getPagesBySection(section);
  const accent = sectionAccentClasses(section);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Section header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-[#f5f0e8] mb-3">{meta.name}</h1>
        <p className="font-serif text-stone-400 leading-relaxed">
          {meta.description}
        </p>
      </div>

      {/* Records list */}
      <div className="space-y-2">
        <div className="px-4 py-2">
          <span className="font-mono text-xs text-stone-600 tracking-widest uppercase">
            {sectionPages.length} Records
          </span>
        </div>

        {sectionPages.map((page) => (
          <Link
            key={page.slug}
            href={`/${section}/${page.slug}`}
            className={`block px-4 py-3 border ${accent.border} rounded-sm ${accent.bgFaint} hover:${accent.bg} transition-colors group`}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-stone-500 mr-3">
                  {page.recordId}
                </span>
                <span className="font-serif text-[#f5f0e8] group-hover:text-white transition-colors">
                  {page.title}
                </span>
              </div>
              <span className="font-mono text-xs text-stone-600">
                {page.catalogDate}
              </span>
            </div>
            <div className="mt-1">
              <span className="font-mono text-xs text-stone-500">
                {page.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
