export const PHONE_LAND_O_LAKES = "(813) 298-7363";
export const PHONE_SOUTH_TAMPA = "(813) 906-8444";

export type Step = {
  step: string;
  title: string;
  body: string;
};

export type Offering = {
  title: string;
  description: string;
  highlights: string[];
};

export type Location = {
  name: string;
  addressLine1: string;
  addressLine2: string;
  cityStateZip: string;
  phone: string;
};

export const steps: Step[] = [
  {
    step: "1",
    title: "Tour and Strategy Fit",
    body: "We learn how you work, how you meet clients, and what your next growth stage requires.",
  },
  {
    step: "2",
    title: "Select Your Right-Now Setup",
    body: "Choose the best-fit mix of executive suite, coworking, virtual office, and meeting access.",
  },
  {
    step: "3",
    title: "Operate With Confidence",
    body: "Move into a client-ready environment without the burden of long setup timelines.",
  },
];

export const offerings: Offering[] = [
  {
    title: "Executive Suites",
    description:
      "Private, lockable offices for professionals who need consistency, privacy, and a polished client-facing experience.",
    highlights: [
      "Client-ready private offices",
      "Professional lobby and reception presence",
      "Stable home base for growth",
    ],
  },
  {
    title: "Coworking & Business Club",
    description:
      "Flexible, professional workspace built for focus and output when home office distractions are slowing your momentum.",
    highlights: [
      "Flexible workspace access",
      "Professional environment",
      "Scale up when needed",
    ],
  },
  {
    title: "Virtual Offices",
    description:
      "Build business credibility with a professional address and mail handling while keeping operational flexibility.",
    highlights: [
      "Professional business address",
      "Mail and package handling",
      "On-demand meeting room options",
    ],
  },
  {
    title: "Meeting & Event Space",
    description:
      "Host high-stakes client meetings, workshops, and team sessions in polished conference and event spaces.",
    highlights: [
      "Conference room access",
      "Meeting and training rooms",
      "Professional event space",
    ],
  },
];

export const amenities = [
  "High-speed internet",
  "Professional reception and lobby presence",
  "Free-flowing coffee",
  "Convenient Land O' Lakes and South Tampa access",
  "Utilities included",
];

export const locations: Location[] = [
  {
    name: "Land O' Lakes Office",
    addressLine1: "Copperstone Executive Suites",
    addressLine2: "3632 Land O' Lakes Blvd #105",
    cityStateZip: "Land O Lakes, FL 34639",
    phone: PHONE_LAND_O_LAKES,
  },
  {
    name: "South Tampa Office",
    addressLine1: "Copperstone Executive Suites",
    addressLine2: "1001 S MacDill Ave",
    cityStateZip: "Tampa, FL 33629",
    phone: PHONE_SOUTH_TAMPA,
  },
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Copperstone Executive Suites",
  url: "https://copperstone.info",
  logo: "https://copperstone.info/copperstone-logo.png",
  image: "https://copperstone.info/Executive-Offices-for-Rent-Land-O-Lakes.jpg",
  description:
    "Professional executive suites, coworking, virtual offices, and meeting space in Land O' Lakes and South Tampa, Florida.",
  priceRange: "$$",
  telephone: "+18132987363",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3632 Land O' Lakes Blvd #105",
    addressLocality: "Land O Lakes",
    addressRegion: "FL",
    postalCode: "34639",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.2025,
    longitude: -82.4635,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  hasMap: "https://maps.google.com/?q=3632+Land+O+Lakes+Blvd+%23105+Land+O+Lakes+FL",
  sameAs: ["https://www.facebook.com/copperstoneexecutivesuites"],
};
