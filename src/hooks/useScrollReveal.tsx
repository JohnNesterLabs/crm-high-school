import { useEffect, useRef, useState, type ReactNode } from "react";

export type ScrollRevealAnimation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-x"
  | "flip-y"
  | "rotate-in"
  | "blur-in"
  | "slide-up-spring"
  | "scale-fade";

const isMobile = () =>
  typeof window !== "undefined" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

function getInitialStyles(animation: ScrollRevealAnimation): React.CSSProperties {
  const mobile = isMobile();
  const y = mobile ? 24 : 40;
  const yBig = mobile ? 40 : 80;
  const x = mobile ? 24 : 60;

  switch (animation) {
    case "fade-up":
      return { opacity: 0, transform: `translateY(${y}px)` };
    case "fade-down":
      return { opacity: 0, transform: `translateY(-${y}px)` };
    case "fade-left":
      return { opacity: 0, transform: `translateX(-${x}px)` };
    case "fade-right":
      return { opacity: 0, transform: `translateX(${x}px)` };
    case "zoom-in":
      return { opacity: 0, transform: "scale(0.85)" };
    case "zoom-out":
      return { opacity: 0, transform: "scale(1.1)" };
    case "flip-x":
      return mobile ? { opacity: 0, transform: `translateY(${y}px)` } : { opacity: 0, transform: "perspective(800px) rotateX(80deg)" };
    case "flip-y":
      return mobile ? { opacity: 0, transform: `translateY(${y}px)` } : { opacity: 0, transform: "perspective(800px) rotateY(80deg)" };
    case "rotate-in":
      return mobile ? { opacity: 0, transform: "scale(0.9)" } : { opacity: 0, transform: "rotate(-8deg) scale(0.9)" };
    case "blur-in":
      return { opacity: 0, transform: `translateY(${y}px)`, filter: "blur(12px)" };
    case "slide-up-spring":
      return { opacity: 0, transform: `translateY(${yBig}px) scale(0.95)` };
    case "scale-fade":
      return { opacity: 0, transform: mobile ? "scale(0.8)" : "scale(0.6)" };
    default:
      return { opacity: 0 };
  }
}

function getVisibleStyles(animation: ScrollRevealAnimation): React.CSSProperties {
  const mobile = isMobile();
  switch (animation) {
    case "flip-x":
    case "flip-y":
      return mobile ? { opacity: 1, transform: "translateY(0)" } : { opacity: 1, transform: "perspective(800px) rotateX(0) rotateY(0)" };
    case "rotate-in":
      return { opacity: 1, transform: "rotate(0deg) scale(1)" };
    case "blur-in":
      return { opacity: 1, transform: "translateY(0)", filter: "blur(0)" };
    default:
      return { opacity: 1, transform: "translate(0) scale(1)" };
  }
}

export interface ScrollRevealProps {
  animation?: ScrollRevealAnimation;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  children: ReactNode;
}

export function useScrollReveal(options?: { threshold?: number; rootMargin?: string; once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { threshold = 0.15, rootMargin = "0px", once = true } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
        else if (!once) setVisible(false);
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, visible };
}

export function ScrollReveal({
  animation = "fade-up",
  delay = 0,
  duration = 0.7,
  once = true,
  className = "",
  children,
}: ScrollRevealProps) {
  const { ref, visible } = useScrollReveal({ threshold: 0.15, rootMargin: "0px", once });
  const [hasAnimated, setHasAnimated] = useState(false);
  const visibleOrDone = visible || hasAnimated;

  useEffect(() => {
    if (visible) setHasAnimated(true);
  }, [visible]);

  const initial = getInitialStyles(animation);
  const visibleStyles = getVisibleStyles(animation);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(visibleOrDone ? visibleStyles : initial),
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out, filter ${duration}s ease-out`,
        transitionDelay: visibleOrDone ? "0ms" : `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
