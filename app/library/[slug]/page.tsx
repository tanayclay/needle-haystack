import { notFound } from "next/navigation";
import RecordCard from "@/components/record-card";
import { getPageBySlug, getAllSlugsForSection } from "@/data/pages";

export function generateStaticParams() {
  return getAllSlugsForSection("library").map((slug) => ({ slug }));
}

export default async function LibraryRecordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPageBySlug("library", slug);
  if (!page) notFound();
  return <RecordCard page={page} />;
}
