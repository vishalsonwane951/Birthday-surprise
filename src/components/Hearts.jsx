import { useMemo } from "react";

// Twinkling stars + falling petals behind every page
export default function Hearts() {
  const stars = useMemo(() => Array.from({ length: 60 }, () => ({ l: Math.random() * 100, t: Math.random() * 100, z: 1 + Math.random() * 2, d: Math.random() * 3 })), []);
  const petals = useMemo(() => Array.from({ length: 16 }, (_, i) => ({ l: Math.random() * 100, z: 8 + Math.random() * 8, d: 9 + Math.random() * 8, dl: -Math.random() * 14, c: i % 2 ? "#ff4fa3" : "#ff8fc7" })), []);
  return (
    <>
      {stars.map((a, i) => (
        <span key={"s" + i} className="star" style={{ left: a.l + "%", top: a.t + "%", width: a.z, height: a.z, animationDelay: a.d + "s" }} />
      ))}
      {petals.map((p, i) => (
        <span key={"p" + i} className="petal" style={{ left: p.l + "%", width: p.z, height: p.z, background: p.c, animationDuration: p.d + "s", animationDelay: p.dl + "s" }} />
      ))}
    </>
  );
}
