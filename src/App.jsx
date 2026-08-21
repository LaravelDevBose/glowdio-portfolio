import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Stats from "./components/Stats";
import Team from "./components/Team";
import Voices from "./components/Voices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ToTop from "./components/ToTop";

export default function App() {
  return (
    <>
      <a
        className="btn btn-primary"
        href="#main"
        style={{ position: "absolute", left: "-9999px", top: 0 }}
        onFocus={(e) => {
          e.currentTarget.style.left = "12px";
          e.currentTarget.style.top = "12px";
          e.currentTarget.style.zIndex = 99;
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = "-9999px";
        }}
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Welcome />
        <Vision />
        <Mission />
        <About />
        <Services />
        <Work />
        <Stats />
        <Team />
        <Voices />
        <Contact />
      </main>

      <Footer />
      <ToTop />
    </>
  );
}
