import Reveal from "./Reveal";
import SmartImg from "./SmartImg";
import { welcomeChecks, IMG } from "../data/content";

export default function Welcome() {
  return (
    <section id="welcome">
      <div className="container two grid">
        <Reveal>
          <span className="eyebrow">Welcome to GlowDio</span>
          <h2>A software partner with a single, true focus</h2>
          <p className="lead">
            GlowDio endeavours on highly proficient, timely delivered and cost effective software development
            services — from the first concept sketch to the re-engineering of an established digital business.
          </p>
          <p>
            Our key market advantage is the ability to leverage a wealth of experience in this sector, a network of
            local and international partners, and a very competitive pricing strategy to deliver quality software
            solutions.
          </p>
          <ul className="checks">
            {welcomeChecks.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="media ratio-4-3">
          <SmartImg src={IMG.worldMap} alt="World map showing GlowDio clients across the world" loading="lazy" />
        </Reveal>
      </div>
    </section>
  );
}
