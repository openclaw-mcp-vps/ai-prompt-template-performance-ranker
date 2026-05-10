import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptRanker – A/B Test Prompt Templates & Rank by Performance",
  description: "Run the same query through multiple prompt templates, compare AI outputs, and rank effectiveness. Built for AI product managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8c07bcc4-66eb-4764-9aeb-8923fb16f752"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
