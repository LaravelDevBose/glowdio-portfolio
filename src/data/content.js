import visionImg from "../assets/images/vision-network.jpg";
import missionImg from "../assets/images/mission-team.jpg";
import animSlide2 from "../assets/images/animation-slide2.jpg";
import animSlide3 from "../assets/images/animation-slide3.jpg";
import heroDeskImg from "../assets/hero-desk.jpg";
import worldMapImg from "../assets/world-map.jpg";
import projSaliimImg from "../assets/proj-saliim.jpg";
import projDorponImg from "../assets/proj-dorpon.jpg";
import projMgmtImg from "../assets/proj-mgmt.jpg";
import projLmsImg from "../assets/proj-lms.jpg";
import projArImg from "../assets/proj-ar.jpg";
import projAnimationImg from "../assets/proj-animation.jpg";
import teamCeoImg from "../assets/team-ceo.jpg";
import teamCtoImg from "../assets/team-cto.jpg";
import teamCooImg from "../assets/team-coo.jpg";
import coffeeImg from "../assets/coffee.jpg";
import {
  WebIcon,
  AiIcon,
  EcommerceIcon,
  ItIcon,
  MarketingIcon,
  AnimationIcon,
} from "../components/icons";

/* logo.png is still missing — see public/images/README.md.
   SmartImg falls back to a placeholder until it's added there. */
export const IMG = {
  logo: "/images/logo.png",
  heroDesk: heroDeskImg,
  worldMap: worldMapImg,
  projSaliim: projSaliimImg,
  projDorpon: projDorponImg,
  projMgmt: projMgmtImg,
  projLms: projLmsImg,
  projAr: projArImg,
  projAnimation: projAnimationImg,
  teamCeo: teamCeoImg,
  teamCto: teamCtoImg,
  teamCoo: teamCooImg,
  coffee: coffeeImg,
};

export const navLinks = [
  { href: "#welcome", label: "About" },
  { href: "#vision", label: "Vision" },
  { href: "#mission", label: "Mission" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Projects" },
  { href: "#team", label: "Team" },
  { href: "#voices", label: "Clients" },
];

export const mobileLinks = [
  ...navLinks.slice(0, 5),
  { href: "#stats", label: "Impact" },
  navLinks[5],
  navLinks[6],
  { href: "#contact", label: "Contact" },
];

export const welcomeChecks = [
  "Pioneering concept, design, development and re-engineering of Digital Business.",
  "A single, true focus: making our clients successful.",
  "Local and international partner network behind every delivery.",
  "Competitive pricing without compromising on engineering quality.",
];

export const visionChecks = [
  "Solve society's technological problems with practical products.",
  "Attract more people towards technological solutions.",
  "Guide both younger and older generations on the benefits of technology.",
];

export const aboutCards = [
  { title: "Proficient delivery", desc: "Highly proficient, timely delivered and cost effective software development services." },
  { title: "Wealth of experience", desc: "A market advantage built on deep experience in the software and web development sector." },
  { title: "Partner network", desc: "A network of local and international partners supporting every engagement." },
  { title: "Competitive pricing", desc: "A very competitive pricing strategy that still delivers quality software solutions." },
  { title: "Cross-industry range", desc: "Corporate product launches, AR/VR, interviews, promotions, influencer content and more." },
  { title: "We live TECH", desc: "Technology is not a service line for us — it is how the studio thinks and works every day." },
];

export const services = [
  {
    icon: WebIcon,
    title: "Web & App Development",
    desc: "End-to-end product engineering for the web and mobile — the core of our delivery, covering marketplaces, portals and management platforms.",
    tag: "Web · Mobile · Portals",
  },
  {
    icon: AiIcon,
    title: "AI & ML",
    desc: "Applying artificial intelligence and machine learning to digital business problems, so products get smarter as they grow.",
    tag: "Intelligent systems",
  },
  {
    icon: EcommerceIcon,
    title: "Ecommerce",
    desc: "Multivendor marketplaces and online storefronts that connect people with vendors — proven in live products such as Saliim and Dorpon.",
    tag: "Marketplace · Multivendor",
  },
  {
    icon: ItIcon,
    title: "IT Consultation",
    desc: "Advisory for organisations planning, modernising or re-engineering their digital business and technology stack.",
    tag: "Strategy · Re-engineering",
  },
  {
    icon: MarketingIcon,
    title: "Digital Marketing",
    desc: "All kinds of digital marketing service on any platform with a proper marketing strategy, plus brand promotion such as TVC/OVC to gain your brand or product more attention.",
    tag: "Strategy · TVC/OVC · Brand",
  },
  {
    icon: AnimationIcon,
    title: "Animation & Videos",
    desc: "Animation and video production — from cornerstone cultural animation work to video editing for bloggers, influencers and promotional campaigns.",
    tag: "Animation · Video editing",
  },
];

export const filterOptions = [
  { key: "all", label: "All" },
  { key: "ecommerce", label: "E-Commerce" },
  { key: "web", label: "Web & App" },
  { key: "arvr", label: "AR/VR" },
  { key: "animation", label: "Animation" },
];

export const projects = [
  {
    cat: "ecommerce",
    kicker: "E-Commerce",
    title: "Saliim — Multivendor Marketplace",
    images: [{ src: IMG.projSaliim, alt: "Saliim multivendor e-commerce homepage with Ramadaan Kariim banner and category navigation" }],
    paragraphs: [
      "A multivendor E-commerce System that connects the people and vendors across the African sub continent.",
      "The full fledged system helps people doing online business, with vendor onboarding, category-driven browsing and seasonal campaign merchandising built in.",
    ],
    meta: [
      { label: "Category:", value: "Web & App Development" },
      { label: "Region:", value: "African sub continent" },
      { label: "Impact:", value: "Enables vendors and buyers to trade online in one full fledged system" },
    ],
    stack: ["Multivendor commerce", "Vendor management", "Web platform"],
  },
  {
    cat: "ecommerce",
    kicker: "E-Commerce",
    title: "Dorpon — Handmade Goods Marketplace",
    images: [{ src: IMG.projDorpon, alt: "Dorpon handmade goods marketplace showing traditional Bangladeshi handicraft categories" }],
    paragraphs: [
      "'Dorpon' — the ecommerce marketplace for unique and creative handmade goods — has launched its journey.",
      "Dorpon (www.mydorpon.com) is launched to facilitate the buying and selling of unique traditional handicrafts. This marketplace makes shopping very easy and convenient for the handicraft enthusiasts.",
    ],
    meta: [
      { label: "Category:", value: "E-Commerce" },
      { label: "Live at:", value: "www.mydorpon.com", href: "https://www.mydorpon.com" },
      { label: "Focus:", value: "Traditional Tant-Shilpa and Nakshi handicrafts" },
    ],
    stack: ["Marketplace", "Seller center", "Bilingual (EN/BN)"],
  },
  {
    cat: "web",
    kicker: "Web & App",
    title: "Management System & Alumni Portal",
    images: [{ src: IMG.projMgmt, alt: "Alumni portal login interface of the management system built for a leading company in Bangladesh" }],
    paragraphs: [
      "A management system for a leading company in Bangladesh.",
      "The management and communication across the company is facilitated in this work, with an alumni portal and secure login as part of the delivered platform.",
    ],
    meta: [
      { label: "Client:", value: "A leading company in Bangladesh" },
      { label: "Impact:", value: "Company-wide management and communication in one place" },
    ],
    stack: ["Enterprise portal", "Authentication", "Internal communication"],
  },
  {
    cat: "web",
    kicker: "Web & App",
    title: "Learning Management System",
    images: [{ src: IMG.projLms, alt: "Learning Management System homepage with Bengali headline and children learning on digital devices" }],
    paragraphs: [
      "A feature-rich LMS that provides world-class learning solutions that empower organizations to meet education and workplace learning needs.",
      "Learners browse courses by their own interest, sign in to track progress, and search the catalogue — presented in Bangla for local learners.",
    ],
    meta: [
      { label: "Category:", value: "Web & App Development" },
      { label: "Key features:", value: "Courses, FAQ, search, sign in / sign up" },
    ],
    stack: ["LMS", "Course catalogue", "Bangla UI"],
  },
  {
    cat: "arvr",
    kicker: "Augmented / Virtual Reality",
    title: "MagicSign AR",
    images: [{ src: IMG.projAr, alt: "MagicSign AR application interface showing hand sign targets and start menu" }],
    paragraphs: [
      "MagicSign AR app using the hand sign as a target picture, so people having disabilities can use this app as their platform for English language learning.",
      "This app is highly helpful for the people those who are unable to talk and wish to learn sign language.",
    ],
    meta: [
      { label: "Category:", value: "AR/VR" },
      { label: "Impact:", value: "Accessible English and sign language learning" },
    ],
    stack: ["Augmented Reality", "Image targets", "Mobile app"],
  },
  {
    cat: "animation",
    kicker: "Animation",
    title: "21<sup>st</sup> February — Mother Language Day Animation",
    images: [
      { src: IMG.projAnimation, alt: "21st February International Mother Language Day animation project artwork" },
      { src: animSlide2, alt: "Animator working on motion design frames at a studio desk" },
      { src: animSlide3, alt: "Video editing timeline on a monitor during post production" },
    ],
    paragraphs: [
      "One of our cornerstone works was an animation project that has represented the 21st February, International Mother Language Day for a Singaporean client.",
      "The piece carried a culturally significant story to an international audience through animation and motion design.",
    ],
    meta: [
      { label: "Client:", value: "Singaporean client" },
      { label: "Category:", value: "Animation & Videos" },
      { label: "Recognition:", value: "A cornerstone work in GlowDio's portfolio" },
    ],
    stack: ["Animation", "Storytelling", "Motion design"],
  },
];

export const stats = [
  { count: 6, suffix: "", label: "Flagship projects showcased" },
  { count: 6, suffix: "", label: "Core service capabilities" },
  { count: 3, suffix: "", label: "Leadership team members" },
  { count: 2, suffix: "+", label: "Continents served" },
];

export const team = [
  {
    img: IMG.teamCeo,
    name: "Raihan Shahriar",
    role: "CEO",
    bio: "Leads GlowDio's direction and client partnerships, holding the company to its single, true focus: making clients successful.",
  },
  {
    img: IMG.teamCto,
    name: "Ashfaqul Islam Tonmoy",
    role: "CTO",
    bio: "Owns the technology side of concept, design, development and re-engineering across GlowDio's product and AR/VR work.",
  },
  {
    img: IMG.teamCoo,
    name: "Minhazur Rahman TehZeeb",
    role: "COO",
    bio: "Runs delivery and operations so work stays highly proficient, timely delivered and cost effective.",
  },
];

export const testimonials = [
  {
    quote:
      "A multivendor E-commerce System that connects the people and vendors across African sub continent. The full fledged system helps people doing online business.",
    avatar: "S",
    who: "Saliim",
    context: "Multivendor marketplace · African sub continent",
  },
  {
    quote:
      "One of our cornerstone works was an animation project that has represented the 21st February, International Mother Language Day.",
    avatar: "21",
    who: "Singaporean client",
    context: "Mother Language Day animation",
  },
  {
    quote: "The management and communication across the company is facilitated in this work.",
    avatar: "M",
    who: "A leading company in Bangladesh",
    context: "Management system & alumni portal",
  },
];

export const visionImage = { src: visionImg, alt: "Futuristic network of connected lights representing GlowDio's technology vision" };
export const missionImage = { src: missionImg, alt: "A team collaborating around a table, reflecting GlowDio's mission of client success" };
