export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="font-serif text-3xl text-[#f5f0e8] mb-6">About The Archives</h1>

      <div className="space-y-6 font-serif text-stone-300 leading-relaxed">
        <p>
          The Archives is a digital repository housing a diverse collection of records,
          manuscripts, scientific data, botanical specimens, astronomical observations,
          and secured artifacts. Established as a comprehensive reference for researchers,
          scholars, and curious minds, the collection spans centuries of accumulated knowledge.
        </p>

        <p>
          Our holdings are organized into five primary divisions, each maintained by
          dedicated specialists who ensure the preservation and accessibility of their
          respective collections.
        </p>

        <div className="border border-[#1a1a2e] rounded-sm p-6 bg-[#0d0d14]">
          <h2 className="font-serif text-xl text-[#f5f0e8] mb-4">The Five Divisions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-mono text-sm text-amber-400 mb-1">The Library</h3>
              <p className="text-sm text-stone-400">
                Manuscripts, scrolls, rare editions, and literary works spanning twelve centuries.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-sm text-emerald-400 mb-1">The Laboratory</h3>
              <p className="text-sm text-stone-400">
                Scientific records, chemical analyses, experimental data, and specimen catalogs.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-sm text-green-400 mb-1">The Garden</h3>
              <p className="text-sm text-stone-400">
                Botanical records, cultivation diaries, seed catalogs, and ecological studies.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-sm text-indigo-400 mb-1">The Observatory</h3>
              <p className="text-sm text-stone-400">
                Astronomical observations, celestial maps, tracking databases, and transit records.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-sm text-rose-400 mb-1">The Vault</h3>
              <p className="text-sm text-stone-400">
                Secured archives, classified documents, artifact registries, and provenance records.
              </p>
            </div>
          </div>
        </div>

        <p>
          Each record in the collection has been assigned a unique identifier following
          the format ARC-XXXX and is accompanied by metadata including category,
          preservation status, and cataloging date. Researchers are encouraged to explore
          the full breadth of the collection using the site directory.
        </p>

        <div className="border border-[#1a1a2e] rounded-sm p-6 bg-[#0d0d14]">
          <h2 className="font-mono text-xs text-stone-500 tracking-widest uppercase mb-2">
            Access Policy
          </h2>
          <p className="text-sm text-stone-400">
            All records in The Archives are available for public viewing. The collection
            is maintained for educational and research purposes. If you discover any
            discrepancies or have information that could enhance our records, please
            contact the chief archivist.
          </p>
        </div>
      </div>
    </div>
  );
}
