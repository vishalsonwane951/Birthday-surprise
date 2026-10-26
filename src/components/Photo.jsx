export default function Photo({ p, cls }) {
  return (
    <div className={"polaroid " + (cls || "")}>
      <div className="pic" style={{ background: p.bg }}>
        {p.src ? <img src={p.src} alt={p.caption} /> : p.emoji}
      </div>
      <small>{p.caption}</small>
    </div>
  );
}
