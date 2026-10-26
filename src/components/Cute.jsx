import { useMemo } from "react";

// Floating cute emojis + corner stickers (used on the finale)
export default function Cute() {
  const em = ["🧸", "🐰", "🦋", "🎀", "🐻", "💝", "🌸", "🎈", "✨", "🐥"];
  const items = useMemo(() => Array.from({ length: 14 }, (_, i) => ({ e: em[i % em.length], l: 4 + Math.random() * 88, z: 22 + Math.random() * 18, d: 7 + Math.random() * 6, dl: -Math.random() * 12 })), []);
  return (
    <>
      {items.map((c, i) => (
        <span key={"c" + i} className="cute" style={{ left: c.l + "%", fontSize: c.z, animationDuration: c.d + "s", animationDelay: c.dl + "s" }}>{c.e}</span>
      ))}
      <span className="sticker" style={{ left: 10, top: "calc(14px + env(safe-area-inset-top,0px))" }}>🦋</span>
      <span className="sticker" style={{ left: 10, bottom: 18, animationDelay: ".4s" }}>🐰</span>
      <span className="sticker" style={{ right: 10, bottom: 18, animationDelay: ".8s" }}>🧸</span>
    </>
  );
}
