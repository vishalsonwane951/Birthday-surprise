import Photo from "./Photo";
import Next from "./Next";
import { PHOTOS } from "../data/photos";

// 6. Gallery (two scrolling rows)
export default function Gallery({ next }) {
  const row = [...PHOTOS, ...PHOTOS];
  return (
    <div className="page">
      <h1>Our gallery 🖼️</h1>
      <div className="marq">
        <div className="track">{row.map((p, i) => <Photo key={i} p={p} />)}</div>
      </div>
      <div className="marq">
        <div className="track rev">{row.map((p, i) => <Photo key={i} p={PHOTOS[(i + 3) % PHOTOS.length]} />)}</div>
      </div>
      <Next onClick={next}>Read my note 📓</Next>
    </div>
  );
}
