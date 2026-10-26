import { useState, useEffect } from "react";
import Fireworks from "./Fireworks";
import Next from "./Next";
import { NAME, AGE } from "../config";

// 4. Layer-by-layer cake
export default function Cake({ next }) {
  const [st, setSt] = useState(0);
  const [out, setOut] = useState(false);
  useEffect(() => {
    if (st < 9) {
      const t = setTimeout(() => setSt(st + 1), st === 0 ? 700 : 1000);
      return () => clearTimeout(t);
    }
  }, [st]);
  const berry = [["🍓", 34, 86], ["🍓", 266, 86], ["🍒", 64, 148], ["🍒", 236, 148]];
  const cols = ["#ff5c9d", "#ffb703", "#8ecae6", "#b388eb", "#80ed99"];
  return (
    <div className="page">
      {out && <Fireworks />}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <h1>{out ? "Happy Birthday, " + NAME + "! 🎉" : st < 9 ? "The Special cake For Youu..." : "Make a wish 🤫"}</h1>
        <div className={"cake2" + (out ? " out" : "")}>
          {st >= 1 && <div className="plate" />}
          {st >= 2 && <div className="ly l1"><span className="cname">{NAME}</span></div>}
          {st >= 3 && <div className="ly l2"><span className="cmsg">Happy Birthday</span></div>}
          {st >= 4 && <div className="ly l3"><span className="cage">{AGE}</span></div>}
          {st >= 5 && berry.map((b, i) => (
            <span key={i} className="berry" style={{ left: b[1], bottom: b[2], animationDelay: i * 0.25 + "s" }}>{b[0]}</span>
          ))}
          {st >= 7 && (
            <div className="candles">
              {cols.map((c, i) => (
                <div key={i} className="candle" style={{ "--c": c, animationDelay: i * 0.15 + "s" }}>
                  {st >= 8 && <i className="flame" />}
                </div>
              ))}
            </div>
          )}
        </div>
        {st >= 9 && !out && <button className="btn fade" onClick={() => setOut(true)}>Blow the candles 🕯️</button>}
        {out && <Next onClick={next}>Pop the balloons 🎈</Next>}
      </div>
    </div>
  );
}
