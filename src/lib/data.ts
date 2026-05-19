export type ProjectCategory = 'ai-ml' | 'devops' | 'web' | 'cybersecurity' | 'networking';

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
        category: 'cybersecurity',
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
        category: 'web',
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

export const experience = [
    {
        title: 'REXTRO 2024 Exhibition Participant',
        organization: 'University of Ruhuna',
        period: '2024',
        summary:
            'Presented engineering work in a public exhibition setting, translating technical detail into clear communication for diverse audiences.'
    },
    {
        title: 'Software Engineering Project Builder',
        organization: 'Academic and independent projects',
        period: 'Ongoing',
        summary:
            'Developed secure full-stack applications, real-time systems, and deployment workflows with a focus on maintainability and measurable outcomes.'
    },
    {
        title: 'AI/ML Research Contributor',
        organization: 'Applied computer vision and predictive modeling work',
        period: 'Ongoing',
        summary:
            'Explored practical machine learning pipelines spanning object detection, tracking, and regression-based prediction models.'
    },
    {
        title: 'DevOps & Cloud Practitioner',
        organization: 'Infrastructure and CI/CD experiments',
        period: 'Ongoing',
        summary:
            'Applied Docker, Terraform, AWS, Jenkins, and GitHub Actions to create repeatable delivery and deployment pipelines.'
    },
    {
        title: 'Cybersecurity Training Builder',
        organization: 'Security lab projects',
        period: 'Ongoing',
        summary:
            'Constructed security-focused training environments for authentication, access control, and web vulnerability testing.'
    }
] as const;

export const certifications = [] as const;

export const socialLinks = {
    github: 'https://github.com/shimrin23',
    linkedin: '',
    email: 'mailto:shimrin@example.com'
} as const;