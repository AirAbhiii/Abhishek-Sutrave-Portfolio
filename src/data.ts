export interface ResumeData {
  basics: {
    name: string;
    title: string;
    summary: string;
    location: string;
    email: string;
    phone: string;
    links: {
      linkedin: string;
      github: string;
      leetcode: string;
    };
  };
  education: Array<{
    institution: string;
    location: string;
    degree: string;
    detail: string;
    dates: string;
  }>;
  coursework: string[];
  experience: Array<{
    company: string;
    role: string;
    dates: string;
    location: string;
    bullets: string[];
  }>;
  projects: Array<{
    title: string;
    stack: string[];
    bullets: string[];
    date: string;
  }>;
  technicalSkills: {
    languages: string[];
    librariesTools: string[];
    technologiesFrameworks: string[];
  };
  achievements: string[];
  certifications: string[];
}

export const resumeData: ResumeData = {
  basics: {
    name: "Abhishek Sutrave",
    title: "Aspiring DevOps & AI Engineer",
    summary: "As an aspiring DevOps practitioner and  AI Engineer, I specialize in building decentralized platforms, deep learning vision models, and responsive web ecosystems. Deeply focused on solidifying modern cloud, containerization, and automated CI/CD workflows, I bridge the gap between high-performance machine learning execution and scalable backend systems.",
    location: "Pune, India",
    email: "abhisheksutravel824@gmail.com",
    phone: "+91-9604476051",
    links: {
      linkedin: "https://www.linkedin.com/in/abhishek-sutrave-662a853bb?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github:"https://github.com/AirAbhiii",
      leetcode: "https://leetcode.com/u/Abhisheksutrave__/"
    }
  },
  education: [
    {
      institution: "University of Mumbai",
      location: "Navi Mumbai, India",
      degree: "Computer Engineering",
      detail: "CGPA: 7.02",
      dates: "2022 – 2026"
    },
    {
      institution: "Sinhgad Public School",
      location: "Lonavala, India",
      degree: "AISSCE Class XII",
      detail: "Percentage: 73%",
      dates: "2020 – 2022"
    }
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Database Management System (DBMS)",
    "Artificial Intelligence",
    "OOPS Concept"
  ],
  experience: [
    {
      company: "Oasis Infobyte",
      role: "Data Science Intern",
      dates: "March 2025 – April 2025",
      location: "Remote",
      bullets: [
        "Performed data preprocessing and cleaning on structured datasets using Python libraries such as Pandas and NumPy.",
        "Built and evaluated machine learning models using Scikit-learn for classification and regression tasks.",
        "Visualized data insights using Matplotlib and Seaborn to support data-driven decision making."
      ]
    }
  ],
  projects: [
    {
      title: "Blockchain-Based Organ Donation & AI Platform",
      stack: ["Solidity", "Web3.js", "Python", "Scikit-learn", "Gemini AI", "Flask", "Ethereum"],
      date: "March 2026",
      bullets: [
        "Decentralized Architecture: Engineered immutable donor-recipient registries via Solidity smart contracts, establishing absolute data integrity and transparent audit trails on the local Ethereum blockchain network.",
        "AI Chatbot Integration: Leveraged Google Gemini AI to implement VitaVault, a contextual multi-turn conversational agent facilitating instant diagnostic guidance and automated end-user navigation workflows.",
        "Predictive Analytics Engine: Formulated a machine learning pipeline utilizing Logistic Regression models via Scikit-learn to parse clinical metrics and compute high-accuracy recipient organ compatibility and transplant success probabilities."
      ]
    },
    {
      title: "Brain Tumor Detection",
      stack: ["Python", "CNN", "TensorFlow", "Keras", "OpenCV", "Deep Learning"],
      date: "January 2025",
      bullets: [
        "Neural Network Engineering: Designed and deployed a robust, multi-layer Convolutional Neural Network (CNN) architecture to process and automatically classify digital brain MRI scans into four complex clinical diagnostic categories.",
        "Computer Vision Pipeline: Formulated rigorous image preprocessing routines incorporating pixel intensity normalization, spatial resizing, and adaptive data augmentation using OpenCV to counter dataset imbalance.",
        "Performance Optimization: Supervised systematic hyperparameter tuning to achieve a peak training efficiency of 99% and an exceptional 98% validation accuracy by Epoch 18, limiting total validation loss to an optimal 0.003."
      ]
    },
    {
      title: "Order Tracking Web Application",
      stack: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      date: "March 2025",
      bullets: [
        "Full-Stack Engineering: Architected an asynchronous, responsive MERN-stack web ecosystem focused on enabling end-to-end, live item shipment tracking utilizing cryptographically structured unique system identifiers.",
        "RESTful Web Services: Programmed secure backend REST API endpoints managing full CRUD operational lifecycles with robust JSON request body validation schemas, input filtering, and precise server-side exception handling.",
        "Responsive UI Engineering: Leveraged Tailwind CSS to architect a modern, fully adaptive frontend interface, optimizing asset rendering and cross-device performance for seamless state visualization."
      ]
    }
  ],
  technicalSkills: {
    languages: ["Python", "Java", "C", "C++", "JavaScript", "SQL"],
    librariesTools: ["VS Code", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "Keras", "OpenCV"],
    technologiesFrameworks: ["GitHub", "MySQL", "Node.js", "Express.js", "MongoDB", "Ether.js/Web3", "Flask", "Solidity"]
  },
  achievements: [
    "Solved 300+ LeetCode problems (Java, JavaScript, SQL, Pandas). Earned 6+ badges on LeetCode; Top 10 percent solutions in runtime and memory.",
    "Enigma Hackathon (IIT-BHU) – Created a data-driven ML solution in a national-level technical event."
  ],
  certifications: [
    "AWS Solutions Architecture Job Simulation",
    "Deloitte Virtual Internship Data Science",
    "Accenture Developer Internship Tech and Consulting"
  ]
};
