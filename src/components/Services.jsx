import Reveal from "./Reveal";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">Our Service</span>
          <h2>What we do</h2>
          <p className="lead">
            Six capabilities, one delivery team — the services GlowDio offers to clients in Bangladesh and abroad.
          </p>
        </Reveal>
        <div className="grid services">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal as="article" className="card" key={s.title} delay={i % 3}>
                <div className="svc-ico" aria-hidden="true">
                  <Icon />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="tagpill">{s.tag}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
