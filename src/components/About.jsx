import Reveal from "./Reveal";
import { aboutCards } from "../data/content";

export default function About() {
  return (
    <section className="soft" id="about">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">Why We Are Different</span>
          <h2>An engineering team that works across industries — and lives tech</h2>
          <p className="lead">
            GlowDio is a professional software and website development company based in Bangladesh. We work across
            industries: from corporate houses with their product launches, AR/VR, interviews and promotions, to
            bloggers and influencers who use us as their video editing companion, alongside digital marketing and
            promotional video marketing services.
          </p>
        </Reveal>
        <div className="grid services">
          {aboutCards.map((c, i) => (
            <Reveal as="div" className="card" key={c.title} delay={i % 3}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
