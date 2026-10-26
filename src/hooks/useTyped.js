import { useState, useEffect } from "react";

// Types text out one character at a time. Returns [typedText, isDone].
export default function useTyped(text, speed) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n < text.length) {
      const t = setTimeout(() => setN(n + 1), speed);
      return () => clearTimeout(t);
    }
  }, [n]);
  return [text.slice(0, n), n >= text.length];
}
