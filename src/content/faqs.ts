export type FAQ = {
  question: string;
  answer: string;
  category: string;
};

export const faqs: FAQ[] = [
  {
    category: "Spaces & Services",
    question: "What types of space do you offer?",
    answer:
      "We offer private executive suites, coworking and business club memberships, virtual office services, and meeting and event space in a range of sizes.",
  },
  {
    category: "Spaces & Services",
    question: "What is included with an executive suite?",
    answer:
      "Executive suites include a private, lockable office with access to shared reception areas, restrooms, break space, parking, utilities, and other common amenities. Furnished options may be available — ask our team for current availability.",
  },
  {
    category: "Spaces & Services",
    question: "Do you offer virtual office services?",
    answer:
      "Yes. Virtual office plans typically include a professional business address at one of our locations and mail handling, with options to reserve meeting rooms as needed.",
  },
  {
    category: "Spaces & Services",
    question: "Can I book a conference room without renting an office?",
    answer:
      "Yes. Meeting and conference rooms can be reserved even if you do not have a full-time office with us, subject to availability and our booking policies.",
  },
  {
    category: "Spaces & Services",
    question: "Do you offer day passes or drop-in coworking?",
    answer:
      "Yes. We offer flexible day passes so you can work from a professional environment without a long-term commitment. Ask about current pricing during your tour.",
  },
  {
    category: "Spaces & Services",
    question: "What size offices do you have available?",
    answer:
      "Our executive suites range from single-person offices to multi-room team suites that can accommodate up to 15+ people. Availability varies by location.",
  },
  {
    category: "Amenities",
    question: "Is internet included?",
    answer:
      "Yes. High-speed internet is included for our office and coworking clients and available in our meeting and event spaces.",
  },
  {
    category: "Amenities",
    question: "Are utilities and coffee included?",
    answer:
      "Yes. For our office and coworking clients, utilities are included and we provide free-flowing coffee in shared areas.",
  },
  {
    category: "Amenities",
    question: "Is there parking available?",
    answer:
      "Yes. Both locations provide free parking for tenants and their guests. No garage fees, no parking passes — just pull in and park.",
  },
  {
    category: "Amenities",
    question: "Do meeting rooms have AV equipment?",
    answer:
      "Yes. Our conference rooms are equipped with presentation displays, video conferencing capability, and high-speed internet. Specific equipment varies by room — let us know your needs when booking.",
  },
  {
    category: "Amenities",
    question: "Is there 24/7 access?",
    answer:
      "Executive suite tenants have 24/7 access to their office. Coworking and meeting space access may follow standard business hours depending on your plan. Ask about your specific access level during your tour.",
  },
  {
    category: "Locations",
    question: "Where are you located?",
    answer:
      "We have two locations: Land O' Lakes on U.S. 41 about one mile north of State Road 54, and South Tampa on S MacDill Ave.",
  },
  {
    category: "Locations",
    question: "Which location is right for me?",
    answer:
      "Both locations offer premium workspace. Land O' Lakes is ideal for Pasco County businesses and offers larger event space. South Tampa is great for professionals who need a central Tampa presence. Try our Workspace Finder quiz for a personalized recommendation.",
  },
  {
    category: "Locations",
    question: "Can I use both locations?",
    answer:
      "Multi-location access may be available depending on your membership or agreement. Ask our team about options for using both Land O' Lakes and South Tampa spaces.",
  },
  {
    category: "Getting Started",
    question: "How do I schedule a tour?",
    answer:
      "You can use the Schedule a Tour form on our homepage or call either location directly. Our team will confirm a time and show you the options that best fit how you work.",
  },
  {
    category: "Getting Started",
    question: "How do I get started?",
    answer:
      "The easiest way to get started is to schedule a tour. From there, we will help you choose the right space and walk through next steps for moving in or booking your first meeting.",
  },
  {
    category: "Getting Started",
    question: "How long are your agreements?",
    answer:
      "We offer a variety of terms depending on the type of space and your needs. During your tour, we can walk through current options for short-term and longer-term agreements.",
  },
  {
    category: "Getting Started",
    question: "Is there a deposit required?",
    answer:
      "Deposit requirements vary depending on the type of space and agreement term. Our team will walk you through all costs upfront during your tour — no hidden fees.",
  },
  {
    category: "Getting Started",
    question: "How quickly can I move in?",
    answer:
      "In many cases, suites are move-in ready within days. Availability depends on your preferred location and suite size. Schedule a tour to see what's available now.",
  },
  {
    category: "Pricing & Billing",
    question: "How much does an executive suite cost?",
    answer:
      "Executive suites start from $499/month depending on size, location, and term length. Visit our pricing page or schedule a tour for a personalized quote.",
  },
  {
    category: "Pricing & Billing",
    question: "Are there any hidden fees?",
    answer:
      "No. Our all-inclusive pricing covers rent, utilities, internet, maintenance, and common area amenities. What you see in your agreement is what you pay.",
  },
  {
    category: "Pricing & Billing",
    question: "Do you offer discounts for longer terms?",
    answer:
      "Yes. We offer incentives for 6-month and 12-month commitments. The longer the term, the better the rate. Ask about current specials during your tour.",
  },
  {
    category: "Phone Services",
    question: "What is the Phone Services add-on?",
    answer:
      "Phone Services is an optional add-on that gives each team member a professional business phone line with smart call features — including call transcription, voice recording, AI receptionist, voicemail-to-email, call routing, and mobile/desktop apps. It starts at $20 per user per month.",
  },
  {
    category: "Phone Services",
    question: "How does per-user billing work for Phone Services?",
    answer:
      "Phone Services is billed per enabled user, per month. If you have 5 users on the plan, you pay 5 × $20 = $100/month. You only pay for the lines you actually use — add or remove users anytime.",
  },
  {
    category: "Phone Services",
    question: "How do I add or remove Phone Services users?",
    answer:
      "Contact your Copperstone account manager to add or remove phone lines at any time. Changes take effect at the start of your next billing cycle. There's no penalty for scaling up or down.",
  },
  {
    category: "Phone Services",
    question: "Are volume discounts available for Phone Services?",
    answer:
      "Yes. Volume pricing is available for teams with 5 or more users. Ask during your consultation for a custom quote based on your team size.",
  },
  {
    category: "Phone Services",
    question: "Do I need an office to get Phone Services?",
    answer:
      "No. Phone Services is available as a standalone add-on or paired with any Copperstone plan — executive suite, virtual office, coworking, or meeting space membership.",
  },
  {
    category: "Business Email",
    question: "What is the Business Email add-on?",
    answer:
      "Business Email gives each team member a professional email address on your custom domain (e.g., you@yourcompany.com) with calendar, cloud storage, spam protection, and admin controls — starting at $20 per user per month.",
  },
  {
    category: "Business Email",
    question: "How does per-user billing work for Business Email?",
    answer:
      "Business Email is billed per enabled user, per month. If you have 3 users on the plan, you pay 3 × $20 = $60/month. Add or remove mailboxes anytime — you only pay for active accounts.",
  },
  {
    category: "Business Email",
    question: "Can I use my own domain for email?",
    answer:
      "Yes. We set up email on your existing domain so your team sends and receives from professional addresses like name@yourcompany.com. If you don't have a domain yet, we can help you get one.",
  },
  {
    category: "Business Email",
    question: "Do I need an office to get Business Email?",
    answer:
      "No. Business Email is available as a standalone add-on or paired with any Copperstone plan — perfect for virtual office clients who want a complete professional identity.",
  },
  {
    category: "Website, Hosting & CRM",
    question: "What is the Website, Hosting & CRM add-on?",
    answer:
      "This all-in-one add-on gives your business a custom-designed website, managed cloud hosting, SSL security, and a built-in CRM to manage leads, contacts, and follow-ups — starting at $150/month.",
  },
  {
    category: "Website, Hosting & CRM",
    question: "What's included in the monthly fee?",
    answer:
      "Your monthly fee covers a custom website, managed hosting, SSL certificate, CRM with lead management and pipeline tracking, automated follow-ups, analytics reports, monthly updates, and dedicated support. No hidden fees.",
  },
  {
    category: "Website, Hosting & CRM",
    question: "Do I own my website?",
    answer:
      "Yes. You own all content, copy, images, and branding on your site. If you ever cancel, we'll provide a full export of your website files so you can host it elsewhere.",
  },
  {
    category: "Website, Hosting & CRM",
    question: "What can the CRM do?",
    answer:
      "The built-in CRM lets you capture leads from your website, track contacts through your sales pipeline, send automated follow-up emails and reminders, and view reporting on conversions — all from one dashboard.",
  },
  {
    category: "Website, Hosting & CRM",
    question: "Do I need an office to get Website, Hosting & CRM?",
    answer:
      "No. This add-on is available standalone or paired with any Copperstone plan. It's especially popular with virtual office clients who want a professional web presence and CRM to manage incoming leads.",
  },
  {
    category: "SEO Services",
    question: "What is the SEO Services add-on?",
    answer:
      "SEO Services is an optional add-on that helps your business rank higher in Google and attract more local customers. It includes on-page optimization, local SEO, Google Business Profile management, keyword research, and monthly reporting — starting at $200/month.",
  },
  {
    category: "SEO Services",
    question: "How long before I see results from SEO?",
    answer:
      "SEO is a long-term strategy. Most businesses see measurable improvements in search rankings within 3–6 months, with compounding results over time. We provide monthly reports so you can track progress from day one.",
  },
  {
    category: "SEO Services",
    question: "Can I combine SEO with Website & Hosting?",
    answer:
      "Absolutely — and we recommend it. When your website and SEO are managed together, we can make technical optimizations faster and align content strategy with search intent for better results.",
  },
  {
    category: "SEO Services",
    question: "Do I need an office to get SEO Services?",
    answer:
      "No. SEO Services is available as a standalone add-on for any business. It pairs especially well with virtual office plans for businesses that want strong local search visibility in the Tampa Bay area.",
  },
  {
    category: "AI Receptionist",
    question: "What is the AI Receptionist add-on?",
    answer:
      "AI Receptionist is an optional add-on that provides 24/7 automated call answering, intelligent routing, appointment scheduling, and message taking — so you never miss a call, even after hours. It starts at $50/month.",
  },
  {
    category: "AI Receptionist",
    question: "Can the AI Receptionist schedule appointments?",
    answer:
      "Yes. The AI Receptionist integrates with your calendar to book appointments, confirm availability, and send reminders — all without human intervention.",
  },
  {
    category: "AI Receptionist",
    question: "Does it replace a human receptionist?",
    answer:
      "It handles routine calls like scheduling, basic inquiries, and message taking 24/7. For complex requests, it routes the caller to the right person. Many clients use it alongside Copperstone's front desk reception for full coverage.",
  },
  {
    category: "AI Receptionist",
    question: "Do I need Phone Services to use AI Receptionist?",
    answer:
      "No. AI Receptionist works as a standalone add-on with your existing phone number. It pairs well with our Phone Services add-on for a complete communications solution, but it's not required.",
  },
  {
    category: "Scan Mail",
    question: "What is the Scan Mail service?",
    answer:
      "Scan Mail is a premium add-on where we open, scan, and digitally deliver your physical mail to your inbox — so you can read it from anywhere. It starts at $30/month.",
  },
  {
    category: "Scan Mail",
    question: "How quickly will I receive scanned mail?",
    answer:
      "Mail is typically scanned and delivered to your online portal within the same business day it's received. You'll get an email notification when new scans are ready.",
  },
  {
    category: "Scan Mail",
    question: "Can I request mail forwarding instead of scanning?",
    answer:
      "Yes. You can request physical mail forwarding for any item at any time. You can also instruct us to shred or recycle mail you no longer need.",
  },
  {
    category: "Scan Mail",
    question: "Is Scan Mail available with virtual office plans?",
    answer:
      "Absolutely — Scan Mail is one of the most popular upgrades for virtual office clients. It pairs perfectly with a professional business address, giving you full remote access to all your physical correspondence.",
  },
];

export const faqCategories = [
  "All",
  "Spaces & Services",
  "Amenities",
  "Phone Services",
  "Business Email",
  "Website, Hosting & CRM",
  "SEO Services",
  "AI Receptionist",
  "Scan Mail",
  "Locations",
  "Getting Started",
  "Pricing & Billing",
] as const;
