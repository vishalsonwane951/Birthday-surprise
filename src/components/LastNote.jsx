import useTyped from "../hooks/useTyped";
import { LAST_NOTE } from "../config";

// 12. Last emotional note (quiet, no fireworks)
export default function LastNote() {
  const [t, done] = useTyped(LAST_NOTE, 55);
  return (
    <div className="page">
      <div
        className={"msg" + (done ? "" : " cur")}
        style={{ whiteSpace: "pre-wrap", fontSize: "clamp(16px,4.2vw,20px)", maxWidth: 440, textAlign: "left", boxShadow: "0 0 40px #ff2f9244", border: "1px solid #ff8fc77a" }}
      >
        {t}
      </div>
    </div>
  );
}
