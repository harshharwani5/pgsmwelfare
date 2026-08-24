// ============================================================================
// OFFICIAL CONFIGURATION & COPYWRITING DATA FOR PGSM Welfare (pgsmwelfare.org)
// Pandit Shree Gyasi Lal Mishra Educational & Social Welfare Society
// Updated with Official 80G Exemption URN, Audit Data & NITI Aayog ID
// ============================================================================

export const pgsmConfig = {
  // 1. Legal Entity Identity
  fullName: "Pandit Shree Gyasi Lal Mishra Educational & Social Welfare Society",
  shortName: "PGSM Welfare",
  tagline: "शिक्षा से सशक्त समाज, सेवा से समृद्ध राष्ट्र | Empowering Society through Education",
  subtitle: "Since 2016, PGSM Welfare has been quietly rebuilding futures in rural Madhya Pradesh. Operating the Shanti College of Pharmacy and grassroots community camps, we turn intent into generational change.",
  establishedYear: 2016,
  yearsOfService: "9+",
  
  // 2. Official Registration & Trust Anchors
  registrationNumber: "06/12/03/11718/16",
  panNumber: "AAATP8891J",
  nitiAayogDarpanId: "MP/2021/0299785",
  csrRegistrationNo: "CSR00007144",
  taxExemption12A: "AAEAP1466C25BP01",
  taxExemption80G: "AAEAP1466C24BP02", // Officially verified 80G URN
  location: "Nowgong, Chhatarpur, Madhya Pradesh",

  // 3. Contact Details
  contact: {
    address: "House No. 22, Mishra Clinic, Ward No. 12, Bus Stand, Nowgong, District Chhatarpur (M.P.) – 471201",
    phone: "+91 9406762912",
    altPhone: "+91 9893719095", // Dr. Ravi Mishra's direct line from AR
    email: "psgmwelfare@gmail.com",
    donationsEmail: "donate@pgsmwelfare.org",
    officeHours: "Mon - Sat: 9:30 AM - 6:00 PM"
  },

  // 4. Key Operational Impact Metrics
  metrics: {
    yearsActive: "9+",
    beneficiariesServed: "4,500+",
    studentsTrained: "3,000+",
    nssCampsHeld: "100+",
    treesPlanted: "800+",
    pharmaPlacements: "25+" // Recent MacLeod's Pharma Placements
  },

  // NEW: Recent Impact Highlights for Hero Component
  recentImpactHighlights: [
    {
      id: "pharma-placements",
      badge: "Placement Drive",
      category: "Education & Employment",
      title: "25+ Rural Youths Placed at MacLeod's Pharma",
      desc: "Through Shanti College of Pharmacy, empowering students with top medical industry jobs."
    },
    {
      id: "spl-cricket",
      badge: "Sports Tournament",
      category: "Youth Development",
      title: "Shanti Premier League (SPL) Season-6",
      desc: "Mobilizing rural youth through sports, discipline, and community building."
    },
    {
      id: "medical-camps",
      badge: "Health Outreach",
      category: "Healthcare",
      title: "Continuous Free Diagnostic Camps",
      desc: "Providing essential medicines and eye screenings via Mishra Clinic to remote villages."
    }
  ],

  // 5. Official Governing Body & Leadership Board (3 Core Members)
  leadership: [
    {
      name: "Dr. Ravi Kant Mishra",
      role: "President",
      designation: "Physician & Social Leader · Nowgong, Chhatarpur",
      quote: "A Village Healed is a Nation Strengthened. Our mission is to ensure no rural family in Chhatarpur is left behind.",
      image: "/images/ravi_kant_mishra.jpg"
    },
    {
      name: "Pradeep Kumar Mishra",
      role: "Treasurer",
      designation: "Financial Governance & Community Administrator",
      quote: "Every single rupee received is audited and deployed directly into verified grassroots programs.",
      image: "/images/pradeep_mishra.jpg"
    },
    {
      name: "Bhartendu Mishra",
      role: "Secretary",
      designation: "Operations & Youth Mobilization Director",
      quote: "Transparency, active volunteer engagement, and dedicated field service are our foundations.",
      image: "/images/bhartendu_mishra.jpg"
    }
  ],

  // 6. Official President's Statement
  presidentStatement: {
    name: "Dr. Ravi Kant Mishra",
    role: "President, PGSM Welfare Society",
    credentials: "Physician & Social Leader · Nowgong, Chhatarpur, MP",
    title: "A Village Healed is a Nation Strengthened",
    content: [
      "As a doctor in Nowgong, I saw the same illness twice — once in the body, once in opportunity. Children missing school for preventable fevers. Women with extraordinary talent and no platform. Young people full of purpose and nowhere to channel it.",
      "That gap refused to let me sleep. So in 2016, we built PGSM Welfare — not as charity, but as a covenant with our own community.",
      "Today, our free health camps reach families who have never seen a specialist. Through Shanti College of Pharmacy, we are placing youth in top medical companies. Our skill centres are rewriting what rural women and children believe is possible.",
      "But this work is larger than any one person or team. If you carry even a small flame of social purpose — your time, your expertise, your donation — bring it here. Together, we will light up every corner of Chhatarpur."
    ]
  },

  // 7. Core Program Pillars (Formally includes Shanti College of Pharmacy & Shanti Premier League)
  programs: [
    {
      id: "shanti-college-pharmacy",
      title: "Shanti College of Pharmacy",
      category: "Higher Education",
      desc: "Operating Shanti College of Pharmacy (D.Pharm / B.Pharm programs), providing high-quality professional pharmaceutical education, advanced laboratory infrastructure, and organizing Mega Campus Placement Drives (25+ confirmed pharmaceutical jobs with MacLeod's Pharma and healthcare recruiters).",
      impact: "25+ Mega Placements · 3,000+ Students Trained",
      image: "/images/pillar-education.jpg",
      badge: "Higher Education"
    },
    {
      id: "shanti-premier-league",
      title: "Shanti Premier League (SPL) & Youth Action",
      category: "Youth & Sports",
      desc: "Organizing the premier annual district-level cricket championship (Shanti Premier League Season-6) and National Service Scheme (NSS) 7-day youth leadership residential camps, engaging over 200+ rural athletes, instilling discipline, sportsmanship, and channelizing youth energy into positive community leadership.",
      impact: "200+ Rural Athletes · 100+ NSS Camps",
      image: "/images/pillar-nss.jpg",
      badge: "Youth & Sports"
    },
    {
      id: "healthcare-camps",
      title: "Free Healthcare & Eye Camps",
      category: "Healthcare & Healing",
      desc: "Providing free specialist doctor consultations, diagnostic health camps, eye screenings, and essential prescription medicines directly from Mishra Clinic to 45+ remote villages in Nowgong and Chhatarpur district.",
      impact: "4,500+ Patients Treated · 45 Villages",
      image: "/images/pillar-health.jpg",
      badge: "Community Healing"
    },
    {
      id: "women-tailoring",
      title: "Vocational Tailoring & Micro-Enterprise",
      category: "Women Skilling",
      desc: "Providing certified sewing, cutting, embroidery, and handicraft training that enables rural women to start home enterprises, earn independent income, and support their families with economic dignity.",
      impact: "1,200+ Women Certified · Self-Reliance",
      image: "/images/pillar-tailoring.jpg",
      badge: "Economic Dignity"
    },
    {
      id: "tree-plantation",
      title: "Green Campus Tree Plantation Drives",
      category: "Environment",
      desc: "Leading reforestation initiatives across school premises, college campuses, and public village grounds in Nowgong, promoting environmental responsibility and clean ecological practices.",
      impact: "800+ Trees Planted · 25+ Green Campuses",
      image: "/images/work-trees.jpg",
      badge: "Green Future"
    }
  ],

  // 8. Hero Option Headlines (Copywriting Variations)
  heroHeadlines: [
    {
      id: "children-education",
      tag: "Child Education",
      category: "Education as Identity",
      headline: "Every Child in Chhatarpur Deserves to Dream in Full Colour",
      subtitle: "Since 2016, PGSM Welfare has been quietly rebuilding futures in rural Madhya Pradesh — one classroom, one skill, one life at a time.",
      cta: "Sponsor a Child's Future",
      image: "/images/hero_education.jpg"
    },
    {
      id: "rural-healthcare",
      tag: "Free Healthcare",
      category: "Community Healing",
      headline: "A Village Healed is a Nation Strengthened",
      subtitle: "Bringing free specialist doctor consultations, diagnostic health camps, and essential medicines directly from Mishra Clinic to remote villages.",
      cta: "Support a Health Camp",
      image: "/images/hero_healthcare.jpg"
    },
    {
      id: "women-empowerment",
      tag: "Women Skilling",
      category: "Economic Dignity",
      headline: "When You Train a Woman, You Secure an Entire Family",
      subtitle: "Certified vocational tailoring, embroidery, and entrepreneurship training empowering rural women to build independent livelihoods.",
      cta: "Sponsor a Sewing Machine",
      image: "/images/hero_women.jpg"
    }
  ],

  // 9. Recent Impact Highlights
  recentImpactHighlights: [
    {
      id: "pharmacy-placements",
      title: "Shanti College of Pharmacy Mega Placements (25+ Jobs)",
      category: "Higher Education & Placements",
      desc: "25+ rural students secured confirmed jobs in top pharmaceutical companies through on-campus mega placement drives.",
      date: "Campus Milestone",
      badge: "25+ Jobs Placed",
      icon: "GraduationCap"
    },
    {
      id: "spl-cricket",
      title: "Shanti Premier League (SPL) Cricket Tournament",
      category: "Youth Sports & Mobilization",
      desc: "Annual district-level cricket championship engaging 200+ rural youth in sportsmanship, discipline, and community leadership.",
      date: "Annual Tournament",
      badge: "Sports & Youth",
      icon: "Trophy"
    },
    {
      id: "healthcare-outreach",
      title: "4,500+ Patients Treated at Mishra Clinic & Outreach Camps",
      category: "Community Healthcare",
      desc: "Providing free diagnostics, consultations, eye checkups, and medicines across 45+ villages in Nowgong block.",
      date: "Continuous Impact",
      badge: "Free Healthcare",
      icon: "Heart"
    },
    {
      id: "women-tailoring",
      title: "1,200+ Rural Women Certified in Vocational Tailoring",
      category: "Women Skilling",
      desc: "Enabling rural women to start home enterprises, earn independent income, and support their families.",
      date: "Economic Dignity",
      badge: "Certified Skilling",
      icon: "Scissors"
    }
  ],

  // 10. Impact Tiers for Donation Gateway
  impactTiers: [
    {
      amount: 500,
      label: "₹500",
      title: "Fill a School Bag",
      desc: "Funds complete school kit for 1 rural child in Nowgong."
    },
    {
      amount: 1200,
      label: "₹1,200",
      title: "Unlock Digital Access",
      desc: "Covers one month of computer lab access for 3 children."
    },
    {
      amount: 2500,
      label: "₹2,500",
      title: "Change Her Economic Story",
      desc: "Sponsors vocational tailoring kit for 1 rural woman."
    },
    {
      amount: 5000,
      label: "₹5,000",
      title: "Bring Healthcare Home",
      desc: "Funds free mobile medical camp & diagnostic kit for 25 families."
    }
  ]
};
