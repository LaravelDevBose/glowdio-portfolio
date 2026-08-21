import Reveal from "./Reveal";
import { visionChecks, visionImage } from "../data/content";

export default function Vision() {
  return (
    <section className="soft" id="vision">
      <div className="container two grid">
        <Reveal>
          <span className="eyebrow">Our Vision</span>
          <h2>The Future &gt;&gt;&gt; technology that solves real problems for society</h2>
          <p className="lead">
            We start with a plan to solve the technological problem in our society, and to attract people into
            technological solutions.
          </p>
          <p>
            Looking further ahead, we are planning for future expansion — giving a proper guideline to our young and
            older people about the benefits of technology, so that adoption is not limited to a single generation.
          </p>
          <ul className="checks">
            {visionChecks.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="media ratio-4-3">
          <img src={visionImage.src} alt={visionImage.alt} loading="lazy" />
        </Reveal>
      </div>
    </section>
  );
}
