export type ProjectCategory = 'ai-ml' | 'devops' | 'web' | 'cybersecurity' | 'networking' | 'embedded';

export interface Project {
    title: string;
    slug: string;
    category: ProjectCategory;
    description: string;
    github: string;
    liveUrl?: string;
    tech: string[];
    features: string[];
    bannerLabel: string;
}

export const projects: Project[] = [
    {
        title: 'InsecureBank – Security Training Lab',
        slug: 'insecurebank-security-training-lab',
        category: 'cybersecurity',
        description:
            'Educational vulnerable-by-design web application for cybersecurity training with SQL Injection, XSS, and Broken Access Control simulations using Docker-isolated environments.',
        github: 'https://github.com/shimrin23',
        tech: ['Docker', 'Linux', 'Web Security', 'Authentication'],
        features: [
            'Security scenarios isolated in containerized environments',
            'Hands-on vulnerability exercises for training and demonstrations',
            'Authentication flow designed for controlled lab experimentation'
        ],
        bannerLabel: 'Security Lab'
    },
    {
        title: 'Real-Time Multiplayer Synchronization Engine',
        slug: 'real-time-multiplayer-synchronization-engine',
        category: 'networking',
        description:
            'High-concurrency C++ TCP socket architecture for real-time synchronization with optimized packet serialization and sub-50ms latency.',
        github: 'https://github.com/shimrin23/BikeRaceNetwork',
        tech: ['C++', 'TCP/IP', 'Socket Programming', 'Networking'],
        features: [
            'Low-latency state synchronization for multiplayer sessions',
            'Efficient packet serialization for real-time data exchange',
            'Concurrency-aware architecture for scalable networking workloads'
        ],
        bannerLabel: 'Networking Engine'
    },
    {
        title: 'Secure Full-Stack QA Application',
        slug: 'secure-full-stack-qa-application',
        category: 'web',
        description:
            'Secure full-stack app implementing JWT auth, BCrypt hashing, Selenium automation, JMeter testing, and GitHub Actions CI pipelines.',
        github: 'https://github.com/shimrin23/ToDoApp',
        tech: ['React', 'Node.js', 'JWT', 'Selenium', 'JMeter'],
        features: [
            'Authentication and password hashing built for secure account flows',
            'Automated testing coverage across functional and performance layers',
            'CI pipeline support through GitHub Actions'
        ],
        bannerLabel: 'Secure QA'
    },
    {
        title: 'Online Salon Booking System',
        slug: 'online-salon-booking-system',
        category: 'devops',
        description:
            'Enterprise-grade MERN booking platform with Terraform AWS provisioning, Dockerized services, and Jenkins CI/CD pipelines.',
        github: 'https://github.com/shimrin23/Online-Salon-Booking',
        tech: ['MERN', 'AWS', 'Terraform', 'Docker', 'Jenkins'],
        features: [
            'Infrastructure-as-code provisioning on AWS',
            'Containerized deployment pipeline for repeatable environments',
            'Booking workflow designed for operational reliability'
        ],
        bannerLabel: 'DevOps Platform'
    },
    {
        title: 'Vision-Based Vehicle Speed Estimation',
        slug: 'vision-based-vehicle-speed-estimation',
        category: 'ai-ml',
        description:
            'Real-time edge AI traffic monitoring system using YOLOv8, DeepSORT, and homography-based velocity estimation.',
        github: 'https://github.com/shimrin23/Vision-Based-Vehicle-Speed-Estimation',
        tech: ['Python', 'YOLOv8', 'OpenCV', 'DeepSORT'],
        features: [
            'Real-time object detection and multi-object tracking',
            'Computer vision pipeline tuned for traffic monitoring',
            'Edge-oriented processing for practical deployment scenarios'
        ],
        bannerLabel: 'Edge AI'
    },
    {
        title: 'MoneyManager – AI Financial Coach',
        slug: 'moneymanager-ai-financial-coach',
        category: 'ai-ml',
        description:
            'AI-powered financial analytics platform integrating Gemini API for personalized financial insights and predictive health scoring.',
        github: 'https://github.com/shimrin23/MoneyManager',
        tech: ['React', 'Node.js', 'Gemini API', 'JWT'],
        features: [
            'Personalized guidance powered by AI-assisted insights',
            'Secure user flows with token-based authentication',
            'Analytics-first UI for financial decision support'
        ],
        bannerLabel: 'AI FinTech'
    },
    {
        title: 'Concrete Strength Prediction System',
        slug: 'concrete-strength-prediction-system',
        category: 'ai-ml',
        description:
            'Machine learning system using Linear Regression and SVM models for concrete compressive strength prediction.',
        github: 'https://github.com/shimrin23/Concrete-Strength-Prediction',
        tech: ['Python', 'Scikit-learn', 'Pandas'],
        features: [
            'Predictive modeling workflow for engineering datasets',
            'Comparative evaluation across classical ML methods',
            'Data preparation pipeline optimized for repeatability'
        ],
        bannerLabel: 'ML Prediction'
    },
    {
        title: 'HDL-Based 4-Floor Lift Controller',
        slug: 'hdl-based-4-floor-lift-controller',
        category: 'embedded',
        description:
            'Verilog-based FSM elevator controller with safety interlocks and RTL simulation testing.',
        github: 'https://github.com/shimrin23/HDL-Based-4-Floor-Lift-Controller',
        tech: ['Verilog', 'FSM', 'RTL Simulation'],
        features: [
            'State-machine control logic for reliable floor selection',
            'Safety interlocks designed into the RTL flow',
            'Simulation-backed validation of controller behavior'
        ],
        bannerLabel: 'Hardware Logic'
    },
    {
        title: 'Collaborative Job Searching Mobile App',
        slug: 'collaborative-job-searching-mobile-app',
        category: 'web',
        description:
            'Cross-platform Flutter and Firebase application with scalable real-time synchronization architecture.',
        github: 'https://github.com/shimrin23/job-searching-app',
        tech: ['Flutter', 'Firebase', 'Mobile Development'],
        features: [
            'Cross-platform mobile experience with real-time sync',
            'Scalable backend integration using Firebase services',
            'Collaborative workflow for job search organization'
        ],
        bannerLabel: 'Mobile App'
    }
];

export const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter'],
    backend: ['Node.js', 'Express.js', 'Java', 'Python', 'C++', 'REST APIs'],
    database: ['MongoDB', 'MySQL', 'Firebase'],
    devops: ['Docker', 'Jenkins', 'Terraform', 'AWS EC2', 'GitHub Actions', 'Linux'],
    cybersecurity: ['JWT', 'RBAC', 'BCrypt', 'SQL Injection Testing', 'XSS Testing'],
    aiMl: ['YOLOv8', 'DeepSORT', 'Scikit-learn', 'Pandas', 'NumPy'],
    networking: ['TCP/IP', 'Socket Programming', 'Client-Server Architecture', 'Real-Time Synchronization']
} as const;

export type ExperienceType = 'exhibition' | 'engineering' | 'devops' | 'research' | 'cybersecurity';

export interface Experience {
    title: string;
    type: ExperienceType;
    organization: string;
    period: string;
    summary: string;
    highlights: string[];
}

export const experience: Experience[] = [
    {
        title: 'REXTRO 2024 Exhibition',
        type: 'exhibition',
        organization: 'University of Ruhuna',
        period: '2024',
        summary:
            'Presented cybersecurity-focused educational systems and demonstrated secure engineering concepts through hands-on vulnerable application environments.',
        highlights: [
            'Cybersecurity demonstrations',
            'Technical presentation',
            'Collaborative engineering showcase'
        ]
    },
    {
        title: 'Real-Time Systems & Networking Engineering',
        type: 'engineering',
        organization: 'Software Engineering Projects',
        period: 'Ongoing',
        summary:
            'Built concurrent client-server architectures using TCP sockets, focusing on low-latency synchronization and distributed communication reliability.',
        highlights: [
            'Socket programming',
            'Sub-50ms synchronization',
            'Concurrent architectures'
        ]
    },
    {
        title: 'DevOps & Cloud Infrastructure Projects',
        type: 'devops',
        organization: 'Cloud Infrastructure',
        period: 'Ongoing',
        summary:
            'Provisioned scalable AWS infrastructure using Terraform and automated CI/CD workflows using Jenkins and GitHub Actions.',
        highlights: [
            'Terraform infrastructure',
            'Dockerized deployments',
            'CI/CD pipelines'
        ]
    },
    {
        title: 'AI/ML Research & Computer Vision',
        type: 'research',
        organization: 'AI/ML Research',
        period: 'Ongoing',
        summary:
            'Developed edge-based AI systems using YOLOv8, DeepSORT, and machine learning pipelines for real-time analytics and prediction systems.',
        highlights: [
            'Computer vision pipelines',
            'Edge AI processing',
            'ML model optimization'
        ]
    },
    {
        title: 'Secure Full-Stack Application Engineering',
        type: 'cybersecurity',
        organization: 'Cybersecurity & Full-Stack',
        period: 'Ongoing',
        summary:
            'Built secure web systems implementing JWT authentication, RBAC authorization, BCrypt hashing, automated testing, and secure API architectures.',
        highlights: [
            'JWT authentication',
            'RBAC authorization',
            'Security-focused engineering'
        ]
    }
];

export const certifications = [] as const;

export const socialLinks = {
    github: 'https://github.com/shimrin23',
    linkedin: '',
    email: 'mailto:shimrin@example.com'
} as const;