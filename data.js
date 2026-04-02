// ============================================================
//  UniCompass — data.js
//  ملف البيانات: كل شيء قابل للتعديل هنا بسهولة تامة
//  تاريخ الإنشاء: 2025
// ============================================================

const SITE_CONFIG = {
  name: "UniCompass",
  tagline_ar: "بوصلتك نحو النجاح الجامعي",
  tagline_en: "Your Compass to Academic Success",
  version: "1.0.0",
  primaryColor: "#1a3a6b",
  accentColor:  "#c9a84c",
  university: {
    name_ar: "جامعة السلطان قابوس",
    name_en: "Sultan Qaboos University",
    short: "SQU",
    website: "https://www.squ.edu.om",
    logo_emoji: "🏛️"
  }
};

// ============================================================
//  قسم أدوات الذكاء الاصطناعي
// ============================================================

const AI_CATEGORIES = [
  { id: "writing",   icon: "✏️", label_ar: "الكتابة والتلخيص",     label_en: "Writing & Summarizing" },
  { id: "research",  icon: "🔬", label_ar: "البحث العلمي",          label_en: "Research" },
  { id: "design",    icon: "🎨", label_ar: "التصميم والعروض",       label_en: "Design & Presentations" },
  { id: "audio",     icon: "🎙️", label_ar: "الصوت والنص",          label_en: "Audio & Text" },
  { id: "organize",  icon: "📋", label_ar: "التنظيم والإنتاجية",   label_en: "Organization & Productivity" },
  { id: "coding",    icon: "💻", label_ar: "البرمجة والتقنية",      label_en: "Coding & Tech" }
];

const AI_TOOLS = [
  {
    id: 1,
    name: "ChatGPT",
    category: "writing",
    icon: "🤖",
    badge: "الأكثر استخداماً",
    badge_en: "Most Popular",
    url: "https://chatgpt.com",
    free: true,
    description_ar: "مساعد ذكاء اصطناعي قوي يساعدك على شرح الدروس، كتابة الواجبات، وتلخيص المحتوى بأسلوب بسيط.",
    description_en: "A powerful AI assistant that helps you understand lectures, write assignments, and summarize content simply.",
    how_to_use_ar: [
      "اكتب سؤالك أو موضوعك مباشرة في المحادثة",
      "اطلب منه شرح مفهوم معين مثل: 'اشرح لي نظرية كانط ببساطة'",
      "يمكنك طلب تلخيص نص بلصقه في المحادثة",
      "اطلب منه مراجعة واجبك أو تحسين كتابتك"
    ],
    how_to_use_en: [
      "Type your question or topic directly in the chat",
      "Ask it to explain a concept like: 'Explain Kant's theory simply'",
      "Paste any text to get an instant summary",
      "Ask it to review or improve your writing"
    ],
    tags_ar: ["شرح", "تلخيص", "واجبات", "بحث"],
    tags_en: ["explain", "summarize", "assignments", "research"]
  },
  {
    id: 2,
    name: "Grammarly",
    category: "writing",
    icon: "✅",
    badge: "لغة إنجليزية",
    badge_en: "English Writing",
    url: "https://www.grammarly.com",
    free: true,
    description_ar: "يصحح الأخطاء النحوية والإملائية في الإنجليزية ويحسن أسلوب كتابتك تلقائياً.",
    description_en: "Automatically corrects grammar, spelling, and style in English writing.",
    how_to_use_ar: [
      "أنشئ حساباً مجانياً على الموقع",
      "الصق نصك الإنجليزي في المحرر",
      "سيُبرز الأخطاء باللون الأحمر ويقترح التصحيحات",
      "ثبّت الإضافة على المتصفح للتصحيح التلقائي"
    ],
    how_to_use_en: [
      "Create a free account on the website",
      "Paste your English text into the editor",
      "Errors will be highlighted with correction suggestions",
      "Install the browser extension for automatic correction"
    ],
    tags_ar: ["تصحيح", "إنجليزي", "كتابة"],
    tags_en: ["grammar", "spelling", "english", "writing"]
  },
  {
    id: 3,
    name: "QuillBot",
    category: "writing",
    icon: "🔄",
    badge: "إعادة صياغة",
    badge_en: "Paraphrasing",
    url: "https://quillbot.com",
    free: true,
    description_ar: "يعيد صياغة النصوص بأساليب مختلفة ويلخص المقالات الطويلة في جمل مختصرة.",
    description_en: "Paraphrases text in different styles and condenses long articles into short summaries.",
    how_to_use_ar: [
      "الصق النص الذي تريد إعادة صياغته",
      "اختر الأسلوب: Standard / Fluency / Academic",
      "اضغط على Paraphrase للحصول على النص الجديد",
      "استخدم خاصية Summarizer لتلخيص المقالات"
    ],
    how_to_use_en: [
      "Paste the text you want to paraphrase",
      "Choose style: Standard / Fluency / Academic",
      "Click Paraphrase to get the new text",
      "Use the Summarizer feature for articles"
    ],
    tags_ar: ["إعادة صياغة", "تلخيص", "أكاديمي"],
    tags_en: ["paraphrase", "summarize", "academic"]
  },
  {
    id: 4,
    name: "Google Scholar",
    category: "research",
    icon: "🎓",
    badge: "أبحاث علمية",
    badge_en: "Academic Research",
    url: "https://scholar.google.com",
    free: true,
    description_ar: "محرك بحث متخصص في الأبحاث والمقالات العلمية المحكّمة لجميع التخصصات.",
    description_en: "A search engine specializing in peer-reviewed academic articles and research papers.",
    how_to_use_ar: [
      "ابحث بكلمات مفتاحية متعلقة بموضوعك",
      "استخدم علامات الاقتباس للبحث بعبارة محددة",
      "اضغط 'Cited by' لرؤية الأبحاث التي استشهدت بالورقة",
      "اضغط على رمز الاقتباس للحصول على المرجع جاهزاً"
    ],
    how_to_use_en: [
      "Search using keywords related to your topic",
      "Use quotation marks for exact phrase search",
      "Click 'Cited by' to find papers that cited it",
      "Click the citation icon for a ready-made reference"
    ],
    tags_ar: ["بحث علمي", "مقالات", "مراجع", "أكاديمي"],
    tags_en: ["research", "papers", "references", "academic"]
  },
  {
    id: 5,
    name: "Notion",
    category: "organize",
    icon: "📓",
    badge: "تنظيم وملاحظات",
    badge_en: "Notes & Organization",
    url: "https://www.notion.so",
    free: true,
    description_ar: "منصة متكاملة لتنظيم الملاحظات، إنشاء قواعد بيانات، وتتبع الواجبات والمشاريع.",
    description_en: "An all-in-one platform for organizing notes, creating databases, and tracking assignments.",
    how_to_use_ar: [
      "أنشئ صفحة لكل مادة دراسية",
      "استخدم القوالب الجاهزة للجداول والمذكرات",
      "أضف قاعدة بيانات لتتبع مواعيد الاختبارات",
      "شارك الصفحات مع زملائك للدراسة الجماعية"
    ],
    how_to_use_en: [
      "Create a page for each course",
      "Use templates for schedules and notes",
      "Add a database to track exam dates",
      "Share pages with classmates for group study"
    ],
    tags_ar: ["تنظيم", "ملاحظات", "جدول", "مشاريع"],
    tags_en: ["organize", "notes", "schedule", "projects"]
  },
  {
    id: 6,
    name: "Canva",
    category: "design",
    icon: "🎨",
    badge: "تصميم سهل",
    badge_en: "Easy Design",
    url: "https://www.canva.com",
    free: true,
    description_ar: "أداة تصميم سهلة الاستخدام لإنشاء عروض تقديمية، انفوجرافيك، وملصقات احترافية.",
    description_en: "An easy-to-use design tool for creating presentations, infographics, and professional posters.",
    how_to_use_ar: [
      "اختر قالباً جاهزاً من المكتبة الضخمة",
      "عدّل النصوص والألوان والصور بسهولة",
      "استخدم الميزة التعاونية للعمل مع المجموعة",
      "احفظ كـ PDF أو PPTX أو صورة"
    ],
    how_to_use_en: [
      "Choose a ready-made template from the library",
      "Edit text, colors, and images easily",
      "Use the collaborative feature for group work",
      "Save as PDF, PPTX, or image"
    ],
    tags_ar: ["تصميم", "عروض", "انفوجرافيك"],
    tags_en: ["design", "presentations", "infographic"]
  },
  {
    id: 7,
    name: "Gamma",
    category: "design",
    icon: "⚡",
    badge: "عروض بالذكاء",
    badge_en: "AI Presentations",
    url: "https://gamma.app",
    free: true,
    description_ar: "يُنشئ عروض تقديمية كاملة واحترافية بالذكاء الاصطناعي من نص بسيط في ثوانٍ.",
    description_en: "Creates complete, professional presentations using AI from a simple text prompt in seconds.",
    how_to_use_ar: [
      "اكتب موضوع عرضك باختصار",
      "اضغط 'Generate' واترك الذكاء الاصطناعي يعمل",
      "عدّل على الشرائح الجاهزة حسب رغبتك",
      "انشر أو صدّر كـ PDF"
    ],
    how_to_use_en: [
      "Write your presentation topic briefly",
      "Press Generate and let the AI do the work",
      "Edit the ready-made slides as needed",
      "Publish or export as PDF"
    ],
    tags_ar: ["عروض", "ذكاء اصطناعي", "سريع"],
    tags_en: ["presentations", "AI", "fast"]
  },
  {
    id: 8,
    name: "Otter.ai",
    category: "audio",
    icon: "🎙️",
    badge: "تحويل الصوت",
    badge_en: "Audio to Text",
    url: "https://otter.ai",
    free: true,
    description_ar: "يحوّل المحاضرات والاجتماعات إلى نص مكتوب تلقائياً مع التوقيت الزمني لكل جملة.",
    description_en: "Automatically converts lectures and meetings to written text with timestamps for each sentence.",
    how_to_use_ar: [
      "سجّل المحاضرة مباشرة عبر التطبيق",
      "أو ارفع ملف صوتي موجود لديك",
      "يُحوّل الكلام إلى نص في الوقت الفعلي",
      "استخدم البحث للعثور على نقطة معينة في المحاضرة"
    ],
    how_to_use_en: [
      "Record the lecture directly through the app",
      "Or upload an existing audio file",
      "It transcribes speech to text in real time",
      "Use search to find a specific point in the lecture"
    ],
    tags_ar: ["محاضرات", "تحويل", "صوت", "نص"],
    tags_en: ["lectures", "transcription", "audio", "text"]
  },
  {
    id: 9,
    name: "GitHub Copilot",
    category: "coding",
    icon: "🐙",
    badge: "مجاني للطلاب",
    badge_en: "Free for Students",
    url: "https://github.com/features/copilot",
    free: true,
    description_ar: "مساعد برمجة بالذكاء الاصطناعي يكمل الكود تلقائياً ويقترح حلولاً داخل محررك.",
    description_en: "An AI coding assistant that autocompletes code and suggests solutions inside your editor.",
    how_to_use_ar: [
      "سجّل في GitHub Student Developer Pack مجاناً",
      "ثبّت الإضافة على VS Code",
      "ابدأ الكتابة وسيقترح الإكمال التلقائي",
      "اضغط Tab لقبول الاقتراح"
    ],
    how_to_use_en: [
      "Sign up for GitHub Student Developer Pack for free",
      "Install the VS Code extension",
      "Start typing and it will auto-suggest completions",
      "Press Tab to accept the suggestion"
    ],
    tags_ar: ["برمجة", "كود", "مجاني للطلاب"],
    tags_en: ["coding", "code", "free for students"]
  },
  {
    id: 10,
    name: "Wolfram Alpha",
    category: "research",
    icon: "🔢",
    badge: "رياضيات وعلوم",
    badge_en: "Math & Science",
    url: "https://www.wolframalpha.com",
    free: true,
    description_ar: "محرك حسابي يحل المعادلات الرياضية والمسائل العلمية المعقدة مع شرح الخطوات.",
    description_en: "A computational engine that solves complex math equations and scientific problems step by step.",
    how_to_use_ar: [
      "اكتب المعادلة أو المسألة مباشرة",
      "يعرض الحل مع كل الخطوات",
      "يمكن رسم الدوال والمخططات البيانية",
      "يدعم الأسئلة باللغة الطبيعية"
    ],
    how_to_use_en: [
      "Type your equation or problem directly",
      "It shows the solution with all steps",
      "Can plot functions and graphs",
      "Supports natural language questions"
    ],
    tags_ar: ["رياضيات", "علوم", "حسابات", "معادلات"],
    tags_en: ["math", "science", "calculations", "equations"]
  },
  {
    id: 11,
    name: "Zotero",
    category: "research",
    icon: "📚",
    badge: "إدارة المراجع",
    badge_en: "Reference Manager",
    url: "https://www.zotero.org",
    free: true,
    description_ar: "أداة مجانية لجمع وتنظيم المراجع العلمية وإنشاء قوائم المصادر تلقائياً بأي أسلوب.",
    description_en: "A free tool for collecting and organizing references and automatically generating bibliographies.",
    how_to_use_ar: [
      "ثبّت الإضافة على المتصفح",
      "انقر على أيقونة Zotero لحفظ أي بحث تقرأه",
      "نظّم مراجعك في مجلدات لكل موضوع",
      "اضغط 'Create Bibliography' لإنشاء المراجع تلقائياً"
    ],
    how_to_use_en: [
      "Install the browser extension",
      "Click the Zotero icon to save any paper you read",
      "Organize your references in folders by topic",
      "Click Create Bibliography to auto-generate references"
    ],
    tags_ar: ["مراجع", "أبحاث", "مصادر"],
    tags_en: ["references", "research", "bibliography"]
  },
  {
    id: 12,
    name: "Focusmate",
    category: "organize",
    icon: "⏱️",
    badge: "إنتاجية",
    badge_en: "Productivity",
    url: "https://www.focusmate.com",
    free: true,
    description_ar: "يجمعك مع طالب آخر في جلسة عمل مشتركة عبر الفيديو لزيادة الانضباط والتركيز.",
    description_en: "Pairs you with another student in a shared video work session to boost focus and accountability.",
    how_to_use_ar: [
      "احجز جلسة في الوقت المناسب لك",
      "سيتم إقرانك مع شريك عمل افتراضي",
      "أخبره بما ستعمل عليه واشتغل",
      "في نهاية الجلسة أفيدا بعضكما بما أنجزتماه"
    ],
    how_to_use_en: [
      "Book a session at your preferred time",
      "You'll be paired with a virtual work partner",
      "Tell them what you'll work on and get started",
      "At the end, share what you each accomplished"
    ],
    tags_ar: ["تركيز", "إنتاجية", "دراسة"],
    tags_en: ["focus", "productivity", "study"]
  }
];

// ============================================================
//  قسم الخطط الأكاديمية — جامعة السلطان قابوس
// ============================================================

const SQU_COLLEGES = [
  {
    id: "engineering",
    icon: "⚙️",
    name_ar: "كلية الهندسة",
    name_en: "College of Engineering",
    color: "#e74c3c",
    majors: [
      {
        name_ar: "هندسة الحاسوب",
        name_en: "Computer Engineering",
        duration_ar: "5 سنوات",
        duration_en: "5 Years",
        credit_hours: 165,
        description_ar: "تجمع بين الهندسة الكهربائية وعلوم الحاسوب لتصميم وبناء الأنظمة الحاسوبية.",
        description_en: "Combines electrical engineering and computer science to design and build computing systems.",
        core_courses_ar: ["برمجة الحاسوب", "الدوائر الكهربائية", "المعالجات الدقيقة", "الشبكات", "الذكاء الاصطناعي"],
        core_courses_en: ["Computer Programming", "Electric Circuits", "Microprocessors", "Networks", "Artificial Intelligence"],
        career_ar: ["مهندس برمجيات", "مهندس شبكات", "مطور تطبيقات", "باحث ذكاء اصطناعي"],
        career_en: ["Software Engineer", "Network Engineer", "App Developer", "AI Researcher"]
      },
      {
        name_ar: "الهندسة الكيميائية",
        name_en: "Chemical Engineering",
        duration_ar: "5 سنوات",
        duration_en: "5 Years",
        credit_hours: 168,
        description_ar: "تطبيق مبادئ الكيمياء والفيزياء والرياضيات في تصميم العمليات الصناعية.",
        description_en: "Applying principles of chemistry, physics, and math to design industrial processes.",
        core_courses_ar: ["كيمياء عضوية", "ديناميكا حرارية", "نقل الحرارة والكتلة", "تصميم المفاعلات"],
        core_courses_en: ["Organic Chemistry", "Thermodynamics", "Heat & Mass Transfer", "Reactor Design"],
        career_ar: ["مهندس عمليات", "باحث في الطاقة", "مهندس البيئة"],
        career_en: ["Process Engineer", "Energy Researcher", "Environmental Engineer"]
      },
      {
        name_ar: "الهندسة المدنية",
        name_en: "Civil Engineering",
        duration_ar: "5 سنوات",
        duration_en: "5 Years",
        credit_hours: 167,
        description_ar: "تصميم وبناء وصيانة البنية التحتية من طرق ومباني وجسور.",
        description_en: "Designing, building, and maintaining infrastructure like roads, buildings, and bridges.",
        core_courses_ar: ["ميكانيكا التربة", "هندسة المياه", "الخرسانة المسلحة", "إدارة المشاريع"],
        core_courses_en: ["Soil Mechanics", "Water Engineering", "Reinforced Concrete", "Project Management"],
        career_ar: ["مهندس إنشاءات", "مخطط مدن", "مهندس موارد مائية"],
        career_en: ["Construction Engineer", "Urban Planner", "Water Resources Engineer"]
      }
    ]
  },
  {
    id: "computing",
    icon: "💻",
    name_ar: "كلية الحوسبة وتقنية المعلومات",
    name_en: "College of Computing & IT",
    color: "#2980b9",
    majors: [
      {
        name_ar: "علم الحاسوب",
        name_en: "Computer Science",
        duration_ar: "4 سنوات",
        duration_en: "4 Years",
        credit_hours: 135,
        description_ar: "دراسة نظرية وتطبيقية للخوارزميات وهياكل البيانات والبرمجة وتطوير الأنظمة.",
        description_en: "Theoretical and practical study of algorithms, data structures, programming, and systems.",
        core_courses_ar: ["خوارزميات", "قواعد البيانات", "هندسة البرمجيات", "التعلم الآلي", "الأمن السيبراني"],
        core_courses_en: ["Algorithms", "Databases", "Software Engineering", "Machine Learning", "Cybersecurity"],
        career_ar: ["مطور برمجيات", "عالم بيانات", "مهندس ذكاء اصطناعي", "محلل أنظمة"],
        career_en: ["Software Developer", "Data Scientist", "AI Engineer", "Systems Analyst"]
      },
      {
        name_ar: "تقنية المعلومات",
        name_en: "Information Technology",
        duration_ar: "4 سنوات",
        duration_en: "4 Years",
        credit_hours: 132,
        description_ar: "التركيز على تطبيقات التكنولوجيا في بيئة الأعمال وإدارة الأنظمة.",
        description_en: "Focuses on applying technology in business environments and systems management.",
        core_courses_ar: ["شبكات الحاسوب", "إدارة قواعد البيانات", "أمن المعلومات", "إدارة المشاريع التقنية"],
        core_courses_en: ["Computer Networks", "Database Management", "Information Security", "IT Project Management"],
        career_ar: ["مدير تقنية المعلومات", "مهندس شبكات", "مختص أمن معلومات"],
        career_en: ["IT Manager", "Network Engineer", "Information Security Specialist"]
      }
    ]
  },
  {
    id: "science",
    icon: "🔬",
    name_ar: "كلية العلوم",
    name_en: "College of Science",
    color: "#27ae60",
    majors: [
      {
        name_ar: "الرياضيات",
        name_en: "Mathematics",
        duration_ar: "4 سنوات",
        duration_en: "4 Years",
        credit_hours: 128,
        description_ar: "دراسة الرياضيات البحثية والتطبيقية من جبر وتحليل وإحصاء.",
        description_en: "Study of pure and applied mathematics including algebra, analysis, and statistics.",
        core_courses_ar: ["تفاضل وتكامل", "جبر خطي", "إحصاء رياضي", "معادلات تفاضلية", "نظرية الأعداد"],
        core_courses_en: ["Calculus", "Linear Algebra", "Mathematical Statistics", "Differential Equations", "Number Theory"],
        career_ar: ["إحصائي", "محلل بيانات", "معلم رياضيات", "محلل مالي"],
        career_en: ["Statistician", "Data Analyst", "Math Teacher", "Financial Analyst"]
      },
      {
        name_ar: "الفيزياء",
        name_en: "Physics",
        duration_ar: "4 سنوات",
        duration_en: "4 Years",
        credit_hours: 130,
        description_ar: "استكشاف قوانين الكون من الجسيمات الدقيقة إلى المجرات البعيدة.",
        description_en: "Exploring the laws of the universe from subatomic particles to distant galaxies.",
        core_courses_ar: ["ميكانيكا كلاسيكية", "كهرومغناطيسية", "ميكانيكا الكم", "فيزياء حرارية", "بصريات"],
        core_courses_en: ["Classical Mechanics", "Electromagnetism", "Quantum Mechanics", "Thermodynamics", "Optics"],
        career_ar: ["باحث علمي", "مهندس طاقة", "فيزيائي طبي"],
        career_en: ["Researcher", "Energy Engineer", "Medical Physicist"]
      },
      {
        name_ar: "الكيمياء",
        name_en: "Chemistry",
        duration_ar: "4 سنوات",
        duration_en: "4 Years",
        credit_hours: 131,
        description_ar: "دراسة تركيب المادة وخصائصها وتفاعلاتها الكيميائية وتطبيقاتها الصناعية.",
        description_en: "Study of matter's composition, properties, chemical reactions, and industrial applications.",
        core_courses_ar: ["كيمياء عضوية", "كيمياء غير عضوية", "كيمياء تحليلية", "كيمياء فيزيائية"],
        core_courses_en: ["Organic Chemistry", "Inorganic Chemistry", "Analytical Chemistry", "Physical Chemistry"],
        career_ar: ["كيميائي صناعي", "باحث أدوية", "مفتش جودة"],
        career_en: ["Industrial Chemist", "Pharmaceutical Researcher", "Quality Inspector"]
      }
    ]
  },
  {
    id: "medicine",
    icon: "🏥",
    name_ar: "كلية الطب والعلوم الصحية",
    name_en: "College of Medicine & Health Sciences",
    color: "#8e44ad",
    majors: [
      {
        name_ar: "الطب والجراحة",
        name_en: "Medicine & Surgery",
        duration_ar: "6 سنوات",
        duration_en: "6 Years",
        credit_hours: 280,
        description_ar: "تأهيل أطباء بشريين قادرين على تشخيص الأمراض وعلاجها في مختلف التخصصات.",
        description_en: "Training physicians capable of diagnosing and treating diseases across various specialties.",
        core_courses_ar: ["التشريح", "علم وظائف الأعضاء", "الباثولوجيا", "الصيدلة", "طب الأطفال", "الجراحة"],
        core_courses_en: ["Anatomy", "Physiology", "Pathology", "Pharmacology", "Pediatrics", "Surgery"],
        career_ar: ["طبيب عام", "طبيب متخصص", "باحث طبي", "طبيب مستشفى"],
        career_en: ["General Practitioner", "Specialist Doctor", "Medical Researcher", "Hospital Physician"]
      },
      {
        name_ar: "التمريض",
        name_en: "Nursing",
        duration_ar: "4 سنوات",
        duration_en: "4 Years",
        credit_hours: 145,
        description_ar: "إعداد كوادر تمريضية متخصصة لتقديم الرعاية الصحية الشاملة للمرضى.",
        description_en: "Preparing nursing professionals to provide comprehensive healthcare to patients.",
        core_courses_ar: ["أسس التمريض", "الصحة النفسية", "تمريض الأمومة", "تمريض طب الأطفال"],
        core_courses_en: ["Nursing Fundamentals", "Mental Health Nursing", "Maternal Nursing", "Pediatric Nursing"],
        career_ar: ["ممرض مستشفى", "ممرض منزلي", "مدير تمريض"],
        career_en: ["Hospital Nurse", "Home Care Nurse", "Nursing Manager"]
      }
    ]
  },
  {
    id: "business",
    icon: "💼",
    name_ar: "كلية الاقتصاد والعلوم السياسية",
    name_en: "College of Economics & Political Science",
    color: "#f39c12",
    majors: [
      {
        name_ar: "إدارة الأعمال",
        name_en: "Business Administration",
        duration_ar: "4 سنوات",
        duration_en: "4 Years",
        credit_hours: 132,
        description_ar: "تأهيل قادة أعمال قادرين على إدارة المؤسسات واتخاذ القرارات الاستراتيجية.",
        description_en: "Preparing business leaders capable of managing organizations and making strategic decisions.",
        core_courses_ar: ["مبادئ الإدارة", "التسويق", "المحاسبة المالية", "اقتصاد الأعمال", "القانون التجاري"],
        core_courses_en: ["Management Principles", "Marketing", "Financial Accounting", "Business Economics", "Commercial Law"],
        career_ar: ["مدير أعمال", "رائد أعمال", "مستشار مالي", "مدير تسويق"],
        career_en: ["Business Manager", "Entrepreneur", "Financial Advisor", "Marketing Manager"]
      },
      {
        name_ar: "الاقتصاد",
        name_en: "Economics",
        duration_ar: "4 سنوات",
        duration_en: "4 Years",
        credit_hours: 128,
        description_ar: "تحليل الظواهر الاقتصادية والسياسات المالية والنقدية على المستوى المحلي والعالمي.",
        description_en: "Analyzing economic phenomena and financial/monetary policies at local and global levels.",
        core_courses_ar: ["الاقتصاد الجزئي", "الاقتصاد الكلي", "الإحصاء الاقتصادي", "اقتصاد دولي"],
        core_courses_en: ["Microeconomics", "Macroeconomics", "Economic Statistics", "International Economics"],
        career_ar: ["اقتصادي", "محلل مالي", "باحث سياسات", "مستشار حكومي"],
        career_en: ["Economist", "Financial Analyst", "Policy Researcher", "Government Advisor"]
      }
    ]
  },
  {
    id: "arts",
    icon: "📖",
    name_ar: "كلية الآداب والعلوم الاجتماعية",
    name_en: "College of Arts & Social Sciences",
    color: "#16a085",
    majors: [
      {
        name_ar: "اللغة العربية وآدابها",
        name_en: "Arabic Language & Literature",
        duration_ar: "4 سنوات",
        duration_en: "4 Years",
        credit_hours: 126,
        description_ar: "دراسة اللغة العربية الفصحى وآدابها وبلاغتها من الجاهلية حتى العصر الحديث.",
        description_en: "Study of classical Arabic language, literature, and rhetoric from pre-Islamic era to modern times.",
        core_courses_ar: ["النحو والصرف", "الأدب العربي القديم", "البلاغة", "النقد الأدبي", "اللغويات"],
        core_courses_en: ["Grammar & Morphology", "Classical Arabic Literature", "Rhetoric", "Literary Criticism", "Linguistics"],
        career_ar: ["معلم لغة عربية", "صحفي", "مترجم", "كاتب أكاديمي"],
        career_en: ["Arabic Teacher", "Journalist", "Translator", "Academic Writer"]
      },
      {
        name_ar: "اللغة الإنجليزية وآدابها",
        name_en: "English Language & Literature",
        duration_ar: "4 سنوات",
        duration_en: "4 Years",
        credit_hours: 126,
        description_ar: "إتقان اللغة الإنجليزية وآدابها وتطوير مهارات التواصل والترجمة والتدريس.",
        description_en: "Mastering English language and literature, developing communication, translation, and teaching skills.",
        core_courses_ar: ["الأدب الإنجليزي", "علم اللغة التطبيقي", "الترجمة", "الكتابة الأكاديمية"],
        core_courses_en: ["English Literature", "Applied Linguistics", "Translation", "Academic Writing"],
        career_ar: ["معلم إنجليزي", "مترجم", "كاتب محتوى", "محاضر جامعي"],
        career_en: ["English Teacher", "Translator", "Content Writer", "University Lecturer"]
      }
    ]
  }
];

// ============================================================
//  قسم مجتمع الطلاب — منشورات تجريبية
// ============================================================

const COMMUNITY_POSTS = [
  {
    id: 1,
    author: "محمد الراشدي",
    author_en: "Mohammed Al-Rashdi",
    avatar: "👨‍💻",
    college_ar: "كلية الحوسبة",
    college_en: "College of Computing",
    time_ar: "منذ ساعتين",
    time_en: "2 hours ago",
    type: "summary",
    title_ar: "ملخص Data Structures — الفصل الثالث",
    title_en: "Data Structures Summary — Chapter 3",
    content_ar: "أنهيت ملخص فصل الشجرات الثنائية مع أمثلة عملية وأسئلة متوقعة للاختبار 📚",
    content_en: "Finished the Binary Trees chapter summary with practical examples and expected exam questions 📚",
    likes: 47,
    comments: 12,
    tags: ["CS", "DataStructures", "ملخص"]
  },
  {
    id: 2,
    author: "فاطمة السعيدية",
    author_en: "Fatima Al-Saeedia",
    avatar: "👩‍⚕️",
    college_ar: "كلية الطب",
    college_en: "College of Medicine",
    time_ar: "منذ 5 ساعات",
    time_en: "5 hours ago",
    type: "question",
    title_ar: "سؤال عن اختبار Anatomy",
    title_en: "Question about Anatomy Exam",
    content_ar: "هل أحد عنده نماذج من اختبارات السنة الماضية لمادة Gross Anatomy؟ 🙏",
    content_en: "Does anyone have past exam papers for Gross Anatomy? 🙏",
    likes: 23,
    comments: 18,
    tags: ["Medicine", "Anatomy", "Past Papers"]
  },
  {
    id: 3,
    author: "خالد البلوشي",
    author_en: "Khalid Al-Balushi",
    avatar: "⚙️",
    college_ar: "كلية الهندسة",
    college_en: "College of Engineering",
    time_ar: "منذ يوم",
    time_en: "1 day ago",
    type: "tip",
    title_ar: "نصيحة: كيف أنجزت مشروع الـ Capstone",
    title_en: "Tip: How I Completed My Capstone Project",
    content_ar: "شاركت تجربتي في إنجاز مشروع التخرج خلال شهر باستخدام ChatGPT وGitHub. التفاصيل في التعليقات 💪",
    content_en: "Sharing my experience completing my graduation project in one month using ChatGPT and GitHub. Details in comments 💪",
    likes: 89,
    comments: 34,
    tags: ["Engineering", "Capstone", "نصيحة"]
  },
  {
    id: 4,
    author: "نورة الحارثية",
    author_en: "Nora Al-Harithia",
    avatar: "📊",
    college_ar: "كلية الاقتصاد",
    college_en: "College of Economics",
    time_ar: "منذ يومين",
    time_en: "2 days ago",
    type: "resource",
    title_ar: "روابط مفيدة لمادة Microeconomics",
    title_en: "Useful Links for Microeconomics",
    content_ar: "جمعت أفضل المصادر المجانية على الإنترنت لمادة الاقتصاد الجزئي — محاضرات MIT + كتاب Mankiw 📈",
    content_en: "Collected the best free online resources for Microeconomics — MIT lectures + Mankiw textbook 📈",
    likes: 61,
    comments: 9,
    tags: ["Economics", "Microeconomics", "مصادر"]
  }
];

// ============================================================
//  الجدول الدراسي — بيانات العرض التوضيحي
// ============================================================

const SAMPLE_SCHEDULE = {
  note_ar: "هذا جدول توضيحي — ستتمكن قريباً من إدخال جدولك الشخصي",
  note_en: "This is a sample schedule — you'll soon be able to enter your personal schedule",
  days_ar: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"],
  days_en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
  slots: [
    { time: "08:00 - 09:00", sunday: "", monday: { code: "CS101", name_ar: "برمجة 1", name_en: "Programming I", room: "C1-101", color: "#3498db" }, tuesday: "", wednesday: { code: "CS101", name_ar: "برمجة 1", name_en: "Programming I", room: "C1-101", color: "#3498db" }, thursday: "" },
    { time: "09:00 - 10:00", sunday: { code: "MATH201", name_ar: "تفاضل وتكامل", name_en: "Calculus", room: "B2-201", color: "#e74c3c" }, monday: "", tuesday: { code: "MATH201", name_ar: "تفاضل وتكامل", name_en: "Calculus", room: "B2-201", color: "#e74c3c" }, wednesday: "", thursday: { code: "MATH201", name_ar: "تفاضل وتكامل", name_en: "Calculus", room: "B2-201", color: "#e74c3c" } },
    { time: "10:00 - 11:00", sunday: "", monday: { code: "ENG101", name_ar: "لغة إنجليزية", name_en: "English Language", room: "A1-305", color: "#27ae60" }, tuesday: "", wednesday: { code: "ENG101", name_ar: "لغة إنجليزية", name_en: "English Language", room: "A1-305", color: "#27ae60" }, thursday: "" },
    { time: "11:00 - 12:00", sunday: { code: "PHYS101", name_ar: "فيزياء عامة", name_en: "General Physics", room: "S3-102", color: "#9b59b6" }, monday: "", tuesday: { code: "PHYS101", name_ar: "فيزياء عامة", name_en: "General Physics", room: "S3-102", color: "#9b59b6" }, wednesday: "", thursday: "" },
    { time: "12:00 - 01:00", sunday: "", monday: "", tuesday: "", wednesday: "", thursday: "" },
    { time: "01:00 - 02:00", sunday: { code: "CS102", name_ar: "هياكل البيانات", name_en: "Data Structures", room: "C2-203", color: "#e67e22" }, monday: "", tuesday: "", wednesday: { code: "CS102", name_ar: "هياكل البيانات", name_en: "Data Structures", room: "C2-203", color: "#e67e22" }, thursday: { code: "CS102", name_ar: "هياكل البيانات", name_en: "Data Structures", room: "LAB-C1", color: "#e67e22" } },
    { time: "02:00 - 03:00", sunday: "", monday: { code: "ARAB101", name_ar: "لغة عربية", name_en: "Arabic Language", room: "A2-101", color: "#16a085" }, tuesday: "", wednesday: { code: "ARAB101", name_ar: "لغة عربية", name_en: "Arabic Language", room: "A2-101", color: "#16a085" }, thursday: "" }
  ]
};

// ============================================================
//  روابط مفيدة — جامعة السلطان قابوس
// ============================================================

const SQU_LINKS = [
  { icon: "🌐", name_ar: "البوابة الإلكترونية", name_en: "SQU Portal", url: "https://portal.squ.edu.om", desc_ar: "الدخول إلى حسابك الأكاديمي", desc_en: "Access your academic account" },
  { icon: "📧", name_ar: "البريد الجامعي", name_en: "University Email", url: "https://mail.squ.edu.om", desc_ar: "البريد الرسمي للطلاب", desc_en: "Official student email" },
  { icon: "📚", name_ar: "المكتبة الرقمية", name_en: "Digital Library", url: "https://library.squ.edu.om", desc_ar: "أبحاث وكتب رقمية", desc_en: "Digital research and books" },
  { icon: "📋", name_ar: "نظام التسجيل", name_en: "Registration System", url: "https://portal.squ.edu.om", desc_ar: "التسجيل في المواد", desc_en: "Course registration" },
  { icon: "🗓️", name_ar: "التقويم الأكاديمي", name_en: "Academic Calendar", url: "https://www.squ.edu.om", desc_ar: "مواعيد الفصول والاختبارات", desc_en: "Semester and exam dates" },
  { icon: "🏅", name_ar: "الأنشطة الطلابية", name_en: "Student Activities", url: "https://www.squ.edu.om", desc_ar: "الأندية والفعاليات", desc_en: "Clubs and events" }
];

// ============================================================
//  ترجمات الواجهة
// ============================================================

const TRANSLATIONS = {
  ar: {
    nav_home: "الرئيسية",
    nav_tools: "أدوات الذكاء",
    nav_academic: "الخطط الأكاديمية",
    nav_schedule: "جدولي",
    nav_community: "المجتمع",
    nav_squ: "روابط SQU",
    hero_badge: "بوصلتك الجامعية 🧭",
    hero_title: "كل ما تحتاجه\nفي مكان واحد",
    hero_subtitle: "أدوات الذكاء الاصطناعي · الخطط الأكاديمية · مجتمع الطلاب",
    hero_cta: "ابدأ الاستكشاف",
    search_placeholder: "ابحث عن أداة أو تخصص أو مادة...",
    tools_title: "أدوات الذكاء الاصطناعي",
    tools_subtitle: "أفضل الأدوات المجانية التي تحتاجها في رحلتك الأكاديمية",
    how_to_use: "كيف أستخدمها؟",
    visit_tool: "زيارة الأداة",
    free_badge: "مجاني",
    academic_title: "الخطط الأكاديمية — SQU",
    academic_subtitle: "استكشف كليات وتخصصات جامعة السلطان قابوس",
    duration_label: "المدة:",
    credits_label: "الساعات المعتمدة:",
    courses_label: "المواد الأساسية:",
    careers_label: "مسارات العمل:",
    schedule_title: "الجدول الدراسي",
    schedule_subtitle: "نظرة سريعة على أسبوعك الدراسي",
    community_title: "مجتمع الطلاب",
    community_subtitle: "شارك · تعلّم · تواصل مع طلاب SQU",
    post_like: "إعجاب",
    post_comment: "تعليق",
    post_share: "مشاركة",
    squ_title: "روابط جامعة السلطان قابوس",
    squ_subtitle: "الروابط الرسمية لخدمات الجامعة",
    footer_text: "UniCompass — صُنع بـ ❤️ لطلاب SQU وكل جامعي",
    stats_tools: "أداة ذكاء",
    stats_colleges: "كلية",
    stats_majors: "تخصص",
    stats_students: "طالب يستخدمنا",
    all_categories: "الكل",
    close: "إغلاق",
    steps_title: "خطوات الاستخدام:"
  },
  en: {
    nav_home: "Home",
    nav_tools: "AI Tools",
    nav_academic: "Academic Plans",
    nav_schedule: "My Schedule",
    nav_community: "Community",
    nav_squ: "SQU Links",
    hero_badge: "Your Academic Compass 🧭",
    hero_title: "Everything You Need\nin One Place",
    hero_subtitle: "AI Tools · Academic Plans · Student Community",
    hero_cta: "Start Exploring",
    search_placeholder: "Search for a tool, major, or subject...",
    tools_title: "AI Tools",
    tools_subtitle: "The best free tools you need for your academic journey",
    how_to_use: "How to Use?",
    visit_tool: "Visit Tool",
    free_badge: "Free",
    academic_title: "Academic Plans — SQU",
    academic_subtitle: "Explore Sultan Qaboos University colleges and majors",
    duration_label: "Duration:",
    credits_label: "Credit Hours:",
    courses_label: "Core Courses:",
    careers_label: "Career Paths:",
    schedule_title: "Study Schedule",
    schedule_subtitle: "A quick look at your study week",
    community_title: "Student Community",
    community_subtitle: "Share · Learn · Connect with SQU students",
    post_like: "Like",
    post_comment: "Comment",
    post_share: "Share",
    squ_title: "Sultan Qaboos University Links",
    squ_subtitle: "Official links for university services",
    footer_text: "UniCompass — Made with ❤️ for SQU students and all university students",
    stats_tools: "AI Tools",
    stats_colleges: "Colleges",
    stats_majors: "Majors",
    stats_students: "Students Using Us",
    all_categories: "All",
    close: "Close",
    steps_title: "How to Use:"
  }
};
