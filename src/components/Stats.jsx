import Reveal from "./Reveal";
import useCountUp from "../hooks/useCountUp";
import { stats } from "../data/content";

function Stat({ count, suffix, label }) {
  const [ref, value] = useCountUp(count, suffix);
  return (
    <div className="stat reveal in">
      <b ref={ref}>{value}</b>
      <span>{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow" style={{ color: "var(--teal-soft)" }}>Our Work In Numbers</span>
          <h2>Clients across the world</h2>
          <p className="lead">Figures below reflect what is documented in the GlowDio company profile — nothing more, nothing less.</p>
        </Reveal>
        <div className="grid stat-grid">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
