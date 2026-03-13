export type CoreService = {
  title: string;
  description: string;
  icon: string;
  href?: string;
};

export type PartnerCategory = {
  category: string;
  icon: string;
  services: string[];
  description: string;
};

export type BenefitBlock = {
  title: string;
  description: string;
  icon: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
};

export const coreServices: CoreService[] = [
  {
    title: "Executive Office Space",
    description:
      "Private, lockable offices with professional reception, lobby presence, and a client-ready environment. Currently full — waitlist available.",
    icon: "building",
    href: "/office-space-for-rent",
  },
  {
    title: "Virtual Office & Business Address",
    description:
      "Professional business address with mail handling and package services — build credibility without a full-time office.",
    icon: "mailbox",
  },
  {
    title: "Meeting Room Rentals",
    description:
      "Conference rooms and meeting space for client presentations, team sessions, interviews, and workshops.",
    icon: "users",
    href: "/meeting-space",
  },
  {
    title: "Event Space",
    description:
      "Host workshops, networking events, seminars, and receptions in a polished professional setting.",
    icon: "calendar",
    href: "/meeting-space",
  },
  {
    title: "Coworking & Business Club",
    description:
      "Flexible workspace access in a professional environment with shared amenities and community.",
    icon: "laptop",
  },
  {
    title: "Day Office & Flexible Workspace",
    description:
      "On-demand workspace for the days you need a professional setting without a long-term commitment.",
    icon: "clock",
  },
  {
    title: "Mail Handling & Mailbox Services",
    description:
      "Secure mail collection, package handling, and mail forwarding from a real business address.",
    icon: "envelope",
  },
  {
    title: "Professional Business Environment",
    description:
      "Lobby reception, common areas, high-speed internet, utilities, free-flowing coffee, and parking included.",
    icon: "shield",
  },
];

export const partnerCategories: PartnerCategory[] = [
  {
    category: "Communications",
    icon: "phone",
    description:
      "Stay connected with enterprise-grade phone, internet, and communications solutions. Our Phone Services add-on starts at $20/user/month with transcription, AI receptionist, and more.",
    services: [
      "Phone Services Add-On (from $20/user/mo)",
      "Call Transcription & Voice Recording",
      "AI Receptionist & Call Routing",
      "VoIP & Unified Communications",
      "Internet & Connectivity",
      "Contact Center Solutions",
    ],
  },
  {
    category: "Business Messaging",
    icon: "chat",
    description:
      "Reach customers where they are with SMS, email, live chat, and unified messaging platforms that drive engagement and conversions.",
    services: [
      "SMS & Text Message Marketing",
      "Email Marketing & Automation",
      "Live Chat & Website Messaging",
      "Reputation & Review Management",
      "Unified Inbox & Omnichannel Messaging",
      "Appointment Reminders & Follow-ups",
    ],
  },
  {
    category: "Digital Presence",
    icon: "globe",
    description:
      "Build visibility and attract customers with websites, search optimization, and marketing support from proven providers.",
    services: [
      "Website Design & Development",
      "Search Engine Optimization (SEO)",
      "Local Visibility & Google Business",
      "Digital Marketing Support",
    ],
  },
  {
    category: "IT & Security",
    icon: "lock",
    description:
      "Protect and power your business with cybersecurity, cloud infrastructure, and managed IT through vetted partners.",
    services: [
      "Cybersecurity Solutions",
      "Cloud Services & Infrastructure",
      "Backup & Disaster Recovery",
      "Managed IT Support",
      "Structured Cabling & Surveillance",
    ],
  },
  {
    category: "Business Growth",
    icon: "chart",
    description:
      "Accelerate revenue with consulting, strategy, and operational tools tailored to your growth stage.",
    services: [
      "Business Consulting & Strategy",
      "Sales Process Improvement",
      "Customer Experience Tools",
      "Merchant Services & Payments",
      "Technology Advisory",
    ],
  },
  {
    category: "Software & Applications",
    icon: "code",
    description:
      "Find, implement, and customize the right software for your business — from off-the-shelf tools to custom-built applications.",
    services: [
      "Business Software Selection & Setup",
      "Custom Application Development",
      "SaaS & Cloud Platform Integration",
      "Accounting & ERP Software",
      "Project Management Tools",
      "Industry-Specific Software Solutions",
    ],
  },
  {
    category: "AI Solutions",
    icon: "sparkles",
    description:
      "Harness artificial intelligence to automate tasks, engage customers, and make smarter decisions — deployed through experienced AI partners.",
    services: [
      "AI Chatbots & Virtual Assistants",
      "AI-Powered Lead Generation",
      "Content & Copywriting Automation",
      "Predictive Analytics & Insights",
      "Voice AI & Call Handling",
      "Custom AI Workflow Integration",
    ],
  },
  {
    category: "Franchise Services",
    icon: "storefront",
    description:
      "Launch, scale, or manage franchise operations with expert guidance on compliance, systems, and multi-location growth.",
    services: [
      "Franchise Development & Strategy",
      "Franchise Compliance & FDD Review",
      "Multi-Location Operations Setup",
      "Franchise Marketing & Lead Gen",
      "Territory Planning & Expansion",
      "Franchisee Training & Onboarding",
    ],
  },
  {
    category: "Leadership & Training",
    icon: "academic",
    description:
      "Develop stronger leaders and higher-performing teams with training programs, coaching, and professional development.",
    services: [
      "Executive & Leadership Coaching",
      "Team Development Workshops",
      "Management Training Programs",
      "Strategic Planning Facilitation",
      "Communication & Conflict Resolution",
      "New Manager Onboarding Programs",
    ],
  },
  {
    category: "Automation & Operations",
    icon: "gear",
    description:
      "Streamline how your business runs with CRM, workflow automation, and intelligent tools.",
    services: [
      "CRM Setup & Consulting",
      "Workflow Automation",
      "Business Process Automation",
      "Operational Systems Design",
    ],
  },
];

export const benefits: BenefitBlock[] = [
  {
    title: "One Trusted Hub",
    description:
      "Workspace, technology, and business infrastructure accessed from a single professional address — no more juggling disconnected vendors.",
    icon: "hub",
  },
  {
    title: "Professional Image + Infrastructure",
    description:
      "Present confidently to clients from day one with a polished office and the business tools to back it up.",
    icon: "image",
  },
  {
    title: "Built for Any Stage",
    description:
      "Whether you're launching, scaling, or expanding into Tampa Bay, solutions flex to match your current needs and budget.",
    icon: "scale",
  },
  {
    title: "Access to Vetted Providers",
    description:
      "Skip the research. We connect you with partners we trust — no cold calls, no guesswork, no pressure.",
    icon: "verified",
  },
  {
    title: "Simplified Growth Support",
    description:
      "From first consultation to implementation, Copperstone helps coordinate the pieces so you can focus on revenue.",
    icon: "rocket",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "1",
    title: "Meet with Copperstone",
    body: "Schedule a consultation to discuss your workspace requirements and the business challenges you're working through.",
  },
  {
    step: "2",
    title: "Identify Your Needs",
    body: "We map out which direct Copperstone services and partner solutions align with your goals, timeline, and budget.",
  },
  {
    step: "3",
    title: "Get Matched & Move Forward",
    body: "We connect you with the right workspace setup, technology, and business support — and stay involved to make sure it works.",
  },
];
