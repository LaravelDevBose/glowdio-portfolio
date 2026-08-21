import Reveal from "./Reveal";
import SmartImg from "./SmartImg";
import { IMG } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <span className="plus" style={{ left: "4%", top: "22%", fontSize: 70 }}>+</span>
      <span className="plus" style={{ right: "6%", bottom: "12%", fontSize: 52, animationDelay: "1.4s" }}>+</span>
      <div className="container two grid">
        <div>
          <span className="tagline">Glow UR Dream</span>
          <h1>
            We build the software that makes your <span>digital business</span> glow.
          </h1>
          <p className="lead">
            GlowDio is a professional software and website development company based in Bangladesh, delivering
            highly proficient, timely delivered and cost effective software development services.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">Let's Work Together</a>
            <a className="btn btn-ghost" href="#work">Explore Our Work</a>
          </div>
          <div className="hero-stats">
            <div><b>6</b><span>Flagship projects in the profile</span></div>
            <div><b>6</b><span>Service capabilities</span></div>
            <div><b>Dhaka</b><span>Bangladesh HQ, global clients</span></div>
          </div>
        </div>
        <Reveal className="hero-visual">
          <div className="media">
            <SmartImg src={IMG.heroDesk} alt="A creative technology workspace with a laptop, tablet, camera and notebook" />
          </div>
          <div className="hero-badge">
            Concept → Design → Development
            <em>Re-engineering of Digital Business</em>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
