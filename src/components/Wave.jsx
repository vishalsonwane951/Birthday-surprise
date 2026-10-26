// Letter-by-letter wavy glowing text
export default function Wave({ text }) {
  let k = 0;
  return (
    <div className="wv">
      {text.split(" ").map((w, wi) => (
        <span key={wi} className="w">
          {Array.from(w).map((ch) => {
            const d = k++ * 0.08;
            return (
              <span key={k} style={{ animationDelay: 0.6 + d + "s," + (2.4 + d) + "s," + (2.4 + d) + "s" }}>
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </div>
  );
}
