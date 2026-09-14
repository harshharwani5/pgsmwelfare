const sharp = require('sharp');
const fs = require('fs');

if (!fs.existsSync('social')) {
    fs.mkdirSync('social');
}

function getSlide1Svg() {
    return `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFF9F5" />
            <stop offset="35%" stop-color="#FFF2E8" />
            <stop offset="70%" stop-color="#FDE8D8" />
            <stop offset="100%" stop-color="#FAD9C3" />
        </linearGradient>

        <radialGradient id="glowTop" cx="50%" cy="20%" r="50%">
            <stop offset="0%" stop-color="#FFD6BA" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#FFD6BA" stop-opacity="0"/>
        </radialGradient>

        <radialGradient id="glowCenter" cx="50%" cy="50%" r="40%">
            <stop offset="0%" stop-color="#F36F21" stop-opacity="0.18"/>
            <stop offset="100%" stop-color="#F36F21" stop-opacity="0"/>
        </radialGradient>

        <linearGradient id="brandOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FF833E" />
            <stop offset="100%" stop-color="#E25505" />
        </linearGradient>

        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FDE68A" />
            <stop offset="30%" stop-color="#F59E0B" />
            <stop offset="70%" stop-color="#D97706" />
            <stop offset="100%" stop-color="#B45309" />
        </linearGradient>

        <linearGradient id="shieldInner" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FEF3C7" />
            <stop offset="100%" stop-color="#FBBF24" />
        </linearGradient>

        <filter id="shadowCard" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#7C2D12" flood-opacity="0.12" />
            <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.06" />
        </filter>

        <filter id="shadowShield" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#F36F21" flood-opacity="0.3" />
            <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#7C2D12" flood-opacity="0.25" />
        </filter>

        <filter id="glowBtn" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="0" dy="14" stdDeviation="22" flood-color="#F36F21" flood-opacity="0.35" />
            <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.08" />
        </filter>
    </defs>

    <style>
        .font-sans { font-family: 'Segoe UI', Arial, sans-serif; }
    </style>

    <rect width="1080" height="1920" fill="url(#bgGrad)" />
    <circle cx="540" cy="400" r="600" fill="url(#glowTop)" />
    <circle cx="540" cy="1000" r="500" fill="url(#glowCenter)" />

    <circle cx="540" cy="980" r="460" fill="none" stroke="#F36F21" stroke-width="1.5" stroke-opacity="0.15" stroke-dasharray="8 8" />
    <circle cx="540" cy="980" r="400" fill="none" stroke="#F36F21" stroke-width="1" stroke-opacity="0.1" />

    <!-- Top Badge -->
    <g transform="translate(540, 350)">
        <rect x="-170" y="-34" width="340" height="68" rx="34" fill="url(#brandOrange)" />
        <text x="0" y="11" text-anchor="middle" class="font-sans" font-size="24" font-weight="900" fill="#FFFFFF" letter-spacing="3">DID YOU KNOW?</text>
    </g>

    <!-- Main Headline -->
    <text x="540" y="470" text-anchor="middle" class="font-sans" font-size="54" font-weight="800" fill="#1E293B" letter-spacing="-0.5">
        Every donation to
    </text>
    <text x="540" y="545" text-anchor="middle" class="font-sans" font-size="66" font-weight="900" fill="#0F172A" letter-spacing="-1">
        PGSM Welfare Society
    </text>
    <text x="540" y="630" text-anchor="middle" class="font-sans" font-size="64" font-weight="900" fill="#E25505" letter-spacing="-1">
        is 50% Tax Exempt
    </text>
    <text x="540" y="705" text-anchor="middle" class="font-sans" font-size="44" font-weight="700" fill="#475569" letter-spacing="-0.5">
        under Section 80G of Income Tax Act
    </text>

    <!-- Subtitle Trust Line -->
    <g transform="translate(540, 760)">
        <rect x="-250" y="-20" width="500" height="40" rx="20" fill="#FFFFFF" fill-opacity="0.85" stroke="#F36F21" stroke-width="1.5" stroke-opacity="0.4"/>
        <text x="0" y="7" text-anchor="middle" class="font-sans" font-size="18" font-weight="800" fill="#7C2D12" letter-spacing="0.5">
            GOVT APPROVED • URN: AAEAP1466C24BP02
        </text>
    </g>

    <!-- 3D Gold Trust Shield with Rupee Symbol -->
    <g transform="translate(540, 930)" filter="url(#shadowShield)">
        <path d="M 0,-130 C 75,-130 135,-110 135,-30 C 135,75 70,135 0,165 C -70,135 -135,75 -135,-30 C -135,-110 -75,-130 0,-130 Z" fill="url(#shieldGrad)" />
        <path d="M 0,-115 C 65,-115 115,-98 115,-25 C 115,65 60,118 0,145 C -60,118 -115,65 -115,-25 C -115,-98 -65,-115 0,-115 Z" fill="url(#shieldInner)" stroke="#FFFFFF" stroke-width="3" stroke-opacity="0.7" />
        <text x="0" y="42" text-anchor="middle" class="font-sans" font-size="140" font-weight="900" fill="#78350F" opacity="0.95">₹</text>
        <g transform="translate(85, 85)">
            <circle cx="0" cy="0" r="42" fill="#10B981" stroke="#FFFFFF" stroke-width="5" />
            <path d="M -16,0 L -5,12 L 18,-12" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </g>

    <!-- Dual Info Cards -->
    <g transform="translate(540, 1150)">
        <g transform="translate(-250, 0)" filter="url(#shadowCard)">
            <rect x="-190" y="-45" width="380" height="90" rx="20" fill="#FFFFFF" stroke="#FDBA74" stroke-width="1.5" />
            <circle cx="-135" cy="0" r="24" fill="#FFEDD5" />
            <text x="-135" y="8" text-anchor="middle" class="font-sans" font-size="24">💸</text>
            <text x="-95" y="-8" class="font-sans" font-size="22" font-weight="800" fill="#0F172A">Save 50% Tax</text>
            <text x="-95" y="20" class="font-sans" font-size="17" font-weight="600" fill="#64748B">Valid for all Indian donors</text>
        </g>
        <g transform="translate(250, 0)" filter="url(#shadowCard)">
            <rect x="-190" y="-45" width="380" height="90" rx="20" fill="#FFFFFF" stroke="#FDBA74" stroke-width="1.5" />
            <circle cx="-135" cy="0" r="24" fill="#FFEDD5" />
            <text x="-135" y="8" text-anchor="middle" class="font-sans" font-size="24">⚡</text>
            <text x="-95" y="-8" class="font-sans" font-size="22" font-weight="800" fill="#0F172A">Instant 80G Receipt</text>
            <text x="-95" y="20" class="font-sans" font-size="17" font-weight="600" fill="#64748B">Digital PDF with QR code</text>
        </g>
    </g>

    <!-- Elevated Link Sticker Button -->
    <g transform="translate(540, 1310)" filter="url(#glowBtn)">
        <rect x="-380" y="-55" width="760" height="110" rx="55" fill="#FFFFFF" stroke="#F36F21" stroke-width="4" />
        <rect x="-372" y="-47" width="744" height="94" rx="47" fill="url(#brandOrange)" />
        <g transform="translate(-290, 0)">
            <circle cx="0" cy="0" r="26" fill="#FFFFFF" fill-opacity="0.25" />
            <text x="0" y="8" text-anchor="middle" class="font-sans" font-size="28">🔗</text>
        </g>
        <text x="-240" y="12" class="font-sans" font-size="32" font-weight="900" fill="#FFFFFF" letter-spacing="1">
            TAP TO DONATE &amp; CLAIM 80G
        </text>
        <text x="320" y="13" text-anchor="middle" class="font-sans" font-size="34" fill="#FFFFFF">👉</text>
    </g>

    <text x="540" y="1415" text-anchor="middle" class="font-sans" font-size="22" font-weight="700" fill="#7C2D12" letter-spacing="0.5">
        Tap the sticker above to donate via UPI / Card &amp; download PDF
    </text>

    <!-- Bottom Wave -->
    <path d="M 0,1780 Q 270,1720 540,1780 T 1080,1780 L 1080,1920 L 0,1920 Z" fill="#F36F21" fill-opacity="0.08" />
    <path d="M 0,1830 Q 270,1790 540,1830 T 1080,1830 L 1080,1920 L 0,1920 Z" fill="#F36F21" fill-opacity="0.12" />
</svg>`;
}

function getSlide2Svg() {
    return `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFF9F5" />
            <stop offset="35%" stop-color="#FFF2E8" />
            <stop offset="70%" stop-color="#FDE8D8" />
            <stop offset="100%" stop-color="#FAD9C3" />
        </linearGradient>

        <linearGradient id="brandOrange2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FF833E" />
            <stop offset="100%" stop-color="#E25505" />
        </linearGradient>

        <filter id="shadowCert" x="-15%" y="-15%" width="135%" height="135%">
            <feDropShadow dx="0" dy="24" stdDeviation="30" flood-color="#7C2D12" flood-opacity="0.18" />
            <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000000" flood-opacity="0.08" />
        </filter>

        <filter id="shadowBtn" x="-20%" y="-20%" width="145%" height="145%">
            <feDropShadow dx="0" dy="12" stdDeviation="18" flood-color="#7C2D12" flood-opacity="0.22" />
            <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#000000" flood-opacity="0.06" />
        </filter>
    </defs>

    <style>
        .font-sans { font-family: 'Segoe UI', Arial, sans-serif; }
    </style>

    <rect width="1080" height="1920" fill="url(#bgGrad2)" />
    <circle cx="540" cy="400" r="500" fill="#FFD6BA" fill-opacity="0.4" />
    <circle cx="540" cy="950" r="450" fill="#F36F21" fill-opacity="0.1" />

    <!-- Top Badge -->
    <g transform="translate(540, 350)">
        <rect x="-190" y="-30" width="380" height="60" rx="30" fill="url(#brandOrange2)" />
        <text x="0" y="8" text-anchor="middle" class="font-sans" font-size="22" font-weight="900" fill="#FFFFFF" letter-spacing="3">80G TAX EXEMPTION</text>
    </g>

    <!-- Headline -->
    <text x="540" y="455" text-anchor="middle" class="font-sans" font-size="50" font-weight="800" fill="#1E293B" letter-spacing="-0.5">
        Donate online via UPI/Razorpay &amp;
    </text>
    <text x="540" y="525" text-anchor="middle" class="font-sans" font-size="56" font-weight="900" fill="#E25505" letter-spacing="-0.8">
        get an instant Form 10BE
    </text>
    <text x="540" y="595" text-anchor="middle" class="font-sans" font-size="50" font-weight="800" fill="#0F172A" letter-spacing="-0.5">
        tax certificate with digital seal!
    </text>

    <!-- Real Certificate Document Mockup -->
    <g transform="translate(540, 930)" filter="url(#shadowCert)">
        <rect x="-410" y="-270" width="820" height="540" rx="24" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" />
        <rect x="-390" y="-250" width="780" height="500" rx="16" fill="none" stroke="#F36F21" stroke-width="2.5" />
        <rect x="-380" y="-240" width="760" height="480" rx="12" fill="none" stroke="#D97706" stroke-width="1" stroke-dasharray="5 3" />

        <!-- Header -->
        <g transform="translate(0, -190)">
            <circle cx="0" cy="-10" r="18" fill="#FFF2EB" stroke="#F36F21" stroke-width="1.5" />
            <text x="0" y="-3" text-anchor="middle" class="font-sans" font-size="18">🏛️</text>
            <text x="0" y="25" text-anchor="middle" class="font-sans" font-size="21" font-weight="900" fill="#7C2D12" letter-spacing="0.5">
                PANDIT SHREE GYASILAL MISHRA WELFARE SOCIETY
            </text>
            <text x="0" y="46" text-anchor="middle" class="font-sans" font-size="13" font-weight="600" fill="#64748B">
                Govt Reg: 06/12/03/11718/16 • PAN: AAEAP1466C • NITI Aayog: MP/2021/0299785
            </text>
        </g>

        <line x1="-340" y1="-125" x2="340" y2="-125" stroke="#CBD5E1" stroke-width="1.2" />

        <!-- Title -->
        <g transform="translate(0, -92)">
            <rect x="-250" y="-20" width="500" height="40" rx="20" fill="#FFF7ED" stroke="#FDBA74" stroke-width="1.2" />
            <text x="0" y="7" text-anchor="middle" class="font-sans" font-size="17" font-weight="900" fill="#C2410C" letter-spacing="0.5">
                SECTION 80G TAX EXEMPTION RECEIPT • FORM 10BE
            </text>
        </g>

        <!-- Details Table -->
        <g transform="translate(0, -45)">
            <rect x="-340" y="0" width="680" height="36" fill="#F8FAFC" rx="6" />
            <text x="-320" y="24" class="font-sans" font-size="14" font-weight="700" fill="#475569">Receipt Number:</text>
            <text x="-170" y="24" class="font-sans" font-size="14" font-weight="900" fill="#0F172A">PGSM/80G/2026-27/0182</text>
            <text x="100" y="24" class="font-sans" font-size="14" font-weight="700" fill="#475569">Issue Date:</text>
            <text x="190" y="24" class="font-sans" font-size="14" font-weight="900" fill="#0F172A">14-Sep-2026</text>

            <text x="-320" y="62" class="font-sans" font-size="14" font-weight="700" fill="#475569">Donor Name:</text>
            <text x="-170" y="62" class="font-sans" font-size="14" font-weight="800" fill="#0F172A">Verified Donor (As Per PAN)</text>
            <text x="100" y="62" class="font-sans" font-size="14" font-weight="700" fill="#475569">Donor PAN:</text>
            <text x="190" y="62" class="font-sans" font-size="14" font-weight="800" fill="#0F172A">ABCDE1234F</text>

            <rect x="-340" y="80" width="680" height="36" fill="#FFF7ED" rx="6" />
            <text x="-320" y="104" class="font-sans" font-size="14" font-weight="700" fill="#9A3412">Donation Amount:</text>
            <text x="-170" y="104" class="font-sans" font-size="16" font-weight="900" fill="#C2410C">₹ 5,000.00 (Rupees Five Thousand Only)</text>

            <text x="0" y="142" text-anchor="middle" class="font-sans" font-size="12" font-weight="600" fill="#64748B">
                Income Tax 80G Order URN: AAEAP1466C24BP02 • Eligible for 50% Tax Deduction
            </text>
        </g>

        <!-- Stamps & Badges -->
        <g transform="translate(0, 168)">
            <g transform="translate(-240, 20)">
                <circle cx="0" cy="0" r="50" fill="none" stroke="#DC2626" stroke-width="3" stroke-opacity="0.9" />
                <circle cx="0" cy="0" r="44" fill="none" stroke="#DC2626" stroke-width="1.2" stroke-dasharray="3 2" stroke-opacity="0.8" />
                <circle cx="0" cy="0" r="34" fill="#FEE2E2" fill-opacity="0.4" />
                <text x="0" y="-12" text-anchor="middle" class="font-sans" font-size="9" font-weight="900" fill="#DC2626">PANDIT SHREE GYASILAL</text>
                <text x="0" y="3" text-anchor="middle" class="font-sans" font-size="11" font-weight="900" fill="#DC2626">★ SEAL ★</text>
                <text x="0" y="18" text-anchor="middle" class="font-sans" font-size="9" font-weight="900" fill="#DC2626">GOVT REGD SOCIETY</text>
            </g>

            <g transform="translate(-20, 20)">
                <circle cx="0" cy="0" r="36" fill="#10B981" />
                <path d="M -13,0 L -4,9 L 14,-9" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                <text x="0" y="54" text-anchor="middle" class="font-sans" font-size="12" font-weight="800" fill="#047857">VERIFIED 80G</text>
            </g>

            <g transform="translate(200, 20)">
                <rect x="-40" y="-40" width="80" height="80" rx="8" fill="#FFFFFF" stroke="#0F172A" stroke-width="2.5" />
                <rect x="-32" y="-32" width="24" height="24" fill="#0F172A" />
                <rect x="-27" y="-27" width="14" height="14" fill="#FFFFFF" />
                <rect x="-22" y="-22" width="4" height="4" fill="#0F172A" />

                <rect x="8" y="-32" width="24" height="24" fill="#0F172A" />
                <rect x="13" y="-27" width="14" height="14" fill="#FFFFFF" />
                <rect x="18" y="-22" width="4" height="4" fill="#0F172A" />

                <rect x="-32" y="8" width="24" height="24" fill="#0F172A" />
                <rect x="-27" y="13" width="14" height="14" fill="#FFFFFF" />
                <rect x="-22" y="18" width="4" height="4" fill="#0F172A" />

                <rect x="0" y="-8" width="6" height="6" fill="#0F172A" />
                <rect x="8" y="0" width="6" height="6" fill="#0F172A" />
                <rect x="-8" y="10" width="6" height="6" fill="#0F172A" />
                <rect x="20" y="20" width="6" height="6" fill="#0F172A" />

                <text x="0" y="54" text-anchor="middle" class="font-sans" font-size="11" font-weight="700" fill="#64748B">SCAN TO VERIFY</text>
            </g>
        </g>
    </g>

    <!-- DUAL BUTTONS SIDE BY SIDE -->
    <g transform="translate(540, 1310)">
        <!-- Button 1 (Left): Verify 80G Order -->
        <g transform="translate(-210, 0)" filter="url(#shadowBtn)">
            <rect x="-195" y="-52" width="390" height="104" rx="52" fill="#FFFFFF" stroke="#F36F21" stroke-width="4" />
            <text x="-140" y="10" class="font-sans" font-size="30">📄</text>
            <text x="-95" y="9" class="font-sans" font-size="24" font-weight="900" fill="#0F172A" letter-spacing="0.5">
                VERIFY 80G ORDER
            </text>
        </g>

        <!-- Button 2 (Right): Donate Online -->
        <g transform="translate(210, 0)" filter="url(#shadowBtn)">
            <rect x="-195" y="-52" width="390" height="104" rx="52" fill="url(#brandOrange2)" stroke="#FFFFFF" stroke-width="2" />
            <text x="-130" y="10" class="font-sans" font-size="30">❤️</text>
            <text x="-85" y="9" class="font-sans" font-size="25" font-weight="900" fill="#FFFFFF" letter-spacing="0.5">
                DONATE ONLINE
            </text>
        </g>
    </g>

    <text x="540" y="1415" text-anchor="middle" class="font-sans" font-size="22" font-weight="700" fill="#7C2D12" letter-spacing="0.5">
        👈 Tap Left to View IT Dept Order • Tap Right to Donate &amp; Get Receipt 👉
    </text>

    <!-- Bottom Wave -->
    <path d="M 0,1780 Q 270,1720 540,1780 T 1080,1780 L 1080,1920 L 0,1920 Z" fill="#F36F21" fill-opacity="0.08" />
    <path d="M 0,1830 Q 270,1790 540,1830 T 1080,1830 L 1080,1920 L 0,1920 Z" fill="#F36F21" fill-opacity="0.12" />
</svg>`;
}

async function renderGraphics() {
    console.log('Rendering Slide 1 at true 1080x1920 (100% Quality, Chroma 4:4:4)...');
    const svg1 = Buffer.from(getSlide1Svg());
    await sharp(svg1, { density: 150 })
        .resize(1080, 1920)
        .jpeg({ quality: 100, chromaSubsampling: '4:4:4' })
        .toFile('social/story_80g_tax_slide1.jpg');

    await sharp(svg1, { density: 150 })
        .resize(1080, 1920)
        .png({ compressionLevel: 9 })
        .toFile('social/story_80g_tax_slide1.png');

    console.log('Rendering Slide 2 (Dual Links) at true 1080x1920 (100% Quality)...');
    const svg2 = Buffer.from(getSlide2Svg());
    await sharp(svg2, { density: 150 })
        .resize(1080, 1920)
        .jpeg({ quality: 100, chromaSubsampling: '4:4:4' })
        .toFile('social/story_80g_dual_links.jpg');

    await sharp(svg2, { density: 150 })
        .resize(1080, 1920)
        .png({ compressionLevel: 9 })
        .toFile('social/story_80g_dual_links.png');

    fs.copyFileSync('social/story_80g_dual_links.jpg', 'social/story_80g_certificate_showcase.jpg');
    fs.copyFileSync('social/story_80g_dual_links.png', 'social/story_80g_certificate_showcase.png');

    console.log('ALL GRAPHICS RENDERED SUCCESSFULLY AT 1080x1920!');
}

renderGraphics().catch(e => {
    console.error(e);
    process.exit(1);
});
