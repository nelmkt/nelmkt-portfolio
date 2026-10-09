// All content is taken from github.com/nelmkt (profile + README) and linkedin.com/in/nelmkt.

export const profile = {
  name: "Nelly Almaktoum",
  nameAr: "نيللي المكتوم",
  handle: "nelmkt",
  headline: "FCIT Student @ KAU · Waed ’26 · IEEE ’25 · UNCCD COP16 ’24 · Mawhiba Alumna",
  tagline:
    "Undergraduate researcher and developer working across software, hardware, data and AI/ML.",
  // Bio shown in the "NELLY" dialog box, one string per paragraph.
  about: [
    "I'm a computer science student at King Abdulaziz University who loves solving problems with code and hardware, from machine learning models and full-stack web apps to Aykah, a solar-powered smart waste bin I designed, built and prototyped end to end.",
    "My research connects computing with real-world systems: reproducible ML pipelines, satellite data and IoT. I'm aiming for a Ph.D. and a career in academia. My projects are in the Quest Log below.",
    "I'm also an artist, which probably explains why this site looks the way it does.",
  ],
  // Headline achievement, shown as its own banner under the tagline.
  highlight: "Youngest UN-certified Saudi researcher",
  highlightDetail: "6 national & international recognitions · 3 national & international awards",
  stats: [
    { label: "CLASS", pro: "Role", value: "Researcher · Developer · ML Engineer" },
    { label: "GUILD", pro: "University", value: "KAU · BS Computer Science · Waed track" },
    { label: "BASE", pro: "Location", value: "Jeddah, Saudi Arabia" },
    { label: "LANGS", pro: "Languages", value: "Arabic · English" },
    { label: "MAIN QUEST", pro: "Goal", value: "Ph.D. → academia" },
    { label: "SIDE QUEST", pro: "Outside research", value: "Design & painting" },
  ],
  // Focus areas: technical and research only, in one consistent form.
  interests: [
    "AI/ML engineering",
    "Full-stack web development",
    "IoT & embedded systems",
    "Remote sensing",
    "Sustainable technology",
  ],
};

export type Quest = {
  id: string;
  title: string;
  titleAr: string;
  status: string;
  statusPro: string;
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
    status: "MAIN QUEST · JUN–OCT 2026 · RELEASED",
    statusPro: "Jun–Oct 2026 · Released",
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
    status: "QUEST COMPLETE · OCT 2024–MAR 2025 · PATENTED · MULTI-AWARD",
    statusPro: "Oct 2024–Mar 2025 · Patented · Multiple awards",
    url: "https://github.com/nelmkt/Smart-Bin-Aykah",
    image:
      "https://raw.githubusercontent.com/nelmkt/Smart-Bin-Aykah/main/images/prototype.jpg",
    imageAlt: "The Aykah smart bin prototype",
    summary:
      "A cost-effective, solar-powered IoT smart bin, taken from scientific research on a Sustainable Development Goal problem through to a working prototype and a business concept.",
    objectives: [
      "Built as my graduation project at Dar Al Fikr Schools: SDG research, a functional prototype and a business concept with its own identity",
      "Raspberry Pi with ultrasonic fill sensing, LCD interface, LED status indicators and air filtration",
      "Community survey of 222 participants on waste disposal behaviour and acceptance of smart waste technology",
      "Young Researchers Award (Modern Technologies) at UNCCD COP16",
      "Patented: the Aykah smart waste management system is protected by a patent",
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
    year: "PATENT",
    title: "Patent · Aykah Smart Bin",
    detail: "Patent for Aykah, the solar-powered IoT smart waste management system",
    by: "Inventor: Nelly Almaktoum",
    tier: "patent",
  },
  {
    year: "SEP 2026",
    title: "Featured · Saudi Gazette",
    detail: "Feature story on my journey from curiosity to the award-winning Aykah smart bin",
    by: "Saudi Gazette",
    tier: "gold",
  },
  {
    year: "SEP 2026",
    title: "Certificate of Appreciation",
    detail: "For distinguished participation in local and international competitions",
    by: "King Abdulaziz University",
    tier: "silver",
  },
  {
    year: "JUN 2026",
    title: "Academic Excellence Award 2025–2026",
    detail: "GPA of 4.5 or higher across two consecutive semesters",
    by: "King Abdulaziz University",
    tier: "gold",
  },
  {
    year: "JAN 2025",
    title: "IEEE Ideation Competition",
    detail:
      "Presenter & team lead at the 22nd International Learning and Technology Conference (Effat University): a top-ranked paper at the Human Machine Fusion exhibition, leading a team of five",
    by: "IEEE",
    tier: "silver",
  },
  {
    year: "DEC 2024",
    title: "Young Researchers Award · Modern Technologies",
    detail:
      "Selected by an international panel and received at 16, making me the youngest UN-certified Saudi researcher (youngest of 209 researchers and professors from 36 countries)",
    by: "United Nations Convention to Combat Desertification (UNCCD COP16)",
    tier: "legendary",
  },
  {
    year: "NATIONAL",
    title: "National Recognition · NCM",
    detail: "Official recognition of Aykah among the selected Young Researchers at UNCCD COP16",
    by: "National Center for Meteorology (NCM)",
    tier: "gold",
  },
  {
    year: "NATIONAL",
    title: "National Recognition · MEWA",
    detail: "National recognition for the Aykah smart bin",
    by: "Ministry of Environment, Water and Agriculture (MEWA)",
    tier: "gold",
  },
  {
    year: "FEB 2022",
    title: "National Mathematics Olympiad · Final Stage",
    detail: "Representing the Western Region in the competition’s fourth edition",
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
  { name: "Java", short: "JV", color: "#E76F00", tier: "WORKING" },
] as const;

// Broad development skills first; ML is one strand among several.
export const skillTree = [
  { branch: "Front end", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js"] },
  { branch: "Back end", items: ["Python", "Ruby", "Rust", "Node.js"] },
  { branch: "Tools", items: ["Git", "Docker"] },
  { branch: "UI & communication", items: ["UI prototyping", "Public speaking", "Scientific presentation"] },
  { branch: "ML engineering", items: ["Model training & benchmarking", "XGBoost", "Random forest & gradient boosting", "Spatial cross-validation", "Counterfactual testing", "Reproducible ML pipelines"] },
  { branch: "Data", items: ["scikit-learn", "pandas", "NumPy"] },
  { branch: "Remote sensing", items: ["Google Earth Engine", "Landsat 8 Collection 2"] },
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
  { role: "Technical Team Lead", where: "Waed Students Community, King Abdulaziz University", when: "Sep 2026 – now", lead: true },
  { role: "Tech Department Member", where: "IEEE, 2027 term", when: "Oct 2026 – now" },
  { role: "Tech Department Member", where: "Programming Club, 2027 term", when: "Oct 2026 – now" },
  { role: "CM Experience Member", where: "Google Developer Groups, KAU", when: "Oct 2026 – now" },
  { role: "Organizer & Event Coordinator", where: "English Language Olympiad (ELO), KAU", when: "Oct 2026" },
  { role: "Project Coordinator, Talks X", where: "Engineering Day 2027, KAU", when: "Sep 2026 – now" },
  { role: "Layout & Design Specialist", where: "Engineering Day 2027 Planning Department", when: "Aug 2026 – now" },
  { role: "Member", where: "Scientific Research Club, KAU", when: "Sep 2026 – now" },
  { role: "Coordinator", where: "Annual Waed Workshop 2027", when: "Aug – Sep 2026" },
  { role: "Member", where: "Intellectual & Electronics Sports Club, KAU", when: "Oct 2025 – Jun 2026" },
  { role: "Mawhiba Alumna", where: "Mawhiba: STEM enrichment classes for gifted students, 2022–2025", when: "Jun 2025 – now" },
];

export const academy = [
  {
    school: "King Abdulaziz University",
    degree: "BS, Computer Science · FCIT",
    when: "2025 – 2030",
    note: "Waed: Distinctive Excellence track for gifted students",
  },
  {
    school: "Dar Al Fikr Schools",
    degree: "American High School Diploma",
    when: "2022 – 2025",
    note: "Grade A+ · Graduation project: Aykah",
  },
];

export const sideQuests = [
  { title: "Hackathon Al Hareeq", by: "Ministry of Environment, Water & Agriculture", when: "Dec 2025" },
  { title: "Consulting Championship 2025", by: "Aramco", when: "Dec 2025" },
  { title: "The 2nd Scientific Forum", by: "King Abdulaziz University", when: "Nov 2025" },
  { title: "Organizing Waed’s Annual Introductory Meeting & Workshop", by: "King Abdulaziz University", when: "Sep 2026" },
];

export const links = [
  { label: "LinkedIn", value: "in/nelmkt", url: "https://www.linkedin.com/in/nelmkt/" },
  { label: "Email", value: "scifinel@gmail.com", url: "mailto:scifinel@gmail.com" },
  { label: "X", value: "@nelmkt", url: "https://x.com/nelmkt" },
  { label: "GitHub", value: "nelmkt", url: "https://github.com/nelmkt" },
  { label: "ORCID", value: "0009-0007-9887-0280", url: "https://orcid.org/0009-0007-9887-0280" },
  { label: "Google Scholar", value: "Nelly F. Almaktoum", url: "https://scholar.google.com/citations?user=MAgd-b0AAAAJ" },
  { label: "ResearchGate", value: "Nelly-Almaktoum", url: "https://www.researchgate.net/profile/Nelly-Almaktoum" },
];

export const stages = [
  { id: "player", code: "1-1", label: "PLAYER", pro: "About" },
  { id: "bonus", code: "1-2", label: "BONUS", pro: "" },
  { id: "quests", code: "1-3", label: "QUESTS", pro: "Projects" },
  { id: "trophies", code: "1-4", label: "TROPHIES", pro: "Recognition" },
  { id: "academy", code: "1-5", label: "ACADEMY", pro: "Education" },
  { id: "skills", code: "1-6", label: "SKILLS", pro: "Skills" },
  { id: "party", code: "1-7", label: "PARTY", pro: "Leadership" },
  { id: "save", code: "1-8", label: "SAVE", pro: "Contact" },
];
