import { useState, useEffect } from "react";
import Next from "./Next";
import { PROMISES } from "../config";

// 10. Promises appear one by one
export default function Promises({ next }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n < PROMISES.length) {
      const t = setTimeout(() => setN(n + 1), n === 0 ? 800 : 1800);
      return () => clearTimeout(t);
    }
  }, [n]);
  return (
    <div className="page">
      <h1>My promises to you 💗</h1>
      <div className="plist">
        {PROMISES.slice(0, n).map((p, i) => (
          <div key={i} className="promise"><span className="ph">💖</span>{p}</div>
        ))}
      </div>
      {n >= PROMISES.length && <Next onClick={next}>One last surprise 🎆</Next>}
    </div>
  );
}
