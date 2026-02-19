import type { PageData } from "@/data/pages";
import { sectionMeta } from "@/data/pages";
import { sectionAccentClasses } from "@/lib/utils";

interface RecordCardProps {
  page: PageData;
}

export default function RecordCard({ page }: RecordCardProps) {
  const accent = sectionAccentClasses(page.section);
  const meta = sectionMeta[page.section];

  return (
    <div className="max-w-3xl mx-auto">
      <div
        className={`border ${accent.border} rounded-sm bg-[#0d0d14] shadow-lg`}
      >
        {/* Header metadata */}
        <div className={`px-6 py-4 border-b ${accent.border} ${accent.bgFaint}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-stone-500 tracking-widest uppercase">
              Record ID: {page.recordId}
            </span>
            <span className={`font-mono text-xs ${accent.text} tracking-wider`}>
              {meta.name}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-stone-500">
              Category: {page.category}
            </span>
            <span className="font-mono text-xs text-stone-500">
              Status: {page.status}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="px-6 pt-6 pb-4">
          <h1 className="font-serif text-2xl text-[#f5f0e8] leading-tight">
            {page.title}
          </h1>
        </div>

        {/* Needle-specific fields */}
        {page.isNeedle && (
          <div className={`mx-6 mb-4 px-4 py-3 border ${accent.border} rounded-sm ${accent.bgFaint}`}>
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 font-mono text-sm">
              <span className="text-stone-500">Subject:</span>
              <span className="text-[#f5f0e8]">{page.subject}</span>
              <span className="text-stone-500">Designation:</span>
              <span className="text-[#f5f0e8]">{page.designation}</span>
              <span className="text-stone-500">Affiliation:</span>
              <span className="text-[#f5f0e8]">{page.affiliation}</span>
              <span className="text-stone-500">Reference:</span>
              <a
                href={page.reference}
                target="_blank"
                rel="noopener noreferrer"
                className={`${accent.text} hover:underline break-all`}
              >
                {page.reference}
              </a>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="px-6 pb-6">
          {page.content.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="font-serif text-stone-300 leading-relaxed mb-4 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className={`px-6 py-3 border-t ${accent.border} ${accent.bgFaint} flex items-center justify-between`}>
          <span className="font-mono text-xs text-stone-500">
            Filed under: {meta.name}
          </span>
          <span className="font-mono text-xs text-stone-500">
            Cataloged: {page.catalogDate}
          </span>
        </div>
      </div>
    </div>
  );
}
