import Reveal from "./Reveal";
import SmartImg from "./SmartImg";
import { team } from "../data/content";
import { LinkedinIcon } from "./icons";

export default function Team() {
  return (
    <section id="team">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">Our Teams</span>
          <h2>Meet the people behind GlowDio</h2>
          <p className="lead">The leadership team listed in the company profile.</p>
        </Reveal>
        <div className="grid team">
          {team.map((m, i) => (
            <Reveal as="article" className="card member" key={m.name} delay={i % 3}>
              <div className="avatar">
                <SmartImg src={m.img} alt={`Portrait of ${m.name}, ${m.role} of GlowDio`} loading="lazy" />
              </div>
              <h3>{m.name}</h3>
              <div className="role">{m.role}</div>
              <p>{m.bio}</p>
              <div className="social">
                <a href="https://www.linkedin.com/company/glowdio/" target="_blank" rel="noopener noreferrer" aria-label="GlowDio on LinkedIn">
                  <LinkedinIcon />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
