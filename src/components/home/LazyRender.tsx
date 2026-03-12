"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type LazyRenderProps = {
  children: ReactNode;
  rootMargin?: string;
  minHeightClassName?: string;
};

export default function LazyRender({
  children,
  rootMargin = "300px 0px",
  minHeightClassName = "min-h-[420px]",
}: LazyRenderProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.01 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref}>
      {isVisible ? (
        children
      ) : (
        <div
          className={`${minHeightClassName} rounded-2xl border border-slate-200 bg-slate-50`}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
