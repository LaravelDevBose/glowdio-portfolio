import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import useSlider from "../hooks/useSlider";
import { testimonials } from "../data/content";
import { ChevronLeft, ChevronRight } from "./icons";

export default function Voices() {
  const { index, goTo, prev, next } = useSlider(testimonials.length);
  const timer = useRef(null);

  function restart() {
    clearInterval(timer.current);
    timer.current = setInterval(() => goTo(index + 1), 6000);
  }

  useEffect(() => {
    restart();
    return () => clearInterval(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <section className="soft" id="voices">
      <div className="container">
        <Reveal className="sec-head" style={{ marginInline: "auto", textAlign: "center" }}>
          <span className="eyebrow">What Our Clients Say</span>
          <h2>Work that speaks for our clients</h2>
        </Reveal>
        <Reveal className="quote-wrap">
          <div
            className="quotes"
            onMouseEnter={() => clearInterval(timer.current)}
            onMouseLeave={restart}
          >
            <div className="qtrack" style={{ transform: `translateX(${-index * 100}%)` }}>
              {testimonials.map((t) => (
                <blockquote key={t.who}>
                  <p>&ldquo;{t.quote}&rdquo;</p>
                  <div className="who">
                    <span className="av" aria-hidden="true">{t.avatar}</span>
                    <span>
                      <b>{t.who}</b>
                      <small>{t.context}</small>
                    </span>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
          <div className="qctrl">
            <button type="button" aria-label="Previous" onClick={() => { prev(); restart(); }}>
              <ChevronLeft />
            </button>
            <div className="qdots" role="tablist" aria-label="Client stories">
              {testimonials.map((t, n) => (
                <button
                  key={t.who}
                  type="button"
                  role="tab"
                  aria-label={`Story ${n + 1}`}
                  aria-current={n === index}
                  onClick={() => { goTo(n); restart(); }}
                />
              ))}
            </div>
            <button type="button" aria-label="Next" onClick={() => { next(); restart(); }}>
              <ChevronRight />
            </button>
          </div>
          <p className="note">
            These are project statements taken from the GlowDio company profile. Named client reviews will appear
            here once collected — <a href="#contact" style={{ color: "var(--teal)", fontWeight: 700 }}>[Client Testimonial]</a>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
