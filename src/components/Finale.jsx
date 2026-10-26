import { useState, useEffect } from "react";
import Fireworks from "./Fireworks";
import Cute from "./Cute";
import Wave from "./Wave";
import Next from "./Next";
import { NAME } from "../config";

// 11. Big finale
export default function Finale({ next }) {
  const [more, setMore] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMore(true), 9000);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="page">
      <Fireworks big />
      <Cute />
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <div className="hb">{"Happy Birthday, " + NAME + "!"}</div>
        <div className="bigheart">💖</div>
        <div className="lovebox">
          <div className="sprow">✨💖✨</div>
          <Wave text="Love you always, Bestie" />
          <div className="sprow">💖✨💖</div>
        </div>
        <p className="fade" style={{ fontWeight: 600, fontSize: 19, animationDelay: "3s" }}>
          {"Thank you for being you, " + NAME + ". May every dream of yours come true. I’m always here for you, anytime. 💗"}
        </p>
        <p style={{ fontSize: 36 }}>🥳🎂🎆</p>
        {more && <Next onClick={next}>One last thing 🥹</Next>}
      </div>
    </div>
  );
}
