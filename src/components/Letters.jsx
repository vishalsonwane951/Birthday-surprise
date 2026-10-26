import { useState, useEffect, useMemo } from "react";
import Next from "./Next";
import { LETTERS, NAME } from "../config";

const SPARK = { env: ["🎀", "🎉", "✨", "💖"], seal: ["💗", "✨", "💌", "🌸"], bloom: ["🌷", "🌸", "✨", "🦋"] };

function LetterModal({ L, onClose }) {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const a = setTimeout(() => setStage(1), 500), b = setTimeout(() => setStage(2), 2300);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, []);
  const parts = L.text.replace(/([.!?])\s+/g, "$1|").split("|");
  const op = stage >= 1 ? " open" : "";
  const sp = useMemo(() => Array.from({ length: 12 }, (_, i) => ({ e: SPARK[L.type][i % 4], l: 4 + Math.random() * 90, z: 20 + Math.random() * 16, d: 6 + Math.random() * 5, dl: -Math.random() * 8 })), []);

  const scene =
    L.type === "bloom" ? (
      <div className={"bloom" + op}>
        <div className="bud">🌷</div>
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="pt" style={{ "--a": i * 36 + "deg", animationDelay: i * 0.05 + "s" }}>🌸</span>
        ))}
      </div>
    ) : (
      <div className={"env" + (L.type === "seal" ? " e2" : "") + op}>
        <div className="eb" />
        <div className="el" />
        <div className="ef" />
        <div className="flp" />
        {L.type === "seal" ? <div className="sealb">💗</div> : <div className="rib">🎀</div>}
      </div>
    );

  return (
    <div className="modal lm">
      {stage >= 2 && sp.map((c, i) => (
        <span key={i} className="cute" style={{ left: c.l + "%", fontSize: c.z, animationDuration: c.d + "s", animationDelay: c.dl + "s" }}>{c.e}</span>
      ))}
      {stage < 2 && (
        <>
          <div style={{ zIndex: 3 }}>{scene}</div>
          <div className="hintt">Opening your letter...</div>
        </>
      )}
      {stage >= 2 && (
        <>
          <div className={"letter l-" + L.type}>
            <div className="lh">{"For you, " + NAME + " 💌"}</div>
            {parts.map((s, i) => (
              <span key={i} className="ls" style={{ animationDelay: 0.7 + i * 1 + "s" }}>{s}</span>
            ))}
          </div>
          <button className="btn fade" style={{ animationDelay: "1s", zIndex: 3 }} onClick={onClose}>Close 💗</button>
        </>
      )}
    </div>
  );
}

// 8. Letters (3 letters, each opens differently)
export default function Letters({ next }) {
  const [read, setRead] = useState([]);
  const [open, setOpen] = useState(null);
  const close = () => {
    setRead((r) => (r.includes(open) ? r : [...r, open]));
    setOpen(null);
  };
  return (
    <div className="page">
      <h1>Letters for you 💌</h1>
      <p>{read.length + " / " + LETTERS.length + ": tap each one to open"}</p>
      <div className="tiles">
        {LETTERS.map((L, i) => (
          <div key={i} className={"tile" + (read.includes(i) ? " read" : "")} style={{ animationDelay: i * 0.2 + "s" }} onClick={() => setOpen(i)}>
            <span className="ti" style={{ animationDelay: i * 0.5 + "s" }}>{L.icon}</span>
            <div>
              <b>{L.title}</b>
              <small>{read.includes(i) ? "Read ✓ tap to read again" : "Tap to open"}</small>
            </div>
          </div>
        ))}
      </div>
      {read.length === LETTERS.length && open === null && <Next onClick={next}>Read my note 📓</Next>}
      {open !== null && <LetterModal key={open} L={LETTERS[open]} onClose={close} />}
    </div>
  );
}
