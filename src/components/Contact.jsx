import { useState } from "react";
import Reveal from "./Reveal";
import SmartImg from "./SmartImg";
import { IMG } from "../data/content";
import { PhoneIcon, MailIcon, MapIcon, GlobeIcon } from "./icons";

const DEFAULT_NOTE = (
  <>
    This form is a front-end demo — please email{" "}
    <a href="mailto:glowdiobd@gmail.com" style={{ color: "var(--teal)", fontWeight: 700 }}>
      glowdiobd@gmail.com
    </a>{" "}
    to reach us directly.
  </>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [note, setNote] = useState(DEFAULT_NOTE);
  const [error, setError] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim() || email.indexOf("@") < 0) {
      setError(true);
      setNote("Please add your name, a valid email and a short message.");
      return;
    }
    window.location.href =
      "mailto:glowdiobd@gmail.com?subject=" +
      encodeURIComponent("Project enquiry from " + name) +
      "&body=" +
      encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
    setError(false);
    setNote(`Thanks, ${name} — opening your email app so you can send this to GlowDio.`);
  }

  return (
    <section className="coffee" id="contact">
      <div className="container two grid">
        <Reveal>
          <span className="eyebrow">Contacts</span>
          <h2>Let's Have a Cup of Coffee ☕</h2>
          <p className="lead">
            Have an idea, a challenge, or a project in mind? Let's sit down, talk about it, and turn your idea into
            something meaningful.
          </p>
          <ul className="contact-list">
            <li>
              <span className="ico"><PhoneIcon /></span>
              <span><b>Phone</b><a href="tel:+8801515600336">01515600336</a></span>
            </li>
            <li>
              <span className="ico"><MailIcon /></span>
              <span><b>Email</b><a href="mailto:glowdiobd@gmail.com">glowdiobd@gmail.com</a></span>
            </li>
            <li>
              <span className="ico"><MapIcon /></span>
              <span><b>Address</b><span>69/C (6th floor), Green Road, Panthapath, Dhaka-1205</span></span>
            </li>
            <li>
              <span className="ico"><GlobeIcon /></span>
              <span><b>Website</b><a href="https://www.glowdio.com/" target="_blank" rel="noopener noreferrer">www.glowdio.com</a></span>
            </li>
          </ul>
          <form className="cform" onSubmit={handleSubmit} noValidate>
            <div className="row">
              <div>
                <label htmlFor="fname">Your name</label>
                <input id="fname" name="name" type="text" required placeholder="Jane Doe" value={form.name} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="femail">Email</label>
                <input id="femail" name="email" type="email" required placeholder="you@company.com" value={form.email} onChange={handleChange} />
              </div>
            </div>
            <div>
              <label htmlFor="fmsg">What's on your mind?</label>
              <textarea id="fmsg" name="message" rows="4" required placeholder="Tell us about your idea or challenge" value={form.message} onChange={handleChange} />
            </div>
            <button className="btn btn-primary" type="submit">Let's Talk</button>
            <p className="formnote" role="status" style={{ color: error ? "#b3261e" : "var(--muted)" }}>
              {note}
            </p>
          </form>
        </Reveal>
        <Reveal className="media" style={{ aspectRatio: "4/5" }}>
          <SmartImg src={IMG.coffee} alt="A blue cup of coffee with latte art on a wooden table, inviting a conversation with GlowDio" />
        </Reveal>
      </div>
    </section>
  );
}
