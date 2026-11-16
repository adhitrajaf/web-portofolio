export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  departmentOrTeam: string;
  clientBadge?: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  category: "middleware" | "ai" | "engineering";
  summary: string;
  highlights: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
}

export interface SlideItem {
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  image: string;
  secondaryImage?: string;
}

export interface CaseStudyProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  featuredBadge: string;
  summary: string;
  githubUrl: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  slides: SlideItem[];
}

export interface OtherProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
}

export interface SkillItem {
  name: string;
  category: "middleware" | "database" | "aiml" | "industrial";
  logo: string;
  roleUsage: string;
  highlight?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  scoreOrBadge: string;
  description: string;
  image: string;
}

export const PROFILE_DATA = {
  name: "Adhitya Fajar Rachmadi",
  degree: "S.T.",
  statusBadge: "Care Technologies (Middleware R&D) • Dedicated to Zurich Indonesia",
  primaryTitle: "Middleware Engineer & IT Programmer",
  secondaryTitle: "IT & Business Analyst • AI/ML Engineering",
  tagline:
    "Specializing in Enterprise Middleware Research & Development, API & SQL Server Integration, and IT Business Analysis — supercharged with production-grade Generative AI & Machine Learning capabilities.",
  aboutShort:
    "Electrical Engineering Cum Laude graduate from Sebelas Maret University (GPA 3.80/4.00) combining strong systems engineering fundamentals with enterprise middleware development and applied artificial intelligence. Currently serving as an IT Programmer in the Middleware R&D Department at PT Care Technologies while dedicated to the IT & Business Analyst team at Zurich Indonesia.",
  location: "Jakarta / East Java, Indonesia",
  email: "rachmadiadhityafajar@gmail.com",
  phone: "+62 823-1313-6526",
  whatsappUrl: "https://wa.me/6282313136526",
  linkedinUrl: "https://www.linkedin.com/in/adhitya-fajar-rachmadi/",
  linkedinHandle: "adhitya-fajar-rachmadi",
  githubUrl: "https://github.com/adhitrajaf",
  githubHandle: "adhitrajaf",
  profilePhoto: "/assets/profile-adhit.png",
  cvUrl: "/files/CV_Adhitya_Fajar_Rachmadi.pdf",
  portfolioPdfUrl: "/files/Portfolio_Adhitya_Fajar_Rachmadi.pdf",
  heroStats: [
    {
      value: "Dual Role",
      label: "Middleware R&D & Enterprise IT/BA",
      detail: "Care Technologies × Zurich Indonesia",
    },
    {
      value: "3.80 / 4.00",
      label: "Cum Laude GPA",
      detail: "B.Eng. Electrical Engineering, UNS",
    },
    {
      value: "Top 1 MVP",
      label: "Bootcamp Dibimbing.id",
      detail: "97.93/100 Score (Grade A+) • AI & ML",
    },
    {
      value: "597 / C1",
      label: "English Proficiency",
      detail: "TOEFL 597 & EF SET C1 Advanced",
    },
  ],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "zurich-indonesia",
    role: "IT & Business Analyst (Dedicated Middleware Specialist)",
    company: "Zurich Indonesia",
    departmentOrTeam: "IT and Business Analyst Team",
    clientBadge: "Dedicated via PT Care Technologies",
    location: "Jakarta, Indonesia",
    period: "Sept 2026 – Present",
    isCurrent: true,
    category: "middleware",
    summary:
      "Assigned full-time to Zurich Indonesia's IT and Business Analyst team, bridging enterprise insurance business workflows with reliable middleware services and cross-system integrations.",
    highlights: [
      "Collaborate within the IT & Business Analyst division to translate enterprise insurance requirements into structured technical specifications, API data contracts, and middleware workflows.",
      "Analyze end-to-end data flows and system integration touchpoints across core enterprise applications to ensure data accuracy, security compliance, and operational continuity.",
      "Coordinate system validation, API testing via Postman, and SQL Server data verification alongside engineering and business stakeholders.",
    ],
    techStack: [
      "Enterprise Middleware",
      "IT Business Analysis",
      "REST / SOAP API",
      "SQL Server (SSMS)",
      "Postman",
      "System Integration",
    ],
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
    clientBadge: "Core Engineering & R&D",
    location: "Jakarta, Indonesia",
    period: "Sept 2026 – Present",
    isCurrent: true,
    category: "middleware",
    summary:
      "Developing, researching, and maintaining enterprise middleware solutions, backend API connectors, and database integration pipelines within the Middleware R&D Department.",
    highlights: [
      "Architect, build, and maintain scalable middleware services and backend applications utilizing C# (.NET), Visual Basic (VB.NET), PHP (Laravel), and JavaScript.",
      "Design, optimize, and manage relational database schemas, stored procedures, and complex transactional queries using Microsoft SQL Server Management Studio (SSMS).",
      "Develop and test RESTful and enterprise API endpoints using Postman, ensuring seamless interoperability, payload transformation, and high availability across connected platforms.",
    ],
    techStack: [
      "C#",
      "Visual Basic",
      "PHP",
      "Laravel",
      "JavaScript",
      "SQL Server (SSMS)",
      "REST API",
      "Postman",
      "Git",
    ],
    metrics: [
      { label: "Department", value: "Middleware R&D" },
      { label: "Core Stack", value: "C# • VB • Laravel • SQL" },
      { label: "Architecture", value: "API & Middleware" },
    ],
  },
  {
    id: "artha-infotama",
    role: "AI Engineer",
    company: "PT Artha Infotama",
    departmentOrTeam: "Artificial Intelligence & Data Engineering",
    clientBadge: "AI & LLM Highlight",
    location: "Jakarta, Indonesia",
    period: "Jan 2026 – Mar 2026",
    isCurrent: false,
    category: "ai",
    summary:
      "Engineered production-grade Generative AI, Retrieval-Augmented Generation (RAG), and automated Document Intelligence pipelines integrated with internal enterprise APIs.",
    highlights: [
      "Architected a RAG-powered agentic chatbot using AWS Bedrock and Qdrant vector database, achieving 95%+ retrieval accuracy for semantic search across 1M+ enterprise documents.",
      "Developed production-grade computer vision and OCR pipelines (Face Recognition, PaddleOCR, Donut KIE) to automate unstructured data extraction, reducing manual processing time by 70%.",
      "Engineered a modular LLM framework utilizing advanced Tool-Use (Function Calling) to orchestrate internal APIs, boosting operational efficiency by 40%.",
    ],
    techStack: [
      "Python",
      "AWS Bedrock",
      "Qdrant",
      "LangChain",
      "FastAPI",
      "PaddleOCR",
      "Docker",
      "REST API",
    ],
    metrics: [
      { label: "Retrieval Accuracy", value: "95%+ (1M+ Docs)" },
      { label: "Manual Reduction", value: "-70% Processing" },
      { label: "Efficiency Gain", value: "+40% via Tool-Use" },
    ],
  },
  {
    id: "pharos-group",
    role: "Electrical & IoT Specialist",
    company: "PT Inti Utama Solusindo (Pharos Group)",
    departmentOrTeam: "Industrial Automation, IoT & Computer Vision (MSIB Batch 5)",
    clientBadge: "Outstanding Internship Student",
    location: "Jakarta, Indonesia",
    period: "Aug 2023 – Jan 2024",
    isCurrent: false,
    category: "engineering",
    summary:
      "Combined industrial PLC automation, IoT sensor networks, codebase modernization, and YOLOv8 computer vision for pharmaceutical manufacturing quality control.",
    highlights: [
      "Designed and deployed a real-time IoT air pressure balancing and fire monitoring system across a 27-room pharmaceutical factory to maintain strict sterilization standards.",
      "Converted legacy C++ codebase into modular Python using internal frameworks, significantly improving maintainability and database team workflows.",
      "Developed a YOLOv8 Computer Vision inspection system integrated with pneumatic-hydraulic sorting to automatically reject defective tablet containers.",
      "Programmed Siemens PLCs interfacing with industrial-grade sensors to automate complex heavy machinery movements.",
    ],
    techStack: [
      "Python",
      "C++",
      "YOLOv8",
      "OpenCV",
      "Siemens PLC",
      "Arduino",
      "IoT Sensors",
      "SQL",
    ],
    metrics: [
      { label: "Factory Coverage", value: "27 Sterile Rooms" },
      { label: "Recognition", value: "Outstanding Intern" },
      { label: "Migration", value: "C++ to Python" },
    ],
  },
  {
    id: "ppsdm-migas",
    role: "Instrument & Control Systems Intern",
    company: "PPSDM Migas Cepu",
    departmentOrTeam: "Boiler Plant Instrumentation & DCS/PLC Integration",
    location: "Cepu, Central Java",
    period: "Jan 2023 – Feb 2023",
    isCurrent: false,
    category: "engineering",
    summary:
      "Integrated industrial PLC and Distributed Control Systems (DCS) via OPC UA protocols for real-time boiler plant operations and HMI visualization.",
    highlights: [
      "Developed PLC control logic using Allen-Bradley ControlLogix PLCs integrated seamlessly with Yokogawa Centum VP DCS via OPC UA protocol for real-time data exchange.",
      "Configured Yokogawa Centum VP DCS and designed custom HMI operator screens for real-time boiler plant visualization and unified subsystem control.",
      "Calibrated and maintained industrial boiler sensors and field instrumentation to guarantee accurate telemetry across PLC-DCS communication links.",
    ],
    techStack: [
      "Allen-Bradley PLC",
      "Yokogawa Centum VP",
      "OPC UA",
      "HMI Design",
      "Industrial Instrumentation",
    ],
    metrics: [
      { label: "Protocol", value: "OPC UA Real-Time" },
      { label: "Control Core", value: "ControlLogix + DCS" },
    ],
  },
];

export const CASE_STUDIES: CaseStudyProject[] = [
  {
    id: "smart-assist-chatbot",
    title: "SmartAssist Agentic Chatbot & Executive Dashboard",
    subtitle: "Enterprise RAG, Multi-Format Document Intelligence & Automated PDF Report Generation",
    category: "Enterprise AI & Middleware Integration",
    featuredBadge: "Production Case Study • 01",
    summary:
      "An end-to-end enterprise operation dashboard embedded with an Agentic AI Assistant capable of querying company policy PDFs, analyzing multi-branch Excel sales datasets, and dynamically generating downloadable executive PDF reports on demand.",
    githubUrl: "https://github.com/adhitrajaf",
    metrics: [
      { label: "Retrieval Precision", value: "95%+ RAG" },
      { label: "Data Sources", value: "PDF + Excel + SQL" },
      { label: "Output Engine", value: "Auto-PDF Generator" },
    ],
    techStack: [
      "Python",
      "FastAPI",
      "AWS Bedrock",
      "Qdrant",
      "LangChain",
      "REST API",
      "Pandas",
      "Docker",
    ],
    slides: [
      {
        title: "Integrated Executive Dashboard & SmartAssist UI",
        badge: "Slide 01 • System Overview",
        description:
          "RachmadiOperation Dashboard unifies real-time Executive Sales Overview metrics (IDR 183.39B+ tracked volume across regions and branches) with an embedded conversational agent sidebar.",
        bullets: [
          "Seamless floating & docked chat interface built directly into the operational web dashboard.",
          "Supports both Light and Dark dashboard modes with real-time filter synchronization.",
          "Connects conversational intent directly to backend analytical APIs and document vector stores.",
        ],
        image: "/assets/projects/p13_X96.png",
      },
      {
        title: "Unstructured PDF Policy Ingestion & Semantic Q&A",
        badge: "Slide 02 • Document RAG Pipeline",
        description:
          "Users can attach or query corporate policy PDFs (HR regulations, working hours, leave entitlements, compensation rules) and receive structured, citation-backed answers instantaneously.",
        bullets: [
          "Drag-and-drop PDF ingestion pipeline with automated chunking and vector indexing.",
          "Accurately extracts multi-clause HR & corporate policies in natural language.",
          "Eliminates manual document searching across hundreds of internal policy files.",
        ],
        image: "/assets/projects/p14_X98.png",
        secondaryImage: "/assets/projects/p14_X99.png",
      },
      {
        title: "Natural-Language Sales & Excel Data Analytics",
        badge: "Slide 03 • Structured Data Agent",
        description:
          "By querying regional sales data (e.g., Waingapu January 2026 transactions), SmartAssist executes deterministic data aggregation over Excel/SQL tables and renders formatted markdown tables.",
        bullets: [
          "Computes total transactions (23 deals), total value (IDR 18.34B), unit volume (37 units), and top-performing SKUs automatically.",
          "Zero hallucination on numerical aggregations via tool-calling execution over Pandas/SQL.",
          "Cross-references dashboard filters (Region, City, Sales Person) with chat queries.",
        ],
        image: "/assets/projects/p15_X102.png",
        secondaryImage: "/assets/projects/p15_X103.png",
      },
      {
        title: "Automated One-Click Executive PDF Report Generation",
        badge: "Slide 04 • Actionable Output",
        description:
          "From any analytical table produced in the chat, users can simply ask SmartAssist to generate a formal PDF report—complete with an Executive Summary and formatted transaction tables.",
        bullets: [
          "Dynamically compiles chat analysis into a downloadable corporate PDF ('Laporan Penjualan Detail').",
          "Includes automated Executive Summary, key takeaways, and full tabular breakdown.",
          "Bridges conversational AI with enterprise reporting workflows.",
        ],
        image: "/assets/projects/p16_X107.png",
        secondaryImage: "/assets/projects/p16_X106.png",
      },
    ],
  },
  {
    id: "ai-trading-systems",
    title: "AI Stock Trading Advisor & Risk Management Engine",
    subtitle: "Multi-Layer LSTM Forecasting, FastAPI Microservice & Interactive Plotly Terminal for IDX",
    category: "Full-Stack AI System & API Architecture",
    featuredBadge: "MVP Capstone (90/100) • 02",
    summary:
      "A containerized decision-support system for the Indonesian Stock Exchange (IDX) combining an Enhanced Multi-Layer LSTM Neural Network with an automated Risk & Position Sizing Engine served via FastAPI and Docker.",
    githubUrl: "https://github.com/adhitrajaf",
    metrics: [
      { label: "Model Win Rate", value: "64.5%" },
      { label: "Forecast Error", value: "3.43% MAPE" },
      { label: "Baseline Beat", value: "vs 5.22% MAPE" },
    ],
    techStack: [
      "Python",
      "FastAPI",
      "TensorFlow / Keras",
      "Docker",
      "Streamlit",
      "Plotly",
      "Pandas / NumPy",
      "Yahoo Finance API",
    ],
    slides: [
      {
        title: "Real-Time Market Terminal & Signal Overview",
        badge: "Slide 01 • Executive Terminal",
        description:
          "Interactive trading dashboard monitoring major Indonesian blue-chip stocks (^JKSE, BBCA, BBRI, TLKM, ASII, UNVR) with real-time prices, confidence scores, and automated BUY/SELL/HOLD signals.",
        bullets: [
          "Tracks 5 years of historical IDX market data (Jan 2020 – Dec 2024) via live Yahoo Finance API integration.",
          "Displays instant AI Confidence scores and 30-day interactive price trend trajectories.",
          "Awarded 90/100 Final Project score as Top 1 MVP Graduate at Dibimbing.id.",
        ],
        image: "/assets/projects/p7_X76.png",
      },
      {
        title: "Containerized FastAPI & AI Engine Architecture",
        badge: "Slide 02 • System Architecture",
        description:
          "Decoupled microservice architecture where the Streamlit/Plotly frontend communicates via HTTP JSON with a Dockerized FastAPI orchestrator, in-memory DataFrame store, and LSTM risk engine.",
        bullets: [
          "FastAPI Service Orchestrator handles live data fetching, feature engineering, and inference routing.",
          "Clean separation between Frontend Layer, Backend API Layer, and AI & Risk Logic Engine.",
          "Fully containerized with Docker for reproducible deployment.",
        ],
        image: "/assets/projects/p10_X84.png",
      },
      {
        title: "End-to-End Decision & Risk Management Workflow",
        badge: "Slide 03 • System Workflow",
        description:
          "Every stock selection triggers an automated pipeline: FastAPI ingestion → Feature Engineering → Multi-Layer LSTM inference → Threshold & Confidence Decision Gate → Dynamic Position Sizing.",
        bullets: [
          "BUY Gate: Predicted Price > (Current Price + Threshold) AND Confidence > 70%.",
          "SELL Gate: Predicted Price < (Current Price - Threshold) OR Risk Score > Limit.",
          "HOLD Gate: Sideways trend or confidence below safety threshold.",
        ],
        image: "/assets/projects/p11_X87.png",
      },
      {
        title: "Enhanced LSTM Architecture & Backtest Performance",
        badge: "Slide 04 • Model & Risk Brain",
        description:
          "Multi-layer LSTM with Dropout and Batch Normalization prevents overfitting on volatile IDX blue-chip stocks, outperforming baseline models with 3.43% MAPE and 64.5% directional win rate.",
        bullets: [
          "Computes automated Stop-Loss, Take-Profit, Position Size (%), and Risk Score for every signal.",
          "30-day backtest validation achieved +14.81% total return across 14 executed trades.",
          "Exports structured signal reports to CSV for downstream portfolio auditing.",
        ],
        image: "/assets/projects/p9_X82.png",
        secondaryImage: "/assets/projects/p9_X83.png",
      },
      {
        title: "Multi-Stock Trend Analysis & Live Signal Cards",
        badge: "Slide 05 • Production Views",
        description:
          "Comprehensive visualization suite featuring 5-year SMA-20/SMA-50 trend charts, candlestick inspection, multi-day forward price predictions, and color-coded daily action cards.",
        bullets: [
          "Interactive candlestick and moving-average overlays for BBCA, BBRI, TLKM, ASII, and UNVR.",
          "Day-by-day forward forecast table with expected percentage change.",
          "Actionable signal cards detailing Current Price, Target Price, and AI Confidence.",
        ],
        image: "/assets/projects/p12_X90.png",
        secondaryImage: "/assets/projects/p12_X93.png",
      },
    ],
  },
];

export const OTHER_PROJECTS: OtherProject[] = [
  {
    id: "rag-chatbot-indonesia",
    title: "RAG Chatbot Indonesia",
    category: "Generative AI & NLP",
    description:
      "Advanced Retrieval-Augmented Generation (RAG) conversational assistant tailored specifically for Indonesian language context and domain-specific knowledge retrieval.",
    image: "/assets/projects/p6_X65.png",
    techStack: ["Python", "LangChain", "Vector DB", "LLM API"],
    githubUrl: "https://github.com/adhitrajaf",
  },
  {
    id: "smart-splitbill",
    title: "SmartSplit Bill AI",
    category: "OCR & Practical AI Utility",
    description:
      "Intelligent receipt-scanning web utility that automatically extracts line items, tax, and discounts from uploaded bill photos and calculates fair per-person splits.",
    image: "/assets/projects/p6_X68.png",
    techStack: ["Python", "OCR / Vision LLM", "Streamlit", "JSON Parsing"],
    githubUrl: "https://github.com/adhitrajaf",
  },
  {
    id: "smart-shopper",
    title: "Personalized SmartShopper Assistant",
    category: "Recommender System",
    description:
      "Personalized product recommendation assistant leveraging collaborative and content-based filtering to match user preferences with optimal catalog items.",
    image: "/assets/projects/p6_X67.png",
    techStack: ["Python", "Scikit-Learn", "Pandas", "Recommender Engine"],
    githubUrl: "https://github.com/adhitrajaf",
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction Engine",
    category: "Predictive Modeling",
    description:
      "End-to-end feature engineering and ensemble regression benchmark evaluating multiple machine learning models for accurate real-estate valuation.",
    image: "/assets/projects/p6_X66.png",
    techStack: ["Python", "Scikit-Learn", "XGBoost", "Matplotlib"],
    githubUrl: "https://github.com/adhitrajaf",
  },
  {
    id: "portfolio-streamlit",
    title: "Interactive Data Science Dashboard",
    category: "Data App & Visualization",
    description:
      "Interactive personal analytics and machine learning portfolio dashboard built with Streamlit featuring live model demos and metric visualizations.",
    image: "/assets/projects/p6_X70.png",
    techStack: ["Python", "Streamlit", "Plotly", "Data Visualization"],
    githubUrl: "https://github.com/adhitrajaf",
  },
];

export const SKILLS: SkillItem[] = [
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
    logo: "/assets/skills-pdf/p4_34_X49.png",
    roleUsage: "Enterprise cloud foundation models and managed generative AI infrastructure on AWS.",
  },
  {
    name: "Qdrant Vector DB",
    category: "database",
    logo: "/assets/skills-pdf/p4_35_X50.png",
    roleUsage: "High-speed semantic vector search across 1M+ enterprise documents with 95%+ precision.",
  },
  {
    name: "Looker Studio",
    category: "database",
    logo: "/assets/skills-pdf/p4_10_X24.png",
    roleUsage: "Executive business intelligence dashboards and operational KPI visualization.",
  },
  {
    name: "Tableau",
    category: "database",
    logo: "/assets/skills-pdf/p4_17_X31.png",
    roleUsage: "Interactive visual analytics and enterprise data storytelling.",
  },

  // 3. AI, Machine Learning & Data Science (BONUS SUPERPOWER)
  {
    name: "PyTorch",
    category: "aiml",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    roleUsage: "Deep learning architectures, transformer fine-tuning, and computer vision pipelines.",
  },
  {
    name: "TensorFlow",
    category: "aiml",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    roleUsage: "Multi-layer LSTM time-series forecasting models and production neural networks.",
  },
  {
    name: "LangChain",
    category: "aiml",
    logo: "/assets/skills-pdf/p4_04_X18.png",
    roleUsage: "Agentic tool-calling workflows, multi-step RAG chains, and enterprise LLM orchestration.",
  },
  {
    name: "OpenAI API",
    category: "aiml",
    logo: "/assets/skills-pdf/p4_36_X51.png",
    roleUsage: "Function calling, structured output extraction, and conversational agent intelligence.",
  },
  {
    name: "Hugging Face",
    category: "aiml",
    logo: "/assets/skills-pdf/p4_06_X20.png",
    roleUsage: "Open-weights transformer models, embeddings, and Donut KIE document understanding.",
  },
  {
    name: "YOLOv8",
    category: "aiml",
    logo: "/assets/skills-pdf/p4_38_X53.png",
    roleUsage: "Real-time industrial object detection for automated pharmaceutical tablet container sorting.",
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
    logo: "/assets/skills-pdf/p4_37_X52.png",
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
    logo: "/assets/skills-pdf/p4_14_X28.png",
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
    logo: "/assets/skills-pdf/p4_15_X29.png",
    roleUsage: "Statistical data visualization, exploratory data analysis, and model evaluation plots.",
  },
  {
    name: "Jupyter & Colab",
    category: "aiml",
    logo: "/assets/skills-pdf/p4_21_X35.png",
    roleUsage: "Interactive notebook experimentation, GPU model training, and reproducible research.",
  },

  // 4. Electrical Engineering, PLC/DCS & Industrial IoT
  {
    name: "Siemens PLC",
    category: "industrial",
    logo: "/assets/skills-pdf/p4_24_X38.png",
    roleUsage: "Industrial machinery automation and precision sensor control in manufacturing plants.",
  },
  {
    name: "Allen-Bradley PLC",
    category: "industrial",
    logo: "/assets/skills-pdf/p4_25_X39.png",
    roleUsage: "ControlLogix PLC programming integrated with boiler plant DCS via OPC UA.",
  },
  {
    name: "Yokogawa Centum VP",
    category: "industrial",
    logo: "/assets/skills-pdf/p4_27_X41.png",
    roleUsage: "Distributed Control System (DCS) configuration and custom operator HMI screen design.",
  },
  {
    name: "Omron PLC",
    category: "industrial",
    logo: "/assets/skills-pdf/p4_26_X40.png",
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
    logo: "/assets/skills-pdf/p4_30_X44.png",
    roleUsage: "Schematic capture and printed circuit board layout for custom IoT hardware.",
  },
  {
    name: "EasyEDA",
    category: "industrial",
    logo: "/assets/skills-pdf/p4_31_X45.png",
    roleUsage: "Electronic circuit design and hardware prototyping for embedded systems.",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "mvp-dibimbing",
    title: "Most Valuable Person (MVP) — Top 1 Graduate AI/ML Bootcamp Batch 6",
    issuer: "Dibimbing.id",
    date: "September 2025",
    scoreOrBadge: "Top 1 MVP • 97.93/100 (A+)",
    description:
      "Awarded to the #1 top-performing graduate in recognition of outstanding technical mastery across Machine Learning, Deep Learning, RAG, and MLOps (Test: 99.75, Project: 96.00).",
    image: "/assets/certs/cert-dibimbing-mvp.png",
  },
  {
    id: "aiml-completion",
    title: "Certificate of Completion — AI & Machine Learning Bootcamp Batch 6",
    issuer: "Dibimbing.id",
    date: "Apr – Sep 2025",
    scoreOrBadge: "Final Grade: A+ (97.93)",
    description:
      "Intensive 6-month engineering program covering Python, SQL, Machine Learning, Deep Learning, LangChain LLM applications, and MLOps deployment.",
    image: "/assets/certs/cert-dibimbing-completion.png",
  },
  {
    id: "dibimbing-reportcard",
    title: "Official Academic Transcript & Report Card — AI/ML Batch 6",
    issuer: "Dibimbing.id",
    date: "September 2025",
    scoreOrBadge: "Concept Test: 99.75 • Project: 96.00 (A+)",
    description:
      "Official evaluation transcript highlighting 99.75/100 on Concept Tests, 96.00/100 on Engineering Projects, and Top 1 MVP distinction.",
    image: "/assets/certs/cert-dibimbing-reportcard.png",
  },
  {
    id: "efset-c1",
    title: "EF SET English Certificate — C1 Advanced",
    issuer: "EF Standard English Test (EF Education First)",
    date: "March 2025",
    scoreOrBadge: "C1 Advanced (61/100)",
    description:
      "Verified C1 Advanced English proficiency across Reading, Listening, Writing, and Speaking for international engineering and business communication.",
    image: "/assets/certs/cert-efset-c1.png",
  },
  {
    id: "toefl-597",
    title: "Certificate of Achievement — TOEFL English Proficiency Test",
    issuer: "Brighten English Pare Kediri",
    date: "March 2025 – March 2027",
    scoreOrBadge: "Total Score: 597",
    description:
      "Achieved a total TOEFL score of 597 (Listening Comprehension: 58, Structure & Written Expression: 56, Reading Comprehension: 65).",
    image: "/assets/certs/cert-toefl-597.png",
  },
  {
    id: "msib-pharos",
    title: "Kampus Merdeka MSIB Batch 5 — Electrical & IoT Specialist",
    issuer: "Ministry of Education & PT Inti Utama Solusindo (Pharos Group)",
    date: "Aug 2023 – Jan 2024",
    scoreOrBadge: "Outstanding Intern",
    description:
      "Certified national internship completing industrial IoT pressure balancing, PLC automation, C++ to Python migration, and YOLOv8 computer vision projects.",
    image: "/assets/certs/cert-msib-pharos.png",
  },
];

export const EDUCATION_DATA = [
  {
    institution: "Sebelas Maret University (UNS)",
    location: "Surakarta, Indonesia",
    degree: "Bachelor of Engineering (S.T.) in Electrical Engineering",
    period: "Aug 2020 – Jul 2024",
    badge: "GPA 3.80 / 4.00 (Cum Laude)",
    highlights: [
      "Honors: Highest GPA Achiever in 5th & 7th Semesters; Recipient of Independent MBKM UNS Research Grant.",
      "Final Thesis: 'Prototype Design of an Automatic Damper System for Balancing Process for Factory Room Sterilization' — engineered rapid, simultaneous multi-room air pressure balancing to eliminate cross-contamination risks.",
    ],
  },
  {
    institution: "Dibimbing.id",
    location: "Jakarta, Indonesia",
    degree: "Machine Learning & Artificial Intelligence Engineering Track",
    period: "Apr 2025 – Sep 2025",
    badge: "Top 1 MVP • 97.93 / 100 (Grade A+)",
    highlights: [
      "Component Scores: Concept Test 99.75/100, Engineering Projects 96.00/100, Job Connect Exam 90.00/100.",
      "Capstone Project: 'AI Trading Systems' (Score: 90/100) — Multi-layer LSTM stock forecasting & risk management platform served via FastAPI and Docker.",
    ],
  },
];

export const LEADERSHIP_DATA = [
  {
    role: "Chairman (Ketua Himpunan)",
    organization: "Student Association of Electrical Engineering (HMTE) UNS",
    period: "Feb 2022 – Dec 2022",
    description:
      "Led the entire Electrical Engineering student body, overseeing all departmental programs, academic collaborations, and official representation to university administration.",
  },
  {
    role: "Deputy Head of Community Development & Organizational Management",
    organization: "Karya Salemba Empat (KSE) Scholarship Community",
    period: "Aug 2022 – Aug 2024",
    description:
      "Spearheaded two consecutive terms driving community empowerment programs, member skill development, and cross-division event execution.",
  },
  {
    role: "Steering Committee & Deputy Head of Events",
    organization: "Sebelas Maret International IoT Challenge",
    period: "Mar 2021 – Aug 2022",
    description:
      "Defined competition rules, strategic vision, and international outreach, successfully attracting university teams from Thailand, the Philippines, Malaysia, Brunei, and Vietnam.",
  },
  {
    role: "Sponsorship & Public Relations",
    organization: "Bengawan Unmanned Vehicle (UV) Team UNS",
    period: "Jan 2021 – Dec 2022",
    description:
      "Secured corporate sponsorships, negotiated partnership agreements, and managed public relations campaigns for the university's autonomous vehicle research team.",
  },
];
