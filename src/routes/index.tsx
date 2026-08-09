import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GlowDio — Software & Web Development Company in Bangladesh" },
      {
        name: "description",
        content:
          "GlowDio is a professional software and website development company in Dhaka, Bangladesh: web & app development, AI/ML, ecommerce, AR/VR, IT consultation, digital marketing.",
      },
      { property: "og:title", content: "GlowDio — Glow UR Dream" },
      {
        property: "og:description",
        content:
          "Pioneering concept, design, development and re-engineering of Digital Business. A single, true focus: making our clients successful.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/glowdio.html"
      title="GlowDio — Software Company Portfolio"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
