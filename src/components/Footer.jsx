import SmartImg from "./SmartImg";
import { IMG } from "../data/content";
import { FacebookIcon, LinkedinIcon, TwitterIcon, MailIcon } from "./icons";

const navItems = [
  ["#hero", "Home"],
  ["#welcome", "About"],
  ["#vision", "Vision"],
  ["#mission", "Mission"],
  ["#services", "Services"],
  ["#work", "Projects"],
  ["#team", "Team"],
  ["#voices", "Testimonials"],
  ["#contact", "Contact"],
];

const serviceItems = [
  "Web & App Development",
  "AI & ML",
  "Ecommerce",
  "IT Consultation",
  "Digital Marketing",
  "Animation & Videos",
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="fgrid">
          <div>
            <div className="fbrand">
              <SmartImg src={IMG.logo} alt="GlowDio logo" /> GlowDio
            </div>
            <p style={{ color: "var(--teal-soft)", fontWeight: 700, margin: "0 0 10px" }}>Glow UR Dream</p>
            <p style={{ color: "rgba(255,255,255,.7)" }}>
              A professional software and website development company based in Bangladesh, delivering highly
              proficient, timely delivered and cost effective software development services.
            </p>
            <div className="fsoc">
              <a href="https://www.facebook.com/glowdio" target="_blank" rel="noopener noreferrer" aria-label="GlowDio on Facebook"><FacebookIcon /></a>
              <a href="https://www.linkedin.com/company/glowdio/" target="_blank" rel="noopener noreferrer" aria-label="GlowDio on LinkedIn"><LinkedinIcon /></a>
              <a href="https://www.twitter.com/dio_glow" target="_blank" rel="noopener noreferrer" aria-label="GlowDio on X (Twitter)"><TwitterIcon /></a>
              <a href="mailto:glowdiobd@gmail.com" aria-label="Email GlowDio"><MailIcon /></a>
            </div>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul className="flinks">
              {navItems.map(([href, label]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="flinks">
              <li>69/C (6th floor), Green Road,<br />Panthapath, Dhaka-1205</li>
              <li><a href="mailto:glowdiobd@gmail.com">glowdiobd@gmail.com</a></li>
              <li><a href="tel:+8801515600336">01515600336</a></li>
              <li><a href="https://www.glowdio.com/" target="_blank" rel="noopener noreferrer">www.glowdio.com</a></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul className="flinks">
              {serviceItems.map((s) => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="fbottom">
          <span>© <span>{new Date().getFullYear()}</span> GlowDio. All Rights Reserved.</span>
          <nav aria-label="Legal">
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms &amp; Conditions</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
