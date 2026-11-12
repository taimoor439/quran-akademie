"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealVariant = "up" | "left" | "right" | "zoom" | "fade" | "rise";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms (60–100ms steps are typical). */
  delay?: number;
  variant?: RevealVariant;
  /** IntersectionObserver threshold, 0–1. */
  threshold?: number;
};

/**
 * Shared scroll-reveal wrapper: fades (and slightly moves) children into
 * view the first time they enter the viewport, via IntersectionObserver.
 * One-shot — once revealed, elements stay visible. All motion is driven by
 * the .reveal classes in globals.css, which are fully disabled under
 * prefers-reduced-motion (content then renders visible immediately).
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const style: CSSProperties =
    delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal reveal-${variant}${visible ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
}
