import useTyped from "../hooks/useTyped";
import Next from "./Next";
import { NOTE } from "../config";

// 9. Notebook note
export default function Notebook({ next }) {
  const [t, done] = useTyped(NOTE, 55);
  return (
    <div className="page">
      <div className={"paper" + (done ? "" : " cur")} style={{ whiteSpace: "pre-wrap" }}>{t}</div>
      {done && <Next onClick={next}>One more thing 💗</Next>}
    </div>
  );
}
