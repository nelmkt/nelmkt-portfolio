
export type CvEntry = {
  title: string;
  where?: string;
  role?: string;
  date?: string;
  link?: { label: string; url: string };
  bullets?: string[];
};

export type CvLine = { lead: string; text?: string; date?: string; url?: string };

export type CvLang = "en" | "ar";

export const cvPdf = "/Nelly-Almaktoum-CV.pdf";
export const cvPdfAr = "/Nelly-Almaktoum-CV-ar.pdf";
export const cvPage = { en: "/cv/", ar: "/cv/ar/" } as const;
export const cvPdfs = { en: cvPdf, ar: cvPdfAr } as const;

export const cv = {
  name: "Nelly F. Almaktoum",
  title: "Computer Science Student | Machine Learning & AI Research",
  contact: [
    { label: "Jeddah, Saudi Arabia" },
    { label: "scifinel@gmail.com", url: "mailto:scifinel@gmail.com" },
    { label: "nelmkt.com", url: "https://nelmkt.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nelmkt/" },
    { label: "GitHub", url: "https://github.com/nelmkt" },
    { label: "ORCID", url: "https://orcid.org/0009-0007-9887-0280" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=MAgd-b0AAAAJ" },
  ] as { label: string; url?: string }[],

  profile:
    "Computer Science student at King Abdulaziz University on the Waed Distinctive Excellence track, preparing for Ph.D. study and an academic research career in machine learning and AI. My work applies reproducible, interpretable ML to environmental and infrastructure problems: modeling urban heat in Wahaj, sensor-based leak detection in Maeen, and IoT prototyping in the patented Aykah smart bin. I was the youngest of seven UNCCD Young Researchers Award winners at COP16, selected from 209 researchers across 36 countries.",

  researchInterests: [
    { lead: "Research interests", text: "Neural networks and deep learning; representation learning; trustworthy and explainable AI; model evaluation and generalization; AI for environmental sustainability and resilient infrastructure." },
  ] as CvLine[],

  education: [
    {
      title: "King Abdulaziz University, Jeddah",
      role: "B.S. Computer Science, Faculty of Computing and Information Technology",
      date: "2025 – Expected 2030",
      bullets: [
        "Waed Distinctive Excellence track for gifted students (Waed Scholar).",
        "Academic Excellence Award 2025–2026 for a GPA of 4.5 or higher across two consecutive semesters.",
      ],
    },
    {
      title: "Dar Al Fikr International Schools, Jeddah",
      role: "American High School Diploma",
      date: "2022 – 2025",
      bullets: [
        "Mawhiba alumna: advanced STEM coursework through the King Abdulaziz & His Companions Foundation for Giftedness & Creativity (2022–2025).",
        "Graduation project: Aykah, taken from Sustainable Development Goal research to a working prototype and a business concept.",
      ],
    },
  ] as CvEntry[],

  research: [
    {
      title: "Maeen (مَعين): Real-Time Pipeline Leak & Water-Quality Detection",
      role: "Technical lead and developer, five-person team",
      date: "Aug – Oct 2026",
      link: { label: "github.com/nelmkt/maeen", url: "https://github.com/nelmkt/maeen" },
      bullets: [
        "Developed a reproducible ML pipeline for multivariate in-pipe sensor streams (pressure, flow, pH, EC, acoustics and vibration), from physics-aware feature engineering to fault classification, localization and evidence-based alerts.",
        "Physics-aware features with gradient boosting reach 94.1% fault-type accuracy across 6 classes on unseen scenarios, against 78.5% for classic threshold rules, with 0.06 false alarms per day.",
        "Locates faults to the right pair of devices 99.9% of the time, within about 110 m on a 5 km line, with a 5-minute median detection delay for leaks.",
        "Built a working prototype with a FastAPI service, bilingual evidence-based dashboard, model registry, drift monitoring and CI quality gate (Docker, GitHub Actions, pytest).",
      ],
    },
    {
      title: "Wahaj Framework: Urban Greening and Energy Trade-offs",
      role: "Researcher and developer",
      date: "Jun – Oct 2026",
      link: { label: "DOI 10.5281/zenodo.23168529", url: "https://doi.org/10.5281/zenodo.23168529" },
      bullets: [
        "Developed a reproducible Python and Google Earth Engine research framework to study urban greening, surface temperature and desalination energy trade-offs, using Jeddah as a case study.",
        "XGBoost land surface temperature model on Landsat 8: spatial cross-validation R² 0.795 on 19,650 cells, benchmarked against random forest, gradient boosting and linear regression.",
        "Matched-contrast benchmark of −1.18 °C per greened pixel outside the built-up area, with counterfactual gates and robustness tests, plus a NEGI index and a water–energy ledger (about 2.9–5.3 MWh/yr of desalination energy per degree of cooling).",
      ],
    },
    {
      title: "Aykah (آيكة): Solar-Powered IoT Smart Bin",
      role: "Inventor and project lead - patented",
      date: "Oct 2024 – Mar 2025",
      link: { label: "github.com/nelmkt/Smart-Bin-Aykah", url: "https://github.com/nelmkt/Smart-Bin-Aykah" },
      bullets: [
        "Designed, built and prototyped a low-cost smart bin end to end: Raspberry Pi, ultrasonic fill sensing, LCD interface, LED status indicators, air filtration and solar power.",
        "Grounded in a community survey of 222 participants on waste habits and acceptance of smart waste technology, and developed into a business concept with its own identity.",
        "Won the UNCCD Young Researchers Award at COP16, protected by a patent, and featured in the Saudi Gazette.",
      ],
    },
  ] as CvEntry[],

  publications: [
    { lead: "Patent", text: "Aykah smart waste management system (inventor)." },
    { lead: "Research paper", text: "2nd Conference on Sustainability and Quality of Life, King Abdulaziz University.", date: "2026" },
    {
      lead: "Software release",
      text: "Wahaj Framework, Zenodo, DOI 10.5281/zenodo.23168529.",
      date: "2026",
      url: "https://doi.org/10.5281/zenodo.23168529",
    },
  ] as CvLine[],

  awards: [
    {
      title: "UNCCD Young Researchers Award, COP16",
      role: "Award winner, Modern Technologies category (United Nations Convention to Combat Desertification)",
      date: "Dec 2024",
      bullets: [
        "Youngest of the seven winners among 209 researchers and professors from 36 countries, received at age 16.",
        "Also recognized nationally by the Ministry of Environment, Water and Agriculture (MEWA) and the National Center for Meteorology (NCM).",
      ],
    },
    {
      title: "IEEE Ideation Competition, 22nd International Learning & Technology Conference",
      role: "Presenter and team lead, Effat University",
      date: "Jan 2025",
      bullets: [
        "Presented a top-ranked scientific paper at the Human Machine Fusion (HMF) exhibition to a committee of technology professors and innovators, and led a cross-functional team of five.",
      ],
    },
    {
      title: "25th Annual Graduation Research Seminar & Exhibition",
      role: "Exhibitor, Dar Al Fikr International Schools",
      date: "2025",
      bullets: [
        "Showcased a renewable green-energy prototype and organized research booths, leading visitor engagement and presenting to guests and industry professionals.",
      ],
    },
  ] as CvEntry[],

  moreAwards: [
    { lead: "Academic Excellence Award 2025–2026", text: "King Abdulaziz University", date: "Jun 2026" },
    { lead: "Certificate of Appreciation", text: "KAU, for distinguished participation in local and international competitions", date: "Sep 2026" },
    { lead: "Hackathon winner", text: "multiple local hackathons" },
    { lead: "National Mathematics Olympiad", text: "final stage, representing the Western Region", date: "Feb 2022" },
  ] as CvLine[],

  leadership: [
    { lead: "Technical Team Lead", text: "Waed Students Community, King Abdulaziz University", date: "Sep 2026 – Present" },
    { lead: "Project Coordinator, Talks X", text: "Engineering Day 2027, KAU", date: "Sep 2026 – Present" },
    { lead: "Layout & Design Specialist", text: "Engineering Day 2027 Planning Department", date: "Aug 2026 – Present" },
    { lead: "Technical Department Member", text: "IEEE (2027 term)", date: "Oct 2026 – Present" },
    { lead: "Tech Department Vice Leader", text: "Programming Club (2027 term)", date: "Oct 2026 – Present" },
    { lead: "Tech Department Member", text: "Microsoft Learn Student Ambassadors Club (LSAC), KAU", date: "Oct 2026 – Present" },
    { lead: "CM Experience Member", text: "Google Developer Groups, KAU", date: "Oct 2026 – Present" },
    { lead: "Project Manager, Library Initiative", text: "CM Experience, Google Developer Groups, KAU", date: "Oct 2026 – Present" },
    { lead: "Organizer & Event Coordinator", text: "English Language Olympiad (ELO), KAU", date: "Oct 2026" },
    { lead: "Coordinator", text: "Annual Waed Workshop & Introductory Meeting 2027", date: "Aug – Sep 2026" },
    { lead: "Member", text: "Scientific Research Club, KAU", date: "Sep 2026 – Present" },
    { lead: "Member", text: "Intellectual & Electronics Sports Club, KAU", date: "Oct 2025 – Jun 2026" },
  ] as CvLine[],

  events: [
    { lead: "Miyahthon 2027", text: "Saudi Water Authority", date: "2027" },
    { lead: "IECE 2026", text: "International Engineering Conference & Exhibition, Saudi Council of Engineers", date: "Dec 2026" },
    { lead: "2nd Conference on Sustainability and Quality of Life", text: "King Abdulaziz University (research paper)", date: "2026" },
    { lead: "Hackathon Al Hareeq", text: "Ministry of Environment, Water & Agriculture", date: "Dec 2025" },
    { lead: "Aramco Consulting Championship", text: "participant", date: "Dec 2025" },
    { lead: "The 2nd Scientific Forum", text: "King Abdulaziz University", date: "Nov 2025" },
  ] as CvLine[],

  submissions: [
    { lead: "Seoul International Invention Fair (SIIF) 2026, COEX, Seoul", text: "nominated by King Abdulaziz University to exhibit Wahaj", date: "Dec 2026" },
    { lead: "Global Sustainability Challenge 2026–27 (Stanford Doerr School of Sustainability and partner universities)", text: "submitted (team 1330)", date: "Oct 2026" },
    { lead: "KAUST Academy Artificial Intelligence Specialization 2026/27", text: "application submitted, under review", date: "Oct 2026" },
    { lead: "2nd International Online Conference on Environments (IOCE 2027), MDPI", text: "abstract submitted (Sciforum-215772)", date: "Oct 2026" },
    { lead: "i3EC’26", text: "final entry submitted", date: "Oct 2026" },
    { lead: "WAW 2026", text: "manuscript submitted", date: "Oct 2026" },
    { lead: "Wilkes Climate Innovation Prize 2027, Wilkes Center for Climate Science & Policy, University of Utah", text: "submitted", date: "Oct 2026" },
    { lead: "International Grand Invention, Innovation and Design Expo (IGIIDeation 2027), IIUM", text: "abstract and paper submitted", date: "Oct 2026" },
  ] as CvLine[],

  skills: [
    { lead: "Programming", text: "Python, TypeScript, JavaScript, Rust, Ruby; working knowledge of SQL, C++, C# and Java." },
    {
      lead: "Machine learning & AI",
      text: "XGBoost, scikit-learn, pandas, NumPy, Matplotlib; feature engineering, model training and benchmarking, explainable AI, cross-validation, counterfactual testing, reproducible pipelines, MLOps (model registry, drift monitoring).",
    },
    { lead: "Web & tools", text: "React, Next.js, Tailwind CSS, HTML/CSS, Node.js, FastAPI REST APIs, WebSockets, Pydantic, SQLite, Pyodide; Git, Docker, GitHub Actions, GitHub Pages, pytest." },
    {
      lead: "Hardware & IoT",
      text: "Raspberry Pi, embedded systems, ultrasonic sensors, LCD/LED interfaces, solar power, IoT prototyping.",
    },
    {
      lead: "Leadership & communication",
      text: "Committee leadership, event coordination, team leadership, scientific presentation to expert panels, layout and visual design.",
    },
    { lead: "Languages", text: "Arabic (native), English (fluent)." },
    { lead: "Interests", text: "Design and painting." },
  ] as CvLine[],
};

export const cvAr: typeof cv = {
  name: "نيللي فيصل المكتوم",
  title: "طالبة علوم حاسب | أبحاث تعلّم الآلة والذكاء الاصطناعي",
  contact: [
    { label: "جدة، المملكة العربية السعودية" },
    { label: "scifinel@gmail.com", url: "mailto:scifinel@gmail.com" },
    { label: "nelmkt.com", url: "https://nelmkt.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nelmkt/" },
    { label: "GitHub", url: "https://github.com/nelmkt" },
    { label: "ORCID", url: "https://orcid.org/0009-0007-9887-0280" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=MAgd-b0AAAAJ" },
  ],

  profile:
    "طالبة علوم حاسب في جامعة الملك عبدالعزيز ضمن مسار واعد للتميز النوعي، وأسعى إلى دراسة الدكتوراه ومسيرة بحثية أكاديمية في تعلّم الآلة والذكاء الاصطناعي. أطبّق نماذج قابلة للتكرار والتفسير على تحديات البيئة والبنية التحتية: نمذجة الحرارة الحضرية في وهاج، ورصد تسريبات المياه من بيانات الحساسات في مَعين، والنموذج الأولي لحاوية آيكة الذكية الحاصلة على براءة اختراع. كنتُ الأصغر بين الفائزين السبعة بجائزة الباحثين الشباب من UNCCD في COP16، من بين 209 باحثين من 36 دولة.",

  researchInterests: [
    { lead: "الاهتمامات البحثية", text: "الشبكات العصبية والتعلّم العميق؛ تعلّم التمثيلات؛ الذكاء الاصطناعي الموثوق والقابل للتفسير؛ تقييم النماذج وقدرتها على التعميم؛ توظيف الذكاء الاصطناعي للاستدامة البيئية ومرونة البنية التحتية." },
  ],

  education: [
    {
      title: "جامعة الملك عبدالعزيز، جدة",
      role: "بكالوريوس علوم الحاسب، كلية الحاسبات وتقنية المعلومات",
      date: "2025 – 2030 (متوقع)",
      bullets: [
        "مسار واعد للتميز النوعي للطلبة الموهوبين (منحة واعد).",
        "شهادة التفوق الأكاديمي ل2025-2026 لتحقيق معدل 4.5 فأعلى في فصلين دراسيين متتاليين.",
      ],
    },
    {
      title: "مدارس دار الفكر العالمية، جدة",
      role: "شهادة الثانوية الأمريكية",
      date: "2022 – 2025",
      bullets: [
        "خريجة موهبة: برامج إثرائية متقدمة في العلوم والتقنية عبر مؤسسة الملك عبدالعزيز ورجاله للموهبة والإبداع (2022 – 2025).",
        "مشروع التخرج: آيكة، من بحث في أهداف التنمية المستدامة إلى نموذج أولي يعمل وفكرة مشروع تجاري.",
      ],
    },
  ],

  research: [
    {
      title: "مَعين: رصد تسريبات خطوط المياه وجودتها لحظيًا",
      role: "قائدة تقنية ومطوّرة، ضمن فريق من خمسة أعضاء",
      date: "أغسطس – أكتوبر 2026",
      link: { label: "github.com/nelmkt/maeen", url: "https://github.com/nelmkt/maeen" },
      bullets: [
        "طوّرتُ مسار تعلّم آلة قابلًا للتكرار لقراءات حساسات متعددة داخل الأنابيب (الضغط والتدفق و pH و EC والصوت والاهتزاز)، من استخراج خصائص مبنية على الفيزياء إلى تصنيف الأعطال وتحديد مواقعها وتفسير الإنذارات.",
        "خصائص مبنية على فيزياء الجريان مع التعزيز التدرّجي تحقق دقة 94.1% في تحديد نوع العطل بين 6 فئات على سيناريوهات لم يرها النموذج، مقابل 78.5% لقواعد العتبات التقليدية، بمعدل 0.06 إنذار كاذب في اليوم.",
        "يحدد موقع العطل بين الجهازين الصحيحين بنسبة 99.9%، وبدقة تقارب 110 أمتار على خط طوله 5 كم، ويرصد التسريب خلال 5 دقائق في المتوسط.",
        "نموذج أولي يعمل بخدمة FastAPI ولوحة متابعة ثنائية اللغة تعرض أدلة كل إنذار، مع سجل للنماذج ومراقبة لانحراف البيانات وبوابة جودة آلية (Docker، GitHub Actions، pytest).",
      ],
    },
    {
      title: "إطار وهاج: الموازنة بين التشجير الحضري والطاقة",
      role: "باحثة ومطوّرة",
      date: "يونيو – أكتوبر 2026",
      link: { label: "DOI 10.5281/zenodo.23168529", url: "https://doi.org/10.5281/zenodo.23168529" },
      bullets: [
        "طوّرتُ إطارًا بحثيًا قابلًا للتكرار باستخدام Python و Google Earth Engine لدراسة أثر التشجير الحضري على حرارة السطح واستهلاك طاقة التحلية، مع جدة دراسة حالة.",
        "نموذج XGBoost لحرارة سطح الأرض من صور Landsat 8 بدقة R² = 0.795 في تحقق مكاني على 19,650 خلية، مقارنةً بالغابة العشوائية والتعزيز التدرّجي والانحدار الخطي.",
        "انخفاض قدره 1.18 °م لكل بكسل مُشجَّر خارج المناطق العمرانية، مع اختبارات للسيناريوهات البديلة والمتانة، ومؤشر NEGI وحساب للمياه والطاقة (قرابة 2.9 – 5.3 ميغاواط ساعة سنويًا من طاقة التحلية لكل درجة تبريد).",
      ],
    },
    {
      title: "آيكة: حاوية نفايات ذكية بالطاقة الشمسية وإنترنت الأشياء",
      role: "المخترعة وقائدة المشروع - براءة اختراع",
      date: "أكتوبر 2024 – مارس 2025",
      link: { label: "github.com/nelmkt/Smart-Bin-Aykah", url: "https://github.com/nelmkt/Smart-Bin-Aykah" },
      bullets: [
        "صممتُ حاوية ذكية منخفضة التكلفة وبنيتُها حتى النموذج الأولي: Raspberry Pi وحساس بالموجات فوق الصوتية لقياس الامتلاء وشاشة LCD ومؤشرات LED وتنقية للهواء وطاقة شمسية.",
        "مبنية على استبيان مجتمعي شارك فيه 222 شخصًا حول عادات التخلص من النفايات وتقبّل الحلول الذكية، وطُوّرت إلى فكرة مشروع تجاري بهوية مستقلة.",
        "فازت بجائزة الباحثين الشباب في COP16، وحصلت على براءة اختراع، ونشرت عنها صحيفة Saudi Gazette.",
      ],
    },
  ],

  publications: [
    { lead: "براءة اختراع", text: "نظام آيكة الذكي لإدارة النفايات (المخترعة)." },
    { lead: "ورقة بحثية", text: "المؤتمر الثاني للاستدامة وجودة الحياة، جامعة الملك عبدالعزيز.", date: "2026" },
    {
      lead: "إصدار برمجي",
      text: "إطار وهاج، Zenodo، DOI 10.5281/zenodo.23168529.",
      date: "2026",
      url: "https://doi.org/10.5281/zenodo.23168529",
    },
  ],

  awards: [
    {
      title: "جائزة الباحثين الشباب، COP16",
      role: "فائزة في فئة التقنيات الحديثة (اتفاقية الأمم المتحدة لمكافحة التصحر)",
      date: "ديسمبر 2024",
      bullets: [
        "الأصغر بين الفائزين السبعة من بين 209 باحثين وأساتذة من 36 دولة، ونلتُها في السادسة عشرة.",
        "وتكريم وطني من وزارة البيئة والمياه والزراعة والمركز الوطني للأرصاد.",
      ],
    },
    {
      title: "مسابقة IEEE للأفكار الإبداعية، المؤتمر الدولي الثاني والعشرون للتعلم والتقنية",
      role: "مقدّمة وقائدة فريق، جامعة عفت",
      date: "يناير 2025",
      bullets: [
        "قدّمتُ ورقة علمية نالت أحد أعلى التقييمات في معرض اندماج الإنسان والآلة (HMF) أمام لجنة من أساتذة التقنية والمبتكرين، وقدتُ فريقًا من خمسة أعضاء.",
      ],
    },
    {
      title: "الملتقى والمعرض السنوي الخامس والعشرون لأبحاث التخرج",
      role: "عارضة، مدارس دار الفكر العالمية",
      date: "2025",
      bullets: [
        "عرضتُ نموذجًا أوليًا للطاقة الخضراء المتجددة ونظّمتُ أركان البحث، وقدتُ التفاعل مع الزوار وقدّمتُ للضيوف والمختصين.",
      ],
    },
  ],

  moreAwards: [
    { lead: "شهادة التفوق الأكاديمي ل2025-2026", text: "جامعة الملك عبدالعزيز", date: "يونيو 2026" },
    { lead: "شهادة شكر وتقدير", text: "جامعة الملك عبدالعزيز، للمشاركة المتميزة في المسابقات المحلية والدولية", date: "سبتمبر 2026" },
    { lead: "الفوز في هاكاثونات", text: "عدة هاكاثونات محلية" },
    { lead: "أولمبياد الرياضيات الوطني", text: "المرحلة النهائية، ممثلةً للمنطقة الغربية", date: "فبراير 2022" },
  ],

  leadership: [
    { lead: "قائدة الفريق التقني", text: "مجتمع طلاب واعد، جامعة الملك عبدالعزيز", date: "سبتمبر 2026 – الآن" },
    { lead: "منسّقة مشروع Talks X", text: "يوم الهندسة 2027، جامعة الملك عبدالعزيز", date: "سبتمبر 2026 – الآن" },
    { lead: "مختصة التنسيق والتصميم", text: "لجنة التخطيط ليوم الهندسة 2027", date: "أغسطس 2026 – الآن" },
    { lead: "عضوة في القسم التقني", text: "IEEE (دورة 2027)", date: "أكتوبر 2026 – الآن" },
    { lead: "نائبة قائدة القسم التقني", text: "نادي البرمجة (دورة 2027)", date: "أكتوبر 2026 – الآن" },
    { lead: "عضوة في القسم التقني", text: "نادي سفراء مايكروسوفت للطلاب (LSAC)، جامعة الملك عبدالعزيز", date: "أكتوبر 2026 – الآن" },
    { lead: "عضوة في فريق تجربة المجتمع", text: "مجموعات مطوري Google، جامعة الملك عبدالعزيز", date: "أكتوبر 2026 – الآن" },
    { lead: "مديرة مشروع مبادرة المكتبة", text: "فريق تجربة المجتمع، مجموعات مطوري Google، جامعة الملك عبدالعزيز", date: "أكتوبر 2026 – الآن" },
    { lead: "منظِّمة ومنسّقة فعاليات", text: "أولمبياد اللغة الإنجليزية (ELO)، جامعة الملك عبدالعزيز", date: "أكتوبر 2026" },
    { lead: "منسّقة", text: "اللقاء التعريفي والورشة السنوية لواعد 2027", date: "أغسطس – سبتمبر 2026" },
    { lead: "عضوة", text: "نادي البحث العلمي، جامعة الملك عبدالعزيز", date: "سبتمبر 2026 – الآن" },
    { lead: "عضوة", text: "نادي الرياضات الذهنية والإلكترونية، جامعة الملك عبدالعزيز", date: "أكتوبر 2025 – يونيو 2026" },
  ],

  events: [
    { lead: "مياهثون 2027", text: "الهيئة السعودية للمياه", date: "2027" },
    { lead: "IECE 2026", text: "المؤتمر والمعرض الهندسي الدولي، الهيئة السعودية للمهندسين", date: "ديسمبر 2026" },
    { lead: "المؤتمر الثاني للاستدامة وجودة الحياة", text: "جامعة الملك عبدالعزيز (ورقة بحثية)", date: "2026" },
    { lead: "هاكاثون الحريق", text: "وزارة البيئة والمياه والزراعة", date: "ديسمبر 2025" },
    { lead: "بطولة أرامكو للاستشارات", text: "مشاركة", date: "ديسمبر 2025" },
    { lead: "الملتقى العلمي الثاني", text: "جامعة الملك عبدالعزيز", date: "نوفمبر 2025" },
  ],

  submissions: [
    { lead: "معرض سيول الدولي للاختراعات (SIIF) 2026", text: "ترشيح من الجامعة لعرض وهّاج", date: "ديسمبر 2026" },
    { lead: "تحدي الاستدامة العالمي 2026–27 (كلية دور للاستدامة بجامعة ستانفورد وجامعات شريكة)", text: "تم التقديم (الفريق 1330)", date: "أكتوبر 2026" },
    { lead: "تخصص الذكاء الاصطناعي في أكاديمية كاوست 2026/27", text: "تم التقديم، قيد المراجعة", date: "أكتوبر 2026" },
    { lead: "المؤتمر الدولي الثاني الإلكتروني للبيئات (IOCE 2027)، MDPI", text: "تم تقديم الملخص (Sciforum-215772)", date: "أكتوبر 2026" },
    { lead: "i3EC’26", text: "تم تقديم المشاركة النهائية", date: "أكتوبر 2026" },
    { lead: "WAW 2026", text: "تم إرسال الورقة البحثية", date: "أكتوبر 2026" },
    { lead: "جائزة ويلكس لابتكار المناخ 2027، مركز ويلكس لعلوم وسياسات المناخ بجامعة يوتا", text: "تم التقديم", date: "أكتوبر 2026" },
    { lead: "المعرض الدولي الكبير للاختراع والابتكار والتصميم (IGIIDeation 2027)، الجامعة الإسلامية العالمية بماليزيا", text: "تم تقديم الملخص والورقة", date: "أكتوبر 2026" },
  ],

  skills: [
    { lead: "البرمجة", text: "Python، TypeScript، JavaScript، Rust، Ruby، ومعرفة عملية بـ SQL و C++ و C# و Java." },
    {
      lead: "تعلّم الآلة والذكاء الاصطناعي",
      text: "XGBoost، scikit-learn، pandas، NumPy، Matplotlib؛ هندسة الخصائص، وتدريب النماذج ومقارنتها، والذكاء الاصطناعي القابل للتفسير، والتحقق المتقاطع، واختبارات السيناريوهات البديلة، والمسارات القابلة للتكرار، و MLOps (سجل النماذج ومراقبة انحراف البيانات).",
    },
    { lead: "الويب والأدوات", text: "React، Next.js، Tailwind CSS، HTML/CSS، Node.js، واجهات REST عبر FastAPI، WebSockets، Pydantic، SQLite، Pyodide؛ Git، Docker، GitHub Actions، GitHub Pages، pytest." },
    {
      lead: "العتاد وإنترنت الأشياء",
      text: "Raspberry Pi، والأنظمة المدمجة وحساسات الموجات فوق الصوتية وواجهات LCD/LED والطاقة الشمسية ونمذجة إنترنت الأشياء.",
    },
    {
      lead: "القيادة والتواصل",
      text: "قيادة اللجان، وتنسيق الفعاليات، وقيادة الفرق، والعروض العلمية أمام لجان الخبراء، والتنسيق والتصميم البصري.",
    },
    { lead: "اللغات", text: "العربية (اللغة الأم)، والإنجليزية (بطلاقة)." },
    { lead: "الاهتمامات", text: "التصميم والرسم." },
  ],
};

export const cvs = { en: cv, ar: cvAr } as const;

export const cvLabels = {
  en: {
    profile: "Profile",
    researchInterests: "Research interests",
    education: "Education",
    research: "Research Experience & Selected Projects",
    publications: "Research Outputs & Patent",
    awards: "Awards & Honors",
    leadership: "Leadership & Extracurricular Activities",
    events: "Conferences, Competitions & Events",
    submissions: "Submissions & Applications",
    skills: "Skills",
    back: "← nelmkt.com",
    download: "Download PDF",
    other: "العربية",
    sep: ", ",
  },
  ar: {
    profile: "نبذة",
    researchInterests: "الاهتمامات البحثية",
    education: "التعليم",
    research: "الخبرة البحثية ومشاريع مختارة",
    publications: "المخرجات البحثية وبراءة الاختراع",
    awards: "الجوائز والتكريم",
    leadership: "القيادة والأنشطة اللاصفية",
    events: "المؤتمرات والمسابقات والفعاليات",
    submissions: "المشاركات والطلبات المقدّمة",
    skills: "المهارات",
    back: "nelmkt.com →",
    download: "تحميل PDF",
    other: "English",
    sep: "، ",
  },
} as const;
