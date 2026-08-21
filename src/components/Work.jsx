import { useState } from "react";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { filterOptions, projects } from "../data/content";

export default function Work() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.cat === filter);

  function scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="soft" id="work">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">Our Work</span>
          <h2>Projects we have built</h2>
          <p className="lead">
            Marketplaces, management platforms, learning systems, AR products and animation — delivered for clients
            at home and across the world.
          </p>
        </Reveal>
        <div className="filters" role="group" aria-label="Filter projects by category">
          {filterOptions.map((f) => (
            <button
              key={f.key}
              className="filter"
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid projects" id="projectGrid">
          {visible.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i % 3} onCaseStudy={scrollToContact} />
          ))}
        </div>
      </div>
    </section>
  );
}
