import Reveal from "./Reveal";
import { missionImage } from "../data/content";

export default function Mission() {
  return (
    <section id="mission">
      <div className="container two grid alt">
        <Reveal className="media ratio-4-3">
          <img src={missionImage.src} alt={missionImage.alt} loading="lazy" />
        </Reveal>
        <Reveal>
          <span className="eyebrow">Our Mission</span>
          <h2>Making our clients successful</h2>
          <p className="lead">
            Our domain is pioneering concept, design, development and re-engineering of Digital Business. Our focus
            is simpler still: we have a single, true focus — making our clients successful.
          </p>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 8 }}>
            <div className="card">
              <h3>Domain</h3>
              <p style={{ margin: 0 }}>Pioneering concept, design, development and re-engineering of Digital Business.</p>
            </div>
            <div className="card">
              <h3>Focus</h3>
              <p style={{ margin: 0 }}>We have a single, true focus: making our clients successful.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
