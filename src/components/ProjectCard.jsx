import Reveal from "./Reveal";
import SmartImg from "./SmartImg";
import useSlider from "../hooks/useSlider";
import { ChevronLeft, ChevronRight } from "./icons";

export default function ProjectCard({ project, delay, onCaseStudy }) {
  const hasSlider = project.images.length > 1;
  const { index, goTo, prev, next } = useSlider(project.images.length);

  return (
    <Reveal as="article" className="card project" delay={delay}>
      {hasSlider ? (
        <div className="slider shot">
          <div className="slides" style={{ transform: `translateX(${-index * 100}%)` }}>
            {project.images.map((img) => (
              <figure key={img.src}>
                <SmartImg src={img.src} alt={img.alt} loading="lazy" />
              </figure>
            ))}
          </div>
          <button className="snav prev" type="button" aria-label="Previous image" onClick={prev}>
            <ChevronLeft />
          </button>
          <button className="snav next" type="button" aria-label="Next image" onClick={next}>
            <ChevronRight />
          </button>
          <div className="dots" role="tablist" aria-label="Project images">
            {project.images.map((img, n) => (
              <button
                key={img.src}
                type="button"
                role="tab"
                aria-label={`Image ${n + 1}`}
                aria-current={n === index}
                onClick={() => goTo(n)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="shot">
          <SmartImg src={project.images[0].src} alt={project.images[0].alt} loading="lazy" />
        </div>
      )}
      <div className="body">
        <span className="kicker">{project.kicker}</span>
        <h3 dangerouslySetInnerHTML={{ __html: project.title }} />
        {project.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <div className="meta">
          {project.meta.map((m) => (
            <span key={m.label}>
              <b>{m.label}</b>{" "}
              {m.href ? (
                <a href={m.href} target="_blank" rel="noopener noreferrer">
                  {m.value}
                </a>
              ) : (
                m.value
              )}
            </span>
          ))}
        </div>
        <div className="stack">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <button className="linkish" type="button" onClick={onCaseStudy}>
          View Case Study
        </button>
      </div>
    </Reveal>
  );
}
