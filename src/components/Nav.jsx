import { useEffect, useState } from "react";
import { navLinks, mobileLinks } from "../data/content";
import useNavScroll from "../hooks/useNavScroll";
import useActiveSection from "../hooks/useActiveSection";

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Nav() {
  const { scrolled } = useNavScroll();
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="container nav-inner">
          <a className="brand" href="#hero" aria-label="GlowDio home">
            <span>
              GlowDio
              <small>Glow UR Dream</small>
            </span>
          </a>
          <nav className="menu" aria-label="Primary">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className={active === l.href.slice(1) ? "active" : ""}>
                {l.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-primary nav-cta" href="#contact">
            Let's Talk
          </a>
          <button
            className="burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobileMenu"
            onClick={() => setOpen((o) => !o)}
          >
            <span></span>
          </button>
        </div>
      </header>
      <div className={`mobile${open ? " open" : ""}`} id="mobileMenu">
        <nav aria-label="Mobile">
          {mobileLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-primary" href="#contact" onClick={() => setOpen(false)}>
            Let's Talk
          </a>
        </nav>
      </div>
    </>
  );
}
