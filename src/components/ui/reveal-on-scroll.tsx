"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger siblings by passing 0, 80, 160… */
  delayMs?: number;
  /**
   * IntersectionObserver threshold (0–1). Higher values require more of the
   * element to be visible before triggering. Default: 0.1
   */
  threshold?: number;
  /**
   * IntersectionObserver rootMargin. Negative bottom values trigger earlier
   * (before the element fully enters the viewport). Default: "0px 0px -6% 0px"
   */
  rootMargin?: string;
  /** Wrapper element tag. Default: "div" */
  as?: React.ElementType;
};

export function RevealOnScroll({
  children,
  className,
  delayMs = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -6% 0px",
  as: Tag = "div",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        "duration-[850ms] ease-out motion-safe:transition-[opacity,transform]",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
        className
      )}
    >
      {children}
    </Tag>
  );
}
