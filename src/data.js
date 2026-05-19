// Static data only (no API calls). Keep all display content here.
// Notes:
// - Avoid invented official-looking numbers/claims.
// - Use KIIT-inspired wording with neutral, non-numeric language unless sourced.

export const brand = {
  short: "KIIT",
  full: "Kalinga Institute of Industrial Technology",
  legal: "Deemed to be University U/S 3 of UGC Act, 1956",
  location: "Bhubaneswar, Odisha, India"
};

export const nav = [
  { label: "About", to: "/#about" },
  { label: "Academics", to: "/programs" },
  { label: "Admissions", to: "/admissions" },
  { label: "Campus & Careers", to: "/campus-placements" }
];

export const announcement = {
  primary: "Admissions Open for KIITEE 2026",
  secondary: "Explore programs, campus life, and admissions in a cleaner KIIT-inspired layout."
};

export const homeHero = {
  headline: "Innovate, Inspire, Ignite",
  subhead: "Where innovation meets excellence, creating leaders for tomorrow.",
  primaryCta: { label: "Apply for KIITEE 2026", to: "/admissions#apply" },
  secondaryCta: { label: "Explore Programs", to: "/programs" },
  imageKey: "heroCampus",
  imageAlt: "KIIT-inspired campus hero visual",
  chips: [
    "NAAC A++ Accredited",
    "Research-driven academic ecosystem",
    "Global learning community",
    "Innovation-first campus"
  ]
};

export const heroHighlights = [
  { title: "NAAC A++ Accredited", desc: "Accreditation highlight.", icon: "badge" },
  { title: "Admissions Open - KIITEE 2026", desc: "Clear steps, dates, and a focused application flow.", icon: "spark" },
  { title: "Ranking & Recognition", desc: "Recognition highlights with neutral wording (no numeric claims).", icon: "award" },
  { title: "Innovation Starts Here", desc: "Studios, labs, and student-led build culture.", icon: "bolt" },
  { title: "Global Learning Environment", desc: "Exchange and collaboration pathways surfaced early.", icon: "globe" },
  { title: "Research-driven Academic Ecosystem", desc: "Labs, studios, and interdisciplinary learning pathways.", icon: "flask" }
];

export const roleCards = [
  {
    key: "student",
    title: "Student",
    desc: "Programs, clubs, campus life, and placements support.",
    imageKey: "campusLife",
    links: [
      { label: "Explore Campus Life", to: "/campus-placements#campus" },
      { label: "View Placement Support", to: "/campus-placements#placements" },
      { label: "Find Your Program", to: "/programs" }
    ]
  },
  {
    key: "parent",
    title: "Parent",
    desc: "Admissions clarity, process timeline, and FAQs.",
    imageKey: "admissions",
    links: [
      { label: "KIITEE 2026 Overview", to: "/admissions#kiitee" },
      { label: "Important Dates", to: "/admissions#dates" },
      { label: "Admission Process", to: "/admissions#process" }
    ]
  },
  {
    key: "international",
    title: "International Applicant",
    desc: "Global learning environment and application guidance.",
    imageKey: "international",
    links: [
      { label: "Apply", to: "/admissions#apply" },
      { label: "Programs", to: "/programs" },
      { label: "Global Exposure", to: "/campus-placements#campus" }
    ]
  },
  {
    key: "recruiter",
    title: "Recruiter",
    desc: "Connect with the placement ecosystem and support.",
    imageKey: "placements",
    links: [
      { label: "Recruiter Network", to: "/campus-placements#recruiters" },
      { label: "Career Readiness", to: "/campus-placements#placements" },
      { label: "Contact", to: "/campus-placements#contact" }
    ]
  },
  {
    key: "alumni",
    title: "Alumni",
    desc: "Community, mentoring, and campus connection.",
    imageKey: "library",
    links: [
      { label: "Campus Updates", to: "/campus-placements#news" },
      { label: "Explore Academics", to: "/programs" },
      { label: "Contact", to: "/campus-placements#contact" }
    ]
  }
];

export const recognitionCards = [
  {
    title: "Ranking & Recognition",
    items: ["Recognition highlights", "Outcome-focused academics", "Student experience emphasis"],
    tone: "neutral"
  },
  {
    title: "Accreditation Highlights",
    items: ["NAAC A++ Accredited", "Quality-focused learning", "Structured student support"],
    tone: "neutral"
  },
  {
    title: "Global Learning Environment",
    items: ["Collaboration pathways", "Cross-cultural campus", "International exposure"],
    tone: "neutral"
  },
  {
    title: "Research and Innovation Focus",
    items: ["Labs and studios", "Innovation culture", "Interdisciplinary learning"],
    tone: "neutral"
  }
];

export const homeNews = [
  {
    id: "news-1",
    category: "Admissions",
    date: "KIITEE 2026",
    title: "KIITEE 2026: A clearer admissions pathway",
    excerpt: "Process timeline, eligibility guidance, and a clean Apply Now journey."
  },
  {
    id: "news-2",
    category: "Campus",
    date: "Campus & Careers",
    title: "Campus life: clubs, sports, and innovation",
    excerpt: "Discover campus highlights via image cards and clean section hierarchy."
  },
  {
    id: "news-3",
    category: "Academics",
    date: "Programs",
    title: "Find your program with better filtering",
    excerpt: "Search + category chips across key academic areas."
  }
];

export const programsPage = {
  heroTitle: "Find Your Program",
  heroSubtitle: "Search and filter across academic areas with a KIIT-inspired, clarity-first UI.",
  categories: [
    "Engineering",
    "Computer Applications",
    "Management",
    "Law",
    "Biotechnology",
    "Medical Sciences",
    "Design",
    "Humanities"
  ],
  note:
    "Explore programs by category. For the official catalog and latest updates, refer to KIIT’s official website."
};

export const programList = [
  { name: "B.Tech - Computer Science & Engineering", category: "Engineering", school: "School of Engineering" },
  { name: "B.Tech - Electronics & Communication", category: "Engineering", school: "School of Engineering" },
  { name: "B.Tech - Mechanical Engineering", category: "Engineering", school: "School of Engineering" },
  { name: "BCA - Computer Applications", category: "Computer Applications", school: "School of Computer Applications" },
  { name: "MCA - Application Development", category: "Computer Applications", school: "School of Computer Applications" },
  { name: "MBA - Business & Analytics", category: "Management", school: "School of Management" },
  { name: "BBA - Business Administration", category: "Management", school: "School of Management" },
  { name: "B.A. LL.B (Hons.)", category: "Law", school: "School of Law" },
  { name: "BBA LL.B (Hons.)", category: "Law", school: "School of Law" },
  { name: "B.Sc - Biotechnology", category: "Biotechnology", school: "School of Biotechnology" },
  { name: "B.Sc - Medical Laboratory Sciences", category: "Medical Sciences", school: "School of Medical Sciences" },
  { name: "B.Des - Interaction Design", category: "Design", school: "School of Design" },
  { name: "B.A - Humanities (Liberal Studies)", category: "Humanities", school: "School of Humanities" }
];

export const schools = [
  { title: "School of Engineering", desc: "Core engineering with labs, projects, and industry-facing learning.", tags: ["Labs", "Projects", "Innovation"] },
  { title: "School of Computer Applications", desc: "Application development with product thinking and modern stacks.", tags: ["Full-stack", "Capstone", "Career prep"] },
  { title: "School of Management", desc: "Leadership and analytics with casework and mentorship.", tags: ["Casework", "Mentorship", "Industry"] },
  { title: "School of Law", desc: "Mooting, clinics, and contemporary electives with practical training.", tags: ["Moot court", "Clinics", "Research"] },
  { title: "School of Medical Sciences", desc: "Healthcare education with structured learning and facilities overview.", tags: ["Facilities", "Learning", "Support"] },
  { title: "School of Design", desc: "Studio culture with portfolio-ready projects and UX practice.", tags: ["Studio", "Portfolio", "UX"] }
];

export const admissionsPage = {
  hero: {
    headline: "Admissions Open for KIITEE 2026",
    subhead: "A focused, step-by-step admissions experience with clearer information hierarchy."
  },
  kiiteeCards: [
    { title: "KIITEE 2026 at a glance", body: "Key steps, guidance, and accessibility-first UI patterns." },
    { title: "Process-first layout", body: "Scan the timeline, check eligibility guidance, and review important dates." },
    { title: "Official updates", body: "For verified dates and requirements, refer to KIIT's official communications." }
  ],
  timeline: [
    { title: "Register", desc: "Create your applicant profile." },
    { title: "Fill Application", desc: "Choose programs and complete the form." },
    { title: "Slot Booking", desc: "Select an exam slot (where applicable)." },
    { title: "Entrance Test", desc: "Take the entrance test (where applicable)." },
    { title: "Counselling", desc: "Document verification and allocation process." },
    { title: "Admission", desc: "Confirm and onboard." }
  ],
  eligibility: [
    { title: "Undergraduate", body: "10+2 or equivalent (program-specific criteria may apply)." },
    { title: "Postgraduate", body: "Bachelor's degree in a relevant discipline (program-specific criteria may apply)." },
    { title: "International", body: "Equivalent qualification with required documentation (as applicable)." }
  ],
  dates: [
    { label: "Registration", value: "Refer official admissions schedule on kiit.ac.in" },
    { label: "Application", value: "Refer official admissions schedule on kiit.ac.in" },
    { label: "Test window", value: "Refer official admissions schedule on kiit.ac.in" },
    { label: "Counselling", value: "Refer official admissions schedule on kiit.ac.in" }
  ],
  faqs: [
    {
      q: "Where can I find dates and requirements?",
      a: "Refer to KIIT’s official communications and kiit.ac.in for the latest updates."
    },
    {
      q: "How do I apply for KIITEE 2026?",
      a: "Use the Apply Now section and follow the step-by-step process timeline."
    },
    {
      q: "What if I need assistance?",
      a: "Use the Quick Help widget for shortcuts, and refer to kiit.ac.in for official contact channels."
    }
  ]
};

export const campusPage = {
  hero: {
    headline: "Campus & Careers",
    subhead: "Campus life highlights and career readiness pathways in a cleaner, more organized layout."
  },
  lifeCards: [
    { title: "Sports Complexes", desc: "Facilities, events, and wellness-first student life.", imageKey: "sports" },
    { title: "Hostels", desc: "Comfort-first living and student support environment.", imageKey: "hostel" },
    { title: "Research Labs", desc: "Labs and collaborative spaces for hands-on learning.", imageKey: "researchLab" },
    { title: "Innovation Studios", desc: "Build culture, prototyping, and student-led innovation.", imageKey: "innovation" },
    { title: "Clubs", desc: "Culture, tech, arts, and community-driven student clubs.", imageKey: "campusLife" },
    { title: "Global Exposure", desc: "Exchange and collaboration pathways surfaced clearly.", imageKey: "international" }
  ],
  placements: [
    { title: "Recruiter Network", desc: "Industry interface via logo-style tiles." },
    { title: "Placement Support", desc: "Guidance, mentoring, and interview preparation pathways." },
    { title: "Career Readiness", desc: "Workshops, projects, and communication skill support." },
    { title: "Pre-placement Training", desc: "Structured training experiences and practice rounds." }
  ],
  recruiterTiles: [
    "Technology",
    "Consulting",
    "Analytics",
    "Finance",
    "Healthcare",
    "Manufacturing",
    "Design",
    "Research"
  ],
  updates: [
    { id: "u1", type: "Event", title: "Campus visit and guided tour sessions", month: "Ongoing", year: "" },
    { id: "u2", type: "News", title: "Innovation studio showcase: student projects", month: "Update", year: "" },
    { id: "u3", type: "Event", title: "Career readiness workshops and sessions", month: "Update", year: "" },
    { id: "u4", type: "News", title: "Research highlights: labs and collaborations", month: "Update", year: "" }
  ]
};

export const quickHelp = {
  title: "Quick Help",
  desc: "Shortcuts to admissions, campus life, and contact sections.",
  items: [
    { title: "Admissions Helpline", subtitle: "Refer official KIIT channels", to: "/admissions#apply" },
    { title: "Campus & Careers", subtitle: "Campus life and career support", to: "/campus-placements" },
    { title: "Contact & Quick Help", subtitle: "Contact section", to: "/campus-placements#contact" }
  ],
  actions: [
    { label: "Request Callback", kind: "button" }
  ]
};
