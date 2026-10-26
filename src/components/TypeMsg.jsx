import useTyped from "../hooks/useTyped";
import Next from "./Next";
import { BDAY_MSG } from "../config";

// 3. Typed birthday message
export default function TypeMsg({ next }) {
  const [t, done] = useTyped(BDAY_MSG, 45);
  return (
    <div className="page">
      <div className={"msg" + (done ? "" : " cur")}>{t}</div>
      {done && <Next onClick={next}>Build your cake 🎂</Next>}
    </div>
  );
}
