import { useEffect, useRef } from "react";

export default function Fireworks({ big }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, x = c.getContext("2d");
    let W, H, ps = [], cf = [], raf, tm;
    const fit = () => { W = c.width = innerWidth; H = c.height = innerHeight; };
    fit();
    addEventListener("resize", fit);
    const burst = (px, py) => {
      const hue = Math.random() * 360, n = big ? 120 : 70;
      for (let i = 0; i < n; i++) {
        const a = Math.random() * 6.283, v = 1 + Math.random() * (big ? 6.5 : 5);
        ps.push({ x: px, y: py, vx: Math.cos(a) * v, vy: Math.sin(a) * v, l: 1, c: "hsl(" + (hue + Math.random() * 60) + ",100%," + (55 + Math.random() * 20) + "%)" });
      }
    };
    const loop = () => {
      x.globalCompositeOperation = "destination-out";
      x.fillStyle = "rgba(0,0,0,.18)";
      x.fillRect(0, 0, W, H);
      x.globalCompositeOperation = "lighter";
      ps = ps.filter((p) => p.l > 0);
      ps.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.vy += 0.06; p.vx *= 0.985; p.l -= 0.012;
        x.fillStyle = p.c; x.globalAlpha = Math.max(p.l, 0);
        x.beginPath(); x.arc(p.x, p.y, big ? 2.4 : 2, 0, 6.283); x.fill();
      });
      if (big) {
        if (Math.random() < 0.6) cf.push({ x: Math.random() * W, y: -10, vx: (Math.random() - 0.5) * 2, vy: 2 + Math.random() * 3, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3, c: "hsl(" + Math.random() * 360 + ",100%,65%)", w: 6 + Math.random() * 6, h: 4 + Math.random() * 5 });
        cf = cf.filter((q) => q.y < H + 20);
        x.globalAlpha = 0.9;
        cf.forEach((q) => {
          q.x += q.vx + Math.sin(q.y / 30); q.y += q.vy; q.r += q.vr;
          x.save(); x.translate(q.x, q.y); x.rotate(q.r); x.fillStyle = q.c; x.fillRect(-q.w / 2, -q.h / 2, q.w, q.h); x.restore();
        });
      }
      x.globalAlpha = 1;
      raf = requestAnimationFrame(loop);
    };
    const fire = () => {
      const k = big ? 3 : 1;
      for (let i = 0; i < k; i++) burst(W * (0.1 + Math.random() * 0.8), H * (0.1 + Math.random() * 0.5));
      tm = setTimeout(fire, big ? 260 + Math.random() * 350 : 450 + Math.random() * 650);
    };
    fire();
    loop();
    return () => { cancelAnimationFrame(raf); clearTimeout(tm); removeEventListener("resize", fit); };
  }, []);
  return <canvas ref={ref} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}
