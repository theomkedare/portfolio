export interface Lesson {
  title: string;
  duration: string;
}

export interface CurriculumSection {
  title: string;
  lessons: Lesson[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  students: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  category: string;
  language: string;
  certificate: boolean;
  curriculum: CurriculumSection[];
  features: string[];
  faq: FAQItem[];
  learningOutcomes: string[];
  requirements: string[];
  popular?: boolean;
  bestSeller?: boolean;
}

export const courses: Course[] = [
  {
    id: "course_nextjs15",
    slug: "nextjs15-deep-dive",
    title: "Next.js 15 Deep Dive: Master App Router & Server Actions",
    subtitle: "Learn production-grade Next.js development including PPR, Server Actions, and advanced performance optimizations.",
    description: "Go from intermediate React developer to an elite Next.js engineer. This course covers everything from basic App Router conventions to complex state management, data caching models, Partial Prerendering (PPR), Next.js 15 Server Actions, and middleware systems.",
    price: 1999,
    originalPrice: 4999,
    rating: 4.9,
    students: 1240,
    duration: "14h 45m",
    level: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    category: "Next.js",
    language: "English",
    certificate: true,
    popular: true,
    bestSeller: true,
    features: [
      "14.5 hours of high-quality HD videos",
      "Full GitHub access to project repositories",
      "Lifetime access to content & updates",
      "Access to private Discord channel for support",
      "Official certificate of completion"
    ],
    learningOutcomes: [
      "Build high-performance web applications using Next.js 15 App Router",
      "Implement secure Server Actions for mutative data operations",
      "Master Partial Prerendering (PPR) and streaming rendering pipelines",
      "Optimize data caching, revalidation, and static generation",
      "Write edge middleware for custom authentication, headers, and geolocation routing"
    ],
    requirements: [
      "Solid understanding of JavaScript/ES6+ and modern React (Hooks, state, effects)",
      "Basic familiarity with HTML, CSS, and styling with Tailwind CSS",
      "Node.js installed on your machine and basic terminal commands usage"
    ],
    faq: [
      {
        question: "Is this course updated for Next.js 15?",
        answer: "Yes, 100%. The course has been recorded and updated specifically for Next.js 15, React 19, and the newest App Router specifications including Server Actions stability."
      },
      {
        question: "Do I get a certificate at the end?",
        answer: "Absolutely! Once you complete all lessons, you can generate and download a personalized digital Certificate of Completion."
      },
      {
        question: "Is there support if I get stuck?",
        answer: "Yes! You will receive an invite to our exclusive Discord student community where you can ask questions and get help from the instructor and peers."
      }
    ],
    curriculum: [
      {
        title: "Section 1: Getting Started with Next.js 15",
        lessons: [
          { title: "Course Introduction & Setup", duration: "12:15" },
          { title: "Next.js Architecture Overview", duration: "18:40" },
          { title: "File-System Routing Basics", duration: "22:10" }
        ]
      },
      {
        title: "Section 2: App Router Deep Dive",
        lessons: [
          { title: "Layouts, Templates & Nested Routes", duration: "25:35" },
          { title: "Dynamic Routes & Parallel/Intercepted Routes", duration: "32:12" },
          { title: "Server Components vs Client Components", duration: "28:50" }
        ]
      },
      {
        title: "Section 3: Data Fetching and Caching",
        lessons: [
          { title: "Optimizing fetch() with Next.js Cache", duration: "24:05" },
          { title: "Incremental Static Regeneration (ISR)", duration: "19:55" },
          { title: "Partial Prerendering (PPR) Setup", duration: "35:40" }
        ]
      },
      {
        title: "Section 4: Server Actions & Mutative APIs",
        lessons: [
          { title: "Server Actions Deep Dive & Security", duration: "30:15" },
          { title: "Optimistic Updates with useOptimistic", duration: "22:45" },
          { title: "Form Handling & Server-side Validation", duration: "27:10" }
        ]
      }
    ]
  },
  {
    id: "course_fullstack_saas",
    slug: "fullstack-saas-dev",
    title: "Full-Stack SaaS Bootcamp: Next.js, Postgres & Stripe",
    subtitle: "Launch a SaaS from scratch. Implement billing, user auth, database models, and scalable architectures.",
    description: "Stop building toy applications. Build a commercial-grade, multi-tenant software-as-a-service application. Learn database design with Postgres (Prisma), user management, subscription mechanics with Stripe, and deployment processes.",
    price: 2999,
    originalPrice: 6999,
    rating: 4.8,
    students: 860,
    duration: "18h 30m",
    level: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    category: "Full Stack",
    language: "English",
    certificate: true,
    popular: false,
    bestSeller: true,
    features: [
      "18.5 hours of step-by-step videos",
      "Ready-to-use SaaS boilerplate template code",
      "Lifetime updates and community Q&A access",
      "Step-by-step PostgreSQL deployment tutorials",
      "Verified Certificate of Completion"
    ],
    learningOutcomes: [
      "Design multi-tenant database systems using Postgres and Prisma ORM",
      "Integrate robust email/password & OAuth flows with NextAuth.js / Auth.js",
      "Build tiered subscription billing models with Stripe webhooks",
      "Implement multi-tenant workspaces and custom organization management",
      "Deploy scalable serverless applications to Vercel with clean environment setups"
    ],
    requirements: [
      "Comfortable writing modern Javascript and basic React functions",
      "Basic understanding of SQL, REST APIs, and HTTP requests",
      "A Stripe account (Developer Test Mode will be used)"
    ],
    faq: [
      {
        question: "Do we deploy to production?",
        answer: "Yes. By the end of the course, you will deploy a fully working SaaS to Vercel connected to a live hosted PostgreSQL database on Neon/Supabase."
      },
      {
        question: "Can I use this codebase for my own business?",
        answer: "Absolutely! The license allows you to reuse the course project boilerplate to launch your own real commercial startup or portfolio project."
      }
    ],
    curriculum: [
      {
        title: "Section 1: Planning and Architecture",
        lessons: [
          { title: "SaaS Blueprint & DB Schema design", duration: "15:20" },
          { title: "Project Setup & Clean Architecture", duration: "20:45" }
        ]
      },
      {
        title: "Section 2: Database Layer & Authentication",
        lessons: [
          { title: "Connecting Postgres with Prisma", duration: "32:10" },
          { title: "Auth.js Setup: Credentials & Google Login", duration: "42:15" },
          { title: "Securing Pages and API Routes", duration: "25:30" }
        ]
      },
      {
        title: "Section 3: Stripe Billing Integration",
        lessons: [
          { title: "Stripe Webhook Handler Setup", duration: "38:40" },
          { title: "Creating Checkout Sessions & Portals", duration: "34:10" },
          { title: "Managing Subscription States in PostgreSQL", duration: "29:50" }
        ]
      }
    ]
  },
  {
    id: "course_ai_coding",
    slug: "ai-coding-acceleration",
    title: "AI-Driven Coding: 10x Your Productivity",
    subtitle: "Unleash LLMs, modern coding agents, and IDE tools to speed up building premium products.",
    description: "Learn how to use AI tools responsibly and powerfully to design, build, test, and refactor complete web applications. We cover prompt engineering, automated script building, coding agents, and using tools like Cursor.",
    price: 999,
    originalPrice: 3999,
    rating: 4.7,
    students: 1980,
    duration: "8h 15m",
    level: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
    category: "AI & Tools",
    language: "English",
    certificate: true,
    popular: false,
    bestSeller: false,
    features: [
      "8+ hours of dense, actionable lessons",
      "Cheat sheets for prompts and system rules",
      "Private AI Developer Discord group access",
      "Lifetime access on mobile and desktop",
      "Digital completion certificate"
    ],
    learningOutcomes: [
      "Write advanced AI system prompts and customized system profiles",
      "Debug complex stack traces and legacy code in seconds using LLMs",
      "Automate test suite creation and boilerplate code generation",
      "Understand the mechanics of AI coding agents and autonomous coding workflows",
      "Increase software delivery speed safely without sacrificing quality"
    ],
    requirements: [
      "Basic understanding of any programming language (JavaScript, Python, etc.)",
      "Familiarity with general VS Code (or Cursor/Zed) shortcuts and layouts",
      "Free OpenAI / Anthropic accounts for API credentials (optional, but recommended)"
    ],
    faq: [
      {
        question: "Is this course for experienced developers?",
        answer: "Yes! While beginners will find it incredibly helpful, seasoned developers will learn advanced techniques to automate documentation, create tests, and accelerate complex code refactoring."
      },
      {
        question: "Which AI tools are covered?",
        answer: "We focus on general principles alongside deep dives into Cursor, Claude 3.5 Sonnet, ChatGPT, Gemini, and code generation scripts."
      }
    ],
    curriculum: [
      {
        title: "Section 1: Core AI Foundations",
        lessons: [
          { title: "Understanding LLMs in Software Engineering", duration: "14:22" },
          { title: "Prompt Engineering Guidelines for Developers", duration: "18:40" }
        ]
      },
      {
        title: "Section 2: Mastering Modern IDE Tools",
        lessons: [
          { title: "Moving from VS Code to Cursor", duration: "25:10" },
          { title: "Utilizing Agentic Composer Features", duration: "32:15" },
          { title: "Effective Context Management Strategies", duration: "22:50" }
        ]
      }
    ]
  },
  {
    id: "course_payments",
    slug: "payment-gateways-masterclass",
    title: "Payment Gateways Masterclass: Stripe, Razorpay & Webhooks",
    subtitle: "Master checkout integrations, billing portals, multi-tier subscription models, and secure webhook validation.",
    description: "Learn how to build bulletproof payment pipelines. We dive deep into Stripe Checkout, Stripe Billing (Subscriptions), Razorpay API Orders, signature validation, processing webhooks, handling failed payments, and building customer management portals.",
    price: 1499,
    originalPrice: 3999,
    rating: 4.9,
    students: 620,
    duration: "10h 15m",
    level: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop",
    category: "Integrations",
    language: "English",
    certificate: true,
    popular: true,
    bestSeller: false,
    features: [
      "10+ hours of modular step-by-step videos",
      "Full webhook receiver server boilerplates",
      "Lifetime access to database updates",
      "Official certificate of completion"
    ],
    learningOutcomes: [
      "Implement one-time checkouts and subscription billing models with Stripe & Razorpay",
      "Establish cryptographically verified webhook routes to secure purchase contexts",
      "Synchronize database records upon receipt of payment status events",
      "Manage customer billing portals for plan updates and card replacements"
    ],
    requirements: [
      "Intermediate familiarity with React/Next.js and backend API routing",
      "Basic understanding of databases (Postgres, MongoDB, etc.)"
    ],
    faq: [
      {
        question: "Do I need a live corporate account to test Stripe/Razorpay?",
        answer: "No. Both Stripe and Razorpay offer comprehensive Test Modes, allowing you to simulate checkouts, card failures, and webhooks locally."
      },
      {
        question: "Is security covered in this course?",
        answer: "Yes, security is a main pillar. We cover cryptographic signature verification, preventing client-side price tampering, and protecting database routes."
      }
    ],
    curriculum: [
      {
        title: "Section 1: Stripe Checkout and Billing",
        lessons: [
          { title: "Stripe API Setup & Key Configuration", duration: "15:10" },
          { title: "One-Time Checkout Sessions", duration: "25:40" },
          { title: "Stripe Subscriptions & Price IDs", duration: "32:15" }
        ]
      },
      {
        title: "Section 2: Razorpay Orders Framework",
        lessons: [
          { title: "Razorpay SDK Integration in Next.js", duration: "18:22" },
          { title: "Generating Secure Orders on the Server", duration: "22:15" },
          { title: "Verifying Checkout Signatures", duration: "28:45" }
        ]
      },
      {
        title: "Section 3: Bulletproof Webhooks Receiver",
        lessons: [
          { title: "What are Webhooks? Architecture Overview", duration: "14:50" },
          { title: "Writing Webhook Routes with Express/Next.js", duration: "30:40" },
          { title: "HMAC Signature Verification & Database Sync", duration: "35:10" }
        ]
      }
    ]
  },
  {
    id: "course_mern",
    slug: "mern-stack-bootcamp",
    title: "MERN Stack Production Bootcamp: Go From Zero to Deploy",
    subtitle: "Build, secure, optimize, and deploy a full-scale web application with MongoDB, Express, React, and Node.js.",
    description: "Go beyond basic tutorials. Build a fully featured social media / e-commerce platform using the MERN Stack. Learn advanced MongoDB aggregation pipelines, JWT authorization, Redux Toolkit/React Query state handling, CORS configs, and deployment strategies.",
    price: 2499,
    originalPrice: 5999,
    rating: 4.8,
    students: 1140,
    duration: "22h 45m",
    level: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop",
    category: "Full Stack",
    language: "English",
    certificate: true,
    popular: false,
    bestSeller: true,
    features: [
      "22.5 hours of complete practical sessions",
      "Full source code access with branch checkouts",
      "Step-by-step deployment instructions for VPS, Render, and Vercel",
      "Verified Certificate of Completion"
    ],
    learningOutcomes: [
      "Develop custom RESTful API servers using Express.js and Node.js",
      "Model relational-like data structures using MongoDB and Mongoose schemas",
      "Secure applications using JSON Web Tokens (JWT) and HttpOnly cookies",
      "Deploy full-stack applications with Nginx, PM2, and SSL configurations"
    ],
    requirements: [
      "Solid knowledge of JavaScript syntax and ES6+ features",
      "Basic understanding of React components and HTML/CSS"
    ],
    faq: [
      {
        question: "Do we learn how to host MERN stack apps?",
        answer: "Yes, Section 4 covers deployment of the frontend to Vercel/Netlify, and hosting the Node/Express backend on Render and a VPS using PM2 & Nginx."
      },
      {
        question: "Is state management covered?",
        answer: "Yes, we implement client state management using both React Context API and Redux Toolkit, alongside React Query for server cache states."
      }
    ],
    curriculum: [
      {
        title: "Section 1: Backend API Development",
        lessons: [
          { title: "Node.js & Express Project Setup", duration: "18:15" },
          { title: "Routing and Middleware Architecture", duration: "25:30" },
          { title: "Connecting MongoDB & Mongoose Schemas", duration: "32:10" }
        ]
      },
      {
        title: "Section 2: Authentication & Context Security",
        lessons: [
          { title: "Password Hashing with bcrypt", duration: "20:45" },
          { title: "JWT Generation & Cookie Storage", duration: "28:12" },
          { title: "Custom Auth Guard Middlewares", duration: "22:50" }
        ]
      },
      {
        title: "Section 3: Frontend Interface with React",
        lessons: [
          { title: "Vite React Setup & Styling with Tailwind", duration: "24:35" },
          { title: "Form Handling & API Fetching with Axios", duration: "32:40" },
          { title: "Managing Global States with Redux Toolkit", duration: "42:15" }
        ]
      }
    ]
  },
  {
    id: "course_spa",
    slug: "vanilla-javascript-spa",
    title: "Single Page Applications: HTML, CSS & Vanilla JavaScript",
    subtitle: "Build responsive, high-performance SPAs from scratch without frameworks using standard Web APIs.",
    description: "Learn the secrets of native browser development. Build single-page application routers, custom state handling, dynamic asset loaders, and premium interactive layouts using only HTML5, CSS3, and vanilla modern JavaScript (ES6+).",
    price: 1299,
    originalPrice: 2999,
    rating: 4.7,
    students: 750,
    duration: "11h 20m",
    level: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
    category: "Frontend",
    language: "English",
    certificate: true,
    popular: false,
    bestSeller: false,
    features: [
      "11 hours of clean vanilla code walkthroughs",
      "Custom vanilla router boilerplate template code",
      "Lifetime access to video tutorials and repositories",
      "Verified Certificate of Completion"
    ],
    learningOutcomes: [
      "Build custom client-side routers from scratch using the native History API",
      "Design lightweight reusable component structures without framework overhead",
      "Master CSS variables, custom variables for themes, flexbox, and CSS grid layout models",
      "Optimize web performance and DOM updates using native event delegation"
    ],
    requirements: [
      "Basic HTML, CSS, and elementary knowledge of JavaScript variables/functions"
    ],
    faq: [
      {
        question: "Why build SPAs without React/Vue/Angular?",
        answer: "Understanding vanilla routers, state handlers, and web APIs gives you a deep knowledge of the underlying mechanics of modern libraries, improving your overall engineering depth."
      },
      {
        question: "Are vanilla SPAs fast?",
        answer: "Yes, vanilla SPAs are incredibly fast because there is zero framework overhead (0KB extra JS), yielding perfect 100/100 Lighthouse performance metrics out-of-the-box."
      }
    ],
    curriculum: [
      {
        title: "Section 1: Vanilla SPA Architecture & Routing",
        lessons: [
          { title: "Understanding Hash vs History API routers", duration: "15:30" },
          { title: "Designing a dynamic route resolver in JavaScript", duration: "22:45" },
          { title: "Handling template renders and navigation state", duration: "18:20" }
        ]
      },
      {
        title: "Section 2: Core Components & Layout Styling",
        lessons: [
          { title: "Writing responsive CSS layouts without frameworks", duration: "24:10" },
          { title: "Building reactive UI state objects and custom event emitters", duration: "29:50" }
        ]
      }
    ]
  }
];
