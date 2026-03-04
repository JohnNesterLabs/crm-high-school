import { useRef, useState, type ReactNode } from "react";

const isTouch = () =>
  typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

export interface TiltCardProps {
  className?: string;
  glareColor?: string;
  tiltDeg?: number;
  children: ReactNode;
}

function TiltCard({ className = "", glareColor, tiltDeg = 8, children }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});
  const [hovered, setHovered] = useState(false);
  const effectiveTilt = isTouch() ? tiltDeg * 0.6 : tiltDeg;

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    let clientX: number;
    let clientY: number;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    const x = (clientX - centerX) / width;
    const y = (clientY - centerY) / height;
    const rotateX = -y * effectiveTilt;
    const rotateY = x * effectiveTilt;
    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${hovered ? "1.02, 1.02, 1.02" : "1, 1, 1"})`
    );
    if (glareColor) {
      const percentX = ((clientX - rect.left) / width) * 100;
      const percentY = ((clientY - rect.top) / height) * 100;
      setGlareStyle({
        background: `radial-gradient(circle at ${percentX}% ${percentY}%, ${glareColor}40 0%, transparent 50%)`,
      });
    }
  };

  const handleLeave = () => {
    setTransform("perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)");
    setGlareStyle({});
    setHovered(false);
  };

  const handleEnter = () => setHovered(true);

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
      onTouchMove={handleMove}
      onTouchEnd={handleLeave}
      onTouchStart={handleEnter}
      style={{
        transformStyle: "preserve-3d",
        perspective: "800px",
        transform,
        transition: "transform 0.15s ease-out",
      }}
    >
      {children}
      {glareColor && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            ...glareStyle,
            mixBlendMode: "overlay",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.15s ease",
          }}
        />
      )}
    </div>
  );
}

export default TiltCard;
