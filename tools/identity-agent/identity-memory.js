
export const identity = {
  name: "Abdullahi Ibrahim",
  alternateName: "Abdullahi-Ai",
  professionalTitle: "Software Developer (AI & automation enthusiast)",
  
  website: {
    url: "https://my-personal-portfolio-delta-one.vercel.app/",
    platform: "Vercel",
    framework: "React 19 + Vite 8 + Tailwind CSS 3",
    repository: "https://github.com/Abdullahi-Ai/my-personal-portfolio",
    verified: true,
    verifiedDate: "2026-10-23",
  },

  // Only profiles with verified === true may appear in JSON-LD sameAs.
  // verified means: confirmed by the owner, or confirmed against an official API.
  profiles: [
    {
      platform: "GitHub",
      url: "https://github.com/Abdullahi-Ai",
      username: "Abdullahi-Ai",
      verified: true,
      verifiedDate: "2026-10-24",
      source: "GitHub REST API returned login 'Abdullahi-Ai'; git remote origin matches. Public name/bio/website fields are empty.",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/osman-noor-08a297358",
      verified: false,
      status: "needs_user_verification",
      source: "Linked from Contact.jsx/About.jsx. URL slug and presumably the display name use 'Osman Noor', not 'Abdullahi Ibrahim'. LinkedIn blocks automated checks (HTTP 999), so ownership and display name are unconfirmed.",
      action: "Owner to rename the profile/custom URL to match 'Abdullahi Ibrahim', then confirm so it can be added to sameAs.",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/osmanibrahim5181",
      verified: false,
      status: "needs_user_verification",
      source: "Linked from Contact.jsx/About.jsx. Handle does not contain 'Abdullahi'. Not inspected.",
      action: "Owner to confirm it is a professional account, or remove it from the site.",
    },
  ],

  education: [
    {
      institution: "University of Nairobi",
      fieldsOfStudy: ["Sociology", "Psychology"],
      structure: "Double major",
      // Graduation status, degree title and dates are NOT confirmed by the owner, so the site and
      // structured data must not state them. Do not add alumniOf until graduation is confirmed.
      graduationStatus: "unconfirmed",
      verified: true,
      verifiedDate: "2026-10-24",
      source: "Owner instruction (2026-10-24): double major in Sociology and Psychology",
    },
    {
      institution: "Moringa School",
      certification: "Certificate in Software Development",
      focus: "Full Stack Web Development & UI/UX",
      year: "2025",
      verified: true,
      verifiedDate: "2026-10-23",
      source: "Education.jsx and About.jsx components (existing site content)",
    },
  ],

  interests: [
    "Software Development",
    "Artificial Intelligence",
    "Agentic AI",
    "AI Agents",
    "AI Automation",
    "Web Application Development",
    "UI/UX Design",
  ],

  // Confirmed by package.json / source in the owner's repositories (checked 2026-10-24):
  technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion", "Vite", "Python", "FastAPI", "LangChain", "ChromaDB", "GitHub"],
  // Listed on the site's Tech Stack section but NOT found in any inspected repository. Awaiting owner confirmation:
  technologiesUnconfirmed: ["Node.js", "Express", "MongoDB", "Firebase", "Figma"],

  contact: {
    email: "osmannoor75200@gmail.com",
    whatsapp: "+254781764187",
    verified: false,
    status: "needs_user_verification",
    source: "Contact.jsx component. Email local-part uses 'osmannoor', unlike the preferred name. Kept on the site for owner review; not used in structured data.",
  },

  projects: [
    {
      name: "Osman AI Shopping Assistant",
      description: "RAG-based shopping assistant for an electronics store (React storefront + FastAPI backend)",
      tech: ["Python", "FastAPI", "LangChain", "ChromaDB", "sentence-transformers", "React"],
      githubUrl: "https://github.com/Abdullahi-Ai/osman-accessories-ai",
      status: "prototype",
      verifiedDate: "2026-10-24",
      // Confirmed from source (README.md, src/app.py, src/vectordb.py, src/api.py, evaluate_retrieval.py):
      // FastAPI endpoints /api/chat and /api/health; ChromaDB PersistentClient; all-MiniLM-L6-v2 embeddings;
      // chunk size 500 / overlap 100; top-k 3; distance threshold 1.30; LLM selectable (OpenAI, Groq, Gemini).
      // Not confirmed: a public live demo, production use, or measured accuracy (evaluation results not run here).
      // Repository hygiene: src/__pycache__, backend.log and several scratch files are tracked in git.
      liveUrl: null,
    },
    {
      name: "Health Psychology Hospital",
      description: "Healthcare and psychology-focused hospital website",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://abdullahi-ai.github.io/health-psychology-Hospital",
      githubUrl: "https://github.com/Abdullahi-Ai/health-psychology-Hospital",
      status: "completed",
      verifiedDate: "2026-10-23",
    },
    {
      name: "LuqmanTech Portfolio",
      description: "Modern technology portfolio website",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://luqmantech.vercel.app/",
      githubUrl: "https://github.com/Abdullahi-Ai/luqmantech",
      status: "completed",
      verifiedDate: "2026-10-23",
    },
    {
      name: "Al-Yaqin Education Centre",
      description: "Islamic educational institution website",
      tech: ["React", "Tailwind CSS"],
      liveUrl: "https://al-yaqin-education-centre-ggvu.vercel.app/",
      githubUrl: "https://github.com/Abdullahi-Ai/AL-yaqin-Education-center",
      status: "completed",
      verifiedDate: "2026-10-23",
    },
    {
      name: "Mambasa Group Agency",
      description: "Digital agency and branding website",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://mambsa-group-agency.vercel.app/",
      githubUrl: "https://github.com/Abdullahi-Ai/Mambsa-Group-Agency",
      status: "completed",
      verifiedDate: "2026-10-23",
    },
    {
      name: "Mumtaaz Girls High School",
      description: "Academic institution website",
      tech: ["React", "Tailwind CSS"],
      liveUrl: "https://mumtaaz-girls-high-school.vercel.app/",
      githubUrl: "https://github.com/Abdullahi-Ai/Mumtaaz-Girls-High-school-",
      status: "completed",
      verifiedDate: "2026-10-23",
    },
    {
      name: "The Light of Peace Charity",
      description: "Islamic humanitarian NGO platform",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://the-light-of-peace.vercel.app/",
      githubUrl: "https://github.com/Abdullahi-Ai/THE-LIGHT-OF-PEACE",
      status: "completed",
      verifiedDate: "2026-10-23",
    },
    {
      name: "Personal Portfolio",
      description: "Professional portfolio with SEO optimization and structured data",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "GSAP"],
      liveUrl: "https://my-personal-portfolio-delta-one.vercel.app/",
      githubUrl: "https://github.com/Abdullahi-Ai/my-personal-portfolio",
      status: "active",
      verifiedDate: "2026-10-23",
    },
  ],

  seoStatus: {
    title: "implemented",
    metaDescription: "implemented",
    canonicalUrl: "implemented",
    openGraph: "implemented",
    twitterCards: "implemented",
    jsonLdPerson: "implemented",
    jsonLdWebSite: "implemented",
    jsonLdProfilePage: "implemented",
    robotsTxt: "implemented",
    sitemapXml: "implemented",
    deployedBuildServesUpdates: "unverified_until_push_and_live_check",
    googleSearchConsole: "not_connected",
    lastUpdated: "2026-10-24",
  },

  audits: [
    {
      date: "2026-10-23",
      findings: [
        "Page title was generic 'my-personal-portfolio'",
        "No meta description",
        "No robots.txt or sitemap.xml",
        "No canonical URL",
        "No structured data (JSON-LD)",
        "No Open Graph or Twitter Card metadata",
        "No AI/Agentic AI mentions in content",
        "Hero section lacked professional name",
        "GitHub links on projects pointed to '#'",
        "LinkedIn URL contained tracking parameters",
        "Unused WelcomeOverlay component and App.css boilerplate",
      ],
      status: "resolved",
    },
    {
      date: "2026-10-24",
      findings: [
        "Live deployment was the old build (title 'my-personal-portfolio'); robots.txt and sitemap.xml returned the SPA HTML fallback",
        "robots.txt, sitemap.xml, profile.png, og-image.png were untracked in git",
        "LinkedIn, Instagram and email do not show the preferred name; they were in JSON-LD sameAs",
        "Unverifiable claims: 40+ projects, 30+ clients, three testimonials with stock photos, terminal messages",
        "Project source links pointed to the GitHub profile instead of repositories",
        "GitHub profile name, bio and website fields are empty",
        "og-image.png is byte-identical to profile.png and is not a 1200x630 branded card",
      ],
      status: "fixed_in_working_tree_pending_push",
    },
  ],

  // Actions that must NOT be performed automatically. The agent only reports on these.
  pendingApprovals: [
    "Confirm whether the WhatsApp number 0781764187 is also for calls, so a tel: link can be added",
    "Confirm University of Nairobi graduation status (site currently makes no claim)",
    "Confirm or remove unverified skills: Node.js, Express, MongoDB, Firebase, Figma",
    "Provide your actual contribution for each project (currently not stated)",
    "Rename LinkedIn profile / custom URL, then confirm it for sameAs",
    "Confirm or remove Instagram link and the contact email on the site",
    "Update GitHub profile name, bio and website fields",
    "Push to GitHub / deploy to Vercel",
    "Connect Google Search Console and submit the sitemap",
    "Decide on testimonials (only with real, permitted quotes)",
  ],
};
