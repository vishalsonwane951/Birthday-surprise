export default function Next({ onClick, children }) {
  return (
    <button className="btn fade" onClick={onClick}>
      {children}
    </button>
  );
}
