import {
    Rocket,
    Paintbrush,
    Code2,
    LineChart,
    Cloud,
    ShieldCheck,
    Smartphone,
    Layers,
    Cpu,
    Trophy,
    Users,
    Briefcase
} from 'lucide-react';

export const services = [
    {
        id: 'product-strategy',
        slug: 'product-strategy',
        title: "SaaS Product Strategy",
        description: "Launch your venture with a bulletproof roadmap. We define your MVP, user personas, and a scalable architecture.",
        icon: Rocket,
        features: ["Market Research", "MVP Definition", "Competitive Analysis", "Architecture Planning"],
        longDesc: "Our strategy sessions are designed to de-risk your investment by validating market fit before a single line of code is written. We help founders navigate the complex landscape of SaaS units economics and user retention strategies.",
        color: "blue"
    },
    {
        id: 'ui-ux-design',
        slug: 'ui-ux-design',
        title: "UI/UX Design Systems",
        description: "We design conversion-optimized interfaces that reflect your brand's elite positioning and provide world-class UX.",
        icon: Paintbrush,
        features: ["Visual Identity", "Atomic Design Systems", "Prototyping", "User Testing"],
        longDesc: "Design is more than aesthetics; it's about friction-less user journeys. We build robust design systems that allow your product to scale without visual debt, ensuring a consistent and premium experience across all touchpoints.",
        color: "indigo"
    },
    {
        id: 'custom-dev',
        slug: 'custom-dev',
        title: "Full-Stack Development",
        description: "Cloud-native, performant, and secure. We build SaaS systems that handle enterprise-level traffic from day one.",
        icon: Code2,
        features: ["React / Next.js", "Node.js / Go", "Microservices", "API Integration"],
        longDesc: "Using a modern, battle-tested stack, we engineer high-performance applications. Our focus on clean code and automated testing means your product is reliable, scalable, and easy to maintain by future teams.",
        color: "emerald"
    },
    {
        id: 'ai-analytics',
        slug: 'ai-analytics',
        title: "AI & Data Analytics",
        description: "Future-proof your SaaS with integrated LLMs and deep data insights that automate workflows and delight users.",
        icon: LineChart,
        features: ["LLM Integration", "Predictive Analytics", "Data Visualization", "Workflow Automation"],
        longDesc: "Leverage the power of artificial intelligence to provide your users with intelligent insights. We specialize in RAG (Retrieval-Augmented Generation) and custom model fine-tuning for niche industrial applications.",
        color: "purple"
    },
    {
        id: 'cloud-infrastructure',
        slug: 'cloud-infrastructure',
        title: "Cloud Infrastructure & DevOps",
        description: "Automated CI/CD, Kubernetes orchestration, and serverless architectures for maximum uptime and efficiency.",
        icon: Cloud,
        features: ["AWS / Azure / GCP", "Kubernetes", "CI/CD Pipelines", "Auto-scaling"],
        longDesc: "We build the invisible foundation that keeps your application running. Our DevOps strategies focus on reducing latency, managing costs, and enabling zero-downtime deployments.",
        color: "cyan"
    },
    {
        id: 'growth-marketing',
        slug: 'growth-marketing',
        title: "Growth Engineering",
        description: "We don't just build products; we build engines of growth. Integrated SEO, A/B testing, and conversion funnels.",
        icon: Layers,
        features: ["SEO Optimization", "A/B Testing", "Conversion Funnels", "Referral Loops"],
        longDesc: "Growth is a technical challenge. We integrate advanced tracking and experimentation tools directly into your codebase to help you optimize every stage of the user lifecycle, from acquisition to advocacy.",
        color: "amber"
    }
];

export const caseStudies = [
    {
        id: 1,
        title: "Fintech Revolution: Neobank Scaled to 1M Users",
        client: "Nebula Finance",
        category: "Fintech",
        results: "300% Growth in 6 Months",
        image: "https://images.unsplash.com/photo-1551288049-bbb652167ca8?q=80&w=1200",
        tags: ["React", "AWS", "Security"],
        description: "NexusForge rebuilt the core checkout and onboarding flows for Nebula Finance, reducing drop-off rates by 45%.",
        slug: "nebula-finance-case-study",
        fullStory: "Nebula Finance was struggling with a legacy system that couldn't handle the rapid influx of new users. Their onboarding process was taking over 10 minutes, leading to massive abandonment. We stepped in to architect a completely new frontend and a high-performance backend microservices layer.",
        challenges: [
            "High latency during peak transaction hours.",
            "Complex regulatory compliance (SOC2) requirements.",
            "Average onboarding time of 12 minutes."
        ],
        solutions: [
            "Implemented a serverless architecture on AWS for auto-scaling.",
            "Redesigned the onboarding flow into a 3-step, mobile-first experience.",
            "Integrated real-time KYC/AML verification for instant approval."
        ]
    },
    {
        id: 2,
        title: "AI-Powered HR: Automating Global Recruitment",
        client: "TalentFlow AI",
        category: "AI SaaS",
        results: "90% Reduction in Hiring Time",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
        tags: ["OpenAI", "Node.js", "Analytics"],
        description: "We integrated a custom GPT-4 based screening engine that analyzed 10,000+ resumes per hour with 98% accuracy.",
        slug: "talentflow-ai-case-study",
        fullStory: "TalentFlow AI needed to differentiate their product in a crowded market. We proposed a deep AI integration that went beyond simple keyword matching, using vector embeddings to understand the semantic intent of both job descriptions and candidate resumes.",
        challenges: [
            "Inconsistent resume formats causing parsing errors.",
            "High token costs for large-scale LLM processing.",
            "Need for multi-lingual support for global clients."
        ],
        solutions: [
            "Developed a proprietary OCR and normalization engine.",
            "Implemented a caching layer for common embedding queries.",
            "Native integration with OpenAI's latest models for diverse languages."
        ]
    },
    {
        id: 3,
        title: "Healthcare 2.0: Telemedicine Platform for Specialists",
        client: "MedLink Pro",
        category: "Healthcare",
        results: "Global Compliance Award 2025",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200",
        tags: ["React Native", "HIPAA", "WebRTC"],
        description: "A secure, HIPAA-compliant platform designed for ultra-low latency video consultations and integrated patient records.",
        slug: "medlink-pro-case-study",
        fullStory: "MedLink Pro's existing platform suffered from jitter and disconnects during critical consultations. We designed a custom WebRTC implementation optimized for medical imaging sharing during live calls.",
        challenges: [
            "Strict HIPAA and GDPR data residency requirements.",
            "Unreliable video quality on mobile networks.",
            "Legacy EHR system integration bottlenecks."
        ],
        solutions: [
            "End-to-end encrypted video streaming with TURN server fallback.",
            "Decentralized data architecture for regional compliance.",
            "FHIR-compliant API layer for seamless EHR connectivity."
        ]
    }
];

export const team = [
    {
        id: 1,
        name: "Marcus Thorne",
        role: "CEO & Product Visionary",
        slug: "marcus-thorne",
        image: "https://i.pravatar.cc/300?u=marcus",
        bio: "Ex-Google, 15 years in SaaS architecture.",
        longBio: "Marcus is a veteran product architect who has spent over a decade leading engineering teams at Google and various Silicon Valley unicorns. He specializes in distributed systems and scaling product-market fit for early-stage SaaS ventures.",
        specialties: ["Product Strategy", "System Architecture", "Leadership"],
        socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "CTO & Cloud Expert",
        slug: "sarah-jenkins",
        image: "https://i.pravatar.cc/300?u=sarah",
        bio: "AWS Community Hero, Kubernetes enthusiast.",
        longBio: "Sarah is a recognized expert in cloud native technologies and an active member of the AWS Community Hero program. She leads the technical roadmap at NexusForge, ensuring every platform is built with high availability and SOC2 security standards.",
        specialties: ["AWS Architecture", "DevOps", "Cybersecurity"],
        socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Head of Design",
        slug: "elena-rodriguez",
        image: "https://i.pravatar.cc/300?u=elena",
        bio: "Winner of Awwwards Site of the Year 2024.",
        longBio: "Elena is an award-winning UI/UX designer known for her ability to blend high-end aesthetics with conversion-focused design patterns. She has worked with global brands to redefine their digital presence through robust design systems.",
        specialties: ["UI/UX Design", "Atomic Design", "Branding"],
        socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        id: 4,
        name: "David Chen",
        role: "Principal AI Engineer",
        slug: "david-chen",
        image: "https://i.pravatar.cc/300?u=david",
        bio: "Stanford AI Lab researcher, LLM specialist.",
        longBio: "David brings deep academic and practical knowledge of machine learning to the team. Formerly a researcher at Stanford, he now focuses on integrating Large Language Models and custom RAG pipelines into production SaaS environments.",
        specialties: ["Machine Learning", "LLM Fine-tuning", "Python"],
        socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        id: 5,
        name: "Jessica Wu",
        role: "Senior Frontend Lead",
        slug: "jessica-wu",
        image: "https://i.pravatar.cc/300?u=jessica",
        bio: "React core contributor, performance obsessed.",
        longBio: "Jessica is a frontend powerhouse with a focus on web performance and accessible architecture. As a minor contributor to the React core project, she ensures NexusForge stays ahead of the curve with modern rendering patterns.",
        specialties: ["React / Next.js", "Web Performance", "TypeScript"],
        socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        id: 6,
        name: "Liam O'Connor",
        role: "Growth Strategist",
        slug: "liam-oconnor",
        image: "https://i.pravatar.cc/300?u=liam",
        bio: "Scaled 3 startups to $100M ARR.",
        longBio: "Liam is an expert in technical growth engineering, blending software development with marketing psychology. He helps our clients build viral loops and high-conversion funnels directly into their product's core DNA.",
        specialties: ["Growth Engineering", "Conversion Optimization", "Data Analytics"],
        socials: { twitter: "#", linkedin: "#", github: "#" }
    }
];

export const blogPosts = [
    {
        id: 1,
        title: "The 2026 SaaS State of the Art: Architecture Trends",
        excerpt: "Why micro-services are becoming micro-functions and the rise of autonomous agents.",
        author: "Marcus Thorne",
        date: "Feb 15, 2026",
        category: "Engineering",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
        slug: "2026-saas-architecture-trends",
        content: "As we move further into 2026, the traditional microservices approach is undergoing a radical shift toward micro-functions and serverless orchestration. The biggest driver? The need for autonomous agents to execute tasks in isolation but with high-speed interconnectivity. We are seeing a move away from persistent servers toward event-driven architectures that only exist when a user or an agent triggers them. This minimizes cost and maximizes security. Another key trend is the integration of Edge computing directly into the application logic, reducing latency to virtually zero for global users."
    },
    {
        id: 2,
        title: "How to Design for AI: Beyond the Chat Window",
        excerpt: "Integrating generative UI and invisible AI into your product workflow.",
        author: "Elena Rodriguez",
        date: "Feb 10, 2026",
        category: "Design",
        image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=800",
        slug: "designing-for-ai-generative-ui",
        content: "Users are getting tired of 'Chatbots'. The future of AI design is Generative UI—interfaces that adapt in real-time to the user's intent. Instead of a text bubble saying 'I can help you build a chart', the UI itself should transform to show a builder tool pre-populated with data. Designing for AI means designing for uncertainty. We must move from static layouts to fluid, component-based systems that an AI can assemble on the fly. 'Invisible AI' is another core concept; the user shouldn't see the AI working—they should just feel the product getting smarter and more anticipatory."
    },
    {
        id: 3,
        title: "The Hidden Cost of Scaling: Cloud Waste in 2026",
        excerpt: "Is your AWS bill eating your margins? Strategies for ultra-lean cloud operations.",
        author: "Sarah Jenkins",
        date: "Feb 05, 2026",
        category: "Cloud",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800",
        slug: "cloud-waste-scaling-costs",
        content: "Scaling isn't just about handling more traffic; it's about doing so efficiently. In 2026, many startups are finding that their cloud bills are growing faster than their revenue. We call this 'Cloud Waste'. Over-provisioning, unused reserved instances, and inefficient data transfer routes are the top culprits. Our approach focuses on FinOps—modern observability tools that flag wasteful spending in real-time. By moving to serverless and optimizing database queries, we've helped clients reduce their monthly cloud costs by up to 40% without sacrificing a single millisecond of performance."
    },
    {
        id: 4,
        title: "The Rise of Vertical SaaS: Why Horizontal is Dead",
        excerpt: "Why the next multi-billion dollar companies are building for hyper-specific industries.",
        author: "Liam O'Connor",
        date: "Jan 28, 2026",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
        slug: "rise-of-vertical-saas",
        content: "Horizontal SaaS platforms like generic CRMs are struggling to compete with Vertical SaaS players who build for specific niches—like a CRM designed specifically for independent coffee roasteries or a project management tool for renewable energy installers. Deep integration and industry-specific workflows are the new moats. In this post, we explore how founders can find these underserved verticals and why technical depth in a narrow field is more valuable than broad utility. We also look at the 'SaaS-plus' model, integrating fintech and insurance products directly into the workflow."
    },
    {
        id: 5,
        title: "Security as a Feature: Building Zero-Trust SaaS",
        excerpt: "How SOC2 compliance and zero-trust architecture can be your biggest sales weapon.",
        author: "Sarah Jenkins",
        date: "Jan 20, 2026",
        category: "Engineering",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
        slug: "building-zero-trust-saas",
        content: "Security is no longer a checklist for IT; it's a value proposition for CEOs. In an era of constant data breaches, building a Zero-Trust SaaS platform is a massive competitive advantage. Zero-Trust means never trust, always verify. Every request, whether it comes from inside or outside the network perimeter, must be authenticated and authorized. We walk through how to implement least-privileged access, end-to-end encryption for every database field, and why automated compliance auditing saves you hundreds of hours in the enterprise sales process."
    },
    {
        id: 6,
        title: "Unleashing LLMs in Production: Beyond Content Creation",
        excerpt: "Real-world strategies for building agentic AI features that solve complex problems.",
        author: "David Chen",
        date: "Jan 12, 2026",
        category: "AI",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
        slug: "llms-in-production-agentic-ai",
        content: "Autonomous agents are moving from research papers to production code. But building an agent that can reliably call tools and navigate complex logic is a significant engineering challenge. We discuss how to architect agentic workflows using LangGraph and custom state management, ensuring your AI features don't hallucinate during critical business processes."
    },
    {
        id: 7,
        title: "The Design System Trap: Component Libraries are Proof-of-Work",
        excerpt: "Why most design systems fail and how to build one that actually speeds up development.",
        author: "Elena Rodriguez",
        date: "Jan 05, 2026",
        category: "Design",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800",
        slug: "design-system-trap-development-velocity",
        content: "A design system without a tight link to engineering code is just a expensive PDF. Many teams spend months building a library in Figma only to realize it's impossible to implement or maintain. We explore the 'Code-First Design' approach, where foundations are built in CSS and React first, then reflected in design tools."
    },
    {
        id: 8,
        title: "B2B SaaS Growth: The Power of Multi-Stakeholder Funnels",
        excerpt: "Navigating the complex buying journey of enterprise software in 2026.",
        author: "Liam O'Connor",
        date: "Dec 20, 2025",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800",
        slug: "b2b-saas-enterprise-funnels",
        content: "In enterprise sales, you aren't selling to one person; you're selling to a committee. Your SaaS growth strategy must account for the needs of the end-user (UI), the manager (data), and the IT lead (security). We break down how to build content and features that address each stakeholder simultaneously."
    }
];

export const jobs = [
    { id: 1, title: "Senior AI Engineer (RAG Expert)", type: "Full-Time", location: "Global / Remote", department: "Engineering" },
    { id: 2, title: "Lead Product Designer", type: "Full-Time", location: "London / Hybrid", department: "Design" },
    { id: 3, title: "Growth Marketing Manager", type: "Full-Time", location: "Remote", department: "Marketing" },
    { id: 4, title: "Full-Stack React Engineer", type: "Full-Time", location: "Remote", department: "Engineering" }
];

export const testimonials = [
    { id: 1, name: "Alex Rivera", company: "FluxPay", role: "CEO", text: "NexusForge didn't just build our app; they built our business model. Their technical depth is unmatched.", avatar: "https://i.pravatar.cc/100?u=alex" },
    { id: 2, name: "Maya Sun", company: "NovaHealth", role: "CTO", text: "The security protocols and performance optimization NexusForge implemented saved us months of audit work.", avatar: "https://i.pravatar.cc/100?u=maya" },
    { id: 3, name: "Chris Evans", company: "ShipLogic", role: "Founder", text: "Working with NexusForge felt like having an elite internal engineering team from day one.", avatar: "https://i.pravatar.cc/100?u=chris" }
];

export const faqData = [
    { question: "What is the typical project timeline?", answer: "Most MVP builds take between 8 to 12 weeks, depending on complexity. Enterprise scales usually span 4-6 months." },
    { question: "Do you offer post-launch support?", answer: "Yes, we providing ongoing maintenance, DevOps monitoring, and growth engineering to help you scale securely." },
    { question: "How do you handle data security?", answer: "Security is baked into our DNA. We follow SOC2 and GDPR best practices, implementing zero-trust architectures for all SaaS projects." },
    { question: "Can you help with investor pitch decks?", answer: "While we are developers, we often assist founders with technical strategy and prototypes specifically designed to impress VC firms." }
];
