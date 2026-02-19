import { notFound } from "next/navigation";
import RecordCard from "@/components/record-card";
import { getPageBySlug, getAllSlugsForSection } from "@/data/pages";

export function generateStaticParams() {
  return getAllSlugsForSection("observatory").map((slug) => ({ slug }));
}

export default async function ObservatoryRecordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPageBySlug("observatory", slug);
  if (!page) notFound();
  return <RecordCard page={page} />;
}
