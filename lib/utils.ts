import type { Section } from "@/data/pages";

export function sectionColor(section: Section): string {
  const colors: Record<Section, string> = {
    library: "amber",
    laboratory: "emerald",
    garden: "green",
    observatory: "indigo",
    vault: "rose",
  };
  return colors[section];
}

export function sectionAccentClasses(section: Section) {
  const map: Record<Section, { border: string; text: string; bg: string; bgFaint: string }> = {
    library: {
      border: "border-amber-700/40",
      text: "text-amber-400",
      bg: "bg-amber-900/20",
      bgFaint: "bg-amber-900/10",
    },
    laboratory: {
      border: "border-emerald-700/40",
      text: "text-emerald-400",
      bg: "bg-emerald-900/20",
      bgFaint: "bg-emerald-900/10",
    },
    garden: {
      border: "border-green-700/40",
      text: "text-green-400",
      bg: "bg-green-900/20",
      bgFaint: "bg-green-900/10",
    },
    observatory: {
      border: "border-indigo-700/40",
      text: "text-indigo-400",
      bg: "bg-indigo-900/20",
      bgFaint: "bg-indigo-900/10",
    },
    vault: {
      border: "border-rose-700/40",
      text: "text-rose-400",
      bg: "bg-rose-900/20",
      bgFaint: "bg-rose-900/10",
    },
  };
  return map[section];
}

export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
