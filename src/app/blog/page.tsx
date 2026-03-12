import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog – Office Space & Coworking Insights",
  description:
    "Expert insights on executive suites, coworking, virtual offices, and meeting space in the Tampa Bay area. Tips for growing your business with the right workspace.",
  alternates: { canonical: "https://copperstone.info/blog" },
  openGraph: {
    title: "Blog | Copperstone Executive Suites",
    description:
      "Expert insights on workspace solutions for Tampa Bay professionals.",
    url: "https://copperstone.info/blog",
  },
};

const posts = [
  {
    slug: "best-office-space-land-o-lakes",
    title: "Best Office Space in Land O' Lakes: A Complete Guide for 2026",
    excerpt:
      "Comparing executive suites, coworking, and virtual offices in the Land O' Lakes corridor. Find the right workspace for your budget and growth stage.",
    date: "March 10, 2026",
    readTime: "6 min read",
    category: "Office Space",
    image: "/office-space-land-o-lakes.avif",
  },
  {
    slug: "coworking-vs-executive-suite",
    title: "Coworking vs Executive Suite: Which Is Right for Your Business?",
    excerpt:
      "Not sure whether you need a flexible coworking membership or a private executive suite? Here's how to decide based on your workflow, clients, and growth plans.",
    date: "March 5, 2026",
    readTime: "5 min read",
    category: "Workspace Strategy",
    image: "/Conference-Rooms-Land-O-Lakes.avif",
  },
  {
    slug: "virtual-office-tampa-guide",
    title: "How to Choose a Virtual Office in Tampa: What to Look For",
    excerpt:
      "A virtual office can give your business instant credibility. Learn what to look for in a Tampa Bay virtual office provider and avoid common pitfalls.",
    date: "February 28, 2026",
    readTime: "4 min read",
    category: "Virtual Offices",
    image: "/south-tampa-office-exterior.avif",
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 lg:px-0 lg:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c47a3a]">
        Blog
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Workspace Insights &amp; Guides
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
        Expert advice on choosing the right office space, coworking setup, or virtual office for
        your Tampa Bay business.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-[0.68rem] text-slate-500">
                  <span className="rounded-full bg-[#f3c89a]/40 px-2 py-0.5 font-medium text-[#8a4f3d]">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-2 text-sm font-semibold leading-snug text-slate-900 group-hover:text-[#c47a3a]">
                  {post.title}
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {post.excerpt}
                </p>
                <p className="mt-3 text-[0.68rem] text-slate-400">{post.date}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
