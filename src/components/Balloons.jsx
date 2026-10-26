import { useState } from "react";
import Photo from "./Photo";
import Next from "./Next";
import { BALLOONS } from "../data/photos";

// 5. Memory balloons
export default function Balloons({ next }) {
  const [popped, setPopped] = useState([]);
  const [open, setOpen] = useState(null);
  const all = popped.length === BALLOONS.length && open === null;
  return (
    <div className="page">
      <h1>Pop a memory 🎈</h1>
      <p>{popped.length + " / " + BALLOONS.length + " memories found"}</p>
      <div className="sky">
        {BALLOONS.map((b, i) =>
          !popped.includes(i) && (
            <div
              key={i}
              className="balloon"
              style={{ left: b.x + "%", top: b.y + "%", background: b.c, animationDelay: i * 0.4 + "s" }}
              onClick={() => { setPopped([...popped, i]); setOpen(b); }}
            >
              ✨
            </div>
          )
        )}
      </div>
      {all && <Next onClick={next}>See our gallery 📸</Next>}
      {open && (
        <div className="modal" onClick={() => setOpen(null)}>
          <Photo p={open} cls="big" />
        </div>
      )}
    </div>
  );
}
