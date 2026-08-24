const fs = require('fs');

// ==========================================
// UNIFIED FOOTER COMPONENT
// ==========================================
const unifiedFooterHtml = `
    <!-- Comprehensive 4-Column Footer -->
    <footer class="bg-[#1F1F1F] text-gray-300 border-t border-outline/20 w-full relative z-20">
        <!-- Main Content Area -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 px-margin-mobile md:px-margin-desktop py-16 max-w-[1280px] mx-auto">
            <!-- Column 1: Brand & Trust -->
            <div class="flex flex-col gap-4">
                <a href="index.html" class="text-2xl font-black text-[#FFB693] tracking-tight flex items-center gap-2">
                    <span class="material-symbols-outlined text-3xl text-[#F36F21]" style="font-variation-settings: 'FILL' 1;">volunteer_activism</span>
                    PGSM Welfare
                </a>
                <p class="text-sm text-gray-300 leading-relaxed">
                    Transforming health, education, and livelihoods in rural Chhatarpur since 2016.
                </p>
                <ul class="flex flex-col gap-2 mt-2 text-xs font-bold text-gray-200">
                    <li class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-[#F36F21] text-base" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                        Section 80G Tax Exempt
                    </li>
                    <li class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-[#F36F21] text-base" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                        NITI Aayog Darpan Registered
                    </li>
                    <li class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-[#F36F21] text-base" style="font-variation-settings: 'FILL' 1;">verified</span>
                        Reg: 06/12/03/11718/16
                    </li>
                </ul>
            </div>

            <!-- Column 2: Quick Links -->
            <div class="flex flex-col gap-4">
                <h3 class="text-lg font-bold text-[#FFB693]">Quick Links</h3>
                <nav class="flex flex-col gap-2 text-sm">
                    <a class="text-gray-300 hover:text-[#F36F21] transition-colors w-max" href="about.html">About Us</a>
                    <a class="text-gray-300 hover:text-[#F36F21] transition-colors w-max" href="programs.html">Our Programs</a>
                    <a class="text-gray-300 hover:text-[#F36F21] transition-colors w-max" href="volunteer.html">Volunteer With Us</a>
                    <a class="text-gray-300 hover:text-[#F36F21] transition-colors w-max" href="donate.html">Donate & Support</a>
                    <a class="text-gray-300 hover:text-[#F36F21] transition-colors w-max" href="about.html#governance">Leadership & Governance</a>
                    <a class="text-gray-300 hover:text-[#F36F21] transition-colors w-max" href="about.html#compliance">CSR & Legal Compliance</a>
                    <a class="text-gray-300 hover:text-[#F36F21] transition-colors w-max" href="index.html#work">Photo Gallery & Field Work</a>
                </nav>
            </div>

            <!-- Column 3: Contact Us -->
            <div class="flex flex-col gap-4">
                <h3 class="text-lg font-bold text-[#FFB693]">Contact Us</h3>
                <div class="flex flex-col gap-3 text-sm text-gray-300">
                    <p class="flex items-start gap-2">
                        <span class="material-symbols-outlined text-[#F36F21] text-lg shrink-0 mt-0.5">location_on</span>
                        <span>House No. 22, Mishra Clinic, Ward 12, Bus Stand, Nowgong, Chhatarpur (M.P.) – 471201</span>
                    </p>
                    <p class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-[#F36F21] text-lg shrink-0">call</span>
                        <a href="tel:+919406762912" class="hover:text-white transition-colors">+91 94067 62912</a>
                    </p>
                    <p class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-[#F36F21] text-lg shrink-0">mail</span>
                        <a href="mailto:info@pgsmwelfare.org" class="hover:text-white transition-colors">info@pgsmwelfare.org</a>
                    </p>
                </div>
            </div>

            <!-- Column 4: Join Our Mission -->
            <div class="flex flex-col gap-4">
                <h3 class="text-lg font-bold text-[#FFB693]">Join Our Mission</h3>
                <form class="flex flex-col gap-2" onsubmit="event.preventDefault(); alert('Thank you for subscribing to PGSM Welfare updates!');">
                    <label class="sr-only" for="newsletter-email">Your Email Address</label>
                    <input class="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#F36F21] focus:border-transparent placeholder:text-gray-400 text-sm" id="newsletter-email" placeholder="Your Email Address" type="email" required/>
                    <button class="bg-[#F36F21] text-white font-bold text-sm rounded-lg px-4 py-2.5 hover:bg-[#a04100] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F36F21] active:scale-95 shadow-md" type="submit">
                        Subscribe
                    </button>
                </form>
                <div class="flex gap-3 mt-2">
                    <a aria-label="Facebook" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#F36F21] hover:text-white transition-all shadow" href="#">
                        <span class="material-symbols-outlined text-base">public</span>
                    </a>
                    <a aria-label="Twitter" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#F36F21] hover:text-white transition-all shadow" href="#">
                        <span class="material-symbols-outlined text-base">share</span>
                    </a>
                    <a aria-label="Instagram" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#F36F21] hover:text-white transition-all shadow" href="#">
                        <span class="material-symbols-outlined text-base">photo_camera</span>
                    </a>
                    <a aria-label="YouTube" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#F36F21] hover:text-white transition-all shadow" href="#">
                        <span class="material-symbols-outlined text-base">smart_display</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-white/10 bg-[#171717]">
            <div class="px-margin-mobile md:px-margin-desktop py-4 max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
                <p>© 2026 Pandit Shree Gyasi Lal Mishra Educational & Social Welfare Society. All Rights Reserved.</p>
                <div class="flex items-center gap-4">
                    <p class="hidden sm:inline">Built for Chhatarpur, Madhya Pradesh.</p>
                    <div class="flex gap-3">
                        <a class="hover:text-[#FFB693] transition-colors" href="about.html#compliance">Privacy Policy</a>
                        <span aria-hidden="true">•</span>
                        <a class="hover:text-[#FFB693] transition-colors" href="about.html#compliance">Impact Report</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
`;

// ==========================================
// 1. HOME PAGE (5 SECTIONS)
// ==========================================
const homeHtml = `<!DOCTYPE html>
<html class="scroll-smooth" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>PGSM Welfare - Transforming Rural Lives in Chhatarpur</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "surface-tint": "#a04100",
                        "on-error": "#ffffff",
                        "error-container": "#ffdad6",
                        "tertiary": "#5d5f5f",
                        "primary-fixed": "#ffdbcc",
                        "primary-fixed-dim": "#ffb693",
                        "surface": "#fbf9f9",
                        "secondary-fixed": "#e5e2e1",
                        "error": "#ba1a1a",
                        "tertiary-fixed-dim": "#c6c6c7",
                        "on-primary-container": "#531e00",
                        "on-error-container": "#93000a",
                        "on-tertiary-container": "#2d2f2f",
                        "on-tertiary": "#ffffff",
                        "on-primary": "#ffffff",
                        "surface-dim": "#dbdad9",
                        "on-secondary-fixed-variant": "#474746",
                        "on-primary-fixed": "#351000",
                        "primary-container": "#f36f21",
                        "on-secondary-fixed": "#1b1b1c",
                        "on-surface-variant": "#584238",
                        "on-secondary-container": "#636262",
                        "primary": "#a04100",
                        "surface-container-low": "#f5f3f3",
                        "surface-bright": "#fbf9f9",
                        "secondary-container": "#e2dfde",
                        "surface-container-high": "#e9e8e7",
                        "inverse-on-surface": "#f2f0f0",
                        "on-secondary": "#ffffff",
                        "tertiary-container": "#959696",
                        "outline": "#8c7166",
                        "surface-variant": "#e3e2e2",
                        "background": "#fbf9f9",
                        "tertiary-fixed": "#e2e2e2",
                        "surface-container-lowest": "#ffffff",
                        "on-background": "#1b1c1c",
                        "surface-container": "#efeded",
                        "surface-container-highest": "#e3e2e2",
                        "secondary-fixed-dim": "#c8c6c5",
                        "inverse-surface": "#303031",
                        "secondary": "#5f5e5e",
                        "on-tertiary-fixed-variant": "#454747",
                        "on-primary-fixed-variant": "#7a3000",
                        "on-tertiary-fixed": "#1a1c1c",
                        "inverse-primary": "#ffb693",
                        "on-surface": "#1b1c1c",
                        "outline-variant": "#e0c0b2"
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "1.5rem",
                        "full": "9999px"
                    },
                    spacing: {
                        "lg": "48px",
                        "xl": "80px",
                        "md": "24px",
                        "sm": "16px",
                        "gutter": "24px",
                        "margin-mobile": "16px",
                        "xs": "8px",
                        "base": "4px",
                        "margin-desktop": "64px"
                    },
                    fontFamily: {
                        "body-lg": ["Inter", "sans-serif"],
                        "headline-lg-mobile": ["Inter", "sans-serif"],
                        "display-lg": ["Inter", "sans-serif"],
                        "label-sm": ["Inter", "sans-serif"],
                        "headline-md": ["Inter", "sans-serif"],
                        "body-md": ["Inter", "sans-serif"],
                        "headline-lg": ["Inter", "sans-serif"],
                        "label-bold": ["Inter", "sans-serif"]
                    },
                    fontSize: {
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "headline-lg-mobile": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "800" }],
                        "display-lg": ["64px", { "lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "headline-lg": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.01em", "fontWeight": "800" }],
                        "label-bold": ["14px", { "lineHeight": "20px", "fontWeight": "700" }]
                    }
                }
            }
        };
    </script>
    <style>
        .ambient-shadow {
            box-shadow: 0px 4px 20px rgba(31, 31, 31, 0.05);
        }
        .bento-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 24px;
        }
        @media (min-width: 768px) {
            .bento-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (min-width: 1024px) {
            .bento-grid {
                grid-template-columns: repeat(3, 1fr);
            }
            .bottom-row-center {
                grid-column: 1 / -1;
                display: flex;
                justify-content: center;
                gap: 24px;
            }
            .bottom-row-center > div {
                flex: 0 0 calc(33.333% - 16px);
                max-width: calc(33.333% - 16px);
            }
        }
        .card-hover-effect {
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }
        .card-hover-effect:hover {
            transform: translateY(-4px);
            border-color: #F36F21;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .active-tier {
            border-color: #F36F21 !important;
            background-color: #FFF7F2 !important;
        }
    </style>
</head>
<body class="bg-surface font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">

    <!-- Top Navigation Bar -->
    <header class="bg-surface w-full z-50 sticky top-0 transition-all duration-300 border-b border-outline-variant/10" id="topNav">
        <div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto h-20">
            <!-- Brand Logo -->
            <a class="text-headline-md font-headline-md text-primary flex items-center gap-2" href="index.html">
                <span class="material-symbols-outlined text-3xl text-primary" style="font-variation-settings: 'FILL' 1;">volunteer_activism</span>
                <span class="font-black tracking-tight text-primary">PGSM Welfare</span>
            </a>
            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center gap-gutter">
                <a class="text-secondary font-label-bold text-label-bold hover:text-primary hover:opacity-80 transition-opacity duration-200" href="about.html">About Us</a>
                <a class="text-secondary font-label-bold text-label-bold hover:text-primary hover:opacity-80 transition-opacity duration-200" href="programs.html">Programs</a>
                <a class="text-secondary font-label-bold text-label-bold hover:text-primary hover:opacity-80 transition-opacity duration-200" href="volunteer.html">Volunteer</a>
                <a class="text-secondary font-label-bold text-label-bold hover:text-primary hover:opacity-80 transition-opacity duration-200" href="#work">Our Work</a>
                <a class="text-secondary font-label-bold text-label-bold hover:text-primary hover:opacity-80 transition-opacity duration-200" href="about.html#governance">Leadership</a>
                <a class="text-secondary font-label-bold text-label-bold hover:text-primary hover:opacity-80 transition-opacity duration-200" href="donate.html">Donate</a>
            </nav>
            <!-- Trailing Action -->
            <div class="hidden md:flex items-center gap-3">
                <a href="donate.html" class="bg-primary text-on-primary font-label-bold text-label-bold px-8 py-3 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200 shadow-sm inline-flex items-center gap-2">
                    <span class="material-symbols-outlined text-sm">favorite</span>
                    Donate
                </a>
            </div>
            <!-- Mobile Menu Toggle -->
            <button aria-label="Toggle menu" class="md:hidden text-on-surface p-2">
                <span class="material-symbols-outlined text-2xl">menu</span>
            </button>
        </div>
    </header>

    <main class="flex-grow">
        <!-- ================= SECTION 1: HERO CANVAS ================= -->
        <section id="hero" class="bg-primary-container relative overflow-hidden pt-12 pb-24 md:pt-16 md:pb-28 px-margin-mobile md:px-margin-desktop">
            <div class="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center relative z-10">
                <!-- Left Column: Content -->
                <div class="flex flex-col items-start space-y-6">
                    <!-- Bilingual Tagline Badge -->
                    <div class="bg-on-surface text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-md border border-white/20">
                        <span class="text-[#F36F21]">✦</span>
                        <span>शिक्षा से सशक्त समाज, सेवा से समृद्ध राष्ट्र | Empowering Society through Education</span>
                    </div>

                    <!-- Pill Badge -->
                    <div class="bg-on-surface/80 text-on-primary font-label-sm text-label-sm px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm border border-white/10">
                        <span>🌟</span>
                        <span>9+ Years of Ground Impact · Est. 2016</span>
                    </div>

                    <!-- Headline -->
                    <h1 class="text-headline-lg-mobile md:text-display-lg font-display-lg text-on-primary leading-tight max-w-2xl font-extrabold">
                        Every Child in Chhatarpur Deserves to Dream in Full Colour
                    </h1>
                    <!-- Subtitle -->
                    <p class="text-body-lg font-body-lg text-on-primary/90 max-w-xl leading-relaxed">
                        Since 2016, PGSM Welfare has been quietly rebuilding futures in rural Madhya Pradesh — one classroom, one skill, one life at a time. Your support keeps that promise alive.
                    </p>
                    <!-- Action Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                        <a href="donate.html" class="bg-on-primary text-primary-container font-label-bold text-label-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 group font-bold shadow-md">
                            <span class="material-symbols-outlined text-xl group-hover:scale-110 transition-transform" style="font-variation-settings: 'FILL' 1;">favorite</span>
                            Sponsor a Child's Future
                        </a>
                        <a href="donate.html" class="bg-on-surface text-on-primary font-label-bold text-label-bold px-10 py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-on-surface/90 hover:shadow-xl transition-all duration-200 border-2 border-on-primary/20 font-bold">
                            <span class="text-lg">Calculate Impact</span>
                            <span class="material-symbols-outlined text-2xl">analytics</span>
                        </a>
                    </div>
                    <!-- Trust Strip -->
                    <div class="pt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-label-sm font-label-sm text-on-primary/80">
                        <span class="flex items-center gap-1">
                            <span class="material-symbols-outlined text-sm">check</span>
                            Registered Society (06/12/03/11718/16)
                        </span>
                        <span class="hidden sm:inline opacity-50">|</span>
                        <span class="flex items-center gap-1">
                            <span class="material-symbols-outlined text-sm">check</span>
                            100% Tax Exemption 80G
                        </span>
                    </div>
                </div>

                <!-- Right Column: Visuals -->
                <div class="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto mt-8 lg:mt-0">
                    <!-- Photo Card -->
                    <div class="aspect-[4/3] rounded-2xl border-8 border-on-primary overflow-hidden ambient-shadow bg-surface-variant relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500 ease-out shadow-2xl">
                        <img alt="Smiling young girl holding books outside a rural school in Madhya Pradesh" class="w-full h-full object-cover" src="images/hero.jpg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80';"/>
                    </div>
                    <!-- Floating Stat Card -->
                    <div class="absolute -bottom-8 -right-8 lg:-right-16 z-20 bg-on-surface rounded-2xl p-8 ambient-shadow animate-bounce shadow-2xl" style="animation: bounce 3s infinite; animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);">
                        <div class="flex flex-col items-center">
                            <span class="text-3xl md:text-headline-lg font-display-lg text-primary-container font-black">4,500+</span>
                            <span class="text-label-bold font-label-bold text-on-primary mt-2 uppercase tracking-wider text-xs">Lives Directly Empowered</span>
                        </div>
                    </div>
                    <!-- Decorative Element behind image -->
                    <div class="absolute top-8 -left-8 w-full h-full rounded-2xl border-4 border-on-primary/20 z-0"></div>
                </div>
            </div>

            <!-- Recent Impact Highlights Bar -->
            <div class="max-w-[1280px] mx-auto mt-16 relative z-10">
                <div class="flex items-center gap-2 mb-4 text-white font-bold text-xs uppercase tracking-wider">
                    <span class="material-symbols-outlined text-[#FFDBCC] text-base" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
                    <span>Recent Impact Highlights</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <!-- Highlight 1: Pharmacy Placements -->
                    <div class="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex flex-col justify-between gap-3 text-white hover:border-[#FFDBCC] transition-all duration-300">
                        <div class="flex items-center justify-between">
                            <span class="bg-[#F36F21] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">25+ Jobs Placed</span>
                            <span class="material-symbols-outlined text-[#FFDBCC] text-lg">school</span>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-white leading-snug">Shanti College of Pharmacy Mega Placements (25+ Jobs)</h4>
                            <p class="text-xs text-white/80 mt-1 leading-relaxed">25+ rural students secured confirmed jobs in pharmaceutical leaders like MacLeod's Pharma.</p>
                        </div>
                    </div>

                    <!-- Highlight 2: SPL Cricket Tournament -->
                    <div class="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex flex-col justify-between gap-3 text-white hover:border-[#FFDBCC] transition-all duration-300">
                        <div class="flex items-center justify-between">
                            <span class="bg-[#F36F21] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">Youth Tournament</span>
                            <span class="material-symbols-outlined text-[#FFDBCC] text-lg">sports_cricket</span>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-white leading-snug">Shanti Premier League (SPL) Cricket Tournament</h4>
                            <p class="text-xs text-white/80 mt-1 leading-relaxed">District-level youth cricket tournament promoting physical health, discipline, and leadership.</p>
                        </div>
                    </div>

                    <!-- Highlight 3: Free Healthcare -->
                    <div class="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex flex-col justify-between gap-3 text-white hover:border-[#FFDBCC] transition-all duration-300">
                        <div class="flex items-center justify-between">
                            <span class="bg-[#F36F21] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">Free Healthcare</span>
                            <span class="material-symbols-outlined text-[#FFDBCC] text-lg">medical_services</span>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-white leading-snug">4,500+ Patients Treated at Mishra Clinic & Camps</h4>
                            <p class="text-xs text-white/80 mt-1 leading-relaxed">Free specialist doctor checkups, eye tests, and prescription medicines across 45+ villages.</p>
                        </div>
                    </div>

                    <!-- Highlight 4: Women Skilling -->
                    <div class="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex flex-col justify-between gap-3 text-white hover:border-[#FFDBCC] transition-all duration-300">
                        <div class="flex items-center justify-between">
                            <span class="bg-[#F36F21] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">Livelihood</span>
                            <span class="material-symbols-outlined text-[#FFDBCC] text-lg">styler</span>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-white leading-snug">1,200+ Women Certified in Tailoring</h4>
                            <p class="text-xs text-white/80 mt-1 leading-relaxed">Empowering rural women with certified tailoring skills and micro-enterprise support.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Background Decorative Blob (Subtle) -->
            <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        </section>

        <!-- Bottom Metrics Bar -->
        <section class="bg-surface-container-lowest border-b border-outline-variant/30 relative z-20 -mt-8 shadow-sm">
            <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-12">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x divide-outline-variant/20">
                    <!-- Metric 1 -->
                    <div class="flex flex-col items-center md:items-start px-8 text-center md:text-left">
                        <span class="text-primary font-display-lg text-3xl md:text-4xl font-extrabold">9+</span>
                        <span class="text-secondary font-label-bold text-label-bold uppercase tracking-widest mt-2 text-xs">Years Active Service</span>
                    </div>
                    <!-- Metric 2 -->
                    <div class="flex flex-col items-center md:items-start px-8 text-center md:text-left">
                        <span class="text-primary font-display-lg text-3xl md:text-4xl font-extrabold">3,000+</span>
                        <span class="text-secondary font-label-bold text-label-bold uppercase tracking-widest mt-2 text-xs">Students Trained</span>
                    </div>
                    <!-- Metric 3 -->
                    <div class="flex flex-col items-center md:items-start px-8 text-center md:text-left">
                        <span class="text-primary font-display-lg text-3xl md:text-4xl font-extrabold">100+</span>
                        <span class="text-secondary font-label-bold text-label-bold uppercase tracking-widest mt-2 text-xs">NSS Youth Camps</span>
                    </div>
                    <!-- Metric 4 -->
                    <div class="flex flex-col items-center md:items-start px-8 text-center md:text-left">
                        <span class="text-primary font-display-lg text-3xl md:text-4xl font-extrabold">800+</span>
                        <span class="text-secondary font-label-bold text-label-bold uppercase tracking-widest mt-2 text-xs">Trees Planted</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= SECTION 2: CORE PROGRAM PILLARS ================= -->
        <section id="pillars" class="w-full bg-[#FFF7F2] py-xl px-margin-mobile md:px-margin-desktop">
            <div class="max-w-[1280px] mx-auto">
                <!-- Section Header -->
                <div class="text-center mb-xl max-w-3xl mx-auto flex flex-col items-center">
                    <span class="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary-container/10 text-[#F36F21] font-label-bold text-label-sm uppercase tracking-wider mb-sm font-bold">
                        Comprehensive Community Upliftment
                    </span>
                    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#1F1F1F] mb-md font-extrabold">
                        Our Core Program Pillars
                    </h2>
                    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                        Transforming rural lives across Nowgong & Chhatarpur district through transparent, field-tested initiatives.
                    </p>
                </div>

                <!-- Bento Grid -->
                <div class="bento-grid">
                    <!-- Card 1 -->
                    <div class="bg-white rounded-[16px] ambient-shadow overflow-hidden group flex flex-col h-full card-hover-effect">
                        <div class="relative aspect-square w-full overflow-hidden">
                            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Education as Identity" src="images/pillar-education.jpg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80';"/>
                            <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-white/40 shadow-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                                <span class="material-symbols-outlined text-[#F36F21] text-[18px]">school</span>
                                <span class="font-label-bold text-label-sm text-[#F36F21] uppercase tracking-wide font-bold">Education as Identity</span>
                            </div>
                        </div>
                        <div class="p-md flex-grow flex flex-col justify-between">
                            <div>
                                <h3 class="font-headline-md text-headline-md text-[#1F1F1F] mb-xs font-bold">Education & Digital Literacy</h3>
                                <p class="font-body-md text-body-md text-on-surface-variant mb-md leading-relaxed">Setting up computer learning centers, distributing school kits, and student scholarships.</p>
                            </div>
                            <div class="flex items-center justify-between border-t border-outline-variant/30 pt-sm mt-auto">
                                <span class="font-label-bold text-label-bold text-[#1F1F1F] tracking-wide font-bold">3,000+ Students Trained</span>
                                <a href="programs.html#education" class="w-10 h-10 rounded-full bg-[#FFF2EB] flex items-center justify-center text-[#F36F21] group-hover:bg-[#F36F21] group-hover:text-white transition-colors duration-200 shadow-sm">
                                    <span class="material-symbols-outlined">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="bg-white rounded-[16px] ambient-shadow overflow-hidden group flex flex-col h-full card-hover-effect">
                        <div class="relative aspect-square w-full overflow-hidden">
                            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Community Healing" src="images/pillar-health.jpg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80';"/>
                            <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-white/40 shadow-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                                <span class="material-symbols-outlined text-[#F36F21] text-[18px]">medical_services</span>
                                <span class="font-label-bold text-label-sm text-[#F36F21] uppercase tracking-wide font-bold">Community Healing</span>
                            </div>
                        </div>
                        <div class="p-md flex-grow flex flex-col justify-between">
                            <div>
                                <h3 class="font-headline-md text-headline-md text-[#1F1F1F] mb-xs font-bold">Free Healthcare & Eye Camps</h3>
                                <p class="font-body-md text-body-md text-on-surface-variant mb-md leading-relaxed">Free diagnostic health checkups, eye testing, and medicine distribution from Mishra Clinic.</p>
                            </div>
                            <div class="flex items-center justify-between border-t border-outline-variant/30 pt-sm mt-auto">
                                <span class="font-label-bold text-label-bold text-[#1F1F1F] tracking-wide font-bold">4,500+ Patients Treated</span>
                                <a href="programs.html#healthcare" class="w-10 h-10 rounded-full bg-[#FFF2EB] flex items-center justify-center text-[#F36F21] group-hover:bg-[#F36F21] group-hover:text-white transition-colors duration-200 shadow-sm">
                                    <span class="material-symbols-outlined">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="bg-white rounded-[16px] ambient-shadow overflow-hidden group flex flex-col h-full card-hover-effect">
                        <div class="relative aspect-square w-full overflow-hidden">
                            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Economic Dignity" src="images/pillar-tailoring.jpg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80';"/>
                            <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-white/40 shadow-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                                <span class="material-symbols-outlined text-[#F36F21] text-[18px]">styler</span>
                                <span class="font-label-bold text-label-sm text-[#F36F21] uppercase tracking-wide font-bold">Economic Dignity</span>
                            </div>
                        </div>
                        <div class="p-md flex-grow flex flex-col justify-between">
                            <div>
                                <h3 class="font-headline-md text-headline-md text-[#1F1F1F] mb-xs font-bold">Women Vocational Tailoring</h3>
                                <p class="font-body-md text-body-md text-on-surface-variant mb-md leading-relaxed">Certified tailoring, embroidery, and handicraft training enabling financial independence.</p>
                            </div>
                            <div class="flex items-center justify-between border-t border-outline-variant/30 pt-sm mt-auto">
                                <span class="font-label-bold text-label-bold text-[#1F1F1F] tracking-wide font-bold">1,200+ Women Skilled</span>
                                <a href="programs.html#women-skilling" class="w-10 h-10 rounded-full bg-[#FFF2EB] flex items-center justify-center text-[#F36F21] group-hover:bg-[#F36F21] group-hover:text-white transition-colors duration-200 shadow-sm">
                                    <span class="material-symbols-outlined">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="bottom-row-center w-full">
                        <!-- Card 4 -->
                        <div class="bg-white rounded-[16px] ambient-shadow overflow-hidden group flex flex-col h-full card-hover-effect w-full md:w-auto">
                            <div class="relative aspect-square w-full overflow-hidden">
                                <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Youth in Action" src="images/pillar-nss.jpg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80';"/>
                                <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-white/40 shadow-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                                    <span class="material-symbols-outlined text-[#F36F21] text-[18px]">group</span>
                                    <span class="font-label-bold text-label-sm text-[#F36F21] uppercase tracking-wide font-bold">Youth in Action</span>
                                </div>
                            </div>
                            <div class="p-md flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 class="font-headline-md text-headline-md text-[#1F1F1F] mb-xs font-bold">Youth Leadership & NSS Camps</h3>
                                    <p class="font-body-md text-body-md text-on-surface-variant mb-md leading-relaxed">Fostering civic leadership, youth volunteering, and school renovation projects.</p>
                                </div>
                                <div class="flex items-center justify-between border-t border-outline-variant/30 pt-sm mt-auto">
                                    <span class="font-label-bold text-label-bold text-[#1F1F1F] tracking-wide font-bold">100+ NSS Camps Conducted</span>
                                    <a href="programs.html#youth-nss" class="w-10 h-10 rounded-full bg-[#FFF2EB] flex items-center justify-center text-[#F36F21] group-hover:bg-[#F36F21] group-hover:text-white transition-colors duration-200 shadow-sm">
                                        <span class="material-symbols-outlined">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Card 5 -->
                        <div class="bg-white rounded-[16px] ambient-shadow overflow-hidden group flex flex-col h-full card-hover-effect w-full md:w-auto mt-6 md:mt-0 lg:mt-0">
                            <div class="relative aspect-square w-full overflow-hidden">
                                <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Green Future" src="images/pillar-trees.jpg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80';"/>
                                <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-white/40 shadow-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                                    <span class="material-symbols-outlined text-[#F36F21] text-[18px]">eco</span>
                                    <span class="font-label-bold text-label-sm text-[#F36F21] uppercase tracking-wide font-bold">Green Future</span>
                                </div>
                            </div>
                            <div class="p-md flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 class="font-headline-md text-headline-md text-[#1F1F1F] mb-xs font-bold">Green Campus Tree Plantation</h3>
                                    <p class="font-body-md text-body-md text-on-surface-variant mb-md leading-relaxed">Tree plantation drives across rural schools, colleges, and public spaces in Nowgong.</p>
                                </div>
                                <div class="flex items-center justify-between border-t border-outline-variant/30 pt-sm mt-auto">
                                    <span class="font-label-bold text-label-bold text-[#1F1F1F] tracking-wide font-bold">800+ Trees Planted</span>
                                    <a href="programs.html#environment" class="w-10 h-10 rounded-full bg-[#FFF2EB] flex items-center justify-center text-[#F36F21] group-hover:bg-[#F36F21] group-hover:text-white transition-colors duration-200 shadow-sm">
                                        <span class="material-symbols-outlined">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= SECTION 3: OUR WORK IN THE FIELD ================= -->
        <section id="work" class="w-full relative overflow-hidden py-xl" style="background-color: #F59E0B;">
            <!-- Watermark Text -->
            <div class="absolute top-0 right-0 pointer-events-none select-none overflow-hidden h-full w-full opacity-10 flex justify-end items-start pt-lg pr-lg z-0">
                <span class="font-display-lg text-[120px] font-black text-white whitespace-nowrap leading-none transform translate-x-1/4 -translate-y-1/4">OUR WORK</span>
            </div>
            <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10 w-full flex flex-col gap-lg">
                <!-- Header -->
                <div class="flex flex-col gap-xs max-w-2xl">
                    <h2 class="font-headline-lg text-headline-lg md:text-[40px] font-extrabold text-[#1F1F1F]">Our Work in the Field</h2>
                    <p class="font-body-md text-body-md text-[#1F1F1F] font-medium">Transforming Rural Lives Through Holistic Change in Chhatarpur</p>
                </div>

                <!-- Carousel Area -->
                <div class="relative w-full">
                    <!-- Carousel Container -->
                    <div class="flex gap-md overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-sm w-full" id="work-carousel">
                        <!-- Card 1: Health -->
                        <div class="snap-start shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] aspect-square relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl border-4 border-white/20">
                            <img alt="Health Camp" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="images/work-health.jpg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80';"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 w-full p-md flex flex-col gap-sm">
                                <div class="flex flex-col gap-base">
                                    <h3 class="font-headline-md text-headline-md text-white font-bold">Health</h3>
                                    <p class="font-body-md text-body-md text-white/90">Access to primary diagnosis & medicine</p>
                                </div>
                                <a href="programs.html#healthcare" class="self-start mt-sm backdrop-blur-md bg-white/20 border border-white/30 text-white font-label-bold text-label-bold px-md py-xs rounded-full flex items-center gap-xs hover:bg-white/30 transition-colors shadow-md">
                                    View More <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>

                        <!-- Card 2: Education -->
                        <div class="snap-start shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] aspect-square relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl border-4 border-white/20">
                            <img alt="Digital Classroom" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="images/work-education.jpg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80';"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 w-full p-md flex flex-col gap-sm">
                                <div class="flex flex-col gap-base">
                                    <h3 class="font-headline-md text-headline-md text-white font-bold">Education</h3>
                                    <p class="font-body-md text-body-md text-white/90">Digital literacy & school support kits</p>
                                </div>
                                <a href="programs.html#education" class="self-start mt-sm backdrop-blur-md bg-white/20 border border-white/30 text-white font-label-bold text-label-bold px-md py-xs rounded-full flex items-center gap-xs hover:bg-white/30 transition-colors shadow-md">
                                    View More <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>

                        <!-- Card 3: Women Empowerment -->
                        <div class="snap-start shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] aspect-square relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl border-4 border-white/20">
                            <img alt="Women Tailoring" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="images/work-tailoring.jpg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80';"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 w-full p-md flex flex-col gap-sm">
                                <div class="flex flex-col gap-base">
                                    <h3 class="font-headline-md text-headline-md text-white font-bold">Women Empowerment</h3>
                                    <p class="font-body-md text-body-md text-white/90">Certified tailoring & livelihood training</p>
                                </div>
                                <a href="programs.html#women-skilling" class="self-start mt-sm backdrop-blur-md bg-white/20 border border-white/30 text-white font-label-bold text-label-bold px-md py-xs rounded-full flex items-center gap-xs hover:bg-white/30 transition-colors shadow-md">
                                    View More <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>

                        <!-- Card 4: Youth Leadership -->
                        <div class="snap-start shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] aspect-square relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl border-4 border-white/20">
                            <img alt="NSS Camp" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="images/work-nss.jpg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80';"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 w-full p-md flex flex-col gap-sm">
                                <div class="flex flex-col gap-base">
                                    <h3 class="font-headline-md text-headline-md text-white font-bold">Youth Leadership</h3>
                                    <p class="font-body-md text-body-md text-white/90">Fostering community service & civic action</p>
                                </div>
                                <a href="programs.html#youth-nss" class="self-start mt-sm backdrop-blur-md bg-white/20 border border-white/30 text-white font-label-bold text-label-bold px-md py-xs rounded-full flex items-center gap-xs hover:bg-white/30 transition-colors shadow-md">
                                    View More <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>

                        <!-- Card 5: Green Campus -->
                        <div class="snap-start shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] aspect-square relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl border-4 border-white/20">
                            <img alt="Tree Plantation" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="images/work-trees.jpg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80';"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 w-full p-md flex flex-col gap-sm">
                                <div class="flex flex-col gap-base">
                                    <h3 class="font-headline-md text-headline-md text-white font-bold">Green Campus</h3>
                                    <p class="font-body-md text-body-md text-white/90">800+ tree plantation drives</p>
                                </div>
                                <a href="programs.html#environment" class="self-start mt-sm backdrop-blur-md bg-white/20 border border-white/30 text-white font-label-bold text-label-bold px-md py-xs rounded-full flex items-center gap-xs hover:bg-white/30 transition-colors shadow-md">
                                    View More <span class="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Controls -->
                    <div class="flex gap-sm mt-md w-full justify-start items-center">
                        <button class="w-12 h-12 rounded-full bg-[#1F1F1F] text-white flex justify-center items-center hover:bg-[#333] transition-colors shadow-lg active:scale-95 cursor-pointer" id="prevBtn" aria-label="Previous slide">
                            <span class="material-symbols-outlined">arrow_left_alt</span>
                        </button>
                        <button class="w-12 h-12 rounded-full bg-[#1F1F1F] text-white flex justify-center items-center hover:bg-[#333] transition-colors shadow-lg active:scale-95 cursor-pointer" id="nextBtn" aria-label="Next slide">
                            <span class="material-symbols-outlined">arrow_right_alt</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= SECTION 4: LEADERSHIP SPOTLIGHT ================= -->
        <section id="leadership" class="w-full min-h-[80vh] flex flex-col md:flex-row bg-[#1F1F1F] relative overflow-hidden">
            <!-- Image Side -->
            <div class="w-full md:w-1/2 relative min-h-[50vh] md:min-h-[700px] overflow-hidden">
                <img alt="Dr. Ravi Kant Mishra" class="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out opacity-85 hover:opacity-100" src="images/dr-ravi-mishra.jpg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80';"/>
                <div class="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] via-transparent to-transparent opacity-90 md:hidden"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1F1F1F] opacity-90 hidden md:block"></div>
                <div class="absolute bottom-0 left-0 p-margin-desktop md:hidden">
                    <p class="text-white text-2xl font-bold tracking-tight">Dr. Ravi Kant Mishra</p>
                    <p class="text-primary-fixed-dim font-bold text-sm uppercase tracking-wider mt-1">Founder & President</p>
                </div>
            </div>
            <!-- Content Side -->
            <div class="w-full md:w-1/2 flex flex-col justify-center px-margin-mobile md:px-margin-desktop py-xl md:py-16 relative z-10">
                <div class="max-w-xl">
                    <!-- Accent Element -->
                    <div class="w-16 h-1 bg-primary-container mb-lg"></div>
                    <!-- Title/Name (Desktop) -->
                    <div class="hidden md:block mb-lg">
                        <h2 class="text-white text-display-lg font-display-lg leading-tight tracking-tight font-extrabold">Dr. Ravi Kant Mishra</h2>
                        <p class="text-primary-fixed-dim font-label-bold text-label-bold uppercase tracking-wider mt-2">Founder & President</p>
                    </div>
                    <!-- Quote -->
                    <blockquote class="mb-lg">
                        <p class="text-white font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight md:leading-snug font-bold">
                            "A Village Healed is a Nation Strengthened."
                        </p>
                    </blockquote>
                    <!-- Body Text -->
                    <div class="text-surface-variant font-body-lg text-body-lg space-y-6 mb-xl leading-relaxed">
                        <p>
                            For over two decades, Dr. Mishra has spearheaded initiatives that bring critical healthcare, education, and sustainable development to the most marginalized rural communities. His approach is not merely charity, but systemic empowerment.
                        </p>
                        <p>
                            We believe that true impact requires deep roots. By partnering with local leaders and focusing on preventative, community-driven solutions, we are building resilience from the ground up.
                        </p>
                    </div>
                    <!-- CTA -->
                    <div class="flex flex-col sm:flex-row gap-sm items-start sm:items-center">
                        <a href="donate.html" class="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-[0_4px_20px_rgba(243,111,33,0.3)] hover:shadow-[0_6px_25px_rgba(243,111,33,0.4)] active:scale-95 flex items-center gap-2 group">
                            Join Our Mission
                            <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                        <a href="about.html" class="text-white font-label-bold text-label-bold px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors duration-300">
                            Read Full Story
                        </a>
                    </div>
                </div>
                <!-- Decorative Subtle Watermark -->
                <div class="absolute bottom-10 right-10 opacity-5 pointer-events-none select-none hidden lg:block">
                    <span class="material-symbols-outlined text-[200px] text-white">volunteer_activism</span>
                </div>
            </div>
        </section>

        <!-- ================= SECTION 5: INTERACTIVE DONATION CALCULATOR ================= -->
        <section id="donate" class="w-full py-xl px-margin-mobile md:px-margin-desktop bg-[#FBF9F9]">
            <div class="max-w-[1280px] mx-auto">
                <div class="bg-surface-container-lowest rounded-[24px] border-2 border-[#F36F21] shadow-[0px_4px_20px_rgba(27,28,28,0.05)] overflow-hidden">
                    <div class="grid grid-cols-1 lg:grid-cols-2">
                        <!-- Left Column: Interactive Tiers -->
                        <div class="p-md lg:p-xl flex flex-col gap-lg border-b lg:border-b-0 lg:border-r border-surface-variant">
                            <div>
                                <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs font-extrabold">Your Contribution, Their Future</h2>
                                <p class="font-body-lg text-body-lg text-secondary">Select an impact tier below to see exactly how your donation transforms lives.</p>
                            </div>
                            <div class="flex flex-col gap-sm" id="donation-tiers">
                                <!-- Tier 1 -->
                                <button class="w-full text-left p-sm rounded-xl border border-surface-variant bg-surface hover:border-[#F36F21] hover:bg-[#FFF7F2] transition-all group focus:outline-none flex justify-between items-center donation-tier cursor-pointer" data-desc="Provides complete school kits (bag, books, stationery) for 2 primary school children for an entire year." data-tier="500" data-title="Fill a School Bag">
                                    <div class="flex flex-col">
                                        <span class="font-headline-md text-headline-md text-on-surface group-hover:text-[#F36F21] transition-colors font-bold">Rs. 500</span>
                                        <span class="font-label-bold text-label-bold text-secondary mt-1">Fill a School Bag</span>
                                    </div>
                                    <span class="material-symbols-outlined text-surface-variant group-hover:text-[#F36F21]">arrow_forward</span>
                                </button>
                                <!-- Tier 2 (Selected/Default) -->
                                <button class="w-full text-left p-sm rounded-xl border-2 border-[#F36F21] bg-[#FFF7F2] shadow-[0px_4px_20px_rgba(27,28,28,0.05)] transition-all group focus:outline-none flex justify-between items-center donation-tier active-tier cursor-pointer" data-desc="Covers one month of computer lab access for 3 children, giving rural kids their first step into the digital world." data-tier="1200" data-title="Unlock Digital Access">
                                    <div class="flex flex-col">
                                        <span class="font-headline-md text-headline-md text-on-surface mt-1 font-bold text-[#F36F21]">Rs. 1,200</span>
                                        <span class="font-label-bold text-label-bold text-on-surface mt-1">Unlock Digital Access</span>
                                    </div>
                                    <span class="material-symbols-outlined text-[#F36F21]">check_circle</span>
                                </button>
                                <!-- Tier 3 -->
                                <button class="w-full text-left p-sm rounded-xl border border-surface-variant bg-surface hover:border-[#F36F21] hover:bg-[#FFF7F2] transition-all group focus:outline-none flex justify-between items-center donation-tier cursor-pointer" data-desc="Funds vocational training materials for women, empowering them to start small businesses and achieve financial independence." data-tier="2500" data-title="Change Her Economic Story">
                                    <div class="flex flex-col">
                                        <span class="font-headline-md text-headline-md text-on-surface group-hover:text-[#F36F21] transition-colors font-bold">Rs. 2,500</span>
                                        <span class="font-label-bold text-label-bold text-secondary mt-1">Change Her Economic Story</span>
                                    </div>
                                    <span class="material-symbols-outlined text-surface-variant group-hover:text-[#F36F21]">arrow_forward</span>
                                </button>
                                <!-- Tier 4 -->
                                <button class="w-full text-left p-sm rounded-xl border border-surface-variant bg-surface hover:border-[#F36F21] hover:bg-[#FFF7F2] transition-all group focus:outline-none flex justify-between items-center donation-tier cursor-pointer" data-desc="Deploys a mobile health camp diagnostic kit, providing essential check-ups for an entire remote village community." data-tier="5000" data-title="Bring Healthcare to Her Door">
                                    <div class="flex flex-col">
                                        <span class="font-headline-md text-headline-md text-on-surface group-hover:text-[#F36F21] transition-colors font-bold">Rs. 5000</span>
                                        <span class="font-label-bold text-label-bold text-secondary mt-1">Bring Healthcare to Her Door</span>
                                    </div>
                                    <span class="material-symbols-outlined text-surface-variant group-hover:text-[#F36F21]">arrow_forward</span>
                                </button>
                                <!-- Tier 5: Custom Amount -->
                                <button class="w-full text-left p-sm rounded-xl border border-surface-variant bg-surface hover:border-[#F36F21] hover:bg-[#FFF7F2] transition-all group focus:outline-none flex justify-between items-center donation-tier cursor-pointer" data-desc="Choose your own contribution." data-tier="custom" data-title="Custom Amount">
                                    <div class="flex flex-col">
                                        <span class="font-headline-md text-headline-md text-on-surface group-hover:text-[#F36F21] transition-colors font-bold">Custom Amount</span>
                                        <span class="font-label-bold text-label-bold text-secondary mt-1">Choose your own contribution</span>
                                    </div>
                                    <span class="material-symbols-outlined text-surface-variant group-hover:text-[#F36F21]">arrow_forward</span>
                                </button>
                            </div>
                            <!-- 80G Banner -->
                            <div class="mt-auto pt-sm flex items-start gap-3 bg-surface-container-low p-4 rounded-lg border border-surface-variant">
                                <span class="material-symbols-outlined text-primary-container" style="font-variation-settings: 'FILL' 1;">shield</span>
                                <div>
                                    <p class="font-label-bold text-label-bold text-on-surface font-bold">80G Tax Exemption</p>
                                    <p class="font-body-md text-body-md text-secondary text-sm mt-1">All donations to PGSM Welfare are 50% tax-exempt under section 80G of IT Act, 1961.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Right Column: Dynamic Outcome -->
                        <div class="bg-surface p-md lg:p-xl flex flex-col items-center justify-center relative">
                            <!-- Decorative Blob Background -->
                            <div class="absolute inset-0 bg-gradient-to-br from-primary-fixed to-surface opacity-30 pointer-events-none rounded-br-[24px]"></div>
                            <div class="relative w-full max-w-md flex flex-col items-center text-center z-10 gap-lg">
                                <!-- Dynamic Image Frame -->
                                <div class="w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-[0px_4px_20px_rgba(27,28,28,0.1)] border-4 border-surface-container-lowest bg-surface-variant relative">
                                    <img alt="Impact" class="w-full h-full object-cover transition-opacity duration-500" id="impact-image" src="images/work-education.jpg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80';"/>
                                </div>
                                <!-- Dynamic Content -->
                                <div class="flex flex-col items-center gap-sm w-full">
                                    <span class="bg-primary-fixed text-primary font-label-bold text-label-bold px-3 py-1 rounded-full uppercase tracking-wider text-xs font-bold">Tangible Impact</span>
                                    <h3 class="font-headline-md text-headline-md text-on-surface font-bold" id="impact-headline">Unlock Digital Access (Rs. 1,200)</h3>
                                    <p class="font-body-lg text-body-lg text-secondary" id="impact-desc">Covers one month of computer lab access for 3 children, giving rural kids their first step into the digital world.</p>
                                    <!-- Custom Controls -->
                                    <div class="hidden w-full flex-col gap-sm mt-4" id="custom-controls">
                                        <div class="flex items-center gap-4 border border-surface-variant rounded-lg p-2 bg-surface-container-lowest focus-within:border-[#F36F21]">
                                            <span class="text-on-surface font-headline-md ml-2 font-bold">₹</span>
                                            <input class="flex-grow bg-transparent font-headline-md outline-none text-on-surface w-full p-1 font-bold" id="custom-input" max="100000" min="100" step="50" style="border: none; box-shadow: none;" type="number" value="1000"/>
                                        </div>
                                        <input class="w-full h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-[#F36F21] mt-2" id="custom-slider" max="100000" min="100" step="50" type="range" value="1000"/>
                                    </div>
                                </div>
                                <!-- Main CTA -->
                                <a href="donate.html" class="bg-[#F36F21] text-white font-label-bold text-label-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity duration-200 shadow-[0px_4px_20px_rgba(243,111,33,0.3)] w-full max-w-[300px] mt-xs cursor-pointer font-bold block text-center" id="main-cta">
                                    Donate ₹1200
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${unifiedFooterHtml}

    <!-- Interactive Scripts -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // TopNav Shadow on Scroll
            const nav = document.getElementById('topNav');
            window.addEventListener('scroll', () => {
                if (nav && window.scrollY > 10) {
                    nav.classList.add('shadow-md');
                } else if (nav) {
                    nav.classList.remove('shadow-md');
                }
            });

            // Carousel Navigation
            const carousel = document.getElementById('work-carousel');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            if (carousel && prevBtn && nextBtn) {
                const scrollAmount = 450 + 24; 

                nextBtn.addEventListener('click', () => {
                    carousel.scrollBy({
                        left: scrollAmount,
                        behavior: 'smooth'
                    });
                });

                prevBtn.addEventListener('click', () => {
                    carousel.scrollBy({
                        left: -scrollAmount,
                        behavior: 'smooth'
                    });
                });
            }

            // Interactive Donation Calculator Logic
            const tiers = document.querySelectorAll('.donation-tier');
            const headline = document.getElementById('impact-headline');
            const desc = document.getElementById('impact-desc');
            const cta = document.getElementById('main-cta');
            const impactImage = document.getElementById('impact-image');
            const customControls = document.getElementById('custom-controls');
            const customInput = document.getElementById('custom-input');
            const customSlider = document.getElementById('custom-slider');

            const impactData = {
                500: { 
                    img: 'images/pillar-education.jpg', 
                    title: 'Fill a School Bag', 
                    desc: 'Provides complete school kits (bag, books, stationery) for 2 primary school children for an entire year.', 
                    baseAmount: 250, 
                    unit: 'student kits' 
                },
                1200: { 
                    img: 'images/work-education.jpg', 
                    title: 'Unlock Digital Access', 
                    desc: 'Covers one month of computer lab access for 3 children, giving rural kids their first step into the digital world.', 
                    baseAmount: 400, 
                    unit: 'months of lab access' 
                },
                2500: { 
                    img: 'images/pillar-tailoring.jpg', 
                    title: 'Change Her Economic Story', 
                    desc: 'Funds vocational training materials for women, empowering them to start small businesses and achieve financial independence.', 
                    baseAmount: 2500, 
                    unit: 'women empowered' 
                },
                5000: { 
                    img: 'images/work-health.jpg', 
                    title: 'Bring Healthcare to Her Door', 
                    desc: 'Deploys a mobile health camp diagnostic kit, providing essential check-ups for an entire remote village community.', 
                    baseAmount: 5000, 
                    unit: 'health camps deployed' 
                }
            };

            function updateUI(amount, isCustom = false) {
                let closestTier = 500;
                if (amount >= 5000) closestTier = 5000;
                else if (amount >= 2500) closestTier = 2500;
                else if (amount >= 1200) closestTier = 1200;

                const data = impactData[closestTier];

                if (impactImage && impactImage.src !== data.img) {
                    impactImage.style.opacity = '0.3';
                    setTimeout(() => {
                        impactImage.src = data.img;
                        impactImage.style.opacity = '1';
                    }, 150);
                }

                if (isCustom) {
                    const quantity = Math.floor(amount / data.baseAmount) || 1;
                    if (headline) headline.textContent = \`Custom Impact (Rs. \${amount})\`;
                    if (desc) desc.textContent = \`This funds approximately \${quantity} \${data.unit}.\`;
                    if (cta) cta.textContent = \`Donate ₹\${amount}\`;
                    if (customControls) customControls.classList.remove('hidden');
                    if (customInput) customInput.value = amount;
                    if (customSlider) customSlider.value = amount;
                } else {
                    if (headline) headline.textContent = \`\${data.title} (Rs. \${amount})\`;
                    if (desc) desc.textContent = data.desc;
                    if (cta) cta.textContent = \`Donate ₹\${amount}\`;
                    if (customControls) customControls.classList.add('hidden');
                }
            }

            tiers.forEach(button => {
                button.addEventListener('click', () => {
                    tiers.forEach(t => {
                        t.classList.remove('border-2', 'active-tier', 'shadow-[0px_4px_20px_rgba(27,28,28,0.05)]');
                        t.classList.add('border', 'bg-surface', 'border-surface-variant');
                        t.classList.remove('border-[#F36F21]', 'bg-[#FFF7F2]');
                        
                        const price = t.querySelector('span:first-child');
                        if (price) {
                            price.classList.remove('text-[#F36F21]');
                            price.classList.add('text-on-surface');
                        }
                        
                        const label = t.querySelector('span:nth-child(2)');
                        if (label) {
                            label.classList.remove('text-on-surface');
                            label.classList.add('text-secondary');
                        }

                        const icon = t.querySelector('.material-symbols-outlined');
                        if (icon) {
                            icon.textContent = 'arrow_forward';
                            icon.classList.remove('text-[#F36F21]');
                            icon.classList.add('text-surface-variant');
                        }
                    });

                    button.classList.remove('border', 'border-surface-variant', 'bg-surface');
                    button.classList.add('border-2', 'border-[#F36F21]', 'bg-[#FFF7F2]', 'shadow-[0px_4px_20px_rgba(27,28,28,0.05)]', 'active-tier');
                    
                    const price = button.querySelector('span:first-child');
                    if (price) {
                        price.classList.remove('text-on-surface');
                        price.classList.add('text-[#F36F21]');
                    }

                    const label = button.querySelector('span:nth-child(2)');
                    if (label) {
                        label.classList.remove('text-secondary');
                        label.classList.add('text-on-surface');
                    }

                    const icon = button.querySelector('.material-symbols-outlined');
                    if (icon) {
                        icon.textContent = 'check_circle';
                        icon.classList.remove('text-surface-variant');
                        icon.classList.add('text-[#F36F21]');
                    }

                    const tierVal = button.getAttribute('data-tier');
                    if (tierVal === 'custom') {
                        updateUI(customInput ? customInput.value : 1000, true);
                    } else {
                        updateUI(tierVal, false);
                    }
                });
            });

            if (customInput) {
                customInput.addEventListener('input', (e) => {
                    const val = Math.max(100, Math.min(100000, e.target.value || 100));
                    updateUI(val, true);
                });
            }

            if (customSlider) {
                customSlider.addEventListener('input', (e) => {
                    updateUI(e.target.value, true);
                });
            }
        });
    </script>
</body>
</html>`;

// ==========================================
// 2. ABOUT US PAGE (3 SECTIONS)
// ==========================================
const aboutHtml = `<!DOCTYPE html>
<html class="scroll-smooth" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>About Us - PGSM Welfare | Founding Story, Governance & Compliance</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#a04100",
                        "primary-container": "#f36f21",
                        "primary-fixed": "#ffdbcc",
                        "primary-fixed-dim": "#ffb693",
                        "on-primary": "#ffffff",
                        "on-primary-container": "#531e00",
                        "secondary": "#5f5e5e",
                        "secondary-container": "#e2dfde",
                        "surface": "#ffffff",
                        "surface-variant": "#e3e2e2",
                        "surface-container": "#efeded",
                        "surface-container-high": "#e9e8e7",
                        "surface-container-highest": "#e3e2e2",
                        "surface-container-low": "#f5f3f3",
                        "surface-container-lowest": "#ffffff",
                        "on-surface": "#1b1c1c",
                        "on-surface-variant": "#584238",
                        "background": "#ffffff",
                        "on-background": "#1b1c1c",
                        "outline": "#8c7166",
                        "outline-variant": "#e0c0b2",
                        "dark-charcoal": "#1F1F1F",
                        "saffron": "#F36F21"
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "1.5rem",
                        "full": "9999px"
                    },
                    spacing: {
                        "xs": "8px",
                        "sm": "16px",
                        "md": "24px",
                        "lg": "48px",
                        "xl": "80px",
                        "gutter": "24px",
                        "margin-mobile": "16px",
                        "margin-desktop": "64px"
                    },
                    fontFamily: {
                        "headline-lg-mobile": ["Inter", "sans-serif"],
                        "headline-md": ["Inter", "sans-serif"],
                        "body-lg": ["Inter", "sans-serif"],
                        "headline-lg": ["Inter", "sans-serif"],
                        "display-lg": ["Inter", "sans-serif"],
                        "label-bold": ["Inter", "sans-serif"],
                        "body-md": ["Inter", "sans-serif"],
                        "label-sm": ["Inter", "sans-serif"]
                    },
                    fontSize: {
                        "headline-lg-mobile": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "800" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "headline-lg": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.01em", "fontWeight": "800" }],
                        "display-lg": ["64px", { "lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
                        "label-bold": ["14px", { "lineHeight": "20px", "fontWeight": "700" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }]
                    }
                }
            }
        };
    </script>
    <style>
        .glass-card {
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
        }
        .glass-card:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(243, 111, 33, 0.5);
            transform: translateY(-4px);
        }
    </style>
</head>
<body class="bg-background text-on-background antialiased font-body-md min-h-screen flex flex-col">

    <!-- Top Navigation Bar -->
    <header class="bg-surface-container-lowest w-full z-50 sticky top-0 transition-all duration-300 border-b border-outline-variant/10 shadow-sm" id="topNav">
        <div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto h-20">
            <!-- Brand Logo -->
            <a class="text-headline-md font-headline-md text-primary flex items-center gap-2" href="index.html">
                <span class="material-symbols-outlined text-3xl text-primary" style="font-variation-settings: 'FILL' 1;">volunteer_activism</span>
                <span class="font-black tracking-tight text-primary">PGSM Welfare</span>
            </a>
            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center gap-gutter">
                <a class="text-primary font-label-bold text-label-bold border-b-2 border-primary pb-1" href="about.html">About Us</a>
                <a class="text-secondary font-label-bold text-label-bold hover:text-primary hover:opacity-80 transition-opacity duration-200" href="programs.html">Programs</a>
                <a class="text-secondary font-label-bold text-label-bold hover:text-primary hover:opacity-80 transition-opacity duration-200" href="volunteer.html">Volunteer</a>
                <a class="text-secondary font-label-bold text-label-bold hover:text-primary hover:opacity-80 transition-opacity duration-200" href="index.html#work">Our Impact</a>
                <a class="text-secondary font-label-bold text-label-bold hover:text-primary hover:opacity-80 transition-opacity duration-200" href="#governance">Governance</a>
                <a class="text-secondary font-label-bold text-label-bold hover:text-primary hover:opacity-80 transition-opacity duration-200" href="#compliance">Compliance</a>
            </nav>
            <!-- Trailing Action -->
            <div class="hidden md:flex items-center gap-3">
                <a href="donate.html" class="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-8 py-3 rounded-full hover:bg-primary hover:text-on-primary transition-all duration-200 shadow-sm inline-flex items-center gap-2">
                    <span class="material-symbols-outlined text-sm">favorite</span>
                    Donate
                </a>
            </div>
            <!-- Mobile Menu Toggle -->
            <button aria-label="Toggle menu" class="md:hidden text-on-surface p-2">
                <span class="material-symbols-outlined text-2xl">menu</span>
            </button>
        </div>
    </header>

    <main class="w-full bg-background flex-grow">
        <!-- ================= ABOUT SECTION 1: OUR FOUNDING STORY ================= -->
        <section class="flex flex-col w-full pb-xl">
            <!-- Wide Immersive Hero Image with Overlay -->
            <div class="relative w-full h-[50vh] min-h-[420px] mb-xl overflow-hidden">
                <img alt="Dr. Mishra outside Mishra Clinic greeting rural families" class="w-full h-full object-cover object-center" src="images/about-founding.jpg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80';"/>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 flex flex-col justify-end p-margin-mobile md:p-margin-desktop">
                    <div class="max-w-[1280px] mx-auto w-full">
                        <span class="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-label-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 shadow-md">
                            Our Roots & Origins
                        </span>
                        <h1 class="text-white text-3xl md:text-5xl font-black tracking-tight max-w-2xl">
                            Rooted in Rural Care & Healing
                        </h1>
                    </div>
                </div>
            </div>

            <!-- Three-column Mosaic Layout -->
            <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-lg md:gap-gutter items-center">
                <!-- Column 1: Lead-in -->
                <div class="md:col-span-3 flex flex-col justify-start">
                    <h2 class="text-display-lg font-display-lg tracking-tighter leading-none text-primary-container font-black">
                        Since<br/>2016
                    </h2>
                    <div class="h-1.5 w-16 bg-primary-container mt-sm rounded-full"></div>
                </div>
                <!-- Column 2: Core Story -->
                <div class="md:col-span-5 flex flex-col justify-center">
                    <h3 class="text-headline-md font-headline-md text-on-background mb-sm font-bold">
                        Born at Mishra Clinic, Nowgong
                    </h3>
                    <p class="text-body-lg font-body-lg text-on-surface-variant font-medium leading-relaxed">
                        Dr. Ravi Kant Mishra recognized that health and education cannot be treated in isolation. Treating a rural child's fever was meaningless if the family could not afford school kits or digital skills to break the cycle of poverty.
                    </p>
                </div>
                <!-- Column 3: Sidebar Quote -->
                <div class="md:col-span-4 flex flex-col justify-center">
                    <div class="bg-surface-container-low border-2 border-outline-variant/40 p-md rounded-2xl shadow-sm h-full flex flex-col justify-center relative overflow-hidden">
                        <div class="absolute -right-4 -bottom-4 text-primary-container/10 select-none pointer-events-none">
                            <span class="material-symbols-outlined text-[100px]">format_quote</span>
                        </div>
                        <span class="text-label-bold font-label-bold text-primary uppercase tracking-widest mb-xs text-xs">
                            Our Founding Covenant
                        </span>
                        <p class="text-headline-md font-headline-md text-on-background italic leading-snug font-semibold">
                            "Built not as charity, but as a covenant with our own community in Chhatarpur."
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= ABOUT SECTION 2: EXECUTIVE LEADERSHIP & GOVERNANCE ================= -->
        <section id="governance" class="py-20 bg-[#FAFAFA] border-t border-b border-surface-variant/40">
            <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
                <!-- Section Header -->
                <div class="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
                    <div class="inline-flex items-center px-4 py-1.5 rounded-full border border-primary-container text-primary-container text-sm font-bold mb-4 bg-primary-container/5 gap-2">
                        <span class="material-symbols-outlined text-base">diversity_3</span>
                        Grassroots Governance
                    </div>
                    <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Governing Body & Board of Trustees
                    </h2>
                    <p class="text-xl text-gray-600 max-w-2xl">
                        Steering the society with full transparent governance and direct ground presence in Chhatarpur district.
                    </p>
                </div>

                <!-- Full 9-Member Governing Body Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Member 1: President -->
                    <div class="flex flex-col group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div class="rounded-xl overflow-hidden mb-4 aspect-[4/3] bg-gray-100 relative">
                            <img alt="Dr. Ravi Mishra" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="images/trustee-dr-mishra.jpg" onerror="this.onerror=null; this.src='images/dr-ravi-mishra.jpg';"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <span class="absolute bottom-3 left-3 bg-[#F36F21] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                                President
                            </span>
                        </div>
                        <div>
                            <p class="text-xs font-bold text-primary-container uppercase tracking-wider mb-1">President of Society</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-1">Dr. Ravi Mishra</h3>
                            <p class="text-gray-700 font-medium text-xs mb-2">Physician & Social Leader · Nowgong</p>
                            <p class="text-gray-500 italic text-xs leading-relaxed border-t border-gray-100 pt-2">
                                "A Village Healed is a Nation Strengthened. Our mission is to ensure no rural family in Chhatarpur is left behind."
                            </p>
                        </div>
                    </div>

                    <!-- Member 2: Vice President -->
                    <div class="flex flex-col group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div class="rounded-xl overflow-hidden mb-4 aspect-[4/3] bg-gray-100 relative">
                            <img alt="Vidhya Devi Mishra" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="images/trustee-dr-mishra.jpg" onerror="this.onerror=null; this.src='images/dr-ravi-mishra.jpg';"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <span class="absolute bottom-3 left-3 bg-[#F36F21] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                                Vice President
                            </span>
                        </div>
                        <div>
                            <p class="text-xs font-bold text-primary-container uppercase tracking-wider mb-1">Vice President of Society</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-1">Vidhya Devi Mishra</h3>
                            <p class="text-gray-700 font-medium text-xs mb-2">Community Health & Women Welfare Advocate</p>
                            <p class="text-gray-500 italic text-xs leading-relaxed border-t border-gray-100 pt-2">
                                "Fostering health, mother-child well-being, and dignity for every rural household."
                            </p>
                        </div>
                    </div>

                    <!-- Member 3: Secretary -->
                    <div class="flex flex-col group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div class="rounded-xl overflow-hidden mb-4 aspect-[4/3] bg-gray-100 relative">
                            <img alt="Bhartendu Mishra" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="images/trustee-bhartendu-mishra.jpg" onerror="this.onerror=null; this.src='images/dr-ravi-mishra.jpg';"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <span class="absolute bottom-3 left-3 bg-[#F36F21] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                                Secretary
                            </span>
                        </div>
                        <div>
                            <p class="text-xs font-bold text-primary-container uppercase tracking-wider mb-1">Secretary of Society</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-1">Bhartendu Mishra</h3>
                            <p class="text-gray-700 font-medium text-xs mb-2">Operations & Youth Mobilization Director</p>
                            <p class="text-gray-500 italic text-xs leading-relaxed border-t border-gray-100 pt-2">
                                "Transparency, active volunteer engagement, and dedicated field service are our foundations."
                            </p>
                        </div>
                    </div>

                    <!-- Member 4: Treasurer -->
                    <div class="flex flex-col group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div class="rounded-xl overflow-hidden mb-4 aspect-[4/3] bg-gray-100 relative">
                            <img alt="Pradeep Kumar" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="images/trustee-pradeep-mishra.jpg" onerror="this.onerror=null; this.src='images/dr-ravi-mishra.jpg';"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <span class="absolute bottom-3 left-3 bg-[#F36F21] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                                Treasurer
                            </span>
                        </div>
                        <div>
                            <p class="text-xs font-bold text-primary-container uppercase tracking-wider mb-1">Treasurer of Society</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-1">Pradeep Kumar</h3>
                            <p class="text-gray-700 font-medium text-xs mb-2">Financial Governance & Administrator</p>
                            <p class="text-gray-500 italic text-xs leading-relaxed border-t border-gray-100 pt-2">
                                "Every single rupee received is audited and deployed directly into verified grassroots programs."
                            </p>
                        </div>
                    </div>

                    <!-- Member 5: Joint Secretary -->
                    <div class="flex flex-col group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div class="rounded-xl overflow-hidden mb-4 aspect-[4/3] bg-gray-100 relative">
                            <img alt="Vijay Kumar" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="images/trustee-pradeep-mishra.jpg" onerror="this.onerror=null; this.src='images/dr-ravi-mishra.jpg';"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <span class="absolute bottom-3 left-3 bg-[#F36F21] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                                Joint Secretary
                            </span>
                        </div>
                        <div>
                            <p class="text-xs font-bold text-primary-container uppercase tracking-wider mb-1">Joint Secretary of Society</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-1">Vijay Kumar</h3>
                            <p class="text-gray-700 font-medium text-xs mb-2">Field Logistics & Camp Coordinator</p>
                            <p class="text-gray-500 italic text-xs leading-relaxed border-t border-gray-100 pt-2">
                                "Connecting ground-level resources to remote villages with seamless execution."
                            </p>
                        </div>
                    </div>

                    <!-- Member 6: Governing Member (Seema) -->
                    <div class="flex flex-col group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div class="rounded-xl overflow-hidden mb-4 aspect-[4/3] bg-gray-100 relative">
                            <img alt="Seema" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="images/trustee-dr-mishra.jpg" onerror="this.onerror=null; this.src='images/dr-ravi-mishra.jpg';"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <span class="absolute bottom-3 left-3 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                                Governing Member
                            </span>
                        </div>
                        <div>
                            <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Board Member</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-1">Seema</h3>
                            <p class="text-gray-700 font-medium text-xs mb-2">Women Skilling & Micro-Enterprise Advisor</p>
                            <p class="text-gray-500 italic text-xs leading-relaxed border-t border-gray-100 pt-2">
                                "Empowering rural women through vocational independence and economic dignity."
                            </p>
                        </div>
                    </div>

                    <!-- Member 7: Governing Member (Sandhya) -->
                    <div class="flex flex-col group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div class="rounded-xl overflow-hidden mb-4 aspect-[4/3] bg-gray-100 relative">
                            <img alt="Sandhya" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="images/trustee-bhartendu-mishra.jpg" onerror="this.onerror=null; this.src='images/dr-ravi-mishra.jpg';"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <span class="absolute bottom-3 left-3 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                                Governing Member
                            </span>
                        </div>
                        <div>
                            <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Board Member</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-1">Sandhya</h3>
                            <p class="text-gray-700 font-medium text-xs mb-2">Education & Child Welfare Coordinator</p>
                            <p class="text-gray-500 italic text-xs leading-relaxed border-t border-gray-100 pt-2">
                                "Ensuring every rural child has access to books, classrooms, and digital learning."
                            </p>
                        </div>
                    </div>

                    <!-- Member 8: Governing Member (Jugal Kishore) -->
                    <div class="flex flex-col group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div class="rounded-xl overflow-hidden mb-4 aspect-[4/3] bg-gray-100 relative">
                            <img alt="Jugal Kishore" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="images/trustee-pradeep-mishra.jpg" onerror="this.onerror=null; this.src='images/dr-ravi-mishra.jpg';"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <span class="absolute bottom-3 left-3 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                                Governing Member
                            </span>
                        </div>
                        <div>
                            <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Board Member</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-1">Jugal Kishore</h3>
                            <p class="text-gray-700 font-medium text-xs mb-2">Community Outreach & Liaison</p>
                            <p class="text-gray-500 italic text-xs leading-relaxed border-t border-gray-100 pt-2">
                                "Building trusted bridges between rural families and social welfare programs."
                            </p>
                        </div>
                    </div>

                    <!-- Member 9: Governing Member (Govind Prasad) -->
                    <div class="flex flex-col group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div class="rounded-xl overflow-hidden mb-4 aspect-[4/3] bg-gray-100 relative">
                            <img alt="Govind Prasad" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="images/trustee-bhartendu-mishra.jpg" onerror="this.onerror=null; this.src='images/dr-ravi-mishra.jpg';"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <span class="absolute bottom-3 left-3 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                                Governing Member
                            </span>
                        </div>
                        <div>
                            <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Board Member</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-1">Govind Prasad</h3>
                            <p class="text-gray-700 font-medium text-xs mb-2">Rural Development & Volunteer Support</p>
                            <p class="text-gray-500 italic text-xs leading-relaxed border-t border-gray-100 pt-2">
                                "Mobilizing youth and rural leaders for grassroots transformation."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= ABOUT SECTION 3: AWARDS & LEGAL COMPLIANCE ================= -->
        <section id="compliance" class="w-full py-xl bg-[#1F1F1F] text-white relative overflow-hidden">
            <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-xl">
                <!-- Section Header -->
                <div class="text-center max-w-3xl mx-auto flex flex-col items-center">
                    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-sm font-extrabold">
                        Awards, Recognitions & Legal Compliance
                    </h2>
                    <div class="h-1 w-24 bg-[#F36F21] mx-auto rounded-full mb-lg"></div>
                    <h3 class="font-headline-md text-headline-md text-[#FFB693] mb-sm font-bold">
                        Recognizing Leaders in NGO Partnership
                    </h3>
                    <p class="font-body-lg text-body-lg text-[#E3E2E2] max-w-2xl leading-relaxed">
                        Celebrating institutional trust and community impact. Our commitment to transparency and legal compliance is foundational to our mission.
                    </p>
                </div>

                <!-- 4 Compliance Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                    <!-- Card 1 -->
                    <div class="glass-card rounded-2xl p-md flex flex-col items-center text-center shadow-lg">
                        <div class="w-16 h-16 rounded-full bg-[#F36F21]/15 flex items-center justify-center mb-sm border border-[#F36F21]/30">
                            <span class="material-symbols-outlined text-[#F36F21] text-[32px]">gavel</span>
                        </div>
                        <h4 class="font-headline-md text-lg text-white mb-xs font-bold">Society Registration</h4>
                        <p class="font-body-md text-body-md text-[#FFB693] font-bold">06/12/03/11718/16</p>
                        <p class="font-label-sm text-label-sm text-gray-400 mt-xs">(Under MP Society Registration Act)</p>
                    </div>

                    <!-- Card 2 -->
                    <div class="glass-card rounded-2xl p-md flex flex-col items-center text-center shadow-lg">
                        <div class="w-16 h-16 rounded-full bg-[#F36F21]/15 flex items-center justify-center mb-sm border border-[#F36F21]/30">
                            <span class="material-symbols-outlined text-[#F36F21] text-[32px]">badge</span>
                        </div>
                        <h4 class="font-headline-md text-lg text-white mb-xs font-bold">Permanent PAN</h4>
                        <p class="font-body-md text-body-md text-[#FFB693] font-bold">AAATP8891J</p>
                        <p class="font-label-sm text-label-sm text-gray-400 mt-xs">Income Tax Department</p>
                    </div>

                    <!-- Card 3 -->
                    <div class="glass-card rounded-2xl p-md flex flex-col items-center text-center shadow-lg">
                        <div class="w-16 h-16 rounded-full bg-[#F36F21]/15 flex items-center justify-center mb-sm border border-[#F36F21]/30">
                            <span class="material-symbols-outlined text-[#F36F21] text-[32px]">receipt_long</span>
                        </div>
                        <h4 class="font-headline-md text-lg text-white mb-xs font-bold">Section 80G Exemption</h4>
                        <p class="font-body-md text-body-md text-[#FFB693] font-bold">50% Tax Exemption</p>
                        <p class="font-label-sm text-label-sm text-gray-400 mt-xs">URN: AAEAP1466C24BP02</p>
                    </div>

                    <!-- Card 4 -->
                    <div class="glass-card rounded-2xl p-md flex flex-col items-center text-center shadow-lg">
                        <div class="w-16 h-16 rounded-full bg-[#F36F21]/15 flex items-center justify-center mb-sm border border-[#F36F21]/30">
                            <span class="material-symbols-outlined text-[#F36F21] text-[32px]">handshake</span>
                        </div>
                        <h4 class="font-headline-md text-lg text-white mb-xs font-bold">NITI Aayog NGO Darpan</h4>
                        <p class="font-body-md text-body-md text-[#FFB693] font-bold">MP/2021/0299785</p>
                        <p class="font-label-sm text-label-sm text-gray-400 mt-xs">Government of India Portal</p>
                    </div>
                </div>

                <!-- Ceremony Documentary Photo Frame -->
                <div class="w-full relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 mt-4">
                    <img class="w-full h-auto max-h-[550px] object-cover" alt="District Social Welfare Felicitation Ceremony - Recognizing Leaders" src="images/award-ceremony.jpg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80';"/>
                    <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
                        <div>
                            <p class="text-white font-bold text-lg">District Social Welfare Felicitation</p>
                            <p class="text-gray-300 text-sm">Honoring dedicated community service & healthcare outreach in Chhatarpur district.</p>
                        </div>
                        <a href="donate.html" class="bg-[#F36F21] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-90 shadow-lg active:scale-95 transition-all">
                            Support Our Cause
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${unifiedFooterHtml}
</body>
</html>`;

// ==========================================
// 3. PROGRAMS PAGE (SECTION 1 + SECTION 2 + SECTION 3 + FOOTER)
// ==========================================
const programsHtml = `<!DOCTYPE html>
<html class="scroll-smooth light" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>Our Grassroots Initiatives & 4-Step Delivery Model - PGSM Impact</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "surface-container-low": "#f5f3f3",
                        "primary-fixed-dim": "#ffb693",
                        "inverse-on-surface": "#f2f0f0",
                        "secondary-container": "#e2dfde",
                        "on-primary-container": "#531e00",
                        "surface-container-high": "#e9e8e7",
                        "background": "#fbf9f9",
                        "on-secondary-container": "#636262",
                        "error-container": "#ffdad6",
                        "on-error": "#ffffff",
                        "secondary-fixed-dim": "#c8c6c5",
                        "surface-tint": "#a04100",
                        "surface-bright": "#fbf9f9",
                        "outline-variant": "#e0c0b2",
                        "on-tertiary": "#ffffff",
                        "surface-dim": "#dbdad9",
                        "on-tertiary-fixed-variant": "#454747",
                        "surface": "#fbf9f9",
                        "on-secondary-fixed-variant": "#474746",
                        "inverse-primary": "#ffb693",
                        "on-surface-variant": "#584238",
                        "surface-container": "#efeded",
                        "primary-fixed": "#ffdbcc",
                        "on-tertiary-fixed": "#1a1c1c",
                        "tertiary-fixed-dim": "#c6c6c7",
                        "outline": "#8c7166",
                        "on-secondary-fixed": "#1b1b1c",
                        "tertiary": "#5d5f5f",
                        "inverse-surface": "#303031",
                        "on-tertiary-container": "#2d2f2f",
                        "on-error-container": "#93000a",
                        "tertiary-container": "#959696",
                        "secondary": "#5f5e5e",
                        "on-secondary": "#ffffff",
                        "on-primary": "#ffffff",
                        "secondary-fixed": "#e5e2e1",
                        "error": "#ba1a1a",
                        "primary-container": "#f36f21",
                        "on-surface": "#1b1c1c",
                        "surface-container-highest": "#e3e2e2",
                        "on-primary-fixed-variant": "#7a3000",
                        "on-background": "#1b1c1c",
                        "primary": "#a04100",
                        "surface-container-lowest": "#ffffff",
                        "surface-variant": "#e3e2e2",
                        "on-primary-fixed": "#351000",
                        "tertiary-fixed": "#e2e2e2",
                        "custom-cream": "#FFF7F2",
                        "custom-charcoal": "#1F1F1F"
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    spacing: {
                        "base": "4px",
                        "sm": "16px",
                        "lg": "48px",
                        "margin-desktop": "64px",
                        "xl": "80px",
                        "md": "24px",
                        "margin-mobile": "16px",
                        "xs": "8px",
                        "gutter": "24px"
                    },
                    fontFamily: {
                        "label-bold": ["Inter", "sans-serif"],
                        "label-sm": ["Inter", "sans-serif"],
                        "headline-lg": ["Inter", "sans-serif"],
                        "headline-lg-mobile": ["Inter", "sans-serif"],
                        "body-lg": ["Inter", "sans-serif"],
                        "body-md": ["Inter", "sans-serif"],
                        "display-lg": ["Inter", "sans-serif"],
                        "headline-md": ["Inter", "sans-serif"]
                    },
                    fontSize: {
                        "label-bold": ["14px", { lineHeight: "20px", fontWeight: "700" }],
                        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "500" }],
                        "headline-lg": ["44px", { lineHeight: "52px", letterSpacing: "-0.01em", fontWeight: "800" }],
                        "headline-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "800" }],
                        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
                        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
                        "display-lg": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "800" }],
                        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "700" }]
                    }
                }
            }
        };
    </script>
    <style>
        .ambient-shadow {
            box-shadow: 0px 4px 20px rgba(31, 31, 31, 0.05);
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .chip {
            background-color: #ffdbcc;
            color: #a04100;
            display: inline-flex;
            align-items: center;
            padding: 4px 14px;
            border-radius: 9999px;
            font-weight: 700;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .btn-primary {
            background-color: #f36f21;
            color: #ffffff;
            font-weight: 700;
            transition: all 0.2s ease;
            box-shadow: 0 4px 14px rgba(243, 111, 33, 0.25);
        }
        .btn-primary:hover {
            background-color: #a04100;
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(243, 111, 33, 0.35);
        }
        .btn-primary:active {
            transform: scale(0.98);
        }
    </style>
</head>
<body class="bg-[#FFF7F2] font-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between">
    <!-- TopNavBar -->
    <header class="bg-white/95 backdrop-blur-md flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-[1280px] mx-auto z-50 sticky top-0 border-b border-surface-variant/40 shadow-sm" id="topNav">
        <a href="index.html" class="font-headline-md text-headline-md text-primary uppercase tracking-tight flex items-center gap-2">
            <span class="material-symbols-outlined text-3xl text-[#F36F21]" style="font-variation-settings: 'FILL' 1;">volunteer_activism</span>
            <span class="font-black tracking-tight text-primary">PGSM Impact</span>
        </a>
        <nav class="hidden md:flex gap-8 items-center font-label-bold text-label-bold">
            <a class="text-secondary hover:text-primary transition-colors duration-200" href="about.html">About Us</a>
            <a class="text-primary border-b-2 border-primary pb-1" href="programs.html">Programs</a>
            <a class="text-secondary hover:text-primary transition-colors duration-200" href="volunteer.html">Volunteer</a>
            <a class="text-secondary hover:text-primary transition-colors duration-200" href="index.html#work">Impact Stories</a>
            <a class="text-secondary hover:text-primary transition-colors duration-200" href="about.html#governance">Leadership</a>
        </nav>
        <div class="hidden md:flex items-center gap-3">
            <a href="donate.html" class="bg-primary-container text-white font-bold py-2.5 px-6 rounded-full hover:bg-primary transition-colors shadow-md">
                Donate Now
            </a>
        </div>
        <button class="md:hidden text-primary">
            <span class="material-symbols-outlined">menu</span>
        </button>
    </header>

    <main class="flex-grow">
        <!-- ================= SECTION 1: HERO CANVAS ================= -->
        <section class="relative pt-16 pb-12 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
            <!-- Background Image with Overlay -->
            <div class="absolute inset-0 z-[-1] opacity-10 bg-cover bg-center rounded-3xl" style="background-image: url('images/hero.jpg');"></div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-lg items-center text-left">
                <div class="md:pr-8">
                    <span class="inline-flex items-center gap-2 bg-[#F36F21]/15 text-[#F36F21] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-[#F36F21]/30">
                        Grassroots Impact in Chhatarpur
                    </span>
                    <h1 class="font-headline-lg text-headline-lg md:font-headline-lg md:text-headline-lg text-[#1F1F1F] mb-sm max-w-4xl font-black">
                        Our <span class="text-primary-container">Grassroots</span> Initiatives
                    </h1>
                    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                        Transforming Chhatarpur through healthcare, education, women's skilling, youth action, and environmental conservation.
                    </p>
                </div>

                <!-- Cumulative Impact Grid -->
                <div class="bg-surface-container-lowest ambient-shadow rounded-2xl py-md px-lg grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 border border-surface-variant place-items-start shadow-xl">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-[#FFF2EB] flex items-center justify-center text-[#F36F21]">
                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
                        </div>
                        <div>
                            <span class="font-bold text-lg text-[#1F1F1F] block">4,500+</span>
                            <span class="text-xs text-gray-500 font-medium">Patients Treated</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-[#FFF2EB] flex items-center justify-center text-[#F36F21]">
                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">school</span>
                        </div>
                        <div>
                            <span class="font-bold text-lg text-[#1F1F1F] block">3,000+</span>
                            <span class="text-xs text-gray-500 font-medium">Students Trained</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-[#FFF2EB] flex items-center justify-center text-[#F36F21]">
                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">styler</span>
                        </div>
                        <div>
                            <span class="font-bold text-lg text-[#1F1F1F] block">1,200+</span>
                            <span class="text-xs text-gray-500 font-medium">Women Skilled</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-[#FFF2EB] flex items-center justify-center text-[#F36F21]">
                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">groups</span>
                        </div>
                        <div>
                            <span class="font-bold text-lg text-[#1F1F1F] block">100+</span>
                            <span class="text-xs text-gray-500 font-medium">NSS Camps</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 sm:col-span-2">
                        <div class="w-10 h-10 rounded-full bg-[#FFF2EB] flex items-center justify-center text-[#F36F21]">
                            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">forest</span>
                        </div>
                        <div>
                            <span class="font-bold text-lg text-[#1F1F1F] block">800+</span>
                            <span class="text-xs text-gray-500 font-medium">Trees Planted</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sticky Page Navigation Filter Bar -->
        <div class="sticky top-[72px] z-40 bg-[#FFF7F2]/95 backdrop-blur-md py-3 border-b border-surface-variant shadow-sm">
            <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop overflow-x-auto no-scrollbar">
                <ul class="flex items-center gap-sm min-w-max">
                    <li>
                        <a class="flex items-center gap-2 bg-primary-container text-white font-label-bold text-label-bold px-md py-2 rounded-full border border-primary-container transition-all shadow-sm" href="#pharmacy">
                            <span class="material-symbols-outlined text-sm">school</span>
                            Higher Education & Pharmacy
                        </a>
                    </li>
                    <li>
                        <a class="flex items-center gap-2 bg-white text-on-surface-variant hover:bg-[#FFF2EB] hover:text-[#F36F21] font-label-bold text-label-bold px-md py-2 rounded-full border border-surface-variant transition-colors" href="#sports-nss">
                            <span class="material-symbols-outlined text-sm">sports_cricket</span>
                            Youth & Sports (SPL)
                        </a>
                    </li>
                    <li>
                        <a class="flex items-center gap-2 bg-white text-on-surface-variant hover:bg-[#FFF2EB] hover:text-[#F36F21] font-label-bold text-label-bold px-md py-2 rounded-full border border-surface-variant transition-colors" href="#healthcare">
                            <span class="material-symbols-outlined text-sm">medical_services</span>
                            Free Healthcare
                        </a>
                    </li>
                    <li>
                        <a class="flex items-center gap-2 bg-white text-on-surface-variant hover:bg-[#FFF2EB] hover:text-[#F36F21] font-label-bold text-label-bold px-md py-2 rounded-full border border-surface-variant transition-colors" href="#women-skilling">
                            <span class="material-symbols-outlined text-sm">styler</span>
                            Women Skilling
                        </a>
                    </li>
                    <li>
                        <a class="flex items-center gap-2 bg-white text-on-surface-variant hover:bg-[#FFF2EB] hover:text-[#F36F21] font-label-bold text-label-bold px-md py-2 rounded-full border border-surface-variant transition-colors" href="#environment">
                            <span class="material-symbols-outlined text-sm">forest</span>
                            Environment
                        </a>
                    </li>
                    <li>
                        <a class="flex items-center gap-2 bg-white text-on-surface-variant hover:bg-[#FFF2EB] hover:text-[#F36F21] font-label-bold text-label-bold px-md py-2 rounded-full border border-surface-variant transition-colors" href="#model">
                            <span class="material-symbols-outlined text-sm">hub</span>
                            4-Step Model
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- ================= SECTION 2: 5 DETAILED PROGRAM PILLARS (ALTERNATING FULL-WIDTH SECTIONS) ================= -->
        
        <!-- Pillar 1: Higher Education — Shanti College of Pharmacy (Visual Left, Content Right) -->
        <section id="pharmacy" class="w-full bg-white py-xl border-b border-surface-variant/40">
            <div class="max-w-[1280px] mx-auto px-gutter md:px-margin-desktop grid md:grid-cols-2 gap-lg items-center">
                <!-- Visual Frame -->
                <div class="order-2 md:order-1 relative group">
                    <div class="absolute inset-0 bg-primary-container/10 rounded-[20px] transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    <img alt="Shanti College of Pharmacy" class="w-full h-auto aspect-square object-cover rounded-[20px] shadow-lg border-2 border-gray-100" src="images/pillar-education.jpg" onerror="this.onerror=null; this.src='images/work-education.jpg';"/>
                    <div class="absolute top-4 left-4 bg-[#F36F21] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                        25+ Mega Placements
                    </div>
                </div>
                <!-- Content -->
                <div class="order-1 md:order-2 flex flex-col items-start gap-md">
                    <span class="chip">Higher Education</span>
                    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background font-extrabold">
                        Shanti College of Pharmacy
                    </h2>
                    <p class="font-body-lg text-body-lg text-secondary max-w-xl leading-relaxed">
                        Operating Shanti College of Pharmacy (D.Pharm / B.Pharm programs), providing high-quality professional pharmaceutical education, advanced laboratory infrastructure, and organizing Mega Campus Placement Drives. Over 25+ rural youths secured confirmed jobs at MacLeod's Pharmaceuticals and leading healthcare institutions.
                    </p>
                    <div class="flex flex-wrap gap-4 font-label-bold text-label-bold text-on-surface-variant bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 w-full max-w-md">
                        <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span> 25+ Mega Placements</div>
                        <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span> 3,000+ Students Trained</div>
                    </div>
                    <a class="btn-primary font-label-bold text-label-bold py-3.5 px-8 rounded-full mt-2 inline-flex items-center gap-2" href="donate.html">
                        Sponsor Student Scholarship (₹1,200) <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>

        <!-- Pillar 2: Youth & Sports — Shanti Premier League & NSS (Content Left, Visual Right) -->
        <section id="sports-nss" class="w-full bg-[#FFF7F2] py-xl border-b border-surface-variant/40">
            <div class="max-w-[1280px] mx-auto px-gutter md:px-margin-desktop grid md:grid-cols-2 gap-lg items-center">
                <!-- Content -->
                <div class="order-1 md:order-1 flex flex-col items-start gap-md pr-0 md:pr-lg">
                    <span class="chip">Youth & Sports</span>
                    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background font-extrabold">
                        Shanti Premier League (SPL) & Youth Action
                    </h2>
                    <p class="font-body-lg text-body-lg text-secondary max-w-xl leading-relaxed">
                        Organizing the premier annual district-level cricket championship (Shanti Premier League Season-6) and National Service Scheme (NSS) 7-day youth leadership residential camps, engaging over 200+ rural athletes, instilling discipline, sportsmanship, and channelizing youth energy into positive community leadership.
                    </p>
                    <div class="flex flex-wrap gap-4 font-label-bold text-label-bold text-on-surface-variant bg-white p-4 rounded-xl shadow-sm border border-outline-variant/20 w-full max-w-md">
                        <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span> 200+ Rural Athletes in SPL</div>
                        <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span> 100+ NSS Leadership Camps</div>
                    </div>
                    <a class="btn-primary font-label-bold text-label-bold py-3.5 px-8 rounded-full mt-2 inline-flex items-center gap-2" href="donate.html">
                        Support Youth & Sports Programs <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
                <!-- Visual Frame -->
                <div class="order-2 md:order-2 relative group">
                    <div class="absolute inset-0 bg-secondary/10 rounded-[20px] transform -translate-x-4 translate-y-4 -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    <img alt="Shanti Premier League & Youth Leadership" class="w-full h-auto aspect-square object-cover rounded-[20px] shadow-lg border-2 border-gray-100" src="images/pillar-nss.jpg" onerror="this.onerror=null; this.src='images/work-nss.jpg';"/>
                    <div class="absolute top-4 right-4 bg-[#F36F21] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                        Season-6 Championship
                    </div>
                </div>
            </div>
        </section>

        <!-- Pillar 3: Free Healthcare & Eye Camps (Visual Left, Content Right) -->
        <section id="healthcare" class="w-full bg-white py-xl border-b border-surface-variant/40">
            <div class="max-w-[1280px] mx-auto px-gutter md:px-margin-desktop grid md:grid-cols-2 gap-lg items-center">
                <!-- Visual Frame -->
                <div class="order-2 md:order-1 relative group">
                    <div class="absolute inset-0 bg-primary-container/10 rounded-[20px] transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    <img alt="Free Healthcare & Eye Camps" class="w-full h-auto aspect-square object-cover rounded-[20px] shadow-lg border-2 border-gray-100" src="images/pillar-health.jpg" onerror="this.onerror=null; this.src='images/work-health.jpg';"/>
                    <div class="absolute top-4 left-4 bg-[#F36F21] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                        Mishra Clinic Base
                    </div>
                </div>
                <!-- Content -->
                <div class="order-1 md:order-2 flex flex-col items-start gap-md">
                    <span class="chip">Community Healing</span>
                    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background font-extrabold">
                        Free Diagnostic & Eye Camps
                    </h2>
                    <p class="font-body-lg text-body-lg text-secondary max-w-xl leading-relaxed">
                        Operating from Mishra Clinic in Nowgong, providing free doctor consultations, diagnostic checkups, eye screenings, and prescription medicines to families across 45+ remote rural villages.
                    </p>
                    <div class="flex flex-wrap gap-4 font-label-bold text-label-bold text-on-surface-variant bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 w-full max-w-md">
                        <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span> 4,500+ Patients Treated</div>
                        <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span> 45+ Villages Covered</div>
                    </div>
                    <a class="btn-primary font-label-bold text-label-bold py-3.5 px-8 rounded-full mt-2 inline-flex items-center gap-2" href="donate.html">
                        Sponsor a Medical Camp (₹5,000) <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>

        <!-- Pillar 4: Women Vocational Training (Content Left, Visual Right) -->
        <section id="women-skilling" class="w-full bg-[#FFF7F2] py-xl border-b border-surface-variant/40">
            <div class="max-w-[1280px] mx-auto px-gutter md:px-margin-desktop grid md:grid-cols-2 gap-lg items-center">
                <!-- Content -->
                <div class="order-1 md:order-1 flex flex-col items-start gap-md pr-0 md:pr-lg">
                    <span class="chip">Economic Dignity</span>
                    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background font-extrabold">
                        Vocational Tailoring & Micro-Enterprise
                    </h2>
                    <p class="font-body-lg text-body-lg text-secondary max-w-xl leading-relaxed">
                        Providing certified sewing, cutting, embroidery, and handicraft training that enables rural women to start home enterprises, earn independent income, and support their families with economic dignity.
                    </p>
                    <div class="flex flex-wrap gap-4 font-label-bold text-label-bold text-on-surface-variant bg-white p-4 rounded-xl shadow-sm border border-outline-variant/20 w-full max-w-md">
                        <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span> 1,200+ Women Certified</div>
                        <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span> Self-Reliance & Enterprise</div>
                    </div>
                    <a class="btn-primary font-label-bold text-label-bold py-3.5 px-8 rounded-full mt-2 inline-flex items-center gap-2" href="donate.html">
                        Sponsor a Sewing Machine (₹2,500) <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
                <!-- Visual Frame -->
                <div class="order-2 md:order-2 relative group">
                    <div class="absolute inset-0 bg-primary-container/10 rounded-[20px] transform -translate-x-4 translate-y-4 -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    <img alt="Vocational Tailoring & Micro-Enterprise" class="w-full h-auto aspect-square object-cover rounded-[20px] shadow-lg border-2 border-gray-100" src="images/pillar-tailoring.jpg" onerror="this.onerror=null; this.src='images/work-tailoring.jpg';"/>
                    <div class="absolute top-4 right-4 bg-[#F36F21] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                        Certified Training
                    </div>
                </div>
            </div>
        </section>

        <!-- Pillar 5: Green Campus & Environment (Visual Left, Content Right) -->
        <section id="environment" class="w-full bg-white py-xl border-b border-surface-variant/40">
            <div class="max-w-[1280px] mx-auto px-gutter md:px-margin-desktop grid md:grid-cols-2 gap-lg items-center">
                <!-- Visual Frame -->
                <div class="order-2 md:order-1 relative group">
                    <div class="absolute inset-0 bg-primary-container/10 rounded-[20px] transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    <img alt="Green Campus Tree Plantation Drives" class="w-full h-auto aspect-square object-cover rounded-[20px] shadow-lg border-2 border-gray-100" src="images/pillar-trees.jpg" onerror="this.onerror=null; this.src='images/work-trees.jpg';"/>
                    <div class="absolute top-4 left-4 bg-[#F36F21] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                        Reforestation
                    </div>
                </div>
                <!-- Content -->
                <div class="order-1 md:order-2 flex flex-col items-start gap-md">
                    <span class="chip">Green Future</span>
                    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background font-extrabold">
                        Green Campus Tree Plantation Drives
                    </h2>
                    <p class="font-body-lg text-body-lg text-secondary max-w-xl leading-relaxed">
                        Leading reforestation initiatives across school premises, college campuses, and public village grounds in Nowgong, promoting environmental responsibility and clean ecological practices.
                    </p>
                    <div class="flex flex-wrap gap-4 font-label-bold text-label-bold text-on-surface-variant bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 w-full max-w-md">
                        <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span> 800+ Trees Planted</div>
                        <div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">check_circle</span> 25+ Green Campuses</div>
                    </div>
                    <a class="btn-primary font-label-bold text-label-bold py-3.5 px-8 rounded-full mt-2 inline-flex items-center gap-2" href="donate.html">
                        Support Green Drives <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>

        <!-- ================= SECTION 3: 4-STEP GRASSROOTS MODEL ================= -->
        <section id="model" class="w-full bg-[#F36F21] py-xl px-margin-mobile md:px-margin-desktop text-white relative overflow-hidden">
            <div class="max-w-[1280px] mx-auto">
                <div class="text-center mb-xl">
                    <span class="inline-flex items-center gap-2 bg-white/20 text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 backdrop-blur-sm shadow-sm">
                        Proven Delivery Framework
                    </span>
                    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-sm font-black">
                        Our 4-Step Grassroots Model
                    </h2>
                    <p class="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                        A field-tested, transparent framework for sustainable community development and measurable social impact in rural Madhya Pradesh.
                    </p>
                </div>

                <div class="relative flex flex-col gap-lg max-w-5xl mx-auto before:content-[''] before:absolute before:left-1/2 before:top-4 before:bottom-4 before:w-1 before:-ml-[2px] before:bg-white/25 before:hidden md:before:block">
                    <!-- Step 1 -->
                    <div class="flex flex-col md:flex-row items-center gap-lg md:gap-xl w-full">
                        <div class="md:w-1/2 flex justify-end w-full">
                            <div class="bg-white text-gray-900 rounded-2xl p-8 shadow-xl hover:-translate-y-1 transition-transform duration-300 w-full md:max-w-md relative overflow-hidden group">
                                <div class="absolute -right-4 -bottom-8 text-[160px] font-black text-gray-100 leading-none z-0 group-hover:text-[#F36F21]/15 transition-colors duration-300 select-none">
                                    1
                                </div>
                                <div class="relative z-10">
                                    <span class="bg-[#FFF2EB] text-[#F36F21] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Phase 1</span>
                                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Survey</h3>
                                    <p class="text-gray-600 leading-relaxed text-sm">Identifying genuine village needs through thorough ground-level research, door-to-door surveys, and direct panchayat engagement.</p>
                                </div>
                            </div>
                        </div>
                        <div class="hidden md:flex md:w-1/2 justify-start items-center relative">
                            <div class="absolute -left-[24px] w-12 h-12 bg-white border-4 border-[#F36F21] rounded-full flex items-center justify-center text-[#F36F21] font-black text-lg shadow-lg z-10">
                                1
                            </div>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="flex flex-col md:flex-row-reverse items-center gap-lg md:gap-xl w-full">
                        <div class="md:w-1/2 flex justify-start w-full">
                            <div class="bg-white text-gray-900 rounded-2xl p-8 shadow-xl hover:-translate-y-1 transition-transform duration-300 w-full md:max-w-md relative overflow-hidden group">
                                <div class="absolute -left-4 -bottom-8 text-[160px] font-black text-gray-100 leading-none z-0 group-hover:text-[#F36F21]/15 transition-colors duration-300 select-none">
                                    2
                                </div>
                                <div class="relative z-10">
                                    <span class="bg-[#FFF2EB] text-[#F36F21] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Phase 2</span>
                                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Deploy</h3>
                                    <p class="text-gray-600 leading-relaxed text-sm">Mobilizing critical diagnostic kits, medicines, certified trainers, and educational resources directly from Mishra Clinic HQ to remote sites.</p>
                                </div>
                            </div>
                        </div>
                        <div class="hidden md:flex md:w-1/2 justify-end items-center relative">
                            <div class="absolute -right-[24px] w-12 h-12 bg-white border-4 border-[#F36F21] rounded-full flex items-center justify-center text-[#F36F21] font-black text-lg shadow-lg z-10">
                                2
                            </div>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="flex flex-col md:flex-row items-center gap-lg md:gap-xl w-full">
                        <div class="md:w-1/2 flex justify-end w-full">
                            <div class="bg-white text-gray-900 rounded-2xl p-8 shadow-xl hover:-translate-y-1 transition-transform duration-300 w-full md:max-w-md relative overflow-hidden group">
                                <div class="absolute -right-4 -bottom-8 text-[160px] font-black text-gray-100 leading-none z-0 group-hover:text-[#F36F21]/15 transition-colors duration-300 select-none">
                                    3
                                </div>
                                <div class="relative z-10">
                                    <span class="bg-[#FFF2EB] text-[#F36F21] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Phase 3</span>
                                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Train</h3>
                                    <p class="text-gray-600 leading-relaxed text-sm">Conducting intensive hands-on computer labs, tailoring certifications, youth NSS leadership drives, and clinical consultations for direct empowerment.</p>
                                </div>
                            </div>
                        </div>
                        <div class="hidden md:flex md:w-1/2 justify-start items-center relative">
                            <div class="absolute -left-[24px] w-12 h-12 bg-white border-4 border-[#F36F21] rounded-full flex items-center justify-center text-[#F36F21] font-black text-lg shadow-lg z-10">
                                3
                            </div>
                        </div>
                    </div>

                    <!-- Step 4 -->
                    <div class="flex flex-col md:flex-row-reverse items-center gap-lg md:gap-xl w-full">
                        <div class="md:w-1/2 flex justify-start w-full">
                            <div class="bg-white text-gray-900 rounded-2xl p-8 shadow-xl hover:-translate-y-1 transition-transform duration-300 w-full md:max-w-md relative overflow-hidden group">
                                <div class="absolute -left-4 -bottom-8 text-[160px] font-black text-gray-100 leading-none z-0 group-hover:text-[#F36F21]/15 transition-colors duration-300 select-none">
                                    4
                                </div>
                                <div class="relative z-10">
                                    <span class="bg-[#FFF2EB] text-[#F36F21] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Phase 4</span>
                                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Monitor</h3>
                                    <p class="text-gray-600 leading-relaxed text-sm">Rigorously auditing health outcomes, micro-enterprise revenues, school retention metrics, and tree survival rates for perpetual sustainability.</p>
                                </div>
                            </div>
                        </div>
                        <div class="hidden md:flex md:w-1/2 justify-end items-center relative">
                            <div class="absolute -right-[24px] w-12 h-12 bg-white border-4 border-[#F36F21] rounded-full flex items-center justify-center text-[#F36F21] font-black text-lg shadow-lg z-10">
                                4
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${unifiedFooterHtml}
</body>
</html>`;

// ==========================================
// 4. VOLUNTEER PAGE (3 SECTIONS + FOOTER)
// ==========================================
const volunteerHtml = `<!DOCTYPE html>
<html class="scroll-smooth light" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>Volunteer With Us - PGSM Welfare | Application & Roles</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#a04100",
                        "primary-container": "#f36f21",
                        "primary-fixed": "#ffdbcc",
                        "primary-fixed-dim": "#ffb693",
                        "on-primary": "#ffffff",
                        "on-primary-container": "#531e00",
                        "secondary": "#5f5e5e",
                        "secondary-container": "#e2dfde",
                        "surface": "#ffffff",
                        "surface-variant": "#e3e2e2",
                        "surface-container": "#efeded",
                        "surface-container-high": "#e9e8e7",
                        "surface-container-highest": "#e3e2e2",
                        "surface-container-low": "#f5f3f3",
                        "surface-container-lowest": "#ffffff",
                        "on-surface": "#1b1c1c",
                        "on-surface-variant": "#584238",
                        "background": "#ffffff",
                        "on-background": "#1b1c1c",
                        "outline": "#8c7166",
                        "outline-variant": "#e0c0b2",
                        "custom-charcoal": "#1F1F1F"
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "1.25rem",
                        "full": "9999px"
                    },
                    spacing: {
                        "base": "4px",
                        "xs": "8px",
                        "sm": "16px",
                        "md": "24px",
                        "lg": "48px",
                        "xl": "80px",
                        "gutter": "24px",
                        "margin-mobile": "16px",
                        "margin-desktop": "64px"
                    },
                    fontFamily: {
                        "display-lg": ["Inter", "sans-serif"],
                        "headline-lg": ["Inter", "sans-serif"],
                        "headline-lg-mobile": ["Inter", "sans-serif"],
                        "headline-md": ["Inter", "sans-serif"],
                        "body-lg": ["Inter", "sans-serif"],
                        "body-md": ["Inter", "sans-serif"],
                        "label-bold": ["Inter", "sans-serif"],
                        "label-sm": ["Inter", "sans-serif"]
                    },
                    fontSize: {
                        "display-lg": ["64px", { "lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
                        "headline-lg": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.01em", "fontWeight": "800" }],
                        "headline-lg-mobile": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "800" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "label-bold": ["14px", { "lineHeight": "20px", "fontWeight": "700" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }]
                    },
                    boxShadow: {
                        "card": "0px 4px 20px rgba(0, 0, 0, 0.2)"
                    }
                }
            }
        };
    </script>
    <style>
        .ambient-shadow {
            box-shadow: 0px 4px 20px rgba(31, 31, 31, 0.05);
        }
        .hover-border-top {
            transition: all 0.3s ease;
        }
        .group:hover .hover-border-top {
            border-top-color: #F36F21;
            border-top-width: 4px;
        }
    </style>
</head>
<body class="bg-white text-on-surface font-body-md antialiased min-h-screen flex flex-col justify-between">
    <!-- TopAppBar -->
    <header class="bg-white/95 backdrop-blur-md sticky top-0 w-full z-50 border-b border-surface-variant/40 shadow-sm" id="topNav">
        <div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-[1280px] mx-auto">
            <a class="font-headline-md text-headline-md font-extrabold text-[#F36F21] flex items-center gap-2" href="index.html">
                <span class="material-symbols-outlined text-3xl text-[#F36F21]" style="font-variation-settings: 'FILL' 1;">volunteer_activism</span>
                <span class="font-black tracking-tight text-[#a04100]">PGSM Welfare</span>
            </a>
            <nav class="hidden md:flex gap-8 items-center font-label-bold text-label-bold">
                <a class="text-secondary hover:text-primary transition-colors duration-200" href="about.html">About Us</a>
                <a class="text-secondary hover:text-primary transition-colors duration-200" href="programs.html">Programs</a>
                <a class="text-primary border-b-2 border-primary pb-1" href="volunteer.html">Volunteer</a>
                <a class="text-secondary hover:text-primary transition-colors duration-200" href="index.html#work">Impact Stories</a>
                <a class="text-secondary hover:text-primary transition-colors duration-200" href="about.html#governance">Leadership</a>
            </nav>
            <div class="flex gap-3 items-center">
                <a href="#volunteer-apply" class="font-label-bold px-5 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all text-sm font-bold shadow-sm">
                    Apply Now
                </a>
                <a href="donate.html" class="font-label-bold px-6 py-2.5 bg-[#F36F21] text-white rounded-full hover:bg-[#a04100] transition-all text-sm font-bold shadow-md">
                    Donate
                </a>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
        <!-- ================= SECTION 1: HERO CANVAS ================= -->
        <section class="w-full px-margin-mobile md:px-margin-desktop py-16 md:py-24 max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
            <!-- Text Content -->
            <div class="w-full lg:w-1/2 flex flex-col items-start gap-6 z-10">
                <div class="inline-flex items-center gap-2 bg-[#F36F21]/10 text-[#F36F21] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#F36F21]/20 shadow-sm">
                    Field Action in Chhatarpur
                </div>
                <h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#F36F21] font-black leading-tight">
                    Become the Force of Change in Chhatarpur
                </h1>
                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
                    Step out of the classroom and into the field. Join PGSM Welfare to deliver real, hands-on impact where it matters most across rural communities.
                </p>
                <a class="inline-flex items-center gap-2 font-label-bold bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all shadow-lg active:scale-95 text-base font-bold group" href="#volunteer-roles">
                    Apply to Volunteer 
                    <span class="material-symbols-outlined text-lg group-hover:translate-y-0.5 transition-transform">arrow_downward</span>
                </a>
            </div>

            <!-- Image Anchor -->
            <div class="w-full lg:w-1/2 relative z-10 rounded-2xl overflow-hidden ambient-shadow border-4 border-white shadow-2xl">
                <img alt="Authentic group photo of NSS youth volunteers ready for field work in Nowgong" class="w-full h-auto aspect-[4/3] object-cover rounded-2xl" src="images/work-nss.jpg" onerror="this.onerror=null; this.src='images/pillar-nss.jpg';"/>
            </div>

            <!-- Decorative Blob -->
            <div class="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-[#F36F21]/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
        </section>

        <!-- ================= VALUE PROPOSITION SECTION ================= -->
        <section class="w-full bg-[#F36F21] py-16 md:py-20" id="volunteer-why">
            <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
                <div class="text-center mb-12">
                    <span class="inline-flex items-center gap-2 bg-white/20 text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 backdrop-blur-sm shadow-sm">
                        Why Choose PGSM
                    </span>
                    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white font-black">
                        Why Volunteer With Us?
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Card 1 -->
                    <div class="bg-white rounded-2xl ambient-shadow p-8 flex flex-col gap-4 items-start hover:-translate-y-1.5 transition-all duration-300 shadow-xl border border-gray-100">
                        <div class="w-14 h-14 rounded-2xl bg-[#FFF2EB] flex items-center justify-center text-[#F36F21]">
                            <span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">my_location</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900">Real Field Impact</h3>
                        <p class="font-body-md text-body-md text-gray-600 leading-relaxed">
                            Zero admin busywork. Work directly on the ground organizing free health camps, setting up computer labs, and mentoring rural children.
                        </p>
                    </div>

                    <!-- Card 2 -->
                    <div class="bg-white rounded-2xl ambient-shadow p-8 flex flex-col gap-4 items-start hover:-translate-y-1.5 transition-all duration-300 shadow-xl border border-gray-100">
                        <div class="w-14 h-14 rounded-2xl bg-[#FFF2EB] flex items-center justify-center text-[#F36F21]">
                            <span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">workspace_premium</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900">Official Certification</h3>
                        <p class="font-body-md text-body-md text-gray-600 leading-relaxed">
                            Earn recognized NGO and NSS field certificates signed by registered society leadership for your academic portfolio and career resume.
                        </p>
                    </div>

                    <!-- Card 3 -->
                    <div class="bg-white rounded-2xl ambient-shadow p-8 flex flex-col gap-4 items-start hover:-translate-y-1.5 transition-all duration-300 shadow-xl border border-gray-100">
                        <div class="w-14 h-14 rounded-2xl bg-[#FFF2EB] flex items-center justify-center text-[#F36F21]">
                            <span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">group</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900">Direct Mentorship</h3>
                        <p class="font-body-md text-body-md text-gray-600 leading-relaxed">
                            Work alongside Dr. Ravi Kant Mishra and experienced grassroots community coordinators to learn real non-profit leadership.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= SECTION 2: WHERE WE NEED YOUR ENERGY (STAGGERED UP-DOWN ROLES) ================= -->
        <section id="volunteer-roles" class="w-full bg-[#1F1F1F] py-20 md:py-28 text-white">
            <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
                <!-- Header -->
                <div class="text-center mb-16 max-w-3xl mx-auto">
                    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white font-black mb-3">
                        Where We Need Your Energy
                    </h2>
                    <p class="font-body-lg text-body-lg text-gray-300">
                        Match your skills with our grassroots programs.
                    </p>
                </div>

                <!-- Roles Grid with Up-Down Staggering: items-start, md:mt-16 on Center Card, md:mt-8 on Right Card -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter items-start pb-12">
                    <!-- Card 1: Medical Camp Assistant (Top aligned, Aspect 4/5) -->
                    <article class="group bg-[#2D2D2D] rounded-2xl border border-gray-700 shadow-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col relative pt-1 hover-border-top border-t-transparent h-full md:h-auto">
                        <div class="aspect-[4/5] w-full relative overflow-hidden bg-gray-800">
                            <img alt="Medical Camp Assistant" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="images/work-health.jpg" onerror="this.onerror=null; this.src='images/pillar-health.jpg';"/>
                            <div class="absolute top-sm right-sm bg-[#2D2D2D]/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-primary-container border border-white/10">
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">medical_services</span>
                            </div>
                        </div>
                        <div class="p-md flex flex-col flex-grow">
                            <h3 class="font-headline-md text-headline-md text-white mb-xs font-bold">Medical Camp Assistant</h3>
                            <p class="font-body-md text-body-md text-gray-300 mb-md flex-grow leading-relaxed">
                                Help register rural patients, manage crowds, and assist doctors at Mishra Clinic's free village health camps.
                            </p>
                            <a href="#volunteer-apply" onclick="document.getElementById('interest').value='medical_camp';" class="w-full text-center bg-transparent border-2 border-primary-container text-primary-container font-label-bold text-label-bold px-lg py-sm rounded-full transition-colors group-hover:bg-primary-container group-hover:text-white cursor-pointer active:scale-95">
                                Sign Up
                            </a>
                        </div>
                    </article>

                    <!-- Card 2: Digital Literacy Tutor (Staggered Down md:mt-16, Aspect Square) -->
                    <article class="group bg-[#2D2D2D] rounded-2xl border border-gray-700 shadow-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col relative pt-1 hover-border-top border-t-transparent md:mt-16 h-full md:h-auto">
                        <div class="aspect-square w-full relative overflow-hidden bg-gray-800">
                            <img alt="Digital Literacy Tutor" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="images/work-education.jpg" onerror="this.onerror=null; this.src='images/pillar-education.jpg';"/>
                            <div class="absolute top-sm right-sm bg-[#2D2D2D]/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-primary-container border border-white/10">
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">computer</span>
                            </div>
                        </div>
                        <div class="p-md flex flex-col flex-grow">
                            <h3 class="font-headline-md text-headline-md text-white mb-xs font-bold">Digital Literacy Tutor</h3>
                            <p class="font-body-md text-body-md text-gray-300 mb-md flex-grow leading-relaxed">
                                Spend 2 hours a weekend teaching basic computer skills and typing to young village girls in our digital labs.
                            </p>
                            <a href="#volunteer-apply" onclick="document.getElementById('interest').value='digital_tutor';" class="w-full text-center bg-transparent border-2 border-primary-container text-primary-container font-label-bold text-label-bold px-lg py-sm rounded-full transition-colors group-hover:bg-primary-container group-hover:text-white cursor-pointer active:scale-95">
                                Sign Up
                            </a>
                        </div>
                    </article>

                    <!-- Card 3: NSS Field Mobilizer (Staggered Mid md:mt-8, Aspect 3/4) -->
                    <article class="group bg-[#2D2D2D] rounded-2xl border border-gray-700 shadow-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col relative pt-1 hover-border-top border-t-transparent md:mt-8 h-full md:h-auto">
                        <div class="aspect-[3/4] w-full relative overflow-hidden bg-gray-800">
                            <img alt="NSS Field Mobilizer" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="images/work-nss.jpg" onerror="this.onerror=null; this.src='images/pillar-nss.jpg';"/>
                            <div class="absolute top-sm right-sm bg-[#2D2D2D]/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-primary-container border border-white/10">
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">groups</span>
                            </div>
                        </div>
                        <div class="p-md flex flex-col flex-grow">
                            <h3 class="font-headline-md text-headline-md text-white mb-xs font-bold">NSS Field Mobilizer</h3>
                            <p class="font-body-md text-body-md text-gray-300 mb-md flex-grow leading-relaxed">
                                Lead weekend village cleanliness drives (Swachh Bharat) and environmental tree plantation campaigns.
                            </p>
                            <a href="#volunteer-apply" onclick="document.getElementById('interest').value='field_mobilizer';" class="w-full text-center bg-transparent border-2 border-primary-container text-primary-container font-label-bold text-label-bold px-lg py-sm rounded-full transition-colors group-hover:bg-primary-container group-hover:text-white cursor-pointer active:scale-95">
                                Sign Up
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- ================= SECTION 3: TESTIMONIAL & VOLUNTEER APPLICATION FORM ================= -->
        <!-- Top Section: Testimonial -->
        <section class="w-full bg-[#181818] px-margin-mobile md:px-margin-desktop py-20 md:py-28 flex flex-col justify-center items-center text-center text-white relative overflow-hidden group border-t border-gray-800">
            <!-- Decorative Accent -->
            <div class="absolute top-0 right-0 w-80 h-80 bg-[#F36F21]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <span class="material-symbols-outlined text-6xl text-[#F36F21] mb-6 opacity-90" style="font-variation-settings: 'FILL' 1;">format_quote</span>
            <blockquote class="font-body-lg text-lg md:text-2xl italic mb-8 text-gray-200 leading-relaxed max-w-3xl relative z-10 px-4">
                "Volunteering with PGSM Welfare changed my perspective. You don't just hand out supplies; you actually look into the eyes of a child who learns to type her own name for the first time. It is the best thing I did in college."
            </blockquote>
            <div class="flex flex-col items-center gap-2 relative z-10">
                <div class="w-16 h-16 rounded-full bg-gray-700 overflow-hidden border-2 border-[#F36F21] shadow-lg mb-1">
                    <img alt="Amit Tiwari - NSS Youth Volunteer" class="w-full h-full object-cover" src="images/trustee-bhartendu-mishra.jpg" onerror="this.onerror=null; this.src='images/dr-ravi-mishra.jpg';"/>
                </div>
                <div>
                    <p class="font-bold text-base text-white">— Amit Tiwari</p>
                    <p class="text-xs text-gray-400 font-medium">NSS Youth Volunteer · Bundelkhand University</p>
                </div>
            </div>
        </section>

        <!-- Bottom Section: Form Card -->
        <section id="volunteer-apply" class="w-full max-w-3xl mx-auto bg-white p-8 md:p-12 flex flex-col justify-center shadow-2xl rounded-3xl -mt-12 mb-24 relative z-20 border-2 border-[#F36F21]/20">
            <div class="text-center mb-8">
                <span class="inline-flex items-center gap-2 bg-[#FFF2EB] text-[#F36F21] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 shadow-sm">
                    Direct Recruitment
                </span>
                <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-gray-900 font-black">
                    Submit Your Application
                </h2>
                <p class="text-gray-600 text-sm mt-1">Join our active cohort of grassroots volunteers in Nowgong & Chhatarpur.</p>
            </div>

            <form class="space-y-6" id="volunteer-form" onsubmit="event.preventDefault(); alert('Application submitted successfully! Our team at Nowgong HQ will contact you on WhatsApp/Phone shortly.'); this.reset();">
                <!-- Full Name -->
                <div>
                    <label class="block font-bold text-sm text-gray-700 mb-2" for="fullName">Full Name *</label>
                    <input class="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-base text-gray-900 focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/20 transition-all" id="fullName" name="fullName" placeholder="Enter your full name" type="text" required/>
                </div>

                <!-- Contact Info Row -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label class="block font-bold text-sm text-gray-700 mb-2" for="whatsapp">WhatsApp Number *</label>
                        <input class="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-base text-gray-900 focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/20 transition-all" id="whatsapp" name="whatsapp" placeholder="+91 94067 62912" type="tel" required/>
                    </div>
                    <div>
                        <label class="block font-bold text-sm text-gray-700 mb-2" for="email">Email Address *</label>
                        <input class="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-base text-gray-900 focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/20 transition-all" id="email" name="email" placeholder="your.name@email.com" type="email" required/>
                    </div>
                </div>

                <!-- Dropdowns Row -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label class="block font-bold text-sm text-gray-700 mb-2" for="status">Current Status *</label>
                        <select class="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-base text-gray-900 focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/20 transition-all cursor-pointer" id="status" name="status" required>
                            <option disabled="" selected="" value="">Select Status</option>
                            <option value="student">College / University Student</option>
                            <option value="professional">Working Professional</option>
                            <option value="medical">Doctor / Medical Professional / Nurse</option>
                            <option value="homemaker">Homemaker / Freelancer</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label class="block font-bold text-sm text-gray-700 mb-2" for="interest">Area of Interest *</label>
                        <select class="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-base text-gray-900 focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/20 transition-all cursor-pointer" id="interest" name="interest" required>
                            <option disabled="" selected="" value="">Select Area</option>
                            <option value="medical_camp">Free Medical & Eye Camps</option>
                            <option value="digital_tutor">Digital Literacy & Computer Tutor</option>
                            <option value="field_mobilizer">NSS Field Mobilizer & Tree Drives</option>
                            <option value="women_skilling">Women Vocational Skilling Support</option>
                        </select>
                    </div>
                </div>

                <!-- Textarea -->
                <div>
                    <label class="block font-bold text-sm text-gray-700 mb-2" for="motivation">Why do you want to join PGSM Welfare? *</label>
                    <textarea class="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-base text-gray-900 focus:outline-none focus:border-[#F36F21] focus:ring-2 focus:ring-[#F36F21]/20 transition-all resize-none" id="motivation" name="motivation" placeholder="Tell us briefly about your background and why you want to serve in Chhatarpur..." rows="4" required></textarea>
                </div>

                <!-- Submit Button -->
                <button class="w-full bg-[#F36F21] text-white font-bold text-lg py-4 px-8 rounded-xl transition-all hover:bg-[#a04100] active:scale-95 shadow-lg shadow-[#F36F21]/30 cursor-pointer flex items-center justify-center gap-2" type="submit">
                    <span>Send Application</span>
                    <span class="material-symbols-outlined text-xl">send</span>
                </button>
            </form>
        </section>
    </main>

    ${unifiedFooterHtml}
</body>
</html>`;

// ==========================================
// 5. DONATE PAGE (SECTION 1 + SECTION 2 + SECTION 3 + FOOTER)
// ==========================================
const donateHtml = `<!DOCTYPE html>
<html class="scroll-smooth light" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>Donate & Make an Impact - PGSM Welfare | 80G Tax Exemption & Ways to Give</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#a04100",
                        "primary-container": "#f36f21",
                        "primary-fixed": "#ffdbcc",
                        "primary-fixed-dim": "#ffb693",
                        "on-primary": "#ffffff",
                        "on-primary-container": "#531e00",
                        "secondary": "#5f5e5e",
                        "secondary-container": "#e2dfde",
                        "surface": "#fbf9f9",
                        "surface-bright": "#fbf9f9",
                        "surface-dim": "#dbdad9",
                        "surface-variant": "#e3e2e2",
                        "surface-container": "#efeded",
                        "surface-container-high": "#e9e8e7",
                        "surface-container-highest": "#e3e2e2",
                        "surface-container-low": "#f5f3f3",
                        "surface-container-lowest": "#ffffff",
                        "on-surface": "#1b1c1c",
                        "on-surface-variant": "#584238",
                        "background": "#fbf9f9",
                        "on-background": "#1b1c1c",
                        "outline": "#8c7166",
                        "outline-variant": "#e0c0b2",
                        "custom-cream": "#FFF7F2",
                        "charcoal": "#1F1F1F"
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "1rem",
                        "2xl": "1.25rem",
                        "full": "9999px"
                    },
                    spacing: {
                        "base": "4px",
                        "xs": "8px",
                        "sm": "16px",
                        "md": "24px",
                        "lg": "48px",
                        "xl": "80px",
                        "gutter": "24px",
                        "margin-mobile": "16px",
                        "margin-desktop": "64px"
                    },
                    fontFamily: {
                        "display-lg": ["Inter", "sans-serif"],
                        "headline-lg": ["Inter", "sans-serif"],
                        "headline-lg-mobile": ["Inter", "sans-serif"],
                        "headline-md": ["Inter", "sans-serif"],
                        "body-lg": ["Inter", "sans-serif"],
                        "body-md": ["Inter", "sans-serif"],
                        "label-bold": ["Inter", "sans-serif"],
                        "label-sm": ["Inter", "sans-serif"]
                    },
                    fontSize: {
                        "display-lg": ["64px", { "lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
                        "headline-lg": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.01em", "fontWeight": "800" }],
                        "headline-lg-mobile": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "800" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "label-bold": ["14px", { "lineHeight": "20px", "fontWeight": "700" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }]
                    }
                }
            }
        };
    </script>
    <style>
        .custom-card-shadow {
            box-shadow: 0px 4px 20px rgba(27, 28, 28, 0.05);
        }
        .bg-soft-cream {
            background-color: #FFF7F2;
        }
        .qr-scanner-border {
            position: relative;
            padding: 8px;
            background: linear-gradient(to right, #F36F21 2px, transparent 2px) 0 0,
                        linear-gradient(to bottom, #F36F21 2px, transparent 2px) 0 0,
                        linear-gradient(to left, #F36F21 2px, transparent 2px) 100% 0,
                        linear-gradient(to bottom, #F36F21 2px, transparent 2px) 100% 0,
                        linear-gradient(to right, #F36F21 2px, transparent 2px) 0 100%,
                        linear-gradient(to top, #F36F21 2px, transparent 2px) 0 100%,
                        linear-gradient(to left, #F36F21 2px, transparent 2px) 100% 100%,
                        linear-gradient(to top, #F36F21 2px, transparent 2px) 100% 100%;
            background-repeat: no-repeat;
            background-size: 20px 20px;
        }
        .glass-input {
            background: rgba(255, 255, 255, 0.07);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #ffffff;
        }
        .glass-input:focus {
            border-color: #F36F21;
            box-shadow: 0 0 0 2px rgba(243, 111, 33, 0.25);
            outline: none;
            background: rgba(255, 255, 255, 0.12);
        }
        .glass-input::placeholder {
            color: rgba(255, 255, 255, 0.45);
        }
    </style>
</head>
<body class="bg-soft-cream text-on-surface font-body-md antialiased selection:bg-primary-container selection:text-white min-h-screen flex flex-col justify-between">
    <!-- TopNavBar -->
    <header class="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 w-full transition-all border-b border-surface-variant/40" id="topNav">
        <div class="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-[1280px] mx-auto">
            <a class="font-headline-md text-headline-md font-extrabold text-primary flex items-center gap-2" href="index.html">
                <span class="material-symbols-outlined text-3xl text-[#F36F21]" style="font-variation-settings: 'FILL' 1;">volunteer_activism</span>
                <span class="font-black tracking-tight text-[#a04100]">PGSM Welfare</span>
            </a>
            <nav class="hidden md:flex items-center gap-gutter font-label-bold text-label-bold">
                <a class="text-secondary hover:text-primary transition-colors duration-200" href="about.html">About Us</a>
                <a class="text-secondary hover:text-primary transition-colors duration-200" href="programs.html">Programs</a>
                <a class="text-secondary hover:text-primary transition-colors duration-200" href="volunteer.html">Volunteer</a>
                <a class="text-secondary hover:text-primary transition-colors duration-200" href="index.html#work">Our Impact</a>
                <a class="text-primary border-b-2 border-primary pb-1" href="donate.html">Donate</a>
            </nav>
            <div class="flex items-center gap-3">
                <a href="#claim-80g" class="font-label-bold text-xs uppercase tracking-wider text-primary border border-primary/30 px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-200 font-bold hidden sm:inline-flex">
                    80G Receipt
                </a>
                <a href="#ways-to-give" class="bg-[#F36F21] text-white font-label-bold px-6 py-2.5 rounded-full hover:bg-[#a04100] transition-colors duration-200 shadow-md flex items-center gap-2 text-sm font-bold">
                    <span class="material-symbols-outlined text-base">payments</span>
                    Ways to Give
                </a>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-xl flex-grow">
        <!-- ================= SECTION 1: IMPACT TIERS GRID ================= -->
        <section class="text-center mb-xl max-w-3xl mx-auto flex flex-col items-center">
            <div class="inline-flex flex-wrap items-center justify-center gap-2 bg-[#FFDBCC] text-[#531E00] font-label-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full mb-6 border border-[#F36F21]/30 shadow-sm font-bold">
                <span>🎗️ 50% Tax Exemption</span>
                <span class="text-[#F36F21]">|</span>
                <span>80G URN: AAEAP1466C24BP02</span>
                <span class="text-[#F36F21]">|</span>
                <span>CSR: CSR00007144</span>
            </div>
            <h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#1F1F1F] mb-4 font-black">
                Your Contribution Stays in Chhatarpur
            </h1>
            <p class="font-body-lg text-body-lg text-secondary max-w-2xl leading-relaxed">
                100% of your donation is deployed directly to our grassroots medical, digital education, and women skilling camps. Eligible for 50% tax deduction under Section 80G (URN: <strong class="text-gray-900 font-bold">AAEAP1466C24BP02</strong>).
            </p>
        </section>

        <!-- Impact Grid (2x2) -->
        <section id="donate-tiers" class="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-5xl mx-auto mb-20">
            <!-- Card 1 -->
            <div class="bg-surface-container-lowest rounded-[20px] custom-card-shadow overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 shadow-lg">
                <div class="h-64 sm:h-72 w-full relative overflow-hidden rounded-t-[20px] bg-gray-100">
                    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Fill a School Bag" src="images/pillar-education.jpg" onerror="this.onerror=null; this.src='images/work-education.jpg';"/>
                </div>
                <div class="p-md flex flex-col flex-grow">
                    <div class="text-[#F36F21] font-headline-md text-headline-md font-bold mb-2">₹500</div>
                    <h3 class="font-label-bold text-lg text-on-surface mb-2 font-bold">Fill a School Bag</h3>
                    <p class="font-body-md text-body-md text-secondary mt-auto leading-relaxed">Funds a complete school kit (books, bag, stationery) for 1 rural child in Nowgong.</p>
                    <a href="#ways-to-give" class="mt-4 w-full text-center bg-[#FFF2EB] border border-[#F36F21]/30 text-[#F36F21] font-bold py-2.5 px-4 rounded-xl hover:bg-[#F36F21] hover:text-white transition-colors block">
                        Donate ₹500
                    </a>
                </div>
            </div>

            <!-- Card 2 (Highlighted) -->
            <div class="bg-surface-container-lowest rounded-[20px] custom-card-shadow overflow-hidden flex flex-col border-2 border-[#F36F21] group hover:-translate-y-1.5 transition-all duration-300 relative shadow-xl">
                <div class="absolute top-4 right-4 bg-[#F36F21] text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md uppercase tracking-wider">Most Needed</div>
                <div class="h-64 sm:h-72 w-full relative overflow-hidden rounded-t-[18px] bg-gray-100">
                    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Unlock Digital Access" src="images/work-education.jpg" onerror="this.onerror=null; this.src='images/pillar-education.jpg';"/>
                </div>
                <div class="p-md flex flex-col flex-grow bg-white">
                    <div class="text-[#F36F21] font-headline-md text-headline-md font-bold mb-2">₹1,200</div>
                    <h3 class="font-label-bold text-lg text-on-surface mb-2 font-bold">Unlock Digital Access</h3>
                    <p class="font-body-md text-body-md text-secondary mt-auto leading-relaxed">Covers one month of computer lab access and internet tutor training for 3 children.</p>
                    <a href="#ways-to-give" class="mt-4 w-full text-center bg-[#F36F21] text-white font-bold py-2.5 px-4 rounded-xl hover:bg-[#a04100] transition-colors shadow-md block">
                        Donate ₹1,200
                    </a>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-surface-container-lowest rounded-[20px] custom-card-shadow overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 shadow-lg">
                <div class="h-64 sm:h-72 w-full relative overflow-hidden rounded-t-[20px] bg-gray-100">
                    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Change Her Economic Story" src="images/pillar-tailoring.jpg" onerror="this.onerror=null; this.src='images/work-tailoring.jpg';"/>
                </div>
                <div class="p-md flex flex-col flex-grow">
                    <div class="text-[#F36F21] font-headline-md text-headline-md font-bold mb-2">₹2,500</div>
                    <h3 class="font-label-bold text-lg text-on-surface mb-2 font-bold">Change Her Economic Story</h3>
                    <p class="font-body-md text-body-md text-secondary mt-auto leading-relaxed">Sponsors vocational tailoring materials and sewing kit for one rural woman's micro-enterprise.</p>
                    <a href="#ways-to-give" class="mt-4 w-full text-center bg-[#FFF2EB] border border-[#F36F21]/30 text-[#F36F21] font-bold py-2.5 px-4 rounded-xl hover:bg-[#F36F21] hover:text-white transition-colors block">
                        Donate ₹2,500
                    </a>
                </div>
            </div>

            <!-- Card 4 -->
            <div class="bg-surface-container-lowest rounded-[20px] custom-card-shadow overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 shadow-lg">
                <div class="h-64 sm:h-72 w-full relative overflow-hidden rounded-t-[20px] bg-gray-100">
                    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Bring Healthcare Home" src="images/pillar-health.jpg" onerror="this.onerror=null; this.src='images/work-health.jpg';"/>
                </div>
                <div class="p-md flex flex-col flex-grow">
                    <div class="text-[#F36F21] font-headline-md text-headline-md font-bold mb-2">₹5,000</div>
                    <h3 class="font-label-bold text-lg text-on-surface mb-2 font-bold">Bring Healthcare Home</h3>
                    <p class="font-body-md text-body-md text-secondary mt-auto leading-relaxed">Funds a free mobile medical camp visit, diagnostic tests, and medicines for 25 rural families.</p>
                    <a href="#ways-to-give" class="mt-4 w-full text-center bg-[#FFF2EB] border border-[#F36F21]/30 text-[#F36F21] font-bold py-2.5 px-4 rounded-xl hover:bg-[#F36F21] hover:text-white transition-colors block">
                        Donate ₹5,000
                    </a>
                </div>
            </div>
        </section>

        <!-- ================= SECTION 2: WAYS TO GIVE (UPI + DIRECT BANK TRANSFER) ================= -->
        <section id="ways-to-give" class="pt-8 pb-16">
            <div class="text-center mb-xl">
                <span class="inline-flex items-center gap-2 bg-[#FFF2EB] text-[#F36F21] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 shadow-sm">
                    Direct Payment Channels
                </span>
                <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#1F1F1F] mb-sm font-black">Ways to Give</h2>
                <p class="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto leading-relaxed">Choose a convenient and secure method to support our initiatives. Every contribution helps us create lasting impact.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-0 border border-surface-container-high rounded-3xl overflow-hidden shadow-2xl bg-white relative max-w-5xl mx-auto mb-20">
                <!-- Desktop Divider -->
                <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-surface-container-high -translate-x-1/2"></div>
                
                <!-- Left Column: UPI -->
                <div class="p-8 md:p-12 flex flex-col items-center justify-center border-b md:border-b-0 border-surface-container-high bg-[#FCFBFA]">
                    <h3 class="font-headline-md text-headline-md text-on-surface mb-3 text-center font-bold">Quick UPI Transfer</h3>
                    <p class="text-xs text-gray-500 mb-6 text-center">GPay, PhonePe, Paytm, BHIM & all UPI apps</p>
                    
                    <div class="flex items-center space-x-6 mb-6 text-gray-400">
                        <span class="material-symbols-outlined text-3xl text-[#F36F21]" style="font-variation-settings: 'FILL' 1;">account_balance_wallet</span>
                        <span class="material-symbols-outlined text-3xl text-gray-600">credit_card</span>
                        <span class="material-symbols-outlined text-3xl text-[#F36F21]" style="font-variation-settings: 'FILL' 1;">payments</span>
                    </div>
                    
                    <div class="qr-scanner-border mb-6 shadow-sm bg-white p-3 rounded-2xl">
                        <div class="w-48 h-48 bg-gray-50 flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 p-4 text-center">
                            <span class="material-symbols-outlined text-7xl text-[#F36F21] mb-2" style="font-variation-settings: 'FILL' 1;">qr_code_2</span>
                            <span class="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Scan with any UPI App</span>
                        </div>
                    </div>
                    
                    <div class="bg-surface-container-low px-6 py-3 rounded-full flex items-center space-x-3 border border-surface-container-high shadow-sm">
                        <span class="font-bold text-xs uppercase tracking-wider text-gray-500">UPI ID:</span>
                        <span class="font-body-md text-sm md:text-base text-gray-900 font-bold tracking-wide select-all">donate@pgsmwelfare</span>
                        <button onclick="navigator.clipboard.writeText('donate@pgsmwelfare'); alert('UPI ID copied to clipboard: donate@pgsmwelfare');" class="text-[#F36F21] hover:text-[#a04100] transition-colors ml-2 cursor-pointer p-1" title="Copy to clipboard">
                            <span class="material-symbols-outlined text-lg">content_copy</span>
                        </button>
                    </div>
                </div>

                <!-- Right Column: Bank Transfer -->
                <div class="p-8 md:p-12 flex flex-col justify-center bg-white">
                    <div class="max-w-md mx-auto w-full">
                        <h3 class="font-headline-md text-headline-md text-on-surface mb-1 font-bold">NEFT / RTGS / IMPS</h3>
                        <p class="font-body-md text-sm text-secondary mb-6">For larger donations, institutional contributions and CSR grants.</p>
                        
                        <div class="bg-surface-container-low p-6 rounded-2xl border border-surface-container-high space-y-3.5 shadow-sm">
                            <div>
                                <p class="font-label-sm text-xs text-gray-500 uppercase tracking-wider mb-1 font-bold">Account Name</p>
                                <p class="font-body-md text-sm text-gray-900 font-bold leading-tight">Pandit Shree Gyasi Lal Mishra Educational & Social Welfare Society</p>
                            </div>
                            
                            <div class="h-px w-full bg-gray-200"></div>
                            
                            <div class="flex justify-between items-center">
                                <div>
                                    <p class="font-label-sm text-xs text-gray-500 uppercase tracking-wider mb-1 font-bold">Account Number</p>
                                    <p class="font-body-md text-base text-gray-900 font-black tracking-wider select-all">1234 5678 9000</p>
                                </div>
                                <button onclick="navigator.clipboard.writeText('123456789000'); alert('Account Number copied to clipboard: 123456789000');" class="text-[#F36F21] hover:text-[#a04100] transition-colors p-2 rounded-lg hover:bg-white cursor-pointer" title="Copy Account Number">
                                    <span class="material-symbols-outlined text-lg">content_copy</span>
                                </button>
                            </div>
                            
                            <div class="h-px w-full bg-gray-200"></div>
                            
                            <div class="flex justify-between items-center">
                                <div>
                                    <p class="font-label-sm text-xs text-gray-500 uppercase tracking-wider mb-1 font-bold">IFSC Code</p>
                                    <p class="font-body-md text-base text-gray-900 font-black tracking-wider select-all">SBIN0001234</p>
                                </div>
                                <button onclick="navigator.clipboard.writeText('SBIN0001234'); alert('IFSC Code copied to clipboard: SBIN0001234');" class="text-[#F36F21] hover:text-[#a04100] transition-colors p-2 rounded-lg hover:bg-white cursor-pointer" title="Copy IFSC">
                                    <span class="material-symbols-outlined text-lg">content_copy</span>
                                </button>
                            </div>
                            
                            <div class="h-px w-full bg-gray-200"></div>
                            
                            <div>
                                <p class="font-label-sm text-xs text-gray-500 uppercase tracking-wider mb-1 font-bold">80G Tax Exemption URN</p>
                                <p class="font-body-md text-sm text-[#F36F21] font-bold">AAEAP1466C24BP02</p>
                            </div>

                            <div class="h-px w-full bg-gray-200"></div>

                            <div>
                                <p class="font-label-sm text-xs text-gray-500 uppercase tracking-wider mb-1 font-bold">CSR Registration No</p>
                                <p class="font-body-md text-sm text-[#F36F21] font-bold">CSR00007144</p>
                            </div>

                            <div class="h-px w-full bg-gray-200"></div>

                            <div>
                                <p class="font-label-sm text-xs text-gray-500 uppercase tracking-wider mb-1 font-bold">Branch</p>
                                <p class="font-body-md text-sm text-gray-900 font-bold">Nowgong, Chhatarpur (M.P.) – 471201</p>
                            </div>
                        </div>

                        <div class="mt-6 flex items-center gap-2 text-xs text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-200">
                            <span class="material-symbols-outlined text-sm text-[#F36F21]" style="font-variation-settings: 'FILL' 1;">info</span>
                            <span>For instant 80G tax receipt issuance, fill the receipt request form below with your PAN card number.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= SECTION 3: 80G TAX RECEIPT CLAIM FORM ================= -->
        <section id="claim-80g" class="w-full max-w-5xl mx-auto mb-16">
            <div class="bg-[#1F1F1F] rounded-3xl shadow-2xl p-8 md:p-12 w-full relative overflow-hidden text-white border border-gray-800">
                <!-- Decorative background elements -->
                <div class="absolute -top-32 -right-32 w-96 h-96 bg-[#F36F21] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
                <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-[#F36F21] opacity-5 rounded-full blur-3xl pointer-events-none"></div>
                
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    <!-- Left: Header -->
                    <div class="lg:col-span-4 flex flex-col gap-4 text-center lg:text-left justify-center">
                        <div class="inline-flex items-center gap-2 bg-[#F36F21]/20 text-[#FFB693] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full w-max mx-auto lg:mx-0 border border-[#F36F21]/30">
                            Official 80G Tax Exemption
                        </div>
                        <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white font-black leading-tight">
                            Claim Your 80G Tax Receipt
                        </h2>
                        <p class="font-body-lg text-body-lg text-gray-300 leading-relaxed text-sm md:text-base">
                            Already donated? Enter your PAN details and transaction ID to receive your Form 10BE tax exemption certificate directly to your email within 24 hours.
                        </p>
                        <div class="bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-gray-300 space-y-1 mt-2">
                            <p><strong>80G URN:</strong> AAEAP1466C24BP02</p>
                            <p><strong>CSR Reg:</strong> CSR00007144</p>
                            <p><strong>Society Reg:</strong> 06/12/03/11718/16</p>
                        </div>
                    </div>

                    <!-- Right: Form Grid -->
                    <form class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5" onsubmit="event.preventDefault(); alert('Tax Receipt Request received for PAN: ' + document.getElementById('receiptPanNumber').value.toUpperCase() + '! Your 80G certificate (URN: AAEAP1466C24BP02) will be processed and sent to your email within 24 hours.'); this.reset();">
                        <div class="flex flex-col gap-1.5">
                            <label class="font-label-bold text-xs text-gray-300 uppercase tracking-wider font-bold" for="receiptFullName">Full Name (As per PAN) *</label>
                            <input class="glass-input w-full px-4 py-3 rounded-xl font-body-md text-sm transition-all duration-200" id="receiptFullName" placeholder="e.g. Rahul Sharma" required="" type="text"/>
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label class="font-label-bold text-xs text-[#FFB693] uppercase tracking-wider font-bold" for="receiptPanNumber">PAN Number * (Mandatory for 80G)</label>
                            <input class="glass-input w-full px-4 py-3 rounded-xl font-body-md text-sm transition-all duration-200 uppercase font-bold tracking-wider border-2 border-[#F36F21]/60" id="receiptPanNumber" maxlength="10" placeholder="ABCDE1234F" required="" type="text"/>
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label class="font-label-bold text-xs text-gray-300 uppercase tracking-wider font-bold" for="receiptEmail">Email Address * (For PDF Certificate)</label>
                            <input class="glass-input w-full px-4 py-3 rounded-xl font-body-md text-sm transition-all duration-200" id="receiptEmail" placeholder="rahul@example.com" required="" type="email"/>
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label class="font-label-bold text-xs text-gray-300 uppercase tracking-wider font-bold" for="receiptWhatsapp">WhatsApp Number *</label>
                            <div class="flex">
                                <span class="glass-input px-4 py-3 rounded-l-xl border-r-0 text-white/60 bg-white/5 text-sm font-bold">+91</span>
                                <input class="glass-input w-full px-4 py-3 rounded-r-xl font-body-md text-sm transition-all duration-200" id="receiptWhatsapp" placeholder="9876543210" required="" type="tel"/>
                            </div>
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label class="font-label-bold text-xs text-gray-300 uppercase tracking-wider font-bold" for="receiptTransactionId">Transaction ID / UTR Number *</label>
                            <input class="glass-input w-full px-4 py-3 rounded-xl font-body-md text-sm transition-all duration-200" id="receiptTransactionId" placeholder="e.g. UPI1234567890 / NEFT..." required="" type="text"/>
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label class="font-label-bold text-xs text-gray-300 uppercase tracking-wider font-bold" for="receiptAmount">Donation Amount (₹) *</label>
                            <input class="glass-input w-full px-4 py-3 rounded-xl font-body-md text-sm transition-all duration-200" id="receiptAmount" placeholder="5000" required="" type="number"/>
                        </div>

                        <!-- Submit Action -->
                        <div class="md:col-span-2 pt-3">
                            <button class="w-full bg-[#F36F21] text-white font-bold text-sm md:text-base py-4 px-8 rounded-xl hover:bg-[#a04100] hover:shadow-lg transition-all duration-200 uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#F36F21]/30 active:scale-95" type="submit">
                                <span>Request 80G Tax Receipt</span>
                                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">receipt_long</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <!-- Bottom Saffron Transparency Bar -->
    <div class="w-full bg-[#F36F21] py-4 px-margin-mobile md:px-margin-desktop shadow-md z-10">
        <div class="max-w-[1280px] mx-auto flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-white font-bold text-xs sm:text-sm">
            <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-base" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <span>NITI Aayog Darpan: MP/2021/0299785</span>
            </div>
            <div class="hidden sm:block w-px h-5 bg-white/40"></div>
            <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-base" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <span>80G Exemption URN: AAEAP1466C24BP02</span>
            </div>
            <div class="hidden sm:block w-px h-5 bg-white/40"></div>
            <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-base" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <span>CSR Reg: CSR00007144</span>
            </div>
            <div class="hidden sm:block w-px h-5 bg-white/40"></div>
            <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-base" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <span>Society Reg: 06/12/03/11718/16</span>
            </div>
        </div>
    </div>

    ${unifiedFooterHtml}
</body>
</html>`;

// Write all pages
fs.writeFileSync('index.html', homeHtml, 'utf8');
fs.writeFileSync('pgsm_hero.html', homeHtml, 'utf8');
fs.writeFileSync('about.html', aboutHtml, 'utf8');
fs.writeFileSync('about_us.html', aboutHtml, 'utf8');
fs.writeFileSync('programs.html', programsHtml, 'utf8');
fs.writeFileSync('volunteer.html', volunteerHtml, 'utf8');
fs.writeFileSync('donate.html', donateHtml, 'utf8');

console.log('Successfully updated all pages and added Section 3 (80G Tax Receipt Claim Form & Transparency Bar) to donate.html!');