import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import WorkspaceQuiz from "@/components/WorkspaceQuiz";

export const metadata: Metadata = {
  title: "Workspace Finder – Find Your Ideal Office Setup",
  description:
    "Answer a few quick questions and we'll recommend the best Copperstone workspace for your business — executive suite, coworking, virtual office, or meeting space in Land O' Lakes and South Tampa.",
  alternates: { canonical: "https://copperstone.info/workspace-finder" },
  openGraph: {
    title: "Workspace Finder | Copperstone Executive Suites",
    description:
      "Take the 60-second quiz to find your ideal workspace setup at Copperstone Executive Suites.",
    url: "https://copperstone.info/workspace-finder",
  },
};

export default function WorkspaceFinderPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto max-w-4xl px-6 pb-20 pt-10 lg:px-8 lg:pt-16">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Workspace Finder" }]}
        />
        <div className="text-center">
          <p className="inline-flex items-center rounded-full bg-[#f3c89a]/30 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#a35f24] sm:text-[0.68rem]">
            Interactive Tool
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Find Your Ideal Workspace
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Answer a few quick questions and we&apos;ll recommend the best
            Copperstone workspace for your business. Takes about 60 seconds.
          </p>
        </div>
        <WorkspaceQuiz />
      </main>
    </div>
  );
}
