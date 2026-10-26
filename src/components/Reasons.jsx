import { useState } from "react";
import Next from "./Next";
import { REASONS } from "../config";

// 7. Reasons I love you (flip cards)
export default function Reasons({ next }) {
  const [f, setF] = useState([]);
  return (
    <div className="page">
      <h1>Reasons You’re So Special 💌</h1>
      <p>{f.length + " / " + REASONS.length + ": tap each card"}</p>
      <div className="cards">
        {REASONS.map((r, i) => (
          <div key={i} className={"fc" + (f.includes(i) ? " on" : "")} onClick={() => !f.includes(i) && setF([...f, i])}>
            <div className="fi">
              <div className="ff">💖<small>{i + 1}</small></div>
              <div className="fb">{r}</div>
            </div>
          </div>
        ))}
      </div>
      {f.length === REASONS.length && <Next onClick={next}>Open your letters 💌</Next>}
    </div>
  );
}
