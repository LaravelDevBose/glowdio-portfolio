import { useEffect, useRef, useState } from "react";

export default function useCountUp(target, suffix = "") {
  const ref = useRef(null);
  const [value, setValue] = useState("0" + suffix);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const dur = 1200;
          let start = null;
          function step(ts) {
            if (!start) start = ts;
            const p = Math.min((ts - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(target * eased) + suffix);
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, suffix]);

  return [ref, value];
}
