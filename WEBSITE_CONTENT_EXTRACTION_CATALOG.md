# PGSM Welfare — Complete Website Content Extraction & Architecture Catalog
**Website URL:** [https://ivory-kudu-344078.hostingersite.com/](https://ivory-kudu-344078.hostingersite.com/)  
**Organization:** Pandit Shree Gyasi Lal Mishra Educational & Social Welfare Society (PGSM Welfare)  
**Location:** Nowgong, Chhatarpur District, Madhya Pradesh, India  
**Date of Extraction:** September 2026  

---

## How to Use This Document for AI Rewriting
> **Instructions for the AI Rewriting Model:**
> 1. Each content block below is cataloged with its **Page**, **Section Name**, **Section ID (Anchor)**, **Source File Reference**, **Element Type**, and **Original Content**.
> 2. When rewriting, preserve the functional intent, factual credentials (e.g., registration numbers, 80G URN, phone numbers, addresses), and relative character/word length so that the text fits into the existing UI design and card layouts.
> 3. Refer to the **Context / Purpose** field for each element to understand whether the tone should be emotional, authoritative, instructional, or conversion-oriented.

---

# Table of Contents
1. [Global Components (Header, Footer, Transparency Bar)](#global-components)
2. [Page 1: Home Page (`index.html`)](#page-1-home-page-indexhtml)
   - [Hero Canvas (`#hero`)](#11-hero-canvas-idhero)
   - [Recent Impact Highlights Bar](#12-recent-impact-highlights-bar)
   - [Cumulative Impact Metrics Bar](#13-cumulative-impact-metrics-bar)
   - [Core Program Pillars (`#pillars`)](#14-core-program-pillars-idpillars)
   - [Our Work in the Field Carousel (`#work`)](#15-our-work-in-the-field-carousel-idwork)
   - [Leadership Spotlight (`#leadership`)](#16-leadership-spotlight-idleadership)
   - [Interactive Donation Impact Calculator (`#donate`)](#17-interactive-donation-impact-calculator-iddonate)
3. [Page 2: About Us (`about.html` / `about_us.html`)](#page-2-about-us-abouthtml)
   - [Founding Story & Roots](#21-founding-story--roots)
   - [Executive Leadership & Governing Body (`#governance`)](#22-executive-leadership--governing-body-idgovernance)
   - [Awards, Recognitions & Legal Compliance (`#compliance`)](#23-awards-recognitions--legal-compliance-idcompliance)
4. [Page 3: Programs & Initiatives (`programs.html`)](#page-3-programs--initiatives-programshtml)
   - [Hero Canvas & Cumulative Statistics Grid](#31-hero-canvas--cumulative-statistics-grid)
   - [Secondary Sticky Navigation Bar](#32-secondary-sticky-navigation-bar)
   - [Pillar 1: Higher Education & Pharmacy (`#pharmacy`)](#33-pillar-1-higher-education--pharmacy-idpharmacy)
   - [Pillar 2: Youth & Sports / SPL (`#sports-nss`)](#34-pillar-2-youth--sports--spl-idsports-nss)
   - [Pillar 3: Free Healthcare & Eye Camps (`#healthcare`)](#35-pillar-3-free-healthcare--eye-camps-idhealthcare)
   - [Pillar 4: Women Vocational Tailoring (`#women-skilling`)](#36-pillar-4-women-vocational-tailoring-idwomen-skilling)
   - [Pillar 5: Green Campus Tree Plantation (`#environment`)](#37-pillar-5-green-campus-tree-plantation-idenvironment)
   - [4-Step Grassroots Delivery Model (`#model`)](#38-4-step-grassroots-delivery-model-idmodel)
5. [Page 4: Volunteer With Us (`volunteer.html`)](#page-4-volunteer-with-us-volunteerhtml)
   - [Volunteer Hero Canvas](#41-volunteer-hero-canvas)
   - [Value Proposition: Why Volunteer With Us (`#volunteer-why`)](#42-value-proposition-why-volunteer-with-us-idvolunteer-why)
   - [Active Volunteer Roles (`#volunteer-roles`)](#43-active-volunteer-roles-idvolunteer-roles)
   - [Volunteer Testimonial Quote](#44-volunteer-testimonial-quote)
   - [Volunteer Application Form (`#volunteer-apply`)](#45-volunteer-application-form-idvolunteer-apply)
6. [Page 5: Donate & Support (`donate.html`)](#page-5-donate--support-donatehtml)
   - [Tax Exemption Badge & Headline](#51-tax-exemption-badge--headline)
   - [Impact Tiers Grid (`#donate-tiers`)](#52-impact-tiers-grid-iddonate-tiers)
   - [Direct Payment Channels (`#ways-to-give`)](#53-direct-payment-channels-idways-to-give)
   - [80G Tax Receipt Claim Form (`#claim-80g`)](#54-80g-tax-receipt-claim-form-idclaim-80g)
7. [Dynamic JavaScript & Client-Side Microcopy](#7-dynamic-javascript--client-side-microcopy)

---

# Global Components

### G1. Top Navigation Bar (Header)
* **Locations:** Present on all 5 pages (`index.html`, `about.html`, `programs.html`, `volunteer.html`, `donate.html`)  
* **Source Component:** `build_pages.cjs:L9-L86`
* **Element Type:** Global Header

| Field / Element | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Brand Logo Text** | `PGSM Welfare` | Main brand title with heart/hands icon |
| **Desktop Nav Link 1** | `About Us` (Points to `about.html`) | Primary navigation item |
| **Desktop Nav Link 2** | `Programs` (Points to `programs.html`) | Primary navigation item |
| **Desktop Nav Link 3** | `Volunteer` (Points to `volunteer.html`) | Primary navigation item |
| **Desktop Nav Link 4** | `Our Impact` (Points to `index.html#work`) | Direct anchor jump to field photo carousel |
| **Desktop Nav Link 5** | `Leadership` (Points to `about.html#governance`) | Direct anchor jump to trustees |
| **Desktop Nav Link 6** | `Donate` (Points to `donate.html`) | Primary navigation item |
| **Header CTA Button** | `Donate` (with heart icon) | High-contrast conversion CTA button in header |
| **Mobile Nav Drawer Title 1** | `Home` | Mobile menu link |
| **Mobile Nav Drawer Title 2** | `About Us (Founding Story & Trustees)` | Mobile descriptive link |
| **Mobile Nav Drawer Title 3** | `Our Programs (Pharmacy & SPL)` | Mobile descriptive link |
| **Mobile Nav Drawer Title 4** | `Volunteer & Field Roles` | Mobile descriptive link |
| **Mobile Nav Drawer Title 5** | `Field Impact & Stories` | Mobile descriptive link |
| **Mobile Nav Drawer Title 6** | `Governing Body & Leadership` | Mobile descriptive link |
| **Mobile Nav Drawer Title 7** | `80G / 12A / NITI Compliance` | Mobile descriptive link |
| **Mobile Drawer CTA Button** | `Donate & Support (80G Tax Exempt)` | Mobile high-conversion button |
| **Mobile Drawer Helpdesk** | `Helpdesk: +91 94067 62912` | Instant call-to-dial trigger |

---

### G2. Saffron Transparency Strip
* **Locations:** Base of `index.html`, `about.html`, `programs.html`, `volunteer.html`, `donate.html` (Above footer)  
* **Source Component:** `build_pages.cjs:L2718-L2740`
* **Element Type:** Trust & Credential Banner

| Field / Element | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Item 1: NITI Aayog** | `NITI Aayog Darpan: MP/2021/0299785` | Government verification badge |
| **Item 2: 80G Exemption** | `80G Exemption URN: AAEAP1466C24BP02` | Tax exemption legitimacy proof |
| **Item 3: CSR Registration** | `CSR Reg: CSR00007144` | Corporate CSR grant eligibility proof |
| **Item 4: Society Registration**| `Society Reg: 06/12/03/11718/16` | Legal society registration number |

---

### G3. Universal 4-Column Footer
* **Locations:** Base of all pages  
* **Source Component:** `build_pages.cjs:L92-L196`
* **Element Type:** Global Footer

| Field / Element | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Column 1 Brand Name** | `PGSM Welfare` | Brand name with icon |
| **Column 1 Tagline** | `Transforming health, education, and livelihoods in rural Chhatarpur since 2016.` | 1-sentence mission statement |
| **Column 1 Trust Item 1** | `Section 80G Tax Exempt (URN: AAEAP1466C24BP02)` | Compliance trust badge |
| **Column 1 Trust Item 2** | `NITI Aayog Darpan (MP/2021/0299785)` | Compliance trust badge |
| **Column 1 Trust Item 3** | `Reg: 06/12/03/11718/16` | Compliance trust badge |
| **Column 2 Header** | `Quick Links` | Navigation section header |
| **Column 2 Links** | `About Us`, `Our Programs`, `Volunteer With Us`, `Donate & Support`, `Leadership & Governance`, `CSR & Legal Compliance`, `Photo Gallery & Field Work` | Footer navigation anchor links |
| **Column 3 Header** | `Contact Us` | Contact details header |
| **Column 3 Address** | `House No. 22, Mishra Clinic, Ward 12, Bus Stand, Nowgong, Chhatarpur (M.P.) – 471201` | Physical headquarters address |
| **Column 3 Phone** | `+91 94067 62912` | Primary phone/helpline number |
| **Column 3 Email** | `info@pgsmwelfare.org` | Primary institutional email |
| **Column 4 Header** | `Join Our Mission` | Newsletter signup header |
| **Column 4 Input Placeholder**| `Your Email Address` | Newsletter email input field |
| **Column 4 Button** | `Subscribe` | Newsletter submit action button |
| **Column 4 Social Labels** | `Facebook`, `Twitter`, `Instagram`, `YouTube` | Accessible aria-labels for social icons |
| **Bottom Bar Copyright** | `© 2026 Pandit Shree Gyasi Lal Mishra Educational & Social Welfare Society. All Rights Reserved.` | Legal copyright notice |
| **Bottom Bar Location Note** | `Built for Chhatarpur, Madhya Pradesh.` | Geographical focus statement |
| **Bottom Bar Legal Links** | `Privacy Policy` · `Impact Report` | Secondary legal links |

---

# Page 1: Home Page (`index.html`)
* **Page Title:** `PGSM Welfare - Transforming Rural Lives in Chhatarpur`  
* **URL:** `https://ivory-kudu-344078.hostingersite.com/` (or `index.html`)

---

### 1.1 Hero Canvas (`id="hero"`)
* **Source Lines:** `index.html:L249-L315`

| Element Identifier | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Bilingual Tagline Badge** | `✦ शिक्षा से सशक्त समाज, सेवा से समृद्ध राष्ट्र \| Empowering Society through Education` | Cultural grounding, sets the high-level Hindi & English motto |
| **Established Badge** | `🌟 9+ Years of Ground Impact · Est. 2016` | Social proof badge establishing operational longevity |
| **Main Headline (H1)** | `Every Child in Chhatarpur Deserves to Dream in Full Colour` | Core emotional hero hook focused on rural youth aspirations |
| **Hero Subtitle / Description** | `Since 2016, PGSM Welfare has been quietly rebuilding futures in rural Madhya Pradesh — one classroom, one skill, one life at a time. Your support keeps that promise alive.` | Core mission summary explaining what PGSM does and why donors matter |
| **Primary CTA Button** | `Sponsor a Child's Future` (with heart icon) | Primary conversion button pointing to `donate.html` |
| **Secondary CTA Button** | `Calculate Impact` (with analytics icon) | Secondary button jumping to impact calculator |
| **Trust Strip Item 1** | `Registered Society (06/12/03/11718/16)` | Legal compliance proof directly under hero buttons |
| **Trust Strip Item 2** | `100% Tax Exemption 80G` | Donor incentive callout under hero buttons |
| **Hero Image Alt Text** | `Smiling young girl holding books outside a rural school in Madhya Pradesh` | Accessible image descriptor |
| **Floating Stat Number** | `4,500+` | Prominent floating metric on image |
| **Floating Stat Label** | `LIVES DIRECTLY EMPOWERED` | Description of floating metric |

---

### 1.2 Recent Impact Highlights Bar
* **Source Lines:** `index.html:L317-L373`  
* **Context:** A 4-card horizontal ribbon displaying high-urgency recent achievements.

| Card Identifier | Badge / Tag | Headline (H4) | Body Copy / Description |
| :--- | :--- | :--- | :--- |
| **Highlight Card 1: Pharmacy Placements** | `25+ JOBS PLACED` | `Shanti College of Pharmacy Mega Placements (25+ Jobs)` | `25+ rural students secured confirmed jobs in pharmaceutical leaders like MacLeod's Pharma.` |
| **Highlight Card 2: Cricket Tournament** | `YOUTH TOURNAMENT` | `Shanti Premier League (SPL) Cricket Tournament` | `District-level youth cricket tournament promoting physical health, discipline, and leadership.` |
| **Highlight Card 3: Free Healthcare** | `FREE HEALTHCARE` | `4,500+ Patients Treated at Mishra Clinic & Camps` | `Free specialist doctor checkups, eye tests, and prescription medicines across 45+ villages.` |
| **Highlight Card 4: Women Skilling** | `LIVELIHOOD` | `1,200+ Women Certified in Tailoring` | `Empowering rural women with certified tailoring skills and micro-enterprise support.` |

---

### 1.3 Cumulative Impact Metrics Bar
* **Source Lines:** `index.html:L379-L404`  
* **Context:** 4-column numerical counter bar displaying key operational metrics.

| Counter Metric | Label | UI Role |
| :--- | :--- | :--- |
| `9+` | `YEARS ACTIVE SERVICE` | Longevity / trust indicator |
| `3,000+` | `STUDENTS TRAINED` | Educational reach |
| `100+` | `NSS YOUTH CAMPS` | Youth leadership reach |
| `800+` | `TREES PLANTED` | Environmental initiative reach |

---

### 1.4 Core Program Pillars (`id="pillars"`)
* **Source Lines:** `index.html:L407-L540`  
* **Section Header Badge:** `Comprehensive Community Upliftment`  
* **Section Title (H2):** `Our Core Program Pillars`  
* **Section Subtitle:** `Transforming rural lives across Nowgong & Chhatarpur district through transparent, field-tested initiatives.`

| Pillar Identifier | Category Chip | Pillar Title (H3) | Description Copy | Stat Snippet & CTA Link |
| :--- | :--- | :--- | :--- | :--- |
| **Pillar 1: Pharmacy** | `HIGHER EDUCATION` | `Shanti College of Pharmacy` | `Professional D.Pharm & B.Pharm education, modern pharmacy labs, and 25+ Mega Campus Placements.` | `25+ Placements · 3,000+ Trained` → links to `programs.html#pharmacy` |
| **Pillar 2: Youth & Sports** | `YOUTH & SPORTS` | `Shanti Premier League & NSS` | `District-level cricket championship (SPL Season-6) and 7-day NSS youth leadership residential camps.` | `200+ Athletes · 100+ Camps` → links to `programs.html#sports-nss` |
| **Pillar 3: Free Healthcare** | `COMMUNITY HEALING` | `Free Healthcare & Eye Camps` | `Free diagnostic doctor consultations, eye tests, and prescription medicines from Mishra Clinic base.` | `4,500+ Treated · 45 Villages` → links to `programs.html#healthcare` |
| **Pillar 4: Women Skilling** | `ECONOMIC DIGNITY` | `Vocational Tailoring & Skilling` | `Certified sewing, cutting, embroidery, and micro-enterprise kits enabling financial independence.` | `1,200+ Women Certified` → links to `programs.html#women-skilling` |
| **Pillar 5: Green Campus** | `GREEN FUTURE` | `Green Campus Tree Plantation` | `Reforestation initiatives across school premises, college campuses, and village grounds in Nowgong.` | `800+ Trees · 25+ Campuses` → links to `programs.html#environment` |

---

### 1.5 Our Work in the Field Carousel (`id="work"`)
* **Source Lines:** `index.html:L543-L638`  
* **Watermark Text:** `OUR WORK`  
* **Section Title (H2):** `Our Work in the Field`  
* **Section Subtitle:** `Transforming Rural Lives Through Holistic Change in Chhatarpur`

| Carousel Card | Card Title (H3) | Subtitle / Short Description | Button Text & Target |
| :--- | :--- | :--- | :--- |
| **Slide 1: Health** | `Health` | `Access to primary diagnosis & medicine` | `View More` → `programs.html#healthcare` |
| **Slide 2: Education** | `Education` | `Digital literacy & school support kits` | `View More` → `programs.html#education` |
| **Slide 3: Women Empowerment** | `Women Empowerment` | `Certified tailoring & livelihood training` | `View More` → `programs.html#women-skilling` |
| **Slide 4: Youth Leadership** | `Youth Leadership` | `Fostering community service & civic action` | `View More` → `programs.html#youth-nss` |
| **Slide 5: Green Campus** | `Green Campus` | `800+ tree plantation drives` | `View More` → `programs.html#environment` |

---

### 1.6 Leadership Spotlight (`id="leadership"`)
* **Source Lines:** `index.html:L640-L693`

| Element Identifier | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Leader Name** | `Dr. Ravi Kant Mishra` | Founder & President profile |
| **Leader Title** | `Founder & President` | Official role in society |
| **Pull Quote (H3/Blockquote)** | `"A Village Healed is a Nation Strengthened."` | Central organizational philosophy |
| **Bio Paragraph 1** | `For over two decades, Dr. Mishra has spearheaded initiatives that bring critical healthcare, education, and sustainable development to the most marginalized rural communities. His approach is not merely charity, but systemic empowerment.` | Highlights 20+ years of dedicated service and sustainable approach |
| **Bio Paragraph 2** | `We believe that true impact requires deep roots. By partnering with local leaders and focusing on preventative, community-driven solutions, we are building resilience from the ground up.` | Explains community partnership model |
| **Primary Action Button** | `Join Our Mission` (with arrow icon) | Direct link to `donate.html` |
| **Secondary Action Button** | `Read Full Story` | Direct link to `about.html` |

---

### 1.7 Interactive Donation Impact Calculator (`id="donate"`)
* **Source Lines:** `index.html:L695-L791`

| Element Identifier | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Section Title (H2)** | `Your Contribution, Their Future` | Calculator header |
| **Section Subtitle** | `Select an impact tier below to see exactly how your donation transforms lives.` | Interactive instruction |
| **Tier 1 Amount & Title** | `Rs. 500` — `Fill a School Bag` | Selectable donation button |
| **Tier 1 Description** | `Provides complete school kits (bag, books, stationery) for 2 primary school children for an entire year.` | Impact outcome description |
| **Tier 2 Amount & Title** | `Rs. 1,200` — `Unlock Digital Access` *(Default Selected)* | Recommended donation tier button |
| **Tier 2 Description** | `Covers one month of computer lab access for 3 children, giving rural kids their first step into the digital world.` | Impact outcome description |
| **Tier 3 Amount & Title** | `Rs. 2,500` — `Change Her Economic Story` | Selectable donation button |
| **Tier 3 Description** | `Funds vocational training materials for women, empowering them to start small businesses and achieve financial independence.` | Impact outcome description |
| **Tier 4 Amount & Title** | `Rs. 5000` — `Bring Healthcare to Her Door` | Selectable donation button |
| **Tier 4 Description** | `Deploys a mobile health camp diagnostic kit, providing essential check-ups for an entire remote village community.` | Impact outcome description |
| **Tier 5 Title** | `Custom Amount` — `Choose your own contribution` | Custom donation button |
| **80G Banner Title** | `80G Tax Exemption` | Legal tax benefit callout |
| **80G Banner Text** | `All donations to PGSM Welfare are 50% tax-exempt under section 80G of IT Act, 1961.` | Legal reassurance |
| **Dynamic Outcome Badge** | `Tangible Impact` | Dynamic card header |
| **Dynamic Outcome Headline**| `Unlock Digital Access (Rs. 1,200)` *(Updates dynamically)* | Shows currently selected tier impact |
| **Dynamic Outcome Body** | `Covers one month of computer lab access for 3 children, giving rural kids their first step into the digital world.` *(Updates dynamically)* | Dynamic description of selected outcome |
| **Main Donation CTA Button**| `Donate ₹1200` *(Updates with selection)* | Dynamic payment link button to `donate.html` |

---

# Page 2: About Us (`about.html`)
* **Page Title:** `About Us - PGSM Welfare | Founding Story, Governance & Compliance`  
* **URL:** `https://ivory-kudu-344078.hostingersite.com/about.html`

---

### 2.1 Founding Story & Roots
* **Source Lines:** `about.html:L180-L229`

| Element Identifier | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Hero Badge** | `Our Roots & Origins` | Section category indicator |
| **Hero Title (H1)** | `Rooted in Rural Care & Healing` | Page primary headline |
| **Lead-in Big Stat** | `Since 2016` | Prominent graphic typography block |
| **Core Story Headline (H3)**| `Born at Mishra Clinic, Nowgong` | Origin story anchor |
| **Core Story Paragraph** | `Dr. Ravi Kant Mishra recognized that health and education cannot be treated in isolation. Treating a rural child's fever was meaningless if the family could not afford school kits or digital skills to break the cycle of poverty.` | The foundational insight that birthed the society |
| **Sidebar Quote Category** | `Our Founding Covenant` | Quote header badge |
| **Sidebar Quote Text** | `"Built not as charity, but as a covenant with our own community in Chhatarpur."` | Guiding philosophy quote |

---

### 2.2 Executive Leadership & Governing Body (`id="governance"`)
* **Source Lines:** `about.html:L232-L308`  
* **Header Badge:** `Grassroots Governance`  
* **Header Title (H2):** `Governing Body & Board of Trustees`  
* **Header Subtitle:** `Steering the society with full transparent governance, integrity, and direct ground presence in Chhatarpur district.`

| Leader / Trustee | Official Role & Subtitle | Quotation / Personal Statement |
| :--- | :--- | :--- |
| **Dr. Ravi Kant Mishra** | `President of Society`<br/>*Physician & Social Leader · Nowgong* | `"A Village Healed is a Nation Strengthened. Our mission is to ensure no rural family in Chhatarpur is left behind."` |
| **Pradeep Kumar Mishra** | `Treasurer of Society`<br/>*Financial Governance & Administrator* | `"Every single rupee received is audited and deployed directly into verified grassroots programs."` |
| **Bhartendu Mishra** | `Secretary of Society`<br/>*Operations & Youth Mobilization Director* | `"Transparency, active volunteer engagement, and dedicated field service are our foundations."` |

---

### 2.3 Awards, Recognitions & Legal Compliance (`id="compliance"`)
* **Source Lines:** `about.html:L311-L384`  
* **Section Title (H2):** `Awards, Recognitions & Legal Compliance`  
* **Section Subtitle (H3):** `Recognizing Leaders in NGO Partnership`  
* **Introductory Paragraph:** `Celebrating institutional trust and community impact. Our commitment to transparency and legal compliance is foundational to our mission.`

| Card Identifier | Title (H4) | Primary Value / Registration ID | Subtitle / Authority Note |
| :--- | :--- | :--- | :--- |
| **Compliance Card 1** | `Society Registration` | `06/12/03/11718/16` | `(Under MP Society Registration Act)` |
| **Compliance Card 2** | `Permanent PAN` | `AAATP8891J` | `Income Tax Department` |
| **Compliance Card 3** | `Section 80G Exemption`| `50% Tax Exemption` | `URN: AAEAP1466C24BP02` |
| **Compliance Card 4** | `NITI Aayog NGO Darpan` | `MP/2021/0299785` | `Government of India Portal` |
| **Photo Frame Title** | `District Social Welfare Felicitation` | — | Award ceremony documentary photo |
| **Photo Frame Subtitle**| `Honoring dedicated community service & healthcare outreach in Chhatarpur district.` | — | Description of local government recognition |
| **Photo Frame Button** | `Support Our Cause` | Points to `donate.html` | Conversion CTA button |

---

# Page 3: Programs & Initiatives (`programs.html`)
* **Page Title:** `Our Grassroots Initiatives & 4-Step Delivery Model - PGSM Impact`  
* **URL:** `https://ivory-kudu-344078.hostingersite.com/programs.html`

---

### 3.1 Hero Canvas & Cumulative Statistics Grid
* **Source Lines:** `programs.html:L231-L297`

| Element Identifier | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Hero Badge** | `Grassroots Impact in Chhatarpur` | Section label |
| **Main Headline (H1)** | `Our Grassroots Initiatives` | Program page primary headline |
| **Hero Subtitle** | `Transforming Chhatarpur through healthcare, education, women's skilling, youth action, and environmental conservation.` | Comprehensive overview of the 5 focus sectors |
| **Cumulative Metric 1** | `4,500+` — `Patients Treated` | Healthcare volume counter |
| **Cumulative Metric 2** | `3,000+` — `Students Trained` | Education volume counter |
| **Cumulative Metric 3** | `1,200+` — `Women Skilled` | Tailoring / livelihood counter |
| **Cumulative Metric 4** | `100+` — `NSS Camps` | Youth civic camp counter |
| **Cumulative Metric 5** | `800+` — `Trees Planted` | Environmental counter |

---

### 3.2 Secondary Sticky Navigation Bar
* **Source Lines:** `programs.html:L299-L341`  
* **Items:**
  1. `Higher Education & Pharmacy` (Anchor: `#pharmacy`)
  2. `Youth & Sports (SPL)` (Anchor: `#sports-nss`)
  3. `Free Healthcare` (Anchor: `#healthcare`)
  4. `Women Skilling` (Anchor: `#women-skilling`)
  5. `Environment` (Anchor: `#environment`)
  6. `4-Step Model` (Anchor: `#model`)

---

### 3.3 Pillar 1: Higher Education & Pharmacy (`id="pharmacy"`)
* **Source Lines:** `programs.html:L346-L374`

| Element Identifier | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Badge / Chip** | `Higher Education` | Pillar category |
| **Pillar Headline (H2)** | `Shanti College of Pharmacy` | Name of educational institution |
| **Body Description** | `Operating Shanti College of Pharmacy (D.Pharm / B.Pharm programs), providing high-quality professional pharmaceutical education, advanced laboratory infrastructure, and organizing Mega Campus Placement Drives. Over 25+ rural youths secured confirmed jobs at MacLeod's Pharmaceuticals and leading healthcare institutions.` | Highlights career pathways, degrees, and corporate placements |
| **Key Metric Tag 1** | `25+ Mega Placements` | Specific employment outcome |
| **Key Metric Tag 2** | `3,000+ Students Trained` | Cumulative academic training reach |
| **Action Button** | `Sponsor Student Scholarship (₹1,200)` (with arrow icon) | Direct donation tier conversion link |

---

### 3.4 Pillar 2: Youth & Sports / SPL (`id="sports-nss"`)
* **Source Lines:** `programs.html:L377-L405`

| Element Identifier | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Badge / Chip** | `Youth & Sports` | Pillar category |
| **Pillar Headline (H2)** | `Shanti Premier League (SPL) & Youth Action` | Sports tournament & civic camp initiative |
| **Body Description** | `Organizing the premier annual district-level cricket championship (Shanti Premier League Season-6) and National Service Scheme (NSS) 7-day youth leadership residential camps, engaging over 200+ rural athletes, instilling discipline, sportsmanship, and channelizing youth energy into positive community leadership.` | Explains athletic development and leadership retreats |
| **Key Metric Tag 1** | `200+ Rural Athletes in SPL` | Athletic engagement volume |
| **Key Metric Tag 2** | `100+ NSS Leadership Camps` | Civic camp count |
| **Action Button** | `Support Youth & Sports Programs` (with arrow icon) | Conversion button to `donate.html` |

---

### 3.5 Pillar 3: Free Healthcare & Eye Camps (`id="healthcare"`)
* **Source Lines:** `programs.html:L408-L436`

| Element Identifier | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Badge / Chip** | `Community Healing` | Pillar category |
| **Pillar Headline (H2)** | `Free Diagnostic & Eye Camps` | Mobile health camps title |
| **Body Description** | `Operating from Mishra Clinic in Nowgong, providing free doctor consultations, diagnostic checkups, eye screenings, and prescription medicines to families across 45+ remote rural villages.` | Describes clinic headquarters and rural outreach coverage |
| **Key Metric Tag 1** | `4,500+ Patients Treated` | Clinical beneficiary count |
| **Key Metric Tag 2** | `45+ Villages Covered` | Geographic outreach depth |
| **Action Button** | `Sponsor a Medical Camp (₹5,000)` (with arrow icon) | Direct donation tier conversion link |

---

### 3.6 Pillar 4: Women Vocational Tailoring (`id="women-skilling"`)
* **Source Lines:** `programs.html:L439-L467`

| Element Identifier | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Badge / Chip** | `Economic Dignity` | Pillar category |
| **Pillar Headline (H2)** | `Vocational Tailoring & Micro-Enterprise` | Women empowerment program title |
| **Body Description** | `Providing certified sewing, cutting, embroidery, and handicraft training that enables rural women to start home enterprises, earn independent income, and support their families with economic dignity.` | Describes skills curriculum and livelihood outcomes |
| **Key Metric Tag 1** | `1,200+ Women Certified` | Certified graduates count |
| **Key Metric Tag 2** | `Self-Reliance & Enterprise` | Program objective |
| **Action Button** | `Sponsor a Sewing Machine (₹2,500)` (with arrow icon) | Direct donation tier conversion link |

---

### 3.7 Pillar 5: Green Campus Tree Plantation (`id="environment"`)
* **Source Lines:** `programs.html:L470-L498`

| Element Identifier | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Badge / Chip** | `Green Future` | Pillar category |
| **Pillar Headline (H2)** | `Green Campus Tree Plantation Drives` | Reforestation program title |
| **Body Description** | `Leading reforestation initiatives across school premises, college campuses, and public village grounds in Nowgong, promoting environmental responsibility and clean ecological practices.` | Describes campus-level plantation drives |
| **Key Metric Tag 1** | `800+ Trees Planted` | Planted trees volume |
| **Key Metric Tag 2** | `25+ Green Campuses` | Number of educational sites transformed |
| **Action Button** | `Support Green Drives` (with arrow icon) | Conversion button to `donate.html` |

---

### 3.8 4-Step Grassroots Delivery Model (`id="model"`)
* **Source Lines:** `programs.html:L501-L600`  
* **Section Badge:** `Proven Delivery Framework`  
* **Section Title (H2):** `Our 4-Step Grassroots Model`  
* **Section Subtitle:** `A field-tested, transparent framework for sustainable community development and measurable social impact in rural Madhya Pradesh.`

| Step Number & Phase | Phase Name (H3) | Phase Description Copy |
| :--- | :--- | :--- |
| **Phase 1** | `Survey` | `Identifying genuine village needs through thorough ground-level research, door-to-door surveys, and direct panchayat engagement.` |
| **Phase 2** | `Deploy` | `Mobilizing critical diagnostic kits, medicines, certified trainers, and educational resources directly from Mishra Clinic HQ to remote sites.` |
| **Phase 3** | `Train` | `Conducting intensive hands-on computer labs, tailoring certifications, youth NSS leadership drives, and clinical consultations for direct empowerment.` |
| **Phase 4** | `Monitor` | `Rigorously auditing health outcomes, micro-enterprise revenues, school retention metrics, and tree survival rates for perpetual sustainability.` |

---

# Page 4: Volunteer With Us (`volunteer.html`)
* **Page Title:** `Volunteer With Us - PGSM Welfare | Application & Roles`  
* **URL:** `https://ivory-kudu-344078.hostingersite.com/volunteer.html`

---

### 4.1 Volunteer Hero Canvas
* **Source Lines:** `volunteer.html:L182-L207`

| Element Identifier | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Hero Badge** | `Field Action in Chhatarpur` | Section label |
| **Main Headline (H1)** | `Become the Force of Change in Chhatarpur` | Inspiring call for volunteer enrollment |
| **Hero Subtitle** | `Step out of the classroom and into the field. Join PGSM Welfare to deliver real, hands-on impact where it matters most across rural communities.` | Explains field immersion and hands-on participation |
| **Hero Button** | `Apply to Volunteer` (with downward arrow icon) | Jumps smoothly to `#volunteer-roles` |
| **Image Alt Text** | `Authentic group photo of NSS youth volunteers ready for field work in Nowgong` | Accessibility image descriptor |

---

### 4.2 Value Proposition: Why Volunteer With Us (`id="volunteer-why"`)
* **Source Lines:** `volunteer.html:L210-L256`  
* **Section Badge:** `Why Choose PGSM`  
* **Section Title (H2):** `Why Volunteer With Us?`

| Benefit Card | Title (H3) | Detailed Description Copy |
| :--- | :--- | :--- |
| **Benefit 1** | `Real Field Impact` | `Zero admin busywork. Work directly on the ground organizing free health camps, setting up computer labs, and mentoring rural children.` |
| **Benefit 2** | `Official Certification`| `Earn recognized NGO and NSS field certificates signed by registered society leadership for your academic portfolio and career resume.` |
| **Benefit 3** | `Direct Mentorship` | `Work alongside Dr. Ravi Kant Mishra and experienced grassroots community coordinators to learn real non-profit leadership.` |

---

### 4.3 Active Volunteer Roles (`id="volunteer-roles"`)
* **Source Lines:** `volunteer.html:L259-L330`  
* **Section Title (H2):** `Where We Need Your Energy`  
* **Section Subtitle:** `Match your skills with our grassroots programs.`

| Role Card | Role Title (H3) | Responsibilities Description | Action Button |
| :--- | :--- | :--- | :--- |
| **Role 1: Healthcare** | `Medical Camp Assistant` | `Help register rural patients, manage crowds, and assist doctors at Mishra Clinic's free village health camps.` | `Sign Up` → Auto-fills dropdown to `medical_camp` |
| **Role 2: Education** | `Digital Literacy Tutor` | `Spend 2 hours a weekend teaching basic computer skills and typing to young village girls in our digital labs.` | `Sign Up` → Auto-fills dropdown to `digital_tutor` |
| **Role 3: Community** | `NSS Field Mobilizer` | `Lead weekend village cleanliness drives (Swachh Bharat) and environmental tree plantation campaigns.` | `Sign Up` → Auto-fills dropdown to `field_mobilizer` |

---

### 4.4 Volunteer Testimonial Quote
* **Source Lines:** `volunteer.html:L334-L351`

| Element Identifier | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Blockquote Copy** | `"Volunteering with PGSM Welfare changed my perspective. You don't just hand out supplies; you actually look into the eyes of a child who learns to type her own name for the first time. It is the best thing I did in college."` | First-person authentic student testimonial |
| **Author Name** | `— Amit Tiwari` | Attributed volunteer name |
| **Author Title** | `NSS Youth Volunteer · Bundelkhand University` | Student affiliation & academic credibility |

---

### 4.5 Volunteer Application Form (`id="volunteer-apply"`)
* **Source Lines:** `volunteer.html:L354-L421`  
* **Form Badge:** `Direct Recruitment`  
* **Form Title (H2):** `Submit Your Application`  
* **Form Subtitle:** `Join our active cohort of grassroots volunteers in Nowgong & Chhatarpur.`

| Form Field Label | Field Type / ID | Placeholder / Options | Validation / Note |
| :--- | :--- | :--- | :--- |
| `Full Name *` | Text (`fullName`) | `Enter your full name` | Required |
| `WhatsApp Number *` | Tel (`whatsapp`) | `+91 94067 62912` | Required |
| `Email Address *` | Email (`email`) | `your.name@email.com` | Required |
| `Current Status *` | Dropdown (`status`) | • `College / University Student`<br/>• `Working Professional`<br/>• `Doctor / Medical Professional / Nurse`<br/>• `Homemaker / Freelancer`<br/>• `Other` | Required |
| `Area of Interest *` | Dropdown (`interest`) | • `Free Medical & Eye Camps`<br/>• `Digital Literacy & Computer Tutor`<br/>• `NSS Field Mobilizer & Tree Drives`<br/>• `Women Vocational Skilling Support` | Required |
| `Why do you want to join PGSM Welfare? *` | Textarea (`motivation`) | `Tell us briefly about your background and why you want to serve in Chhatarpur...` | Required (4 rows) |
| `Send Application` | Submit Button | — | Button with paper plane icon |

---

# Page 5: Donate & Support (`donate.html`)
* **Page Title:** `Donate & Make an Impact - PGSM Welfare | 80G Tax Exemption & Ways to Give`  
* **URL:** `https://ivory-kudu-344078.hostingersite.com/donate.html`

---

### 5.1 Tax Exemption Badge & Headline
* **Source Lines:** `donate.html:L206-L220`

| Element Identifier | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Pill Badge Credentials** | `🎗️ 50% Tax Exemption \| 80G URN: AAEAP1466C24BP02 \| CSR: CSR00007144` | Complete legal tax exemption strip |
| **Page Headline (H1)** | `Your Contribution Stays in Chhatarpur` | Geographic purity and grassroots stewardship statement |
| **Page Subtitle / Tax Policy**| `100% of your donation is deployed directly to our grassroots medical, digital education, and women skilling camps. Eligible for 50% tax deduction under Section 80G (URN: AAEAP1466C24BP02).` | Reassures zero administrative bloat |

---

### 5.2 Impact Tiers Grid (`id="donate-tiers"`)
* **Source Lines:** `donate.html:L223-L284`

| Tier Identifier | Amount | Tier Title (H3) | Description Copy | Card CTA Button |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1: Education** | `₹500` | `Fill a School Bag` | `Funds a complete school kit (books, bag, stationery) for 1 rural child in Nowgong.` | `Donate ₹500` → jumps to `#ways-to-give` |
| **Tier 2: Digital Access** *(Featured: Most Needed)* | `₹1,200` | `Unlock Digital Access` | `Covers one month of computer lab access and internet tutor training for 3 children.` | `Donate ₹1,200` → jumps to `#ways-to-give` |
| **Tier 3: Women Skilling** | `₹2,500` | `Change Her Economic Story` | `Sponsors vocational tailoring materials and sewing kit for one rural woman's micro-enterprise.` | `Donate ₹2,500` → jumps to `#ways-to-give` |
| **Tier 4: Healthcare** | `₹5,000` | `Bring Healthcare Home` | `Funds a free mobile medical camp visit, diagnostic tests, and medicines for 25 rural families.` | `Donate ₹5,000` → jumps to `#ways-to-give` |

---

### 5.3 Direct Payment Channels (`id="ways-to-give"`)
* **Source Lines:** `donate.html:L287-L392`  
* **Section Badge:** `Direct Payment Channels`  
* **Section Title (H2):** `Ways to Give`  
* **Section Subtitle:** `Choose a convenient and secure method to support our initiatives. Every contribution helps us create lasting impact.`

#### Channel A: Quick UPI Transfer (Left Column)
| Field / Element | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Header (H3)** | `Quick UPI Transfer` | Payment method heading |
| **Supported Apps Note** | `GPay, PhonePe, Paytm, BHIM & all UPI apps` | Familiarity reassurance |
| **QR Scan Instruction** | `Scan with any UPI App` | Instructional graphic text |
| **UPI ID Label** | `UPI ID:` | Input label |
| **UPI ID Value** | `donate@pgsmwelfare` | Registered society UPI address |
| **Copy Action Button** | `Copy to clipboard` | Instant click-to-copy trigger |

#### Channel B: Bank Transfer / NEFT / RTGS / IMPS (Right Column)
| Field / Element | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Header (H3)** | `NEFT / RTGS / IMPS` | Institutional payment method heading |
| **Subhead Note** | `For larger donations, institutional contributions and CSR grants.` | Target audience (HNI / Corporate CSR) |
| **Account Name Label & Value**| `Account Name:` `Pandit Shree Gyasi Lal Mishra Educational & Social Welfare Society` | Verified legal bank account name |
| **Account Number Label & Value**| `Account Number:` `1234 5678 9000` | Bank account number (with copy button) |
| **IFSC Code Label & Value** | `IFSC Code:` `SBIN0001234` | Bank IFSC identifier (with copy button) |
| **80G URN Label & Value** | `80G Tax Exemption URN:` `AAEAP1466C24BP02` | Income Tax exemption reference |
| **CSR Reg Label & Value** | `CSR Registration No:` `CSR00007144` | Ministry of Corporate Affairs registration |
| **Branch Label & Value** | `Branch:` `Nowgong, Chhatarpur (M.P.) – 471201` | Bank branch location |
| **Information Callout Box** | `For instant 80G tax receipt issuance, fill the receipt request form below with your PAN card number.` | Guide to next section |

---

### 5.4 80G Tax Receipt Claim Form (`id="claim-80g"`)
* **Source Lines:** `donate.html:L395-L465`

| Element Identifier | Current Text Content | Context / UI Purpose |
| :--- | :--- | :--- |
| **Form Badge** | `Official 80G Tax Exemption` | Credential badge |
| **Form Title (H2)** | `Claim Your 80G Tax Receipt` | Primary call to action for past donors |
| **Form Description** | `Already donated? Enter your PAN details and transaction ID to receive your Form 10BE tax exemption certificate directly to your email within 24 hours.` | 24-hour SLA promise and Form 10BE compliance |
| **Credentials Sidebar Box** | • `80G URN: AAEAP1466C24BP02`<br/>• `CSR Reg: CSR00007144`<br/>• `Society Reg: 06/12/03/11718/16` | Verification reference card |
| **Field 1 Label & Placeholder**| `Full Name (As per PAN) *` → `e.g. Rahul Sharma` | Mandatory identity verification |
| **Field 2 Label & Placeholder**| `PAN Number * (Mandatory for 80G)` → `ABCDE1234F` | Income tax compliance requirement |
| **Field 3 Label & Placeholder**| `Email Address * (For PDF Certificate)` → `rahul@example.com`| Digital delivery of tax receipt |
| **Field 4 Label & Placeholder**| `WhatsApp Number *` → `+91` `9876543210` | Instant confirmation channel |
| **Field 5 Label & Placeholder**| `Transaction ID / UTR Number *` → `e.g. UPI1234567890 / NEFT...` | Payment reconciliation |
| **Field 6 Label & Placeholder**| `Donation Amount (₹) *` → `5000` | Payment value reconciliation |
| **Submit Button Text** | `Request 80G Tax Receipt` (with receipt icon) | Form submission button |

---

# 7. Dynamic JavaScript & Client-Side Microcopy

These strings are triggered dynamically in the browser via JavaScript events (popups, alerts, and dynamic content swappers):

### JS1. Interactive Calculator Dynamic Data (`index.html:L975-L1035`)
* **Amount ₹500:**  
  * `Title:` "Fill a School Bag"  
  * `Description:` "Provides complete school kits (bag, books, stationery) for 2 primary school children for an entire year."  
  * `Unit formula:` Math.floor(amount / 250) + " student kits"
* **Amount ₹1,200:**  
  * `Title:` "Unlock Digital Access"  
  * `Description:` "Covers one month of computer lab access for 3 children, giving rural kids their first step into the digital world."  
  * `Unit formula:` Math.floor(amount / 400) + " months of lab access"
* **Amount ₹2,500:**  
  * `Title:` "Change Her Economic Story"  
  * `Description:` "Funds vocational training materials for women, empowering them to start small businesses and achieve financial independence."  
  * `Unit formula:` Math.floor(amount / 2500) + " women empowered"
* **Amount ₹5,000:**  
  * `Title:` "Bring Healthcare to Her Door"  
  * `Description:` "Deploys a mobile health camp diagnostic kit, providing essential check-ups for an entire remote village community."  
  * `Unit formula:` Math.floor(amount / 5000) + " health camps deployed"
* **Custom Amount Dynamic Output:**  
  * `Headline:` "Custom Impact (Rs. {amount})"  
  * `Description:` "This funds approximately {quantity} {unit}."  
  * `Button Label:` "Donate ₹{amount}"

### JS2. Browser Alerts & Feedback Modals
* **Newsletter Subscription Alert (`build_pages.cjs:L158`):**  
  `"Thank you for subscribing to PGSM Welfare updates!"`
* **UPI Clipboard Copy Alert (`donate.html:L321`):**  
  `"UPI ID copied to clipboard: donate@pgsmwelfare"`
* **Account Number Clipboard Copy Alert (`donate.html:L346`):**  
  `"Account Number copied to clipboard: 123456789000"`
* **IFSC Code Clipboard Copy Alert (`donate.html:L358`):**  
  `"IFSC Code copied to clipboard: SBIN0001234"`
* **Volunteer Application Alert (`volunteer.html:L365`):**  
  `"Application submitted successfully! Our team at Nowgong HQ will contact you on WhatsApp/Phone shortly."`
* **80G Tax Receipt Request Alert (`donate.html:L421`):**  
  `"Tax Receipt Request received for PAN: {PAN}! Your 80G certificate (URN: AAEAP1466C24BP02) will be processed and sent to your email within 24 hours."`

---

# Recommended AI Model Rewrite Prompt Template
*(Copy and paste the block below into your AI rewriting model along with this document)*

```text
You are an expert non-profit copywriter and conversion rate optimization specialist.
Below is the complete content catalog from the website of "PGSM Welfare" (Pandit Shree Gyasi Lal Mishra Educational & Social Welfare Society) located in Nowgong, Chhatarpur, Madhya Pradesh.

Please rewrite the website copy according to the following guidelines:
1. TARGET AUDIENCE & GOALS: [Insert your target audience e.g. CSR heads, individual donors, NRI philanthropists, youth volunteers]
2. BRAND TONE: [Insert desired tone e.g. authoritative yet deeply empathetic, urgent and inspiring, modern and transparent]
3. STRICT RETENTION OF COMPLIANCE IDENTIFIERS: Keep exact legal identifiers intact (Society Reg: 06/12/03/11718/16, PAN: AAATP8891J, 80G URN: AAEAP1466C24BP02, CSR: CSR00007144, NITI Aayog: MP/2021/0299785, Phone: +91 94067 62912, Address: Nowgong, Chhatarpur).
4. OUTPUT FORMAT: For every single rewritten section, clearly specify:
   - Page Name & URL (e.g. index.html, about.html, programs.html, volunteer.html, donate.html)
   - Section ID / Anchor (e.g. #hero, #pillars, #governance, #claim-80g)
   - Element Name (e.g. Hero Headline H1, Subtitle, CTA Button, Card 1 Description)
   - New Rewritten Text

Here is the master content extraction:
[PASTE THE CATALOG CONTENT HERE]
```
