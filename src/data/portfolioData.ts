import type { Project, SkillCategory, Strength, EducationInfo, AboutCard, StatItem } from '../types/portfolio';

export const personalInfo = {
  name: "Matrika Gupta",
  shortName: "Matrika",
  title: "B.Tech Student • AI & Data Science",
  role: "Computer Science & Engineering Student",
  degree: "B.Tech — Computer Science & Engineering (Artificial Intelligence & Data Science)",
  specialization: "Artificial Intelligence & Data Science",
  university: "REVA University",
  location: "Bangalore, Karnataka, India",
  phone: "9310348803",
  email: "guptamatrika76@gmail.com",
  age: 19,
  status: "Currently pursuing B.Tech",
  statusShort: "Currently pursuing B.Tech",
  resumePath: "/resume.pdf", // Configurable resume file path
  tagline: "Building skills. Solving problems. Exploring technology.",
  heroSubheading: "Computer Science & Engineering student passionate about Artificial Intelligence, Data Science, and building practical technology solutions.",
};

export const dashboardStats: StatItem[] = [
  {
    label: "Projects Built",
    value: "2+",
    subtext: "Smart IoT & Embedded Solutions",
    iconName: "FolderGit2",
  },
  {
    label: "Domain Focus",
    value: "AI & Data",
    subtext: "Artificial Intelligence & Analytics",
    iconName: "BrainCircuit",
  },
  {
    label: "Academic Status",
    value: "B.Tech",
    subtext: "REVA University • Bangalore",
    iconName: "GraduationCap",
  },
  {
    label: "Core Aptitude",
    value: "Problem Solver",
    subtext: "Practical Engineering Mindset",
    iconName: "Cpu",
  },
];

export const aboutData = {
  heading: "About Me",
  bio: "Motivated and enthusiastic B.Tech student specializing in Computer Science & Engineering with Artificial Intelligence & Data Science. I am interested in technology, problem-solving, and developing practical solutions through innovative projects. I enjoy exploring new technologies and applying what I learn to real-world problems.",
  timelineBadge: "2026 → Currently pursuing B.Tech",
  cards: [
    {
      title: "Curious Learner",
      description: "Always exploring new technologies and concepts.",
      iconName: "Sparkles",
    },
    {
      title: "Problem Solver",
      description: "Interested in converting real-world problems into practical technical solutions.",
      iconName: "Wrench",
    },
    {
      title: "Future Technologist",
      description: "Focused on building strong skills in programming, AI, and data science.",
      iconName: "Rocket",
    },
  ] as AboutCard[],
};

export const educationData: EducationInfo = {
  institution: "REVA University",
  degree: "B.Tech — Computer Science & Engineering",
  specialization: "Artificial Intelligence & Data Science",
  location: "Bangalore, Karnataka, India",
  status: "Currently Pursuing",
  timeline: "2026 → Active Undergraduate",
  overview: "Pursuing in-depth academic foundation in computational theory, AI algorithms, data analytics, sensor systems, and modern software engineering principles.",
  keySubjects: [
    "Artificial Intelligence Fundamentals",
    "Data Science & Statistical Analysis",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Computer Networks & IoT Systems"
  ],
};

export const projectsData: Project[] = [
  {
    id: "binwise-smart-dustbin",
    number: "01",
    title: "BinWise — Automated Smart Dustbin",
    tagline: "Automated waste disposal system with hands-free proximity operation",
    description: "An automated smart dustbin designed to improve waste disposal through automation and reduce the need for manual interaction.",
    features: [
      "Automated waste disposal",
      "Smart waste-management concept",
      "User-friendly design",
      "Practical IoT-oriented application"
    ],
    tags: ["IoT", "Automation", "Smart Systems"],
    category: "IoT",
    status: "Completed Prototype",
    illustrationType: "dustbin-iot",
    detailedOverview: "BinWise addresses daily hygiene and waste management challenges by automating bin lid operations and monitoring container status. Utilizing ultrasonic distance detection, the system detects user proximity in real-time and actuates a rapid servo mechanism to open and close smoothly without physical contact.",
    technicalHighlights: [
      "Contactless proximity sensing triggering automated lid actuation",
      "Optimized power consumption model for prolonged battery life",
      "Seamless integration of sensor threshold calibration to avoid false triggers",
      "Scalable architecture ready for remote fill-level telemetry"
    ],
    componentsUsed: [
      "Ultrasonic Proximity Sensor (HC-SR04)",
      "Microcontroller Unit (Arduino/ESP)",
      "Servo Actuator Motor (SG90/MG995)",
      "Regulated Power Supply & Housing Chassis"
    ],
    systemFlow: [
      "1. Proximity sensor constantly scans 15-20cm range",
      "2. Microcontroller reads echo signals & filters ambient noise",
      "3. Trigger pulse sent to servo to smoothly open lid (90°)",
      "4. Configurable hold delay (3-5s) before smooth auto-closure"
    ],
    links: {
      demo: undefined,
      repo: undefined,
      docs: undefined
    }
  },
  {
    id: "noise-detector-machine",
    number: "02",
    title: "Noise Detector Machine",
    tagline: "Real-time acoustic sound level monitoring and threshold alerting device",
    description: "A noise detection machine designed to detect surrounding sound levels and provide an indication when noise crosses a predefined threshold.",
    features: [
      "Sound/noise detection",
      "Threshold-based indication",
      "Sensor-based monitoring",
      "Real-world environmental application"
    ],
    tags: ["Sensors", "Electronics", "Monitoring", "IoT"],
    category: "Hardware",
    status: "Completed Prototype",
    illustrationType: "noise-sensor",
    detailedOverview: "Designed for quiet zones like libraries, study halls, smart classrooms, and hospital wards, this system continuously samples environmental decibel levels. When ambient noise surpasses the calibrated threshold, it activates visual and audible alert indicators.",
    technicalHighlights: [
      "High-sensitivity acoustic diaphragm sensor for ambient sound sampling",
      "Hardware comparator & analog-to-digital threshold potentiometer adjustment",
      "Multi-stage visual alert system (Green = Normal, Yellow = Warning, Red = Alert)",
      "Fast response cycle with minimal signal latency (<50ms)"
    ],
    componentsUsed: [
      "Electret Microphone / Sound Sensor Module",
      "LM393 Audio Voltage Comparator / ADC",
      "RGB Threshold Indicator LEDs & Piezo Buzzer",
      "Microcontroller Signal Processing Unit"
    ],
    systemFlow: [
      "1. Sound waves captured and converted to analog voltage",
      "2. On-board comparator measures against preset threshold voltage",
      "3. Microcontroller computes peak sound frequency & duration",
      "4. Visual/audio alerts triggered when sound exceeds acceptable baseline"
    ],
    links: {
      demo: undefined,
      repo: undefined,
      docs: undefined
    }
  }
];

export const skillsData: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming & Software Development",
    iconName: "Code2",
    description: "Core algorithms, data structures, and computational problem solving.",
    focusAreas: ["Core Programming", "Data Structures", "Object-Oriented Design", "Algorithm Logic", "Clean Code"],
    badgeColor: "indigo"
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    iconName: "BrainCircuit",
    description: "Foundational AI paradigms, neural concepts, and intelligent system architectures.",
    focusAreas: ["AI Principles", "Intelligent Agents", "Search Algorithms", "Knowledge Representation"],
    badgeColor: "violet"
  },
  {
    id: "data-science",
    name: "Data Science",
    iconName: "BarChart3",
    description: "Data exploration, statistical modeling, and analytical insights extraction.",
    focusAreas: ["Data Analysis", "Exploratory Data Insights", "Statistical Modeling", "Data Interpretation"],
    badgeColor: "blue"
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    iconName: "Network",
    description: "Supervised and unsupervised learning techniques and evaluation metrics.",
    focusAreas: ["Supervised Learning", "Classification & Regression", "Pattern Recognition", "Model Evaluation"],
    badgeColor: "purple"
  },
  {
    id: "iot",
    name: "IoT & Smart Systems",
    iconName: "Cpu",
    description: "Hardware-software integration, microcontroller programming, and sensor telemetry.",
    focusAreas: ["Sensor Interfacing", "Automation Circuits", "Microcontroller Logic", "Threshold Monitoring"],
    badgeColor: "cyan"
  },
  {
    id: "problem-solving",
    name: "Problem Solving",
    iconName: "Lightbulb",
    description: "Breaking complex real-world challenges into structured technical implementations.",
    focusAreas: ["Analytical Thinking", "Algorithmic Decomposition", "System Design", "Iterative Debugging"],
    badgeColor: "emerald"
  }
];

export const strengthsData: Strength[] = [
  {
    id: "quick-learner",
    title: "Quick Learner",
    description: "Adaptable and enthusiastic about learning new technologies.",
    iconName: "Zap",
    badge: "Continuous Growth"
  },
  {
    id: "problem-solver",
    title: "Creative Problem Solver",
    description: "Enjoys approaching technical challenges with practical solutions.",
    iconName: "Lightbulb",
    badge: "Practical Solutions"
  },
  {
    id: "collaboration",
    title: "Team Collaboration",
    description: "Comfortable working and learning collaboratively.",
    iconName: "Users",
    badge: "Team Player"
  },
  {
    id: "adaptability",
    title: "Adaptability",
    description: "Able to adjust to new environments, tools, and challenges.",
    iconName: "Compass",
    badge: "Flexible Mindset"
  }
];

export const careerObjectiveData = {
  heading: "Career Objective",
  statement: "To build a strong career in the technology industry by continuously developing my programming, AI, and data science skills while working on meaningful real-world projects.",
  corePillars: [
    { title: "Continuous Learning", desc: "Mastering evolving paradigms in AI & Data Science" },
    { title: "Practical Application", desc: "Translating theoretical concepts into functional solutions" },
    { title: "Impactful Engineering", desc: "Contributing to impactful, real-world technological innovation" }
  ]
};

export const contactData = {
  heading: "Let's Connect",
  subheading: "I'm always interested in learning, building, and exploring new opportunities in technology.",
  location: "Bangalore, Karnataka, India",
  phone: "9310348803",
  email: "guptamatrika76@gmail.com",
  statusNote: "Open for academic projects, internships, and technical collaborations.",
};
