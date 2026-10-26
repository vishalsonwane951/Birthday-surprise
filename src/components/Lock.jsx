import { useState } from "react";
import { BIRTHDATE } from "../config";
import { HINT_IMG } from "../data/photos";

const digits = (s) => s.replace(/\D/g, "");

// 2. Password page (her birthdate)
export default function Lock({ next }) {
  const [v, setV] = useState("");
  const [bad, setBad] = useState(false);
  const go = () =>
    digits(v) === digits(BIRTHDATE) ? next() : (setBad(true), setTimeout(() => setBad(false), 450));
  return (
    <div className="page">
      <div className="hintpic">{HINT_IMG ? <img src={HINT_IMG} alt="" /> : "🖼️"}</div>
      <h1>Who’s this? 🔐</h1>
      <p>Enter her birthdate to unlock (DD/MM/YYYY)</p>
      <input
        className={"inp" + (bad ? " shake" : "")}
        inputMode="numeric"
        placeholder="DD/MM/YYYY"
        value={v}
        onChange={(e) => setV(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && go()}
      />
      {bad && <p className="fade">Oops, try again 😉</p>}
      <button className="btn" onClick={go}>Unlock 🔓</button>
    </div>
  );
}
