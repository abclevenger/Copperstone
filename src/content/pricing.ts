/**
 * Centralized pricing configuration for Copperstone Executive Suites.
 *
 * All pricing constants live here so they can be updated in one place.
 * When backend billing is added, these values should be sourced from
 * an environment variable or database instead.
 */

// ── Workspace Plans ──────────────────────────────────────────────────
export const PRICING = {
  virtualOffice: {
    startingPrice: 99,
    period: "mo" as const,
    label: "Virtual Office",
  },
  executiveSuite: {
    startingPrice: 499,
    period: "mo" as const,
    label: "Executive Suite",
    perPerson: 499,
    discount6Month: 0.05,
    discount12Month: 0.1,
  },
  meetingSpace: {
    startingPrice: 49,
    period: "hr" as const,
    label: "Meeting Space",
    includedHoursPerMonth: 8,
    extraHourRate: 49,
  },
} as const;

// ── Add-Ons ──────────────────────────────────────────────────────────
export const PHONE_SERVICES = {
  pricePerUser: 20,
  period: "mo" as const,
  label: "Phone Services",
  tagline: "Professional phone service for your team",
  shortDescription:
    "Transcription, voice recording, AI receptionist, and more",
  features: [
    "Business phone line per user",
    "Call transcription",
    "Voice recording",
    "AI receptionist",
    "Voicemail-to-email",
    "Call routing & forwarding",
    "Mobile & desktop apps",
    "Volume discounts available",
  ],
  billingNote: "Billed per enabled user, per month",
  volumeNote: "Volume pricing available for 5+ users",
  minUsers: 1,
  maxUsers: 100,
} as const;

export const WEBSITE_HOSTING = {
  startingPrice: 150,
  period: "mo" as const,
  label: "Website, Hosting & CRM",
  tagline: "Your website, hosting, and customer management in one package",
  shortDescription:
    "Custom website, managed hosting, SSL, and a built-in CRM to manage leads and customers",
  features: [
    "Custom-designed business website",
    "Managed cloud hosting & SSL",
    "Custom CRM & lead management",
    "Contact & pipeline tracking",
    "Automated follow-ups & reminders",
    "Analytics & performance reports",
    "Mobile-responsive design",
    "Dedicated support",
  ],
  billingNote: "Flat monthly fee — no per-user charge",
  volumeNote: "Custom builds quoted separately",
} as const;

export const EMAIL_ACCOUNTS = {
  pricePerUser: 20,
  period: "mo" as const,
  label: "Business Email",
  tagline: "Professional email that builds trust with every message",
  shortDescription:
    "Custom domain, calendar, cloud storage, and admin controls",
  features: [
    "Custom domain email (you@yourcompany.com)",
    "Calendar & scheduling",
    "Cloud storage & file sharing",
    "Spam & phishing protection",
    "Mobile & desktop sync",
    "Admin controls & user management",
    "99.9% uptime SLA",
    "Volume discounts available",
  ],
  billingNote: "Billed per enabled user, per month",
  volumeNote: "Volume pricing available for 5+ users",
  minUsers: 1,
  maxUsers: 100,
} as const;

export const SEO_SERVICES = {
  startingPrice: 200,
  period: "mo" as const,
  label: "SEO Services",
  tagline: "Get found by the customers already searching for you",
  shortDescription:
    "On-page optimization, local SEO, content strategy, and monthly reporting",
  features: [
    "On-page & technical SEO audit",
    "Google Business Profile optimization",
    "Local SEO & map pack targeting",
    "Keyword research & content strategy",
    "Monthly performance reporting",
    "Competitor analysis",
    "Link building & citations",
    "Dedicated SEO specialist",
  ],
  billingNote: "Flat monthly fee — no per-user charge",
  volumeNote: "Custom campaigns quoted separately",
} as const;

export const AI_RECEPTIONIST = {
  startingPrice: 50,
  period: "mo" as const,
  label: "AI Receptionist",
  tagline: "Never miss a call — even after hours",
  shortDescription:
    "24/7 AI-powered call answering, routing, scheduling, and message taking",
  features: [
    "24/7 automated call answering",
    "Intelligent call routing",
    "Appointment scheduling",
    "Custom greeting & hold music",
    "Message taking & delivery",
    "After-hours & overflow support",
    "Caller intent detection",
    "Monthly call summary reports",
  ],
  billingNote: "Flat monthly fee — no per-user charge",
  volumeNote: "Multi-line plans available",
} as const;

export const SCAN_MAIL = {
  startingPrice: 30,
  period: "mo" as const,
  label: "Scan Mail",
  tagline: "Your physical mail, digitized and delivered to your inbox",
  shortDescription:
    "We open, scan, and send your mail digitally — access it from anywhere",
  features: [
    "Daily mail scanning & digital delivery",
    "Envelope & content scanning",
    "Secure online mail portal",
    "Mail forwarding on request",
    "Package receipt notifications",
    "Shred or recycle on command",
    "HIPAA-friendly handling available",
    "Perfect for virtual office clients",
  ],
  billingNote: "Flat monthly fee per mailbox",
  volumeNote: "Included with select plans",
  badge: "Premium" as const,
} as const;

// ── Traditional Office Comparison (for Cost Calculator) ──────────────
export const TRADITIONAL_OFFICE = {
  ratePerSqFt: 28,
  camPerSqFt: 8,
  buildoutPerSqFt: 45,
  furniturePerPerson: 2000,
  internetMonthly: 250,
  utilitiesPerSqFt: 3,
  insuranceMonthly: 200,
  meetingRoomRate: 75,
  phonePerUser: 45,
  websiteHostingMonthly: 300,
  emailPerUser: 30,
  seoMonthly: 500,
  aiReceptionistMonthly: 150,
  scanMailMonthly: 75,
} as const;

// ── Webhooks ─────────────────────────────────────────────────────────
export const GHL_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/mNr3aCm0bvD70r49HVTH/webhook-trigger/73c93ad0-2ad1-45f4-aff5-af3311c36646";

// ── Helpers ──────────────────────────────────────────────────────────
export function formatPrice(amount: number): string {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function calculatePhoneServicesCost(users: number): number {
  return users * PHONE_SERVICES.pricePerUser;
}
