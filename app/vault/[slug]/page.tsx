import { notFound } from "next/navigation";
import RecordCard from "@/components/record-card";
import { getPageBySlug, getAllSlugsForSection } from "@/data/pages";

export function generateStaticParams() {
  return getAllSlugsForSection("vault").map((slug) => ({ slug }));
}

export default async function VaultRecordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPageBySlug("vault", slug);
  if (!page) notFound();
  return <RecordCard page={page} />;
}
