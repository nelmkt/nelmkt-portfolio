// The CV in English and Arabic: one source for the /cv and /cv/ar pages and their PDFs
// (each PDF is printed from its page). Kept in step with data.ts; the phone number is
// left out of the public version on purpose.

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
  title: "Computer Science Student - ML Engineer - Researcher & Innovator",
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
    "Computer Science student at King Abdulaziz University on the Waed Distinctive Excellence track and recipient of KAU's Academic Excellence Award. ML engineer and IoT researcher, and the youngest UN-certified Saudi researcher: the youngest of the seven winners of the UNCCD Young Researchers Award at COP16, selected from 209 researchers across 36 countries. Inventor of the patented Aykah smart bin and builder of Wahaj (urban greening and energy trade-offs) and Maeen (real-time pipeline leak detection). Leads the Technical Committee of the Waed Students Community and serves in IEEE, GDG and the Programming Club. Bilingual in Arabic and English, and aiming for a Ph.D. and an academic career.",

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
        "Built an end-to-end ML system that turns in-pipe sensor streams (pressure, flow, pH, EC, acoustics, vibration) into what is wrong, where, how serious, why and what to do. The working prototype is complete.",
        "Physics-aware features with gradient boosting reach 94.1% fault-type accuracy across 6 classes on unseen scenarios, against 78.5% for classic threshold rules, with 0.06 false alarms per day.",
        "Locates faults to the right pair of devices 99.9% of the time, within about 110 m on a 5 km line, with a 5-minute median detection delay for leaks.",
        "Shipped a FastAPI service and an Arabic/English dashboard with plain-language evidence for every alert, a model registry, drift monitoring and a CI quality gate (Docker, GitHub Actions, pytest).",
      ],
    },
    {
      title: "Wahaj Framework: Urban Greening and Energy Trade-offs",
      role: "Researcher and developer",
      date: "Jun – Oct 2026",
      link: { label: "DOI 10.5281/zenodo.23168529", url: "https://doi.org/10.5281/zenodo.23168529" },
      bullets: [
        "Reproducible Python and Google Earth Engine ML framework for desalination-dependent cities, with Jeddah as the case study.",
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
    {
      lead: "Media",
      text: "Feature on the journey behind the Aykah smart bin, Saudi Gazette.",
      date: "Sep 2026",
      url: "https://saudigazette.com.sa/article/664214/saudi-arabia/how-curiosity-led-a-saudi-teenager-to-develop-a-un-award-winning-smart-waste-management-solution",
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
    { lead: "Technical Department Member", text: "Programming Club (2027 term)", date: "Oct 2026 – Present" },
    { lead: "CM Experience Member", text: "Google Developer Groups, KAU", date: "Oct 2026 – Present" },
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

  skills: [
    { lead: "Programming", text: "Python, TypeScript, JavaScript, Rust, Ruby; working knowledge of C++, C# and Java." },
    {
      lead: "ML engineering & data",
      text: "XGBoost, scikit-learn, pandas, NumPy, Matplotlib; anomaly detection, explainable AI, spatial cross-validation, counterfactual testing, reproducible pipelines, MLOps (model registry, drift monitoring).",
    },
    { lead: "Web & tools", text: "Next.js, Node.js, FastAPI, REST APIs, Pydantic, HTML/CSS; Git, Docker, GitHub Actions, pytest." },
    {
      lead: "Remote sensing & hardware",
      text: "Google Earth Engine, Landsat 8; Raspberry Pi, embedded systems, ultrasonic sensors, LCD/LED interfaces, solar power, IoT prototyping.",
    },
    {
      lead: "Leadership & communication",
      text: "Committee leadership, event coordination, team leadership, scientific presentation to expert panels, layout and visual design.",
    },
    { lead: "Languages", text: "Arabic (native), English (fluent)." },
    { lead: "Interests", text: "Design and painting." },
  ] as CvLine[],
};

// Arabic CV: the same content, written for Arabic readers (not word for word).
export const cvAr: typeof cv = {
  name: "نيللي فيصل المكتوم",
  title: "طالبة علوم حاسب - مهندسة تعلّم آلة - باحثة ومبتكرة",
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
    "طالبة علوم حاسب في جامعة الملك عبدالعزيز ضمن مسار واعد للتميز النوعي، وحاصلة على جائزة التفوق الأكاديمي من الجامعة. مهندسة تعلّم آلة وباحثة في إنترنت الأشياء، وأصغر باحثة سعودية معتمدة من الأمم المتحدة: الأصغر بين الفائزين السبعة بجائزة الباحثين الشباب من اتفاقية الأمم المتحدة لمكافحة التصحر في COP16، من بين 209 باحثين من 36 دولة. مخترعة حاوية آيكة الذكية الحاصلة على براءة اختراع، ومطوّرة إطار وهاج (أثر التشجير الحضري على الطاقة) ونظام مَعين (رصد تسريبات الأنابيب لحظيًا). تقود اللجنة التقنية في مجتمع طلاب واعد، وتشارك في IEEE و GDG ونادي البرمجة. تتقن العربية والإنجليزية، وتطمح إلى الدكتوراه ومسيرة أكاديمية.",

  education: [
    {
      title: "جامعة الملك عبدالعزيز، جدة",
      role: "بكالوريوس علوم الحاسب، كلية الحاسبات وتقنية المعلومات",
      date: "2025 – 2030 (متوقع)",
      bullets: [
        "مسار واعد للتميز النوعي للطلبة الموهوبين (منحة واعد).",
        "جائزة التفوق الأكاديمي 2025 – 2026 لتحقيق معدل 4.5 فأعلى في فصلين دراسيين متتاليين.",
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
        "بنيتُ نظام تعلّم آلة متكاملًا يحوّل قراءات الحساسات داخل الأنابيب (الضغط والتدفق و pH و EC والصوت والاهتزاز) إلى إجابات واضحة: ما المشكلة، وأين، وما مدى خطورتها، ولماذا، وما العمل. النموذج الأولي مكتمل ويعمل.",
        "خصائص مبنية على فيزياء الجريان مع التعزيز التدرّجي تحقق دقة 94.1% في تحديد نوع العطل بين 6 فئات على سيناريوهات لم يرها النموذج، مقابل 78.5% لقواعد العتبات التقليدية، بمعدل 0.06 إنذار كاذب في اليوم.",
        "يحدد موقع العطل بين الجهازين الصحيحين بنسبة 99.9%، وبدقة تقارب 110 أمتار على خط طوله 5 كم، ويرصد التسريب خلال 5 دقائق في المتوسط.",
        "خدمة FastAPI ولوحة متابعة بالعربية والإنجليزية تشرح أدلة كل إنذار بلغة واضحة، مع سجل للنماذج ومراقبة لانحراف البيانات وبوابة جودة آلية (Docker، GitHub Actions، pytest).",
      ],
    },
    {
      title: "إطار وهاج: الموازنة بين التشجير الحضري والطاقة",
      role: "باحثة ومطوّرة",
      date: "يونيو – أكتوبر 2026",
      link: { label: "DOI 10.5281/zenodo.23168529", url: "https://doi.org/10.5281/zenodo.23168529" },
      bullets: [
        "إطار تعلّم آلة قابل للتكرار مبني بـ Python و Google Earth Engine للمدن المعتمدة على تحلية المياه، وجدة نموذجًا.",
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
    {
      lead: "إعلام",
      text: "مقال عن رحلة ابتكار حاوية آيكة، صحيفة Saudi Gazette.",
      date: "سبتمبر 2026",
      url: "https://saudigazette.com.sa/article/664214/saudi-arabia/how-curiosity-led-a-saudi-teenager-to-develop-a-un-award-winning-smart-waste-management-solution",
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
    { lead: "جائزة التفوق الأكاديمي 2025 – 2026", text: "جامعة الملك عبدالعزيز", date: "يونيو 2026" },
    { lead: "شهادة شكر وتقدير", text: "جامعة الملك عبدالعزيز، للمشاركة المتميزة في المسابقات المحلية والدولية", date: "سبتمبر 2026" },
    { lead: "الفوز في هاكاثونات", text: "عدة هاكاثونات محلية" },
    { lead: "أولمبياد الرياضيات الوطني", text: "المرحلة النهائية، ممثلةً للمنطقة الغربية", date: "فبراير 2022" },
  ],

  leadership: [
    { lead: "قائدة الفريق التقني", text: "مجتمع طلاب واعد، جامعة الملك عبدالعزيز", date: "سبتمبر 2026 – الآن" },
    { lead: "منسّقة مشروع Talks X", text: "يوم الهندسة 2027، جامعة الملك عبدالعزيز", date: "سبتمبر 2026 – الآن" },
    { lead: "مختصة التنسيق والتصميم", text: "لجنة التخطيط ليوم الهندسة 2027", date: "أغسطس 2026 – الآن" },
    { lead: "عضوة في القسم التقني", text: "IEEE (دورة 2027)", date: "أكتوبر 2026 – الآن" },
    { lead: "عضوة في القسم التقني", text: "نادي البرمجة (دورة 2027)", date: "أكتوبر 2026 – الآن" },
    { lead: "عضوة في فريق تجربة المجتمع", text: "مجموعات مطوري Google، جامعة الملك عبدالعزيز", date: "أكتوبر 2026 – الآن" },
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

  skills: [
    { lead: "البرمجة", text: "Python، TypeScript، JavaScript، Rust، Ruby، ومعرفة عملية بـ C++ و C# و Java." },
    {
      lead: "هندسة تعلّم الآلة والبيانات",
      text: "XGBoost، scikit-learn، pandas، NumPy، Matplotlib؛ رصد الحالات الشاذة، والذكاء الاصطناعي القابل للتفسير، والتحقق المتقاطع المكاني، واختبارات السيناريوهات البديلة، والمسارات القابلة للتكرار، و MLOps (سجل النماذج ومراقبة انحراف البيانات).",
    },
    { lead: "الويب والأدوات", text: "Next.js، Node.js، FastAPI، واجهات REST، Pydantic، HTML/CSS؛ Git، Docker، GitHub Actions، pytest." },
    {
      lead: "الاستشعار عن بعد والعتاد",
      text: "Google Earth Engine، Landsat 8؛ Raspberry Pi، والأنظمة المدمجة وحساسات الموجات فوق الصوتية وواجهات LCD/LED والطاقة الشمسية ونمذجة إنترنت الأشياء.",
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

// Section titles and page chrome in each language.
export const cvLabels = {
  en: {
    profile: "Profile",
    education: "Education",
    research: "Research & Projects",
    publications: "Patent, Publications & Media",
    awards: "Awards & Honors",
    leadership: "Leadership & Extracurricular Activities",
    events: "Conferences, Competitions & Events",
    skills: "Skills",
    back: "← nelmkt.com",
    download: "Download PDF",
    other: "العربية",
    sep: ", ",
  },
  ar: {
    profile: "نبذة",
    education: "التعليم",
    research: "الأبحاث والمشاريع",
    publications: "براءة الاختراع والمنشورات والإعلام",
    awards: "الجوائز والتكريم",
    leadership: "القيادة والأنشطة اللاصفية",
    events: "المؤتمرات والمسابقات والفعاليات",
    skills: "المهارات",
    back: "nelmkt.com →",
    download: "تحميل PDF",
    other: "English",
    sep: "، ",
  },
} as const;
