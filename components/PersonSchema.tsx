import { links } from "./data";

const sameAs = links.filter((l) => l.url.startsWith("https://")).map((l) => l.url);

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://nelmkt.com/#person",
  name: "Nelly Almaktoum",
  alternateName: ["نيللي المكتوم", "Nelly F. Almaktoum", "nelmkt"],
  url: "https://nelmkt.com/",
  image: "https://nelmkt.com/portrait.jpg",
  jobTitle: "Computer Science student, ML engineer and researcher",
  description:
    "Saudi undergraduate researcher at King Abdulaziz University working on machine learning, AI and green technology; inventor of Aykah, a patented solar-powered IoT smart waste bin.",
  nationality: { "@type": "Country", name: "Saudi Arabia" },
  homeLocation: { "@type": "Place", name: "Jeddah, Saudi Arabia" },
  affiliation: { "@type": "CollegeOrUniversity", name: "King Abdulaziz University", url: "https://www.kau.edu.sa/" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "King Abdulaziz University" },
  knowsAbout: ["Machine learning", "Artificial intelligence", "Remote sensing", "Causal inference", "Internet of Things", "Green technology"],
  award: [
    "Bronze Medal, International Invention, Innovation & Entrepreneurship Idea Competition 2026 (i3EC’26)",
    "Poster Finalist, Saudi HPC/AI Conference 2026 (KAUST)",
    "Young Researchers Award, UNCCD COP16",
    "IEEE Ideation Competition, 3rd Place",
  ],
  sameAs,
};

const site = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nelmkt.com/#website",
  url: "https://nelmkt.com/",
  name: "Nelly Almaktoum",
  alternateName: "nelmkt",
  inLanguage: ["en", "ar"],
  publisher: { "@id": "https://nelmkt.com/#person" },
};

const page = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://nelmkt.com/#profile",
  url: "https://nelmkt.com/",
  name: "Nelly Almaktoum - نيللي المكتوم",
  mainEntity: { "@id": "https://nelmkt.com/#person" },
  isPartOf: { "@id": "https://nelmkt.com/#website" },
};

export default function PersonSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([person, site, page]) }} />;
}
