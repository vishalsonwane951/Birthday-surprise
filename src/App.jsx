import { useState, useEffect, useMemo } from "react";
import Hearts from "./components/Hearts";
import Counter from "./components/Counter";
import Lock from "./components/Lock";
import TypeMsg from "./components/TypeMsg";
import Cake from "./components/Cake";
import Balloons from "./components/Balloons";
import Gallery from "./components/Gallery";
import Reasons from "./components/Reasons";
import Letters from "./components/Letters";
import Notebook from "./components/Notebook";
import Promises from "./components/Promises";
import Finale from "./components/Finale";
import LastNote from "./components/LastNote";
import { MUSIC_SRC } from "./config";

// Order of the pages
const pages = [Counter, Lock, TypeMsg, Cake, Balloons, Gallery, Reasons, Letters, Notebook, Promises, Finale, LastNote];

export default function App() {
  const [i, setI] = useState(0);
  const [on, setOn] = useState(false);

  const audio = useMemo(() => {
    if (!MUSIC_SRC) return null;
    const a = new Audio(MUSIC_SRC);
    a.loop = true;
    return a;
  }, []);

  // Heart trail that follows the finger / cursor
  useEffect(() => {
    let last = 0;
    const spawn = (x, y, n) => {
      for (let k = 0; k < n; k++) {
        const e = document.createElement("span");
        e.className = "trail";
        e.textContent = ["❤️", "💖", "💗", "💕"][Math.floor(Math.random() * 4)];
        e.style.left = x + "px";
        e.style.top = y + "px";
        e.style.fontSize = 12 + Math.random() * 16 + "px";
        e.style.setProperty("--dx", Math.random() * 60 - 30 + "px");
        e.addEventListener("animationend", () => e.remove());
        document.body.appendChild(e);
      }
    };
    const move = (ev) => { const t = Date.now(); if (t - last > 70) { last = t; spawn(ev.clientX, ev.clientY, 1); } };
    const down = (ev) => spawn(ev.clientX, ev.clientY, 6);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", down);
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerdown", down); };
  }, []);

  // Start music on first tap
  useEffect(() => {
    if (!audio) return;
    const go = () => { audio.play().then(() => setOn(true)).catch(() => {}); removeEventListener("pointerdown", go); };
    addEventListener("pointerdown", go);
    return () => removeEventListener("pointerdown", go);
  }, []);

  const toggle = () => {
    if (!audio) return;
    on ? audio.pause() : audio.play();
    setOn(!on);
  };

  const Page = pages[i];
  const next = () => setI((n) => Math.min(n + 1, pages.length - 1));

  return (
    <div style={{ height: "100%" }}>
      <Hearts />
      <Page key={i} next={next} />
      <button className="music" onClick={toggle}>{on ? "♫" : "♪"}</button>
      <div className="dots">
        {pages.map((_, k) => <span key={k} className={"dot" + (k === i ? " on" : "")} />)}
      </div>
    </div>
  );
}
