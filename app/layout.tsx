import type { Metadata } from "next";
import Sidebar from "@/components/sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Archives — Digital Collection",
  description: "A mysterious digital archive of records, manuscripts, and specimens.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 px-8 py-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
