// Modern 2026 Bento Grid + Blue Glassmorphism Interactive Portfolio
// Crisp Vector SVG Icons (Lucide / Heroicons Standard — No AI Emojis)
const SVG_ICONS = {
  layers: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  terminal: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  database: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  cpu: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
  sliders: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
  grid: `<svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>`,
  globe: `<svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  building: `<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
  mapPin: `<svg class="w-3.5 h-3.5 shrink-0 inline-block text-blue-500 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  calendar: `<svg class="w-3.5 h-3.5 shrink-0 inline-block text-blue-500 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  moon: `<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  sun: `<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  download: `<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  fileText: `<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  lock: `<svg class="w-3 h-3 shrink-0 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  maximize: `<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`,
};

const PROFILE_DATA = {
  name: "Adhitya Fajar Rachmadi",
  degree: "S.T.",
  primaryTitle: "Middleware Engineer & IT Programmer",
  secondaryTitle: "IT & Business Analyst (Dedicated @ Zurich Indonesia)",
  statusBadge: "PT Care Technologies (Middleware R&D) • Dedicated to Zurich Indonesia (IT & Business Analyst)",
  aboutShort:
    " Middleware & Enterprise Integration Engineer with a Cum Laude Electrical Engineering background (3.80/4.00) and Top 1 MVP AI/ML track record. Currently serving as an IT Programmer in the Middleware R&D Department at PT Care Technologies, dedicated full-time to Zurich Indonesia's IT & Business Analyst team.",
  location: "Jakarta, Indonesia",
  email: "rachmadiadhityafajar@gmail.com",
  phone: "+62 823-1313-6526",
  whatsappUrl: "https://wa.me/6282313136526",
  linkedinUrl: "https://www.linkedin.com/in/adhitya-fajar-rachmadi/",
  githubUrl: "https://github.com/adhitrajaf",
  portfolioPdfUrl: "/files/Portfolio_Adhitya_Fajar_Rachmadi.pdf",
  cvUrl: "/files/CV_Adhitya_Fajar_Rachmadi.pdf",
  profilePhoto: "/assets/profile-adhit.png?v=hd6",
  heroStats: [
    {
      value: "Dual Role",
      label: "Middleware R&D & Enterprise IT/BA",
      detail: "Care Technologies × Zurich Indonesia",
      accent: "from-blue-500 to-cyan-400",
      logo: "/assets/logos/logo-care-full.png",
      secondaryLogo: "/assets/logos/logo-zurich.svg",
      logoAlt: "PT Care Technologies × Zurich Indonesia",
      expandedText: "IT Programmer in Middleware R&D Department at PT Care Technologies & Dedicated IT and Business Analyst at Zurich Indonesia (Sept 2026 – Present)."
    },
    {
      value: "3.80 / 4.00",
      label: "Cum Laude S.T. Engineering",
      detail: "Highest GPA Graduate • UNS (2024)",
      accent: "from-indigo-500 to-blue-400",
      logo: "/assets/logos/logo-uns.png",
      logoAlt: "Universitas Sebelas Maret (UNS)",
      expandedText: "Awarded Highest GPA Accomplishment in Electrical Engineering (Control, PLC/DCS & Industrial Automation) at Universitas Sebelas Maret."
    },
    {
      value: "Top 1 MVP",
      label: "Bootcamp Dibimbing.id",
      detail: "97.93/100 Score • AI/ML Batch 6",
      accent: "from-cyan-500 to-blue-500",
      logo: "/assets/logos/logo-dibimbing-icon.png",
      logoAlt: "Dibimbing.id",
      expandedText: "Ranked #1 Most Valuable Person (MVP) at Dibimbing.id AI/ML Bootcamp Batch 6 (Grade A+, 97.93/100) with production RAG & Computer Vision deployments."
    },
    {
      value: "597 / C1",
      label: "English Proficiency",
      detail: "TOEFL 597 • EF SET C1 Advanced",
      accent: "from-blue-600 to-indigo-500",
      logo: "/assets/logos/logo-efset.png",
      logoAlt: "EF SET Certified",
      expandedText: "Certified C1 Advanced (61/100, C2 Reading 77 & C2 Writing 79) by EF SET and 597 Institutional TOEFL for multinational enterprise collaboration."
    },
  ],
};

const FOCUS_PILLARS = [
  {
    id: "middleware",
    badge: "Primary Focus • 01",
    title: "Middleware R&D Engineering",
    org: "PT Care Technologies — Middleware R&D Dept",
    description:
      "Architecting and maintaining enterprise middleware services, REST/SOAP APIs, and relational SQL Server data pipelines using C#, Visual Basic (VB.NET), PHP (Laravel), and JavaScript.",
    tags: ["C# (.NET)", "Visual Basic", "PHP Laravel", "SQL Server (SSMS)", "REST & SOAP API", "Postman"],
  },
  {
    id: "zurich",
    badge: "Client Assignment • 02",
    title: "Enterprise IT & Business Analysis",
    org: "Dedicated to Zurich Indonesia — IT & BA Team",
    description:
      "Bridging complex enterprise insurance business workflows with resilient middleware architectures, API data contracts, system integration analysis, and end-to-end SIT/UAT validation.",
    tags: ["Zurich Indonesia", "IT & Business Analysis", "Enterprise Integration", "API Contracts", "System Validation"],
  },
  {
    id: "ai-bonus",
    badge: "Bonus Capability • 03",
    title: "Production AI & ML Engineering",
    org: "Top 1 MVP Graduate — Bootcamp Dibimbing.id (97.93/100)",
    description:
      "Proven capability in building production-grade RAG Agentic Chatbots (AWS Bedrock + Qdrant, 95%+ precision), OCR pipelines (-70% manual effort), and LSTM forecasting engines.",
    tags: ["AWS Bedrock", "Qdrant RAG", "LangChain", "FastAPI", "YOLOv8", "PyTorch / TensorFlow"],
  },
];

const EXPERIENCES = [
  {
    id: "zurich-indonesia",
    role: "IT & Business Analyst (Dedicated Middleware Specialist)",
    company: "Zurich Indonesia",
    departmentOrTeam: "IT and Business Analyst Team",
    clientBadge: "Dedicated via PT Care Technologies",
    period: "Sept 2026 – Present",
    location: "Jakarta, Indonesia",
    category: "middleware",
    isCurrent: true,
    summary:
      "Assigned full-time to Zurich Indonesia's IT and Business Analyst team, bridging enterprise insurance business workflows with reliable middleware services and cross-system integrations.",
    highlights: [
      "Collaborate within the IT & Business Analyst division to translate enterprise insurance business requirements into structured technical specifications, API data contracts, and middleware workflows.",
      "Analyze end-to-end data flows and system integration touchpoints across core enterprise applications to ensure seamless interoperability and high availability.",
      "Facilitate API contract validation, system integration testing (SIT), user acceptance testing (UAT), and technical documentation between business stakeholders and engineering teams.",
      "Query, inspect, and validate transactional data integrity across enterprise databases using SQL Server Management Studio (SSMS) and Postman API test suites.",
    ],
    techStack: ["SQL Server (SSMS)", "REST & SOAP API", "Postman", "C# / .NET", "Visual Basic", "Enterprise Integration", "SIT / UAT & BA"],
    metrics: [
      { label: "Assignment", value: "Zurich Indonesia" },
      { label: "Division", value: "IT & Business Analyst" },
      { label: "Focus", value: "Enterprise Integration" },
    ],
  },
  {
    id: "care-technologies",
    role: "IT Programmer",
    company: "PT Care Technologies",
    departmentOrTeam: "Middleware Research and Development (R&D) Department",
    clientBadge: "Core Engineering Employer",
    period: "Sept 2026 – Present",
    location: "Jakarta, Indonesia",
    category: "middleware",
    isCurrent: true,
    summary:
      "Core member of the Middleware Research and Development (R&D) Department responsible for engineering, modernizing, and maintaining enterprise middleware connectors, backend APIs, and database services.",
    highlights: [
      "Develop, maintain, and optimize enterprise middleware services and backend integration modules within the Middleware R&D Department using C#, Visual Basic (VB.NET), PHP (Laravel), and JavaScript.",
      "Design and implement RESTful and SOAP API layers that synchronize high-volume transactional data between client-facing applications and core enterprise systems.",
      "Write, debug, and optimize complex relational queries, stored procedures, and schema mappings in Microsoft SQL Server Management Studio (SSMS).",
      "Execute automated and manual API endpoint testing, payload validation, and error-handling diagnostics using Postman.",
    ],
    techStack: ["C#", "Visual Basic (VB.NET)", "JavaScript", "PHP", "Laravel", "SQL Server (SSMS)", "REST API", "Postman"],
    metrics: [
      { label: "Department", value: "Middleware R&D" },
      { label: "Core Stack", value: "C# • VB • Laravel • JS" },
      { label: "Database & API", value: "SSMS & Postman" },
    ],
  },
  {
    id: "artha-infotama",
    role: "AI Engineer",
    company: "PT Artha Infotama",
    departmentOrTeam: "Enterprise Generative AI, RAG & Document Intelligence",
    clientBadge: "Enterprise AI Engineering",
    period: "Jan 2026 – Mar 2026",
    location: "Jakarta, Indonesia",
    category: "ai",
    isCurrent: false,
    summary:
      "Architected production-grade RAG-powered agentic chatbots, unstructured document extraction pipelines, and LLM tool-use frameworks integrated with internal enterprise APIs.",
    highlights: [
      "Architected a RAG-powered agentic chatbot using AWS Bedrock and Qdrant, achieving 95%+ retrieval accuracy for semantic search across 1M+ documents.",
      "Developed production-grade pipelines (Face Recognition, PaddleOCR, Donut KIE) to automate unstructured data extraction, reducing manual processing by 70%.",
      "Engineered an LLM framework utilizing advanced Tool-Use (Function Calling) to integrate internal APIs, boosting operational efficiency by 40%.",
    ],
    techStack: ["Python", "AWS Bedrock", "Qdrant Vector DB", "LangChain (Tool-Use / Function Calling)", "PaddleOCR", "Donut KIE", "Face Recognition", "FastAPI"],
    metrics: [
      { label: "Semantic Search", value: "95%+ Accuracy (1M+ Docs)" },
      { label: "Manual Processing", value: "-70% via OCR & Donut KIE" },
      { label: "Operational Efficiency", value: "+40% via LLM Tool-Use" },
    ],
  },
  {
    id: "pharos-iot",
    role: "Electrical and IoT Specialist (Internship MSIB Batch 5)",
    company: "PT Inti Utama Solusindo (Pharos Group)",
    departmentOrTeam: "Industrial Automation, PLC Control & Computer Vision",
    clientBadge: "Outstanding Internship Student",
    period: "Aug 2023 – Jan 2024",
    location: "Jakarta, Indonesia",
    category: "engineering",
    isCurrent: false,
    summary:
      "Designed and implemented industrial IoT air pressure balancing systems, Siemens PLC machinery control, C++ to Python framework migrations, and YOLOv8 computer vision quality control.",
    highlights: [
      "Designed and implemented an air pressure balancing system for a 27-room factory, collecting real-time data to ensure consistent and safe air quality for personnel across all areas.",
      "Leveraged Siemens PLCs to enhance the precision and control of heavy machinery, interfacing with industrial-grade sensors to automate complex movements and improve operational efficiency.",
      "Integrated industrial-grade sensors with Arduino Uno microcontrollers for various IoT projects, enabling accurate data acquisition and control for applications such as fire monitoring and air balancing systems.",
      "Converted C++ codebase to Python, utilizing company-developed frameworks, resulting in improved code readability, maintainability, and streamlined workflows for the database management team.",
      "Developed a computer vision system using YOLOv8 to automate the sorting of empty tablet containers, preventing them from being packaged and minimizing product returns due to defects.",
      "Integrated the computer vision system with a pneumatic-hydraulic sorting mechanism to automate the quality control process, improving production efficiency and reducing manual labor.",
    ],
    techStack: ["Python", "C++", "YOLOv8", "Siemens PLC", "Arduino Uno", "Pneumatic-Hydraulic Control", "Industrial IoT"],
    metrics: [
      { label: "Factory Coverage", value: "27-Room Air Balancing" },
      { label: "Quality Control", value: "YOLOv8 Automated Sorting" },
      { label: "Recognition", value: "Outstanding Intern Award" },
    ],
  },
  {
    id: "migas-cepu",
    role: "Instrument Internship",
    company: "PPSDM Migas Cepu",
    departmentOrTeam: "Boiler Plant Control & PLC–DCS OPC UA Integration",
    clientBadge: "Allen-Bradley & Yokogawa DCS",
    period: "Jan 2023 – Feb 2023",
    location: "Cepu, Central Java, Indonesia",
    category: "engineering",
    isCurrent: false,
    summary:
      "Developed Allen-Bradley ControlLogix PLC programs integrated with Yokogawa Centum VP DCS via OPC UA protocols for comprehensive boiler plant control and real-time HMI visualization.",
    highlights: [
      "Developed and implemented PLC programs using Allen-Bradley ControlLogix PLCs, focusing on seamless integration with the Yokogawa Centum VP DCS for comprehensive boiler plant control via OPC UA real-time data exchange.",
      "Configured and optimized Yokogawa Centum VP DCS for enhanced boiler plant management, developing custom HMI screens to provide operators with real-time process visualization and improved control capabilities.",
      "Gained practical experience in calibrating and maintaining various sensors and instrumentation used in boiler plant operations, ensuring accurate measurements and compatibility with PLC-DCS communication protocols.",
    ],
    techStack: ["Allen-Bradley ControlLogix PLC", "Yokogawa Centum VP DCS", "OPC UA Protocol", "Custom HMI Screens", "Boiler Instrumentation"],
    metrics: [
      { label: "PLC & DCS Stack", value: "ControlLogix × Centum VP" },
      { label: "Integration Protocol", value: "OPC UA Real-Time Telemetry" },
    ],
  },
];

const SKILLS = [
  // 1. Middleware, Backend & API (PRIMARY FOCUS)
  {
    name: "C# (.NET)",
    category: "middleware",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    roleUsage: "Enterprise middleware services, object-oriented backend logic & system connectors at Care Technologies.",
    highlight: true,
  },
  {
    name: "Visual Basic (VB.NET)",
    category: "middleware",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg",
    roleUsage: "Enterprise legacy & core middleware application maintenance, R&D modules, and business logic integration.",
    highlight: true,
  },
  {
    name: "JavaScript",
    category: "middleware",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    roleUsage: "Interactive web interfaces, asynchronous API payload handling, and full-stack dashboard integration.",
    highlight: true,
  },
  {
    name: "PHP",
    category: "middleware",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    roleUsage: "Server-side web application development and middleware API scripting.",
    highlight: true,
  },
  {
    name: "Laravel",
    category: "middleware",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    roleUsage: "Modern MVC backend architecture, RESTful routing, middleware pipelines, and enterprise web services.",
    highlight: true,
  },
  {
    name: "Postman",
    category: "middleware",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    roleUsage: "Comprehensive REST/SOAP API testing, automated collection runs, payload validation & integration debugging.",
    highlight: true,
  },
  {
    name: "REST & SOAP API",
    category: "middleware",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg",
    roleUsage: "Designing API contracts, JSON/XML transformations, and cross-system enterprise middleware orchestration.",
    highlight: true,
  },
  {
    name: "Python",
    category: "middleware",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    roleUsage: "Backend microservices, automation scripts, data pipelines, and AI/ML model serving.",
    highlight: true,
  },
  {
    name: "FastAPI",
    category: "middleware",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    roleUsage: "High-performance asynchronous Python REST APIs for orchestrating enterprise services and AI models.",
    highlight: true,
  },
  {
    name: "Flask",
    category: "middleware",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    roleUsage: "Lightweight web services, internal operational dashboards, and microservice endpoints.",
  },
  {
    name: "C++",
    category: "middleware",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    roleUsage: "High-efficiency systems programming, embedded firmware, and legacy industrial codebase modernization.",
  },

  // 2. Database, Cloud & DevOps
  {
    name: "SQL Server (SSMS)",
    category: "database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    roleUsage: "Enterprise database administration, complex joins, stored procedures, triggers & data analysis in SSMS.",
    highlight: true,
  },
  {
    name: "SQL",
    category: "database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    roleUsage: "Relational data modeling, query optimization, and transactional consistency across enterprise systems.",
    highlight: true,
  },
  {
    name: "Docker",
    category: "database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    roleUsage: "Containerizing backend services, middleware environments, and reproducible deployment pipelines.",
    highlight: true,
  },
  {
    name: "Git",
    category: "database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    roleUsage: "Version control, collaborative branching workflows, and CI/CD repository management.",
  },
  {
    name: "Amazon Bedrock",
    category: "database",
    logo: "/assets/skills-pdf/p4_34_X49.png?v=hd3",
    roleUsage: "Enterprise cloud foundation models and managed generative AI infrastructure on AWS.",
    highlight: true,
  },
  {
    name: "Qdrant Vector DB",
    category: "database",
    logo: "/assets/skills-pdf/p4_35_X50.png?v=hd3",
    roleUsage: "High-speed semantic vector search across 1M+ enterprise documents with 95%+ precision.",
    highlight: true,
  },
  {
    name: "Looker Studio",
    category: "database",
    logo: "/assets/skills-pdf/p4_10_X24.png?v=hd3",
    roleUsage: "Executive business intelligence dashboards and operational KPI visualization.",
  },
  {
    name: "Tableau",
    category: "database",
    logo: "/assets/skills-pdf/p4_17_X31.png?v=hd3",
    roleUsage: "Interactive visual analytics and enterprise data storytelling.",
  },

  // 3. AI, Machine Learning & Data Science (BONUS SUPERPOWER)
  {
    name: "PyTorch",
    category: "aiml",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    roleUsage: "Deep learning architectures, transformer fine-tuning, and computer vision pipelines.",
    highlight: true,
  },
  {
    name: "TensorFlow",
    category: "aiml",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    roleUsage: "Multi-layer LSTM time-series forecasting models and production neural networks.",
    highlight: true,
  },
  {
    name: "LangChain",
    category: "aiml",
    logo: "/assets/skills-pdf/p4_04_X18.png?v=hd3",
    roleUsage: "Agentic tool-calling workflows, multi-step RAG chains, and enterprise LLM orchestration.",
    highlight: true,
  },
  {
    name: "OpenAI API",
    category: "aiml",
    logo: "/assets/skills-pdf/p4_36_X51.png?v=hd3",
    roleUsage: "Function calling, structured output extraction, and conversational agent intelligence.",
  },
  {
    name: "Hugging Face",
    category: "aiml",
    logo: "/assets/skills-pdf/p4_06_X20.png?v=hd3",
    roleUsage: "Open-weights transformer models, embeddings, and Donut KIE document understanding.",
  },
  {
    name: "YOLOv8",
    category: "aiml",
    logo: "/assets/skills-pdf/p4_38_X53.png?v=hd3",
    roleUsage: "Real-time industrial object detection for automated pharmaceutical tablet container sorting.",
    highlight: true,
  },
  {
    name: "OpenCV",
    category: "aiml",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
    roleUsage: "Image preprocessing, face recognition pipelines, and real-time camera stream analysis.",
  },
  {
    name: "PaddleOCR",
    category: "aiml",
    logo: "/assets/skills-pdf/p4_37_X52.png?v=hd3",
    roleUsage: "Automated optical character recognition cutting manual document entry by 70%.",
  },
  {
    name: "Scikit-Learn",
    category: "aiml",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    roleUsage: "Classical machine learning, classification, regression, clustering, and evaluation pipelines.",
  },
  {
    name: "Keras",
    category: "aiml",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg",
    roleUsage: "Rapid prototyping and training of deep sequential neural networks.",
  },
  {
    name: "Pandas",
    category: "aiml",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    roleUsage: "High-speed tabular data manipulation, ETL cleaning, and financial time-series feature engineering.",
  },
  {
    name: "NumPy",
    category: "aiml",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
    roleUsage: "Vectorized numerical computation and matrix operations.",
  },
  {
    name: "PySpark",
    category: "aiml",
    logo: "/assets/skills-pdf/p4_14_X28.png?v=hd3",
    roleUsage: "Distributed big-data processing and scalable analytical transformations.",
  },
  {
    name: "Streamlit",
    category: "aiml",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
    roleUsage: "Interactive analytical web apps and real-time AI trading dashboards.",
  },
  {
    name: "Matplotlib & Seaborn",
    category: "aiml",
    logo: "/assets/skills-pdf/p4_15_X29.png?v=hd3",
    roleUsage: "Statistical data visualization, exploratory data analysis, and model evaluation plots.",
  },
  {
    name: "Jupyter & Colab",
    category: "aiml",
    logo: "/assets/skills-pdf/p4_21_X35.png?v=hd3",
    roleUsage: "Interactive notebook experimentation, GPU model training, and reproducible research.",
  },

  // 4. Electrical Engineering, PLC/DCS & Industrial IoT
  {
    name: "Siemens PLC",
    category: "industrial",
    logo: "/assets/skills-pdf/p4_24_X38.png?v=hd3",
    roleUsage: "Industrial machinery automation and precision sensor control in manufacturing plants.",
  },
  {
    name: "Allen-Bradley PLC",
    category: "industrial",
    logo: "/assets/skills-pdf/p4_25_X39.png?v=hd3",
    roleUsage: "ControlLogix PLC programming integrated with boiler plant DCS via OPC UA.",
  },
  {
    name: "Yokogawa Centum VP",
    category: "industrial",
    logo: "/assets/skills-pdf/p4_27_X41.png?v=hd3",
    roleUsage: "Distributed Control System (DCS) configuration and custom operator HMI screen design.",
  },
  {
    name: "Omron PLC",
    category: "industrial",
    logo: "/assets/skills-pdf/p4_26_X40.png?v=hd3",
    roleUsage: "Industrial logic control and automated manufacturing sequence programming.",
  },
  {
    name: "Arduino",
    category: "industrial",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
    roleUsage: "Microcontroller sensor integration for 27-room factory air pressure balancing & fire monitoring.",
  },
  {
    name: "Raspberry Pi",
    category: "industrial",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg",
    roleUsage: "Edge IoT gateway computing and embedded Linux automation.",
  },
  {
    name: "MATLAB",
    category: "industrial",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg",
    roleUsage: "Control systems simulation, signal processing, and mathematical modeling.",
  },
  {
    name: "EAGLE PCB",
    category: "industrial",
    logo: "/assets/skills-pdf/p4_30_X44.png?v=hd3",
    roleUsage: "Schematic capture and printed circuit board layout for custom IoT hardware.",
  },
  {
    name: "EasyEDA",
    category: "industrial",
    logo: "/assets/skills-pdf/p4_31_X45.png?v=hd3",
    roleUsage: "Electronic circuit design and hardware prototyping for embedded systems.",
  },
];

const CASE_STUDIES = [
  {
    id: "smart-assist-chatbot",
    title: "SmartAssist — Enterprise Agentic RAG & BI Middleware",
    subtitle: "Full-Stack Document Intelligence, LLM Function Calling & Executive Reporting",
    category: "Enterprise Middleware & Applied AI",
    featuredBadge: "Production System • PT Artha Infotama",
    urlDisplay: "http://127.0.0.1:5000 • RachmadiOperation Dashboard",
    metrics: [
      { label: "Retrieval Precision", value: "95%+ (1M+ Docs)" },
      { label: "Operational Efficiency", value: "+40% Tool-Use" },
      { label: "Manual Data Entry", value: "-70% via OCR" },
    ],
    techStack: ["Python", "FastAPI", "AWS Bedrock", "Qdrant Vector DB", "PaddleOCR & Donut KIE", "Docker", "LLM Tool-Use"],
    githubUrl: "https://github.com/adhitrajaf",
    slides: [
      {
        title: "Slide 1: System Overview & Enterprise Integration",
        badge: "01 / Architecture Overview",
        description: "SmartAssist bridges unstructured enterprise documents (PDF, DOCX, XLSX) with real-time executive decision-making through an asynchronous FastAPI middleware layer, AWS Bedrock LLM reasoning, and Qdrant Vector DB.",
        bullets: [
          "Designed asynchronous FastAPI endpoints to orchestrate multi-format document ingestion, vector indexing, and conversational querying.",
          "Integrated AWS Bedrock foundation models with Qdrant Vector Database for high-precision semantic retrieval (95%+ accuracy).",
          "Containerized the entire backend and UI stack with Docker for reproducible deployment and horizontal scalability.",
        ],
        image: "/assets/projects/p13_X96.png?v=hd3",
      },
      {
        title: "Slide 2: Multi-Format PDF Ingestion & Semantic RAG",
        badge: "02 / Document Pipeline",
        description: "Automated OCR and chunking pipeline that ingests complex enterprise PDFs and answers natural-language queries with grounded citations.",
        bullets: [
          "Engineered automated OCR extraction (Tesseract & EasyOCR) to parse scanned PDFs and complex multi-column tables, cutting manual entry by 70%.",
          "Implemented hybrid semantic + keyword search in Qdrant to ensure zero-hallucination responses grounded in source documents.",
        ],
        image: "/assets/projects/p14_X99.png?v=hd3",
        secondaryImage: "/assets/projects/p14_X98.png?v=hd3",
      },
      {
        title: "Slide 3: Automated Excel Analytics & BI Dashboard",
        badge: "03 / Executive BI Dashboard",
        description: "Direct ingestion of enterprise Excel spreadsheets with automated KPI extraction, interactive charting, and token cost telemetry.",
        bullets: [
          "Built a real-time executive dashboard that transforms raw Excel workbooks into interactive visual charts and summary tables.",
          "Added real-time LLM token usage and latency tracking to monitor operational cost and API throughput.",
        ],
        image: "/assets/projects/p15_X102.png?v=hd3",
        secondaryImage: "/assets/projects/p15_X103.png?v=hd3",
      },
      {
        title: "Slide 4: Automated Chart-to-PDF Report Generation",
        badge: "04 / Automated Reporting",
        description: "One-click generation of executive PDF reports synthesized directly from chatbot table outputs and visual charts.",
        bullets: [
          "Developed a custom PDF report generator that compiles conversational tables, AI insights, and charts into downloadable executive briefs.",
          "Reduced manual reporting preparation time by 60% for business analysts and operations teams.",
        ],
        image: "/assets/projects/p16_X107.png?v=hd3",
        secondaryImage: "/assets/projects/p16_X106.png?v=hd3",
      },
    ],
  },
  {
    id: "ai-trading-system",
    title: "AI Trading Systems — Stock Advisor & Risk Management Engine",
    subtitle: "Multi-Layer LSTM Forecasting, FastAPI Microservice & Interactive Plotly Terminal for IDX",
    category: "Full-Stack AI System & API Architecture",
    featuredBadge: "Main Project • AI/ML Bootcamp",
    urlDisplay: "https://github.com/adhitrajaf/AI-TRADING-SYSTEM",
    metrics: [
      { label: "Model Win Rate", value: "64.5%" },
      { label: "Forecast Error", value: "3.43% MAPE" },
      { label: "Baseline Beat", value: "vs 5.22% MAPE" },
    ],
    techStack: ["Python", "FastAPI", "TensorFlow / Keras (LSTM)", "Pandas & NumPy", "Yahoo Finance API", "Docker", "Streamlit", "Plotly"],
    githubUrl: "https://github.com/adhitrajaf/AI-TRADING-SYSTEM",
    slides: [
      {
        title: "Slide 1: Executive Overview & Problem Statement",
        badge: "01 / Problem & Impact",
        description: "Indonesian capital market (IDX) retail investors struggle with high volatility and emotional decision-making. This full-stack system combines deep learning forecasting with automated risk management.",
        bullets: [
          "Integrates real-time Yahoo Finance API data streams for top Indonesian equities (BBCA, BBRI, BMRI, TLKM, ASII).",
          "Combines predictive price forecasting with strict position sizing and stop-loss/take-profit risk rules.",
        ],
        image: "/assets/projects/p7_X76.png?v=hd3",
        secondaryImage: "/assets/projects/p8_X79.png?v=hd3",
      },
      {
        title: "Slide 2: Containerized FastAPI Microservice Architecture",
        badge: "02 / System Architecture",
        description: "Decoupled client-server architecture where a FastAPI orchestrator handles Yahoo Finance API ingestion, Pandas in-memory processing, LSTM inference, and JSON API responses.",
        bullets: [
          "FastAPI Service Orchestrator exposes clean REST JSON endpoints consumed by the Streamlit + Plotly frontend.",
          "Fully containerized inside Docker for consistent deployment across local and cloud environments.",
        ],
        image: "/assets/projects/p10_X84.png?v=hd3",
      },
      {
        title: "Slide 3: End-to-End Decision & Risk Workflow",
        badge: "03 / System Workflow",
        description: "Automated pipeline from stock ticker selection to feature engineering, multi-layer LSTM inference, BUY/SELL/HOLD signal classification, and dynamic risk sizing.",
        bullets: [
          "Multi-layer LSTM with Dropout & Batch Normalization trained on 2-year historical OHLCV + technical indicators (RSI, MACD, Bollinger Bands).",
          "Outperformed standard baseline models with 3.43% MAPE (vs 5.22% baseline) and a 64.5% directional win rate.",
        ],
        image: "/assets/projects/p11_X87.png?v=hd3",
        secondaryImage: "/assets/projects/p9_X82.png?v=hd3",
      },
      {
        title: "Slide 4: Live Interactive Trading Dashboard & Signals",
        badge: "04 / Production UI (Part 1)",
        description: "Interactive dark-mode terminal displaying real-time candlestick charts, confidence scores, and automated BUY/SELL/HOLD recommendations.",
        bullets: [
          "Displays real-time technical indicator overlays and model confidence intervals via Plotly interactive charts.",
          "Provides transparent reasoning metrics behind every generated trading signal.",
        ],
        image: "/assets/projects/p12_X90.png?v=hd3",
        secondaryImage: "/assets/projects/p12_X91.png?v=hd3",
      },
      {
        title: "Slide 5: Portfolio Risk Calculator & Backtesting Analytics",
        badge: "05 / Production UI (Part 2)",
        description: "Built-in position sizing calculator and historical backtesting simulator to evaluate strategy drawdown and cumulative return.",
        bullets: [
          "Calculates exact lot size, stop-loss threshold, and risk-reward ratio based on user capital and risk tolerance.",
          "Visualizes equity curve performance against IDX composite benchmarks.",
        ],
        image: "/assets/projects/p12_X92.png?v=hd3",
        secondaryImage: "/assets/projects/p12_X93.png?v=hd3",
      },
    ],
  },
];

const OTHER_PROJECTS = [
  {
    id: "rag-indonesia",
    title: "RAG-chatbot-Indonesia",
    category: "NLP & Retrieval-Augmented Generation",
    description: "Developed an advanced RAG (Retrieval-Augmented Generation) chatbot specifically tailored for Indonesian language context.",
    techStack: ["Python", "LangChain", "Vector DB", "Indonesian NLP"],
    githubUrl: "https://github.com/adhitrajaf/RAG-chatbot-Indonesia",
    image: "/assets/projects/p6_X65.png?v=hd2",
  },
  {
    id: "house-price-prediction",
    title: "house-price-prediction",
    category: "Machine Learning Regression",
    description: "Implemented and evaluated various supervised regression models and feature engineering pipelines to predict housing prices accurately.",
    techStack: ["Python", "Scikit-Learn", "Pandas", "Regression Models"],
    githubUrl: "https://github.com/adhitrajaf/house-price-prediction",
    image: "/assets/projects/p6_X66.png?v=hd2",
  },
  {
    id: "smart-shopper",
    title: "smart_shopper",
    category: "AI Recommender System",
    description: "Built a 'Personalized SmartShopper Assistant', demonstrating intelligent product recommendation and user preference modeling.",
    techStack: ["Python", "Recommender System", "Machine Learning", "Jupyter"],
    githubUrl: "https://github.com/adhitrajaf/smart_shopper",
    image: "/assets/projects/p6_X67.png?v=hd2",
  },
  {
    id: "smart-splitbill",
    title: "smart_splitbill",
    category: "Document AI & Donut Transformer",
    description: "Developed a 'SmartSplit Bill AI' application powered by Donut Transformer Model to automatically extract receipts and split bills.",
    techStack: ["Python", "Donut Transformer", "Streamlit", "Document AI"],
    githubUrl: "https://github.com/adhitrajaf/smart_splitbill",
    image: "/assets/projects/p6_X70.png?v=hd2",
  },
  {
    id: "portofolio-streamlit",
    title: "Portofolio-Streamlit",
    category: "Interactive Data Science Dashboard",
    description: "Built an interactive personal Data Science & Machine Learning portfolio dashboard using Python and Streamlit.",
    techStack: ["Python", "Streamlit", "Data Visualization", "UI Dashboard"],
    githubUrl: "https://github.com/adhitrajaf/Portofolio-Streamlit",
    image: "/assets/projects/p6_X68.png?v=hd2",
  },
];

const CERTIFICATIONS = [
  {
    id: "dibimbing-mvp",
    title: "Top 1 Most Valuable Person (MVP) — AI/ML Bootcamp Batch 6",
    issuer: "Dibimbing.id",
    date: "September 2025",
    scoreOrBadge: "Top 1 MVP Graduate",
    description: "Awarded to Adhitya Fajar Rachmadi in recognition of his outstanding record of contribution as Most Valuable Person (Top 1 Rank) in AI Machine Learning Bootcamp Batch 6.",
    image: "/assets/certs/cert-dibimbing-mvp.png?v=hd2",
  },
  {
    id: "dibimbing-completion",
    title: "Certificate of Completion & Exam Pass — AI/ML Bootcamp",
    issuer: "Dibimbing.id",
    date: "April – September 2025",
    scoreOrBadge: "Final Score: 97.93 / 100 (Grade A+)",
    description: "Graduated with an A+ Final Score of 97.93/100 across 15+ intensive modules covering Python, SQL, Machine Learning, Deep Learning, NLP/LLM, and MLOps.",
    image: "/assets/certs/cert-dibimbing-completion.png?v=hd2",
  },
  {
    id: "dibimbing-reportcard",
    title: "Official Academic Transcript & Report Card — AI/ML Batch 6",
    issuer: "Dibimbing.id",
    date: "September 2025",
    scoreOrBadge: "Concept Test: 99.75 • Project: 96.00",
    description: "Detailed evaluation report card highlighting 99.75/100 on Concept Test, 96.00/100 on Engineering Projects, and 90.00/100 on Job Connect Exam (Final Grade A+: 97.93/100).",
    image: "/assets/certs/cert-dibimbing-reportcard.png?v=hd2",
  },
  {
    id: "efset-c1",
    title: "EF SET English Certificate — C1 Advanced (61/100)",
    issuer: "EF Standard English Test (EF SET)",
    date: "March 2025",
    scoreOrBadge: "CEFR C1 Advanced (Reading C2 • Writing C2)",
    description: "Verified C1 Advanced English proficiency overall (61/100), achieving C2 Proficient in Reading (77/100) and C2 Proficient in Writing (79/100).",
    image: "/assets/certs/cert-efset-c1.png?v=hd2",
  },
  {
    id: "toefl-597",
    title: "Certificate of Achievement — English Proficiency Test (TOEFL: 597)",
    issuer: "Brighten English Pare Kediri (Diknas Certified)",
    date: "March 2025",
    scoreOrBadge: "TOEFL Score: 597",
    description: "Achieved a total TOEFL score of 597 (Listening Comprehension: 58, Structure & Written Expression: 56, Reading Comprehension: 65).",
    image: "/assets/certs/cert-toefl-597.png?v=hd2",
  },
  {
    id: "msib-pharos",
    title: "Kampus Merdeka MSIB Batch 5 — Electrical & IoT Specialist",
    issuer: "Kemendikbudristek & PT Inti Utama Solusindo (Pharos Group)",
    date: "Aug 2023 – Jan 2024",
    scoreOrBadge: "MSIB Batch 5 Certified Intern",
    description: "Certified Intern in the Kampus Merdeka MSIB Batch 5 program at PT Inti Utama Solusindo (Pharos Group) as an Electrical and IoT Specialist.",
    image: "/assets/certs/cert-msib-pharos.png?v=hd2",
  },
];

const EDUCATION_DATA = [
  {
    institution: "Universitas Sebelas Maret (UNS)",
    degree: "Bachelor of Engineering (S.T.) in Electrical Engineering",
    period: "Aug 2020 – Jul 2024",
    location: "Surakarta, Indonesia",
    badge: "Cum Laude • GPA 3.80 / 4.00",
    logo: "/assets/logos/logo-uns.png",
    logoSecondary: null,
    highlights: [
      "Honors: Highest GPA Achiever in 5th & 7th Semesters; Recipient of Independent MBKM UNS Research Grant.",
      "Final Thesis: 'Prototype Design of an Automatic Damper System for Balancing Process for Factory Room Sterilization' — engineered rapid multi-room air pressure balancing.",
    ],
  },
  {
    institution: "Dibimbing.id Bootcamp",
    degree: "AI & Machine Learning Engineering Track (Batch 6)",
    period: "Apr 2025 – Sept 2025",
    location: "Jakarta, Indonesia",
    badge: "Top 1 MVP Graduate • 97.93 / 100 (Grade A+)",
    logo: "/assets/logos/logo-dibimbing-icon.png",
    logoSecondary: "/assets/logos/logo-dibimbing-full.png",
    highlights: [
      "Selected as Top 1 Most Valuable Person (MVP) out of the entire cohort (Concept Test: 99.75/100, Engineering Projects: 96.00/100).",
      "Mastered production-grade Python backend APIs (FastAPI), SQL, Deep Learning (LSTM/GRU/CNN), Agentic RAG (LangChain/Qdrant), and MLOps (Docker/Airflow/MLflow).",
    ],
  },
];

const LEADERSHIP_DATA = [
  {
    role: "Chairman (Ketua Himpunan)",
    organization: "Student Association of Electrical Engineering (HMTE) UNS",
    period: "Feb 2022 – Dec 2022",
    description: "Led the entire Electrical Engineering student body, overseeing all departmental programs, academic collaborations, and official representation to university administration.",
  },
  {
    role: "Deputy Head of Community Development & Organizational Management",
    organization: "Karya Salemba Empat (KSE) Scholarship Community",
    period: "Aug 2022 – Aug 2024",
    description: "Spearheaded two consecutive terms driving community empowerment programs, member skill development, and cross-division event execution.",
  },
  {
    role: "Steering Committee & Deputy Head of Events",
    organization: "Sebelas Maret International IoT Challenge",
    period: "Mar 2021 – Aug 2022",
    description: "Defined competition rules, strategic vision, and international outreach, attracting university teams from Thailand, the Philippines, Malaysia, Brunei, and Vietnam.",
  },
  {
    role: "Sponsorship & Public Relations",
    organization: "Bengawan Unmanned Vehicle (UV) Team UNS",
    period: "Jan 2021 – Dec 2022",
    description: "Secured corporate sponsorships, negotiated partnership agreements, and managed public relations campaigns for the university's autonomous vehicle research team.",
  },
];

// Global Reactive State
const state = {
  darkMode: true,
  activePillarIndex: 0,
  expFilter: "all",
  openExpIds: {
    "zurich-indonesia": true,
    "care-technologies": true,
  },
  skillCategory: "middleware",
  openSkillNames: {
    "C# (.NET)": true,
  },
  activeCaseIndex: 0,
  activeSlideIndex: 0,
  showSecondaryImg: false,
  autoPlay: false,
  repoSlideIndex: 0,
  activeCertIdx: 0,
  copiedField: null,
  lightbox: null,
  mobileMenuOpen: false,
};

let autoPlayTimer = null;

function setState(patch) {
  Object.assign(state, patch);
  if (patch.darkMode !== undefined) {
    document.documentElement.classList.toggle("dark", state.darkMode);
  }
  if (patch.autoPlay !== undefined) {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
    if (state.autoPlay) {
      autoPlayTimer = setInterval(() => {
        const slides = CASE_STUDIES[state.activeCaseIndex].slides;
        state.activeSlideIndex = (state.activeSlideIndex + 1) % slides.length;
        state.showSecondaryImg = false;
        renderApp();
      }, 4500);
    }
  }
  renderApp();
}

window.toggleTheme = () => setState({ darkMode: !state.darkMode });
window.toggleMobileMenu = () => setState({ mobileMenuOpen: !state.mobileMenuOpen });
window.closeMobileMenu = () => setState({ mobileMenuOpen: false });
window.setPillar = (idx) => setState({ activePillarIndex: idx });
window.setExpFilter = (f) => setState({ expFilter: f });
window.toggleExpCard = (id) => {
  const next = { ...state.openExpIds, [id]: !state.openExpIds[id] };
  setState({ openExpIds: next });
};
window.toggleAllExp = () => {
  const allOpen = EXPERIENCES.every((e) => state.openExpIds[e.id]);
  const next = {};
  if (!allOpen) {
    EXPERIENCES.forEach((e) => { next[e.id] = true; });
  }
  setState({ openExpIds: next });
};
window.setSkillCat = (cat) => setState({ skillCategory: cat });
window.toggleSkillCard = (name) => {
  const next = { ...state.openSkillNames, [name]: !state.openSkillNames[name] };
  setState({ openSkillNames: next });
};
window.setCaseStudy = (idx) => setState({ activeCaseIndex: idx, activeSlideIndex: 0, showSecondaryImg: false });
window.setSlide = (idx) => setState({ activeSlideIndex: idx, showSecondaryImg: false });
window.nextSlide = (delta) => {
  const len = CASE_STUDIES[state.activeCaseIndex].slides.length;
  setState({ activeSlideIndex: (state.activeSlideIndex + delta + len) % len, showSecondaryImg: false });
};
window.setSecondaryImg = (val) => setState({ showSecondaryImg: val });
window.toggleAutoPlay = () => setState({ autoPlay: !state.autoPlay });
window.setRepoSlide = (idx) => setState({ repoSlideIndex: idx });
window.nextRepoSlide = (delta) => {
  const len = OTHER_PROJECTS.length;
  setState({ repoSlideIndex: (state.repoSlideIndex + delta + len) % len });
};
window.setCert = (idx) => setState({ activeCertIdx: idx });
window.nextCert = (delta) => {
  const len = CERTIFICATIONS.length;
  setState({ activeCertIdx: (state.activeCertIdx + delta + len) % len });
};
window.openLightbox = (src, title) => setState({ lightbox: { src, title } });
window.closeLightbox = () => setState({ lightbox: null });
window.copyToClipboard = (text, field) => {
  navigator.clipboard.writeText(text);
  setState({ copiedField: field });
  setTimeout(() => setState({ copiedField: null }), 2000);
};

// Track mouse position for Bento Card Spotlight + Global Ambient Glow
document.addEventListener("mousemove", (e) => {
  const glow = document.getElementById("cursor-glow");
  if (glow) {
    glow.style.background = `radial-gradient(750px circle at ${e.clientX}px ${e.clientY}px, rgba(37, 99, 235, 0.10), transparent 70%)`;
  }
  const cards = document.querySelectorAll(".bento-card");
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});

function renderApp() {
  const pillar = FOCUS_PILLARS[state.activePillarIndex];
  const filteredExps = state.expFilter === "all"
    ? EXPERIENCES
    : EXPERIENCES.filter((e) => e.category === state.expFilter);
  const allExpsOpen = EXPERIENCES.every((e) => state.openExpIds[e.id]);

  const filteredSkills = state.skillCategory === "all"
    ? SKILLS
    : SKILLS.filter((s) => s.category === state.skillCategory);

  const currentCase = CASE_STUDIES[state.activeCaseIndex];
  const slides = currentCase.slides;
  const currentSlide = slides[state.activeSlideIndex] || slides[0];
  const displayedImage = state.showSecondaryImg && currentSlide.secondaryImage
    ? currentSlide.secondaryImage
    : currentSlide.image;

  const currentCert = CERTIFICATIONS[state.activeCertIdx];
  const marqueeSkills = SKILLS.filter((s) => s.highlight);

  const html = `
    <!-- Floating Glassmorphic Pill Dock Navbar (100% Responsive for Mobile HP, Split-Screen & Fullscreen Desktop) -->
    <header class="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div class="max-w-7xl mx-auto pointer-events-auto">
        <div class="rounded-2xl sm:rounded-full bg-white/90 dark:bg-[#070d1f]/90 backdrop-blur-2xl border border-slate-200/90 dark:border-blue-500/25 shadow-2xl shadow-blue-950/25 px-3.5 sm:px-5 py-2.5 flex items-center justify-between gap-2 sm:gap-3">
          
          <!-- Brand Identity (Full Name: Adhitya Fajar Rachmadi, S.T. — Never wraps) -->
          <a href="#overview" class="flex items-center gap-2.5 shrink-0 group">
            <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-mono font-bold text-xs shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform shrink-0">
              AFR
            </div>
            <div class="whitespace-nowrap">
              <div class="font-display font-bold text-xs sm:text-sm tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 whitespace-nowrap">
                <span>Adhitya Fajar Rachmadi</span>
                <span class="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">S.T.</span>
              </div>
              <div class="hidden xl:block text-[10px] font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap">
                Middleware R&amp;D • Dedicated @ Zurich Indonesia
              </div>
            </div>
          </a>

          <!-- Desktop / Fullscreen Laptop Navigation (Never wraps) -->
          <nav class="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-slate-100/85 dark:bg-[#0b142d]/90 p-1 rounded-full border border-slate-200/70 dark:border-blue-500/20 shrink-0 whitespace-nowrap">
            <a href="#overview" class="px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap">Overview</a>
            <a href="#education" class="px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap">Education</a>
            <a href="#experience" class="px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap">Experience</a>
            <a href="#skills" class="px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap">Skills</a>
            <a href="#case-studies" class="px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap">Projects</a>
            <a href="#credentials" class="px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap">Certificates</a>
            <a href="#contact" class="px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-all whitespace-nowrap">Contact</a>
          </nav>

          <!-- Right Action Buttons (Never wraps or overflows) -->
          <div class="flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
            <button onclick="toggleTheme()" class="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-slate-200 dark:border-blue-500/30 bg-slate-100/80 dark:bg-[#0c1631] text-slate-700 dark:text-slate-200 hover:border-blue-500 text-xs font-semibold transition-all whitespace-nowrap shrink-0">
              ${state.darkMode ? SVG_ICONS.moon : SVG_ICONS.sun}
              <span class="hidden sm:inline">${state.darkMode ? "Dark" : "Light"}</span>
            </button>
            <a href="${PROFILE_DATA.portfolioPdfUrl}" target="_blank" class="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all whitespace-nowrap shrink-0">
              ${SVG_ICONS.download}
              <span class="hidden sm:inline">Portfolio</span>
              <span>PDF</span>
            </a>
            <button onclick="toggleMobileMenu()" class="lg:hidden flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 dark:border-blue-500/30 bg-slate-100/80 dark:bg-[#0c1631] text-slate-700 dark:text-slate-200 hover:border-blue-500 text-sm font-mono shrink-0" aria-label="Toggle Menu">
              ${state.mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        <!-- Mobile / Tablet Dropdown Navigation Drawer -->
        ${state.mobileMenuOpen ? `
          <div class="lg:hidden mt-2 rounded-2xl bg-white/95 dark:bg-[#081126]/95 backdrop-blur-2xl border border-slate-200 dark:border-blue-500/30 p-3 shadow-2xl animate-expand">
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <a onclick="closeMobileMenu()" href="#overview" class="px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-[#0c1836] text-slate-800 dark:text-slate-100 hover:bg-blue-600 hover:text-white transition-all">Overview</a>
              <a onclick="closeMobileMenu()" href="#education" class="px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-[#0c1836] text-slate-800 dark:text-slate-100 hover:bg-blue-600 hover:text-white transition-all">Education</a>
              <a onclick="closeMobileMenu()" href="#experience" class="px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-[#0c1836] text-slate-800 dark:text-slate-100 hover:bg-blue-600 hover:text-white transition-all">Experience</a>
              <a onclick="closeMobileMenu()" href="#skills" class="px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-[#0c1836] text-slate-800 dark:text-slate-100 hover:bg-blue-600 hover:text-white transition-all">Personal Skills</a>
              <a onclick="closeMobileMenu()" href="#case-studies" class="px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-[#0c1836] text-slate-800 dark:text-slate-100 hover:bg-blue-600 hover:text-white transition-all">Projects</a>
              <a onclick="closeMobileMenu()" href="#credentials" class="px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-[#0c1836] text-slate-800 dark:text-slate-100 hover:bg-blue-600 hover:text-white transition-all">Certificates</a>
              <a onclick="closeMobileMenu()" href="#contact" class="col-span-2 sm:col-span-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">Contact &amp; Download CV</a>
            </div>
          </div>
        ` : ""}
      </div>
    </header>

    <!-- HERO BENTO DASHBOARD SECTION (Calibrated for 100% Browser Zoom on Laptop & Mobile HP) -->
    <section id="overview" class="relative pt-24 pb-12 sm:pt-28 sm:pb-16 hero-mesh-bg overflow-hidden">
      <!-- Subtle Masked Perspective Dots in Hero Center Only -->
      <div class="pointer-events-none absolute inset-0 hero-perspective-dots"></div>

      <!-- Ambient Glowing Blue Orbs -->
      <div class="pointer-events-none absolute -top-24 left-1/3 w-[480px] h-[480px] rounded-full bg-blue-600/20 blur-[130px] animate-pulseGlow"></div>
      <div class="pointer-events-none absolute top-40 -right-20 w-[380px] h-[380px] rounded-full bg-cyan-500/15 blur-[120px]"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
        
        <!-- Top Asymmetric Bento Grid (12 Columns, Equal Balanced Height) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          <!-- Bento Cell 1: Main Bio & Interactive 3-Pillar Lens (7 Cols) -->
          <div class="lg:col-span-7 bento-card rounded-3xl bg-white/90 dark:bg-[#081024]/90 backdrop-blur-2xl border border-slate-200/90 dark:border-blue-500/25 p-5 sm:p-7 shadow-2xl shadow-blue-950/15 flex flex-col justify-between space-y-4">
            
            <div class="space-y-4">
              <!-- Live Status Pill (Clean Single-Line or Rounded-XL Pill) -->
              <div class="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/30 text-blue-700 dark:text-blue-300 text-[11px] sm:text-xs font-medium">
                <span class="relative flex h-2 w-2 shrink-0">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span class="font-semibold text-emerald-600 dark:text-emerald-400">Active (Sept 2026 – Present):</span>
                <span>PT Care Technologies (Middleware R&amp;D) • Dedicated to Zurich Indonesia (IT &amp; BA)</span>
              </div>

              <!-- Headline (Full Name: Adhitya Fajar Rachmadi, S.T.) -->
              <div class="space-y-2">
                <div class="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold">
                  Enterprise Middleware • System Integration • IT &amp; Business Analysis
                </div>
                <h1 class="font-display text-2xl sm:text-4xl xl:text-[42px] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                  ${PROFILE_DATA.name}, <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400">${PROFILE_DATA.degree}</span>
                </h1>
                <h2 class="text-base sm:text-xl font-display font-semibold text-slate-700 dark:text-slate-200">
                  ${PROFILE_DATA.primaryTitle} <span class="text-slate-400 font-normal">|</span> <span class="text-blue-600 dark:text-blue-400">IT &amp; Business Analyst</span>
                </h2>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  ${PROFILE_DATA.aboutShort}
                </p>
              </div>

              <!-- Interactive 3-Pillar Role Switcher Box -->
              <div class="rounded-2xl bg-slate-50/90 dark:bg-[#050b18]/90 border border-slate-200/80 dark:border-blue-500/20 p-3.5 sm:p-4 space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <span class="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1.5">
                    ${SVG_ICONS.layers}
                    <span>Interactive Role Focus</span>
                    <span class="text-slate-400 dark:text-slate-500">(Click to Switch)</span>
                  </span>
                  <span class="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">${pillar.badge}</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  ${FOCUS_PILLARS.map((p, idx) => {
                    const active = state.activePillarIndex === idx;
                    const titles = ["Middleware R&D", "Zurich IT & BA", "AI/ML Capability"];
                    const subs = ["Care Technologies", "Dedicated Team", "Top 1 MVP Track"];
                    return `
                      <button onclick="setPillar(${idx})" class="p-2.5 rounded-xl border text-left transition-all duration-200 active:scale-[0.98] ${
                        active
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400 shadow-lg shadow-blue-600/25"
                          : "bg-white dark:bg-[#0b142c] border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-500/50"
                      }">
                        <div class="text-xs font-bold truncate">${titles[idx]}</div>
                        <div class="text-[10px] font-mono truncate ${active ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}">${subs[idx]}</div>
                      </button>
                    `;
                  }).join("")}
                </div>

                <div class="p-3 rounded-xl bg-white dark:bg-[#0a1329] border border-slate-200/70 dark:border-blue-500/15 space-y-2 animate-expand">
                  <div class="flex flex-wrap items-center justify-between gap-2">
                    <h3 class="text-xs sm:text-sm font-display font-bold text-slate-900 dark:text-white">${pillar.title}</h3>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/25">${pillar.org}</span>
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${pillar.description}</p>
                  <div class="flex flex-wrap gap-1.5 pt-0.5">
                    ${pillar.tags.map((t) => `<span class="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-slate-50 dark:bg-[#060c1b] text-slate-700 dark:text-blue-200 border border-slate-200 dark:border-blue-500/20">✓ ${t}</span>`).join("")}
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-2.5 pt-1">
              <a href="#experience" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all active:scale-95">
                <span>Explore Career Journey</span>
                <span>→</span>
              </a>
              <a href="#case-studies" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-[#0c1733] hover:bg-blue-600/10 dark:hover:bg-blue-600/20 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-blue-500/30 text-xs sm:text-sm font-semibold transition-all active:scale-95">
                <span>View Projects</span>
              </a>
              <a href="${PROFILE_DATA.cvUrl}" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100/80 dark:bg-[#0a1226] hover:border-blue-500 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-medium transition-all">
                ${SVG_ICONS.fileText}
                <span>Download CV</span>
              </a>
            </div>
          </div>

          <!-- Bento Cell 2: Proportional Portrait Showcase Card (5 Cols — Fills Card Properly!) -->
          <div class="lg:col-span-5 bento-card rounded-3xl bg-gradient-to-b from-white via-blue-50/40 to-slate-100 dark:from-[#0c1838] dark:via-[#081024] dark:to-[#050914] border border-slate-200/90 dark:border-blue-500/30 shadow-2xl shadow-blue-950/25 flex flex-col justify-between relative overflow-hidden">
            
            <!-- Radial Blue Aura Behind Portrait -->
            <div class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-600/35 via-cyan-400/20 to-indigo-500/30 blur-3xl"></div>

            <!-- Top Header Inside Portrait Card (Full Name Untruncated!) -->
            <div class="relative z-20 p-4 sm:p-5 pb-3 border-b border-slate-200/70 dark:border-blue-500/20 space-y-2.5">
              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <span class="ml-1 text-xs font-mono font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap">Adhitya Fajar Rachmadi, S.T.</span>
                </div>
                <div class="flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                  <a href="${PROFILE_DATA.githubUrl}" target="_blank" class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-blue-950/80 text-slate-700 dark:text-blue-300 border border-slate-200 dark:border-blue-500/30 hover:bg-blue-600 hover:text-white transition-colors">GitHub ↗</a>
                  <a href="${PROFILE_DATA.linkedinUrl}" target="_blank" class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors">LinkedIn ↗</a>
                </div>
              </div>

              <!-- Interactive Role Pills in a Clean 2-Column Grid -->
              <div class="grid grid-cols-2 gap-2">
                <button onclick="setPillar(0)" class="px-2.5 py-1.5 rounded-xl bg-white/90 dark:bg-[#0a132c]/90 backdrop-blur-md border border-slate-200 dark:border-blue-500/35 shadow-sm text-[11px] font-semibold text-slate-800 dark:text-blue-100 hover:border-blue-400 transition-all flex items-center justify-center gap-1.5 truncate">
                  ${SVG_ICONS.terminal}
                  <span class="truncate">Middleware R&amp;D</span>
                </button>
                <button onclick="setPillar(1)" class="px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-600/25 text-[11px] font-semibold hover:opacity-95 transition-all flex items-center justify-center gap-1.5 truncate">
                  ${SVG_ICONS.building}
                  <span class="truncate">Dedicated @ Zurich</span>
                </button>
              </div>
            </div>

            <!-- Waist-Up Executive Portrait Stage (410px Height so Portrait Fills the Card Nicely!) -->
            <div class="relative flex justify-center items-end pt-2 px-4 overflow-hidden" style="height: 410px; min-height: 410px; max-height: 410px;">
              <div class="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-blue-500/25 blur-2xl"></div>
              <img
                src="${PROFILE_DATA.profilePhoto}"
                alt="Adhitya Fajar Rachmadi, S.T."
                style="height: 400px; max-height: 400px; width: auto;"
                class="relative z-10 object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-[1.03]"
              />
              <div class="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-100/90 dark:from-[#070e22] to-transparent z-10"></div>
            </div>

            <!-- Flush Bottom Card Footer -->
            <div class="relative z-20 bg-white/95 dark:bg-[#070e22]/95 backdrop-blur-xl border-t border-slate-200/90 dark:border-blue-500/30 px-4 sm:px-5 py-3.5">
              <div class="flex items-center justify-between gap-2">
                <div class="min-w-0">
                  <div class="text-xs font-bold text-slate-900 dark:text-white truncate">PT Care Technologies × Zurich Indonesia</div>
                  <div class="text-[11px] text-blue-600 dark:text-blue-400 font-mono truncate">Middleware R&amp;D Dept • IT &amp; Business Analyst Team</div>
                </div>
                <span class="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-semibold shrink-0">Sept 2026 – Present</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Bento Cell 3: Infinite Smooth-Scrolling Core Tech Stack Marquee -->
        <div class="bento-card rounded-2xl bg-white/85 dark:bg-[#070e22]/85 backdrop-blur-xl border border-slate-200/80 dark:border-blue-500/20 py-3.5 px-4 overflow-hidden">
          <div class="flex items-center gap-4">
            <div class="hidden sm:flex items-center gap-2 pr-4 border-r border-slate-200 dark:border-blue-500/20 shrink-0">
              <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span class="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">Core Stack</span>
            </div>
            <div class="overflow-hidden flex-1 relative">
              <div class="flex items-center gap-6 w-max animate-marquee marquee-track">
                ${[...marqueeSkills, ...marqueeSkills].map((s) => `
                  <div class="flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-[#0c1631] border border-slate-200/70 dark:border-blue-500/20 shrink-0">
                    <div class="w-6 h-6 rounded-md bg-white p-0.5 flex items-center justify-center">
                      <img src="${s.logo}" alt="${s.name}" class="max-h-5 max-w-5 object-contain" />
                    </div>
                    <span class="text-xs font-display font-semibold text-slate-800 dark:text-slate-200">${s.name}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </div>

        <!-- Bento Cells 4-7: 4 Key Highlight Cards (Always Open, With Official Institution/Brand Logos) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${PROFILE_DATA.heroStats.map((stat) => {
            return `
              <div class="bento-card text-left p-5 rounded-3xl border bg-white/90 dark:bg-[#081024]/90 backdrop-blur-xl border-slate-200/80 dark:border-blue-500/25 shadow-lg flex flex-col justify-between">
                <div>
                  <div class="h-1 w-14 rounded-full bg-gradient-to-r ${stat.accent} mb-4"></div>
                  <div class="flex items-center justify-between gap-2 mb-1.5">
                    <div class="text-xl xl:text-2xl font-display font-bold text-slate-900 dark:text-white whitespace-nowrap">${stat.value}</div>
                    <div class="h-10 px-2.5 rounded-xl bg-white dark:bg-white/95 border border-slate-200/80 dark:border-blue-400/30 shadow-sm flex items-center justify-center gap-1.5 shrink-0">
                      <img src="${stat.logo}" alt="${stat.logoAlt || stat.label}" class="${stat.secondaryLogo ? "h-5 max-w-[58px]" : "max-h-6 max-w-[64px]"} w-auto object-contain" />
                      ${stat.secondaryLogo ? `
                        <span class="w-px h-4 bg-slate-300"></span>
                        <img src="${stat.secondaryLogo}" alt="Zurich Indonesia" class="h-5 max-w-[54px] w-auto object-contain" />
                      ` : ""}
                    </div>
                  </div>
                  <div class="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400">${stat.label}</div>
                  <div class="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">${stat.detail}</div>
                </div>
                <div class="mt-3.5 pt-3 border-t border-slate-200/70 dark:border-blue-500/15 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  ${stat.expandedText}
                </div>
              </div>
            `;
          }).join("")}
        </div>

      </div>
    </section>

    <!-- EDUCATION & WORK EXPERIENCE SECTION -->
    <section id="education" class="py-20 sm:py-24 border-t border-slate-200/80 dark:border-blue-500/15 relative overflow-hidden">
      <!-- Ambient Blue Glow -->
      <div class="pointer-events-none absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px]"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        <!-- Part 1: Education Bento Cards (Official UNS & Dibimbing.id Logos) -->
        <div>
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div class="space-y-1.5">
              <div class="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold">Academic Background</div>
              <h2 class="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Education
              </h2>
            </div>
            <p class="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">
              Cum Laude Electrical Engineering (3.80/4.00) • Top 1 MVP AI/ML Bootcamp (97.93/100)
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${EDUCATION_DATA.map((edu, idx) => `
              <div class="bento-card rounded-3xl bg-white dark:bg-[#081126] border border-slate-200/90 dark:border-blue-500/25 p-6 sm:p-7 shadow-xl space-y-4">
                <div class="h-1.5 w-20 rounded-full bg-gradient-to-r ${idx === 0 ? "from-blue-600 to-cyan-400" : "from-indigo-500 to-blue-400"}"></div>
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <span class="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm">${edu.badge}</span>
                  <span class="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#0d1936] px-3 py-1 rounded-full border border-slate-200 dark:border-blue-500/20">${SVG_ICONS.calendar} <span>${edu.period}</span></span>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 rounded-2xl bg-white dark:bg-white/95 border border-slate-200/90 dark:border-blue-400/30 p-2.5 flex items-center justify-center shadow-md shrink-0">
                    <img src="${edu.logo}" alt="${edu.institution}" class="max-h-full max-w-full object-contain" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <div class="flex flex-wrap items-center gap-2">
                      <h3 class="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">${edu.institution}</h3>
                      ${edu.logoSecondary ? `<span class="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-lg bg-white border border-slate-200/80"><img src="${edu.logoSecondary}" alt="${edu.institution}" class="h-4 w-auto object-contain" /></span>` : ""}
                    </div>
                    <p class="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">${edu.degree}</p>
                    <p class="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">${SVG_ICONS.mapPin} <span>${edu.location}</span></p>
                  </div>
                </div>
                <ul class="space-y-2.5 pt-3 border-t border-slate-200/70 dark:border-blue-500/15">
                  ${edu.highlights.map((h) => `
                    <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span class="text-blue-500 font-bold mt-0.5">✓</span>
                      <span>${h}</span>
                    </li>
                  `).join("")}
                </ul>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Part 2: Work Experience Interactive Timeline + Bento Accordion -->
        <div id="experience" class="pt-10 border-t border-slate-200/80 dark:border-blue-500/15">
          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div class="space-y-1.5">
              <div class="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold">Career Journey</div>
              <h2 class="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Work Experience
              </h2>
              <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
                Click any role card below to view responsibilities, key achievements, and technology stack.
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-2">
              <div class="flex flex-wrap gap-1.5 bg-slate-100 dark:bg-[#081024] p-1.5 rounded-2xl border border-slate-200/80 dark:border-blue-500/20">
                ${[
                  { id: "all", label: "All Roles (5)" },
                  { id: "middleware", label: "Middleware & Enterprise (Current)" },
                  { id: "ai", label: "AI Engineering" },
                  { id: "engineering", label: "Industrial & IoT" },
                ].map((tab) => {
                  const active = state.expFilter === tab.id;
                  return `<button onclick="setExpFilter('${tab.id}')" class="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    active ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }">${tab.label}</button>`;
                }).join("")}
              </div>
              <button onclick="toggleAllExp()" class="px-3.5 py-2 rounded-2xl text-xs font-mono font-semibold border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all">
                ${allExpsOpen ? "▲ Collapse All" : "▼ Expand All"}
              </button>
            </div>
          </div>

          <!-- Glowing Left Timeline + Inline Expandable Bento Cards -->
          <div class="relative pl-6 sm:pl-9 border-l-2 border-blue-500/30 dark:border-blue-500/35 space-y-5">
            ${filteredExps.map((exp) => {
              const isOpen = !!state.openExpIds[exp.id];
              return `
                <div class="relative group">
                  <!-- Glowing Timeline Node -->
                  <div class="absolute -left-[31px] sm:-left-[43px] top-6 w-4 h-4 rounded-full border-2 ${
                    exp.isCurrent
                      ? "bg-emerald-500 border-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                      : "bg-blue-600 border-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                  }"></div>

                  <div class="bento-card rounded-3xl border transition-all duration-200 ${
                    isOpen
                      ? "bg-white dark:bg-[#09132b] border-blue-500/70 shadow-2xl shadow-blue-900/15"
                      : "bg-white/85 dark:bg-[#070f22]/85 border-slate-200/80 dark:border-blue-500/20 hover:border-blue-500/50"
                  }">
                    <!-- Clickable Card Header -->
                    <button onclick="toggleExpCard('${exp.id}')" class="w-full text-left p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div class="space-y-1.5">
                        <div class="flex flex-wrap items-center gap-2">
                          <span class="text-[11px] font-mono px-3 py-0.5 rounded-full font-semibold ${
                            exp.isCurrent
                              ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                              : "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                          }">${exp.isCurrent ? "● " : ""}${exp.period}</span>
                          ${exp.clientBadge ? `<span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/25">${exp.clientBadge}</span>` : ""}
                          <span class="inline-flex items-center gap-1 text-xs font-mono text-slate-400">${SVG_ICONS.mapPin} <span>${exp.location}</span></span>
                        </div>
                        <div class="flex flex-wrap items-baseline gap-2 pt-0.5">
                          <h3 class="font-display font-bold text-lg sm:text-xl text-blue-600 dark:text-blue-400">${exp.company}</h3>
                          <span class="text-slate-400">—</span>
                          <span class="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">${exp.role}</span>
                        </div>
                        <p class="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">${exp.departmentOrTeam}</p>
                      </div>

                      <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <span class="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold border transition-all ${
                          isOpen
                            ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/25"
                            : "bg-slate-100 dark:bg-[#0d1936] text-slate-600 dark:text-blue-300 border-slate-200 dark:border-blue-500/25"
                        }">
                          ${isOpen ? "Hide Details ▲" : "View Details ▼"}
                        </span>
                      </div>
                    </button>

                    <!-- Inline Expanded Content -->
                    ${isOpen ? `
                      <div class="px-5 sm:px-6 pb-6 pt-3 border-t border-slate-200/80 dark:border-blue-500/20 space-y-5 animate-expand">
                        ${exp.metrics ? `
                          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                            ${exp.metrics.map((m) => `
                              <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#060d1f] border border-slate-200/70 dark:border-blue-500/20">
                                <div class="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">${m.label}</div>
                                <div class="text-sm sm:text-base font-display font-bold text-blue-600 dark:text-cyan-400 mt-0.5">${m.value}</div>
                              </div>
                            `).join("")}
                          </div>
                        ` : ""}

                        <div class="space-y-2.5">
                          <div class="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">Role Overview &amp; Key Responsibilities</div>
                          <p class="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">${exp.summary}</p>
                          <ul class="space-y-2.5 pt-1">
                            ${exp.highlights.map((b) => `
                              <li class="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                <span class="text-blue-500 font-bold mt-0.5">✓</span>
                                <span>${b}</span>
                              </li>
                            `).join("")}
                          </ul>
                        </div>

                        <div class="pt-3 border-t border-slate-200/60 dark:border-blue-500/15 flex flex-wrap items-center gap-2">
                          <span class="text-[11px] font-mono uppercase text-slate-400 mr-1">Tech Stack:</span>
                          ${exp.techStack.map((t) => `<span class="px-3 py-1 rounded-xl text-xs font-mono bg-slate-100 dark:bg-[#0d1936] text-slate-800 dark:text-blue-200 border border-slate-200 dark:border-blue-500/25">${t}</span>`).join("")}
                        </div>
                      </div>
                    ` : ""}
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

      </div>
    </section>

    <!-- PERSONAL SKILLS BENTO SECTION (Inline Expandable Cards) -->
    <section id="skills" class="py-20 sm:py-24 border-t border-slate-200/80 dark:border-blue-500/15 bg-slate-100/60 dark:bg-[#060c1d]/80 relative overflow-hidden">
      <div class="pointer-events-none absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-600/10 blur-[130px]"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div class="space-y-1.5">
            <div class="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold">Tech Stack</div>
            <h2 class="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Personal Skills
            </h2>
            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Programming Languages, Enterprise Middleware &amp; APIs, Databases, AI/ML Frameworks, Cloud/MLOps, and Industrial Control Systems.
            </p>
          </div>
        </div>

        <!-- Category Selector Bento Tabs (Universal Clean Vector Icons — No Single-Brand Logos, No Emojis) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          ${[
            {
              id: "middleware",
              label: "Middleware, Backend & Languages",
              badge: "Core Focus",
              svg: SVG_ICONS.terminal,
            },
            {
              id: "database",
              label: "SQL Server, Data & Cloud/MLOps",
              badge: "Data & Infra",
              svg: SVG_ICONS.database,
            },
            {
              id: "aiml",
              label: "ML Frameworks & AI",
              badge: "AI Capability",
              svg: SVG_ICONS.cpu,
            },
            {
              id: "industrial",
              label: "Electrical & Industrial PLC/DCS",
              badge: "Hardware",
              svg: SVG_ICONS.sliders,
            },
            {
              id: "all",
              label: `All Personal Skills (${SKILLS.length})`,
              badge: "Full Stack",
              svg: SVG_ICONS.grid,
            },
          ].map((cat) => {
            const active = state.skillCategory === cat.id;
            return `
              <button onclick="setSkillCat('${cat.id}')" class="bento-card p-4 rounded-2xl border text-left transition-all duration-200 active:scale-[0.98] ${
                active
                  ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-blue-400 shadow-xl shadow-blue-600/25"
                  : "bg-white dark:bg-[#081126] border-slate-200/80 dark:border-blue-500/20 text-slate-700 dark:text-slate-300 hover:border-blue-500/50"
              }">
                <div class="flex items-center justify-between mb-2.5">
                  <span class="w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                    active
                      ? "bg-white/20 text-white border border-white/25"
                      : "bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/25"
                  }">
                    ${cat.svg}
                  </span>
                  <span class="text-[10px] font-mono px-2.5 py-0.5 rounded-full ${active ? "bg-white/20 text-white" : "bg-blue-500/10 text-blue-600 dark:text-blue-400"}">${cat.badge}</span>
                </div>
                <div class="text-xs font-bold leading-snug">${cat.label}</div>
              </button>
            `;
          }).join("")}
        </div>

        <!-- Skills Bento Grid with Inline Expansion -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 items-start">
          ${filteredSkills.map((skill) => {
            const isOpen = !!state.openSkillNames[skill.name];
            const safeName = skill.name.replace(/'/g, "\\'");
            return `
              <button onclick="toggleSkillCard('${safeName}')" class="bento-card group relative flex flex-col justify-between p-4 rounded-2xl border transition-all duration-200 text-center ${
                isOpen
                  ? "bg-white dark:bg-[#0c1836] border-blue-500 ring-2 ring-blue-500/30 shadow-2xl col-span-2"
                  : "bg-white/90 dark:bg-[#081126]/90 border-slate-200/80 dark:border-blue-500/20 hover:-translate-y-0.5"
              }">
                ${skill.highlight ? `<span class="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" title="Core Stack"></span>` : ""}
                <div class="w-full h-16 rounded-xl bg-slate-50 dark:bg-white/95 p-2.5 flex items-center justify-center border border-slate-100 dark:border-slate-200/20 mb-3 shadow-inner">
                  <img src="${skill.logo}" alt="${skill.name}" class="max-h-11 max-w-[120px] object-contain transition-transform duration-200 group-hover:scale-105" loading="lazy" />
                </div>
                <div class="space-y-1 w-full">
                  <div class="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white">${skill.name}</div>
                </div>

                ${isOpen ? `
                  <div class="mt-3 pt-3 border-t border-slate-200/70 dark:border-blue-500/30 text-left space-y-1.5 w-full animate-expand">
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] font-mono uppercase text-emerald-500 font-semibold">● Production Usage</span>
                      <span class="text-[10px] font-mono text-blue-400">Close ▲</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-200 leading-relaxed">
                      ${skill.roleUsage}
                    </p>
                  </div>
                ` : `
                  <div class="mt-2 text-[10px] font-mono text-slate-400 dark:text-slate-500 group-hover:text-blue-400 transition-colors w-full">
                    Click for details ▼
                  </div>
                `}
              </button>
            `;
          }).join("")}
        </div>
      </div>
    </section>

    <!-- CASE STUDIES & PROJECTS SECTION -->
    <section id="case-studies" class="py-20 sm:py-24 border-t border-slate-200/80 dark:border-blue-500/15 relative overflow-hidden">
      <div class="pointer-events-none absolute top-1/4 right-1/4 w-[480px] h-[480px] rounded-full bg-blue-600/10 blur-[140px]"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div class="space-y-1.5">
            <div class="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold">Featured Work</div>
            <h2 class="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Projects
            </h2>
            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              End-to-end API orchestration, enterprise dashboard integration, and applied AI systems.
            </p>
          </div>

          <div class="flex flex-wrap gap-2">
            ${CASE_STUDIES.map((cs, idx) => {
              const active = state.activeCaseIndex === idx;
              return `
                <button onclick="setCaseStudy(${idx})" class="px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold border transition-all active:scale-95 ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400 shadow-lg shadow-blue-600/25"
                    : "bg-white dark:bg-[#081126] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-blue-500/20 hover:border-blue-500/50"
                }">
                  <span class="font-mono opacity-75 mr-1.5">0${idx + 1}.</span>
                  ${idx === 0 ? "SmartAssist Enterprise Chatbot" : "AI Stock Trading Engine"}
                </button>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Modern macOS / Vercel App Window Frame -->
        <div class="rounded-3xl bg-white dark:bg-[#081126] border border-slate-200/90 dark:border-blue-500/30 shadow-2xl shadow-blue-950/30 overflow-hidden">
          
          <!-- Window Top Chrome Bar -->
          <div class="px-5 py-3.5 bg-slate-100 dark:bg-[#050b18] border-b border-slate-200 dark:border-blue-500/20 flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-rose-500"></span>
              <span class="w-3 h-3 rounded-full bg-amber-500"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
              <div class="ml-3 px-3.5 py-1 rounded-full bg-white dark:bg-[#0b152e] border border-slate-200 dark:border-blue-500/20 text-[11px] font-mono text-slate-500 dark:text-blue-300 flex items-center gap-2">
                ${SVG_ICONS.lock}
                <span class="truncate max-w-[220px] sm:max-w-md">${currentCase.urlDisplay}</span>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="toggleAutoPlay()" class="px-3 py-1 rounded-full text-xs font-mono border transition-all ${
                state.autoPlay
                  ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                  : "bg-white dark:bg-[#0b152e] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-blue-500/20"
              }">
                ${state.autoPlay ? "⏸ Auto-Slide On" : "▶ Auto-Slide"}
              </button>
              <a href="${currentCase.githubUrl}" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all">
                <span>GitHub Repo ↗</span>
              </a>
            </div>
          </div>

          <!-- Case Study Header & Metrics Bar -->
          <div class="p-5 sm:p-6 bg-slate-50/70 dark:bg-[#070e20] border-b border-slate-200 dark:border-blue-500/20 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div class="space-y-1">
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-3 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-600 text-white">${currentCase.featuredBadge}</span>
                <span class="text-xs font-mono text-blue-600 dark:text-cyan-400">${currentCase.category}</span>
              </div>
              <h3 class="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">${currentCase.title}</h3>
              <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">${currentCase.subtitle}</p>
            </div>

            <div class="flex flex-wrap items-center gap-2.5">
              ${currentCase.metrics.map((m) => `
                <div class="px-3.5 py-2 rounded-2xl bg-white dark:bg-[#0c1733] border border-slate-200/80 dark:border-blue-500/25">
                  <div class="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">${m.label}</div>
                  <div class="text-xs sm:text-sm font-display font-bold text-blue-600 dark:text-cyan-400">${m.value}</div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Slide Deck Stepper Bar -->
          <div class="px-5 sm:px-6 py-3 bg-slate-100/70 dark:bg-[#050b18]/90 border-b border-slate-200/80 dark:border-blue-500/20 flex flex-wrap items-center justify-between gap-3">
            <div class="flex flex-wrap items-center gap-1.5">
              ${slides.map((s, idx) => {
                const isCurrent = state.activeSlideIndex === idx;
                return `
                  <button onclick="setSlide(${idx})" class="px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    isCurrent
                      ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/25"
                      : "bg-white/80 dark:bg-[#0b152e] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-blue-500/20"
                  }">
                    Slide 0${idx + 1}
                  </button>
                `;
              }).join("")}
            </div>

            <div class="flex items-center gap-1 bg-white dark:bg-[#0b152e] p-1 rounded-xl border border-slate-200 dark:border-blue-500/20">
              <button onclick="nextSlide(-1)" class="px-2.5 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-mono">◀ Prev</button>
              <span class="text-xs font-mono px-2 text-blue-600 dark:text-blue-300 font-semibold">${state.activeSlideIndex + 1} / ${slides.length}</span>
              <button onclick="nextSlide(1)" class="px-2.5 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-mono">Next ▶</button>
            </div>
          </div>

          <!-- Main Slide Stage -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-8 items-center">
            <!-- Left 7 Cols: Ultra-HD Image Viewer + Filmstrip -->
            <div class="lg:col-span-7 space-y-3">
              <div class="relative group rounded-2xl bg-slate-100 dark:bg-[#050a17] border border-slate-200 dark:border-blue-500/25 overflow-hidden aspect-[16/10] flex items-center justify-center shadow-inner">
                <img src="${displayedImage}" alt="${currentSlide.title}" class="w-full h-full object-contain p-2 sm:p-3 transition-transform duration-300 group-hover:scale-[1.02]" />
                <button onclick="openLightbox('${displayedImage}', '${currentCase.title} — ${currentSlide.title}')" class="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-blue-600 text-white text-xs font-mono backdrop-blur-md border border-white/15 shadow-lg transition-all">
                  ${SVG_ICONS.maximize}
                  <span>Fullscreen</span>
                </button>
                <div class="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-slate-900/85 text-white text-[11px] font-mono backdrop-blur-md border border-white/10">
                  ${currentSlide.badge}
                </div>
              </div>

              ${currentSlide.secondaryImage ? `
                <div class="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/25">
                  <span class="text-xs font-mono text-blue-700 dark:text-blue-300 flex items-center gap-1.5">${SVG_ICONS.layers} <span>This slide has 2 production views:</span></span>
                  <div class="flex items-center gap-1.5">
                    <button onclick="setSecondaryImg(false)" class="px-3 py-1 rounded-lg text-xs font-semibold transition-all ${!state.showSecondaryImg ? "bg-blue-600 text-white" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300"}">Primary View</button>
                    <button onclick="setSecondaryImg(true)" class="px-3 py-1 rounded-lg text-xs font-semibold transition-all ${state.showSecondaryImg ? "bg-blue-600 text-white" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300"}">Secondary View</button>
                  </div>
                </div>
              ` : ""}

              <!-- Visual Thumbnail Filmstrip -->
              <div class="grid grid-cols-4 sm:grid-cols-5 gap-2 pt-1">
                ${slides.map((s, idx) => {
                  const active = state.activeSlideIndex === idx;
                  return `
                    <button onclick="setSlide(${idx})" class="rounded-xl overflow-hidden border-2 transition-all aspect-[16/10] bg-slate-100 dark:bg-[#050a17] p-1 ${
                      active ? "border-blue-500 ring-2 ring-blue-500/30 scale-[1.02]" : "border-slate-200 dark:border-slate-800 opacity-65 hover:opacity-100"
                    }">
                      <img src="${s.image}" alt="${s.title}" class="w-full h-full object-contain" />
                    </button>
                  `;
                }).join("")}
              </div>
            </div>

            <!-- Right 5 Cols: Narrative & Stack -->
            <div class="lg:col-span-5 space-y-5">
              <div class="space-y-2">
                <span class="inline-block text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-semibold">${currentSlide.badge}</span>
                <h4 class="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">${currentSlide.title}</h4>
                <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${currentSlide.description}</p>
              </div>

              <ul class="space-y-2.5">
                ${currentSlide.bullets.map((b) => `
                  <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span class="text-blue-500 font-bold mt-0.5">✓</span>
                    <span>${b}</span>
                  </li>
                `).join("")}
              </ul>

              <div class="pt-4 border-t border-slate-200 dark:border-blue-500/20 space-y-2">
                <div class="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Architecture &amp; Tech Stack</div>
                <div class="flex flex-wrap gap-1.5">
                  ${currentCase.techStack.map((t) => `<span class="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-[#0c1733] text-slate-700 dark:text-blue-200 border border-slate-200 dark:border-blue-500/20">${t}</span>`).join("")}
                </div>
              </div>

              <div class="pt-2 flex items-center justify-between gap-3">
                <button onclick="nextSlide(-1)" class="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-blue-500/25 bg-slate-50 dark:bg-[#0c1733] hover:border-blue-500 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all">◀ Previous Slide</button>
                <button onclick="nextSlide(1)" class="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs font-semibold text-white shadow-md shadow-blue-600/20 transition-all">Next Slide ▶</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Open-Source Projects Bento Grid -->
        <div class="mt-16 space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div class="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold">Open Source</div>
              <h3 class="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">More Projects</h3>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="nextRepoSlide(-1)" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-blue-500/25 bg-white dark:bg-[#081126] text-xs font-mono">◀</button>
              <span class="text-xs font-mono text-slate-500 dark:text-slate-400">Spotlight ${state.repoSlideIndex + 1} / ${OTHER_PROJECTS.length}</span>
              <button onclick="nextRepoSlide(1)" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-blue-500/25 bg-white dark:bg-[#081126] text-xs font-mono">▶</button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            ${OTHER_PROJECTS.map((proj, idx) => {
              const focused = state.repoSlideIndex === idx;
              return `
                <div onclick="setRepoSlide(${idx})" class="bento-card cursor-pointer rounded-2xl border p-4 flex flex-col justify-between transition-all duration-200 ${
                  focused
                    ? "bg-white dark:bg-[#0c1836] border-blue-500 ring-2 ring-blue-500/25 shadow-xl -translate-y-1"
                    : "bg-white/85 dark:bg-[#081126]/85 border-slate-200/80 dark:border-blue-500/20"
                }">
                  <div>
                    <div class="relative h-32 rounded-xl bg-slate-950 overflow-hidden mb-3 border border-slate-200/60 dark:border-slate-800">
                      <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
                    </div>
                    <span class="text-[10px] font-mono uppercase text-blue-600 dark:text-cyan-400 font-semibold">${proj.category}</span>
                    <h4 class="font-display font-bold text-sm text-slate-900 dark:text-white mt-0.5">${proj.title}</h4>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">${proj.description}</p>
                  </div>
                  <div class="pt-3 mt-3 border-t border-slate-200/70 dark:border-blue-500/15 flex items-center justify-between">
                    <span class="text-[10px] font-mono text-slate-500 dark:text-slate-400">${proj.techStack.slice(0, 2).join(" • ")}</span>
                    <a href="${proj.githubUrl}" target="_blank" onclick="event.stopPropagation()" class="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">GitHub ↗</a>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </div>
    </section>

    <!-- CREDENTIALS, CERTIFICATES & LEADERSHIP SECTION -->
    <section id="credentials" class="py-20 sm:py-24 border-t border-slate-200/80 dark:border-blue-500/15 bg-slate-100/60 dark:bg-[#060c1d]/80 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        <!-- Part 1: Certificate Showcase -->
        <div>
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div class="space-y-1.5">
              <div class="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold">Credentials</div>
              <h2 class="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Certifications &amp; Honors
              </h2>
              <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
                Includes Top 1 MVP Bootcamp Dibimbing.id (97.93/100), Official Transcript, EF SET C1 Advanced, TOEFL 597, and Kampus Merdeka MSIB Batch 5 Honors.
              </p>
            </div>

            <div class="flex items-center gap-2 self-start sm:self-end bg-white dark:bg-[#081126] p-1.5 rounded-2xl border border-slate-200 dark:border-blue-500/25">
              <button onclick="nextCert(-1)" class="px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-mono">◀</button>
              <span class="text-xs font-mono px-2 text-blue-600 dark:text-blue-300 font-semibold">Certificate ${state.activeCertIdx + 1} / ${CERTIFICATIONS.length}</span>
              <button onclick="nextCert(1)" class="px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-mono">▶</button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <!-- Left 7 Cols: Certificate Stage -->
            <div class="lg:col-span-7">
              <div class="bento-card rounded-3xl bg-white dark:bg-[#081126] border border-slate-200 dark:border-blue-500/30 p-5 sm:p-6 shadow-2xl">
                <div class="relative h-80 sm:h-[420px] rounded-2xl bg-slate-100 dark:bg-[#050a17] flex items-center justify-center overflow-hidden border border-slate-200/70 dark:border-blue-500/20">
                  <img src="${currentCert.image}" alt="${currentCert.title}" class="max-h-full max-w-full object-contain p-2 transition-transform duration-300 hover:scale-[1.02]" />
                  <button onclick="openLightbox('${currentCert.image}', '${currentCert.title}')" class="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-blue-600 text-white text-xs font-mono shadow-lg transition-all">
                    ${SVG_ICONS.maximize}
                    <span>Fullscreen</span>
                  </button>
                </div>
                <div class="mt-4 flex flex-wrap items-center justify-between gap-2">
                  <span class="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white">${currentCert.scoreOrBadge}</span>
                  <span class="text-xs font-mono text-slate-500 dark:text-slate-400">${currentCert.issuer} • ${currentCert.date}</span>
                </div>
                <h3 class="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-2">${currentCert.title}</h3>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">${currentCert.description}</p>
              </div>
            </div>

            <!-- Right 5 Cols: Selector List -->
            <div class="lg:col-span-5 space-y-2.5">
              ${CERTIFICATIONS.map((cert, idx) => {
                const active = state.activeCertIdx === idx;
                return `
                  <button onclick="setCert(${idx})" class="bento-card w-full text-left p-3.5 rounded-2xl border flex items-center gap-3.5 transition-all duration-200 ${
                    active
                      ? "bg-white dark:bg-[#0c1836] border-blue-500 shadow-xl ring-1 ring-blue-500/30"
                      : "bg-white/80 dark:bg-[#081126]/80 border-slate-200/80 dark:border-blue-500/20"
                  }">
                    <div class="w-16 h-14 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 overflow-hidden">
                      <img src="${cert.image}" alt="${cert.title}" class="max-h-full max-w-full object-contain" loading="lazy" />
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[11px] font-mono text-blue-600 dark:text-cyan-400 font-semibold truncate">${cert.scoreOrBadge}</span>
                        <span class="text-[10px] font-mono text-slate-400 shrink-0">${cert.date}</span>
                      </div>
                      <h4 class="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate mt-0.5">${cert.title}</h4>
                      <p class="text-xs text-slate-500 dark:text-slate-400 truncate">${cert.issuer}</p>
                    </div>
                  </button>
                `;
              }).join("")}
            </div>
          </div>
        </div>

        <!-- Part 2: Organizational Leadership Bento Cards -->
        <div class="pt-8 border-t border-slate-200/80 dark:border-blue-500/15">
          <div class="mb-8 space-y-1">
            <div class="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold">Organizations</div>
            <h3 class="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Leadership Experience</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            ${LEADERSHIP_DATA.map((item) => `
              <div class="bento-card rounded-2xl bg-white dark:bg-[#081126] border border-slate-200 dark:border-blue-500/20 p-5 sm:p-6 shadow-md space-y-2">
                <span class="text-xs font-mono px-3 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">${item.period}</span>
                <h4 class="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white pt-1">${item.role}</h4>
                <div class="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">${item.organization}</div>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${item.description}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT & DOWNLOAD HUB -->
    <section id="contact" class="py-20 sm:py-24 border-t border-slate-200/80 dark:border-blue-500/15 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bento-card rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-[#060d21] text-white p-6 sm:p-12 shadow-2xl border border-blue-400/30 relative overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-7 space-y-4">
              <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-blue-200">
                <span>● Ready for Enterprise Collaboration</span>
              </div>
              <h2 class="font-display text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
                Connect with Adhitya Fajar Rachmadi, S.T.
              </h2>
              <p class="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl">
                Currently serving at <strong>PT Care Technologies (Middleware R&amp;D Department)</strong> and dedicated to <strong>Zurich Indonesia (IT &amp; Business Analyst Team)</strong>. Reach out via LinkedIn, Email, or WhatsApp, or download my full Portfolio &amp; CV below.
              </p>

              <div class="flex flex-wrap items-center gap-3 pt-2">
                <a href="${PROFILE_DATA.portfolioPdfUrl}" target="_blank" class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-slate-900 hover:bg-blue-50 text-xs sm:text-sm font-bold shadow-lg transition-all">
                  ${SVG_ICONS.download}
                  <span>Download Portfolio PDF</span>
                </a>
                <a href="${PROFILE_DATA.cvUrl}" target="_blank" class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600/50 hover:bg-blue-600/70 text-white border border-white/25 text-xs sm:text-sm font-semibold transition-all">
                  ${SVG_ICONS.fileText}
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            <div class="lg:col-span-5 grid grid-cols-1 gap-3">
              <div class="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between gap-3">
                <div class="min-w-0">
                  <div class="text-[11px] font-mono uppercase text-blue-200">Email Address</div>
                  <div class="text-xs sm:text-sm font-semibold truncate">${PROFILE_DATA.email}</div>
                </div>
                <button onclick="copyToClipboard('${PROFILE_DATA.email}', 'email')" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-xs font-mono shrink-0">
                  ${state.copiedField === "email" ? "✓ Copied" : "Copy"}
                </button>
              </div>

              <div class="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between gap-3">
                <div class="min-w-0">
                  <div class="text-[11px] font-mono uppercase text-blue-200">Phone / WhatsApp</div>
                  <div class="text-xs sm:text-sm font-semibold truncate">${PROFILE_DATA.phone}</div>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                  <button onclick="copyToClipboard('${PROFILE_DATA.phone}', 'phone')" class="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-xs font-mono">
                    ${state.copiedField === "phone" ? "✓ Copied" : "Copy"}
                  </button>
                  <a href="${PROFILE_DATA.whatsappUrl}" target="_blank" class="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs">Chat ↗</a>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <a href="${PROFILE_DATA.linkedinUrl}" target="_blank" class="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-between text-xs sm:text-sm font-semibold transition-all">
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>
                <a href="${PROFILE_DATA.githubUrl}" target="_blank" class="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-between text-xs sm:text-sm font-semibold transition-all">
                  <span>GitHub</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10 pt-6 border-t border-slate-200/80 dark:border-blue-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div>© ${new Date().getFullYear()} Adhitya Fajar Rachmadi, S.T. All rights reserved.</div>
          <div>PT Care Technologies (Middleware R&amp;D) • Dedicated to Zurich Indonesia (IT &amp; BA)</div>
        </div>
      </div>
    </section>

    <!-- Fullscreen Ultra-HD Lightbox Modal -->
    ${state.lightbox ? `
      <div onclick="closeLightbox()" class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
        <div onclick="event.stopPropagation()" class="max-w-6xl w-full rounded-3xl bg-[#070d1f] border border-blue-500/30 overflow-hidden shadow-2xl">
          <div class="flex items-center justify-between px-5 py-3.5 border-b border-slate-800">
            <span class="text-xs sm:text-sm font-mono text-white font-semibold truncate">${state.lightbox.title}</span>
            <button onclick="closeLightbox()" class="px-3 py-1 rounded-lg bg-slate-800 hover:bg-rose-600 text-white text-xs font-mono">✕ Close</button>
          </div>
          <div class="p-4 max-h-[82vh] flex items-center justify-center bg-[#040814]">
            <img src="${state.lightbox.src}" alt="${state.lightbox.title}" class="max-h-[76vh] w-auto object-contain rounded-xl" />
          </div>
        </div>
      </div>
    ` : ""}
  `;

  document.getElementById("app").innerHTML = html;
}

renderApp();
