import { useState, useEffect } from "react";
import { BIRTHDATE } from "../config";

// 1. Countdown until her birthday begins (midnight)
export default function Counter({ next }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const [d, m] = BIRTHDATE.split("/").map(Number);
  const y = new Date().getFullYear();
  const today = new Date(now);
  const isToday = today.getDate() === d && today.getMonth() === m - 1;
  let target = new Date(y, m - 1, d);
  if (target < now) target = new Date(y + 1, m - 1, d);
  const s = isToday ? 0 : Math.max(0, Math.floor((target - now) / 1000));
  const pad = (n) => String(n).padStart(2, "0");
  return (
    <div className="page">
      <div className="glass">
        <div className="script">Something special is waiting for you...</div>
        <div className="clock">{[pad(Math.floor(s / 3600)), pad(Math.floor(s / 60) % 60), pad(s % 60)].join(" : ")}</div>
        <div className="stay">{s > 0 ? "Stay here until midnight 💗" : "It’s time! 🎉"}</div>
      </div>
      <button className="btn ghost fade" onClick={next}>Open the surprise 💗</button>
    </div>
  );
}
