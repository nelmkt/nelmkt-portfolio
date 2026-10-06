// All content is taken from github.com/nelmkt (profile + README).

export const profile = {
  name: "Nelly Almaktoum",
  nameAr: "نيللي المكتوم",
  handle: "nelmkt",
  tagline:
    "Undergraduate researcher merging technology with complex problems to contribute in real-world impact.",
  about:
    "I work where machine learning, remote sensing and sustainability meet: measuring what a green intervention actually does, and being explicit about what the data cannot show. My research so far covers urban greening and heat in desalination-dependent cities, and low-cost smart waste management.",
  stats: [
    { label: "CLASS", value: "Researcher & Innovator" },
    { label: "GUILD", value: "KAU · FCIT · Waed Distinctive Excellence track" },
    { label: "BASE", value: "Jeddah, Saudi Arabia" },
    { label: "LANGS", value: "Arabic · English" },
    { label: "MAIN QUEST", value: "Graduate research → Ph.D" },
    { label: "SIDE QUEST", value: "Designing & painting" },
  ],
  interests: [
    "Applied ML",
    "Full-stack development",
    "Reproducible research",
    "Green technology",
    "IoT",
  ],
};

export type Quest = {
  id: string;
  title: string;
  titleAr: string;
  status: string;
  url: string;
  image: string;
  imageAlt: string;
  summary: string;
  objectives: string[];
  loot: { label: string; url?: string }[];
  tags: string[];
};

export const quests: Quest[] = [
  {
    id: "wahaj",
    title: "Wahaj",
    titleAr: "وهاج",
    status: "MAIN QUEST · RELEASED",
    url: "https://github.com/nelmkt/Wahaj-Framework",
    image:
      "https://raw.githubusercontent.com/nelmkt/Wahaj-Framework/v11-framework-ml/figures_r1/fig_r1_dose_contrasts.png",
    imageAlt:
      "Wahaj: measured land surface temperature change for each number of greened pixels, relative to matched never-vegetated controls",
    summary:
      "A reproducible ML Python and Google Earth Engine framework for evaluating urban greening–energy trade-offs in desalination-dependent cities, with Jeddah as the case study.",
    objectives: [
      "XGBoost land surface temperature model on Landsat 8, spatial cross-validation R² 0.795 on 19,650 cells, benchmarked against random forest, gradient boosting and linear regression",
      "Matched-contrast benchmark: −1.18 °C per greened pixel outside the built-up area, stress-tested with emissivity re-retrieval, alternative NDVI thresholds and a thermal-footprint simulation",
      "Counterfactual gates that test whether predicted greening effects hold up, and report where they do not",
      "NEGI index plus a water–energy ledger: each degree of cooling carries ~2.9–5.3 MWh/yr of desalination energy",
    ],
    loot: [
      { label: "Zenodo DOI 10.5281/zenodo.23168529", url: "https://doi.org/10.5281/zenodo.23168529" },
      { label: "Latest release", url: "https://github.com/nelmkt/Wahaj-Framework/releases/latest" },
    ],
    tags: ["Python", "XGBoost", "Google Earth Engine", "Landsat 8", "Spatial statistics"],
  },
  {
    id: "aykah",
    title: "Aykah",
    titleAr: "آيكة",
    status: "QUEST COMPLETE · AWARD WON",
    url: "https://github.com/nelmkt/Smart-Bin-Aykah",
    image:
      "https://raw.githubusercontent.com/nelmkt/Smart-Bin-Aykah/main/images/prototype.jpg",
    imageAlt: "The Aykah smart bin prototype",
    summary:
      "A cost-effective, solar-powered IoT smart bin, taken from scientific research on a Sustainable Development Goal problem through to a working prototype and a business concept.",
    objectives: [
      "Raspberry Pi with ultrasonic fill sensing, LCD interface, LED status indicators and air filtration",
      "Community survey of 222 participants on waste disposal behaviour and acceptance of smart waste technology",
      "Young Researchers Award (Modern Technologies) at UNCCD COP16",
    ],
    loot: [
      {
        label: "Featured in the Saudi Gazette",
        url: "https://saudigazette.com.sa/article/664214/saudi-arabia/how-curiosity-led-a-saudi-teenager-to-develop-a-un-award-winning-smart-waste-management-solution",
      },
    ],
    tags: ["IoT", "Raspberry Pi", "Solar power", "Rapid prototyping"],
  },
];

export const trophies = [
  {
    year: "2026",
    title: "Certificate of Appreciation",
    detail: "Participation in local and international competitions",
    by: "King Abdulaziz University",
    tier: "silver",
  },
  {
    year: "2026",
    title: "Academic Excellence Award",
    detail: "2025–2026",
    by: "King Abdulaziz University",
    tier: "gold",
  },
  {
    year: "2025",
    title: "IEEE Ideation Competition",
    detail: "22nd International Learning and Technology Conference",
    by: "IEEE",
    tier: "silver",
  },
  {
    year: "2024",
    title: "Young Researchers Award · Modern Technologies",
    detail: "Youngest of 209 researchers from 36 countries",
    by: "UNCCD COP16",
    tier: "legendary",
  },
  {
    year: "2022",
    title: "National Mathematics Olympiad · Final Stage",
    detail: "Representing the Western Region",
    by: "Ministry of Education, Saudi Arabia",
    tier: "gold",
  },
];

// The languages from the README, in README order. Used by the mini-game too.
export const languages = [
  { name: "Python", short: "PY", color: "#3776AB", tier: "MAIN" },
  { name: "Rust", short: "RS", color: "#DEA584", tier: "MAIN" },
  { name: "Ruby", short: "RB", color: "#CC342D", tier: "MAIN" },
  { name: "TypeScript", short: "TS", color: "#3178C6", tier: "MAIN" },
  { name: "JavaScript", short: "JS", color: "#F7DF1E", tier: "MAIN" },
  { name: "C++", short: "C++", color: "#00599C", tier: "WORKING" },
  { name: "C#", short: "C#", color: "#512BD4", tier: "WORKING" },
] as const;

export const skillTree = [
  { branch: "Machine learning & data", items: ["XGBoost", "scikit-learn", "pandas", "NumPy", "Spatial cross-validation"] },
  { branch: "Remote sensing", items: ["Google Earth Engine", "Landsat 8 Collection 2"] },
  { branch: "Front end", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js"] },
  { branch: "Back end", items: ["Python", "Ruby", "Rust"] },
  {
    branch: "Hardware",
    items: [
      "Raspberry Pi",
      "Embedded systems",
      "Ultrasonic sensors",
      "LCD & LED interfaces",
      "Solar power systems",
      "IoT prototyping",
      "Skeleton prototyping",
    ],
  },
];

export const party = [
  { role: "Technical Committee Lead", where: "Waed Students Community, King Abdulaziz University" },
  { role: "Member, Tech Department", where: "IEEE SB, 2027" },
  { role: "CM Experience Member", where: "Google Developer Group (GDG), 2026" },
  { role: "Project Coordinator, Talk X", where: "Engineering Day 2027" },
  { role: "Layout & Design Specialist", where: "Engineering Day 2027 Planning Department" },
  { role: "Coordinator", where: "Annual Waed Workshop 2027" },
  { role: "Mawhiba Alumna", where: "National programme for gifted students (classes 2022–2025)" },
];

export const links = [
  { label: "LinkedIn", value: "in/nelmkt", url: "https://www.linkedin.com/in/nelmkt/", primary: true },
  { label: "Email", value: "nalmaktoum0001@stu.kau.edu.sa", url: "mailto:nalmaktoum0001@stu.kau.edu.sa", primary: true },
  { label: "X", value: "@nelmkt", url: "https://x.com/nelmkt" },
  { label: "GitHub", value: "nelmkt", url: "https://github.com/nelmkt" },
  { label: "ORCID", value: "0009-0007-9887-0280", url: "https://orcid.org/0009-0007-9887-0280" },
  { label: "Google Scholar", value: "Nelly F. Almaktoum", url: "https://scholar.google.com/citations?user=MAgd-b0AAAAJ" },
  { label: "ResearchGate", value: "Nelly-Almaktoum", url: "https://www.researchgate.net/profile/Nelly-Almaktoum" },
];

export const stages = [
  { id: "player", code: "1-1", label: "PLAYER" },
  { id: "bonus", code: "1-2", label: "BONUS" },
  { id: "quests", code: "1-3", label: "QUESTS" },
  { id: "trophies", code: "1-4", label: "TROPHIES" },
  { id: "skills", code: "1-5", label: "SKILLS" },
  { id: "party", code: "1-6", label: "PARTY" },
  { id: "save", code: "1-7", label: "SAVE" },
];
