const cohortData = {
    monthly: {
        mobile: {
            heading: "MCP Chief of Staff",
            italic: "Workshop",
            badges: ["FREE", "LIVE & ASYNC", "BUILD & SHIP APPLICATIONS", "CERTIFICATE"],
            description: "Create an AI-powered assistant that acts as a “Chief of Staff” for your communication workflows. The system ingests forwarded email threads or messages, understands context, prioritizes tasks, and generates intelligent replies or action items. Participants will learn MCP integrations, thread parsing, summarization, and automated response generation. The final output demonstrates real-time triaging and replying to live communication threads with minimal human intervention."
        },
        desktop: {
            topBadges: ["NOW LIVE", "11,038 JOINED", "DURATION: 1 MONTH"],
            heading: "MCP Chief of Staff",
            italic: "Workshop",
            description: "Create an AI-powered assistant that acts as a \"Chief of Staff\" for your communication workflows. The system ingests forwarded email threads or messages, understands context, prioritizes tasks, and generates intelligent replies or action items. Participants will learn MCP integrations, thread parsing, summarization, and automated response generation. The final output demonstrates real-time triaging and replying to live communication threads with minimal human intervention.",
            flatBadges: ["FREE", "LIVE & ASYNC", "BUILD & SHIP APPLICATIONS", "CERTIFICATE"]
        },
        cardBadges: ["Duration: 1 Month", "11,045+ joined"]
    },
    weekly: {
        mobile: {
            heading: "StudyPilot — Timetable Builder for Students",
            italic: "Workshop.",
            badges: ["FREE", "ASYNC", "BUILD & SHIP", "WEEKLY BASED", "CERTIFICATE"],
            description: "Stop guessing what to study. Let your agent decide."
        },
        desktop: {
            topBadges: ["NOW LIVE", "9,478 JOINED", "DURATION: 1 WEEK"],
            heading: "StudyPilot — Timetable Builder for Students",
            italic: "Workshop.",
            description: "Stop guessing what to study. Let your agent decide.",
            flatBadges: ["FREE", "ASYNC", "BUILD & SHIP", "WEEKLY BASED", "CERTIFICATE"]
        },
        cardBadges: ["Duration: 1 Week", "9,478 joined"]
    }
};

function setToggle(mode) {
    const monthlyBtn = document.getElementById('toggle-monthly');
    const weeklyBtn = document.getElementById('toggle-weekly');
    const newBadge = weeklyBtn.querySelector('.new-badge');

    if (mode === 'monthly') {
        monthlyBtn.classList.remove('inactive');
        monthlyBtn.classList.add('active');
        weeklyBtn.classList.remove('active');
        weeklyBtn.classList.add('inactive');

        if (newBadge) {
            newBadge.style.backgroundColor = '#ED0331';
            newBadge.style.color = '#FFF200';
        }
    } else {
        weeklyBtn.classList.remove('inactive');
        weeklyBtn.classList.add('active');
        monthlyBtn.classList.remove('active');
        monthlyBtn.classList.add('inactive');

        if (newBadge) {
            newBadge.style.backgroundColor = '#ffffff';
            newBadge.style.color = '#ED0331';
        }
    }

    updateCohortContent(mode);
}

function updateCohortContent(mode) {
    const data = cohortData[mode];
    if (!data) return;

    // Update Desktop Layout
    const desktopTopBadgesContainer = document.getElementById('desktop-top-badges');
    if (desktopTopBadgesContainer) {
        desktopTopBadgesContainer.innerHTML = data.desktop.topBadges
            .map(badge => `<span class="live-badge">${badge}</span>`)
            .join('');
    }

    const desktopTitle = document.getElementById('desktop-title');
    if (desktopTitle) {
        desktopTitle.innerHTML = `${data.desktop.heading} <span class="section-title-italic">${data.desktop.italic}</span>`;
    }

    const desktopDescription = document.getElementById('desktop-description');
    if (desktopDescription) {
        desktopDescription.textContent = data.desktop.description;
    }

    const desktopFlatBadgesContainer = document.getElementById('desktop-flat-badges');
    if (desktopFlatBadgesContainer) {
        desktopFlatBadgesContainer.innerHTML = data.desktop.flatBadges
            .map(badge => `<span class="flat-badge">${badge}</span>`)
            .join('');
    }

    // Update Mobile Layout
    const mobileHeading = document.getElementById('mobile-heading');
    if (mobileHeading) {
        mobileHeading.textContent = data.mobile.heading;
    }

    const mobileItalic = document.getElementById('mobile-italic');
    if (mobileItalic) {
        mobileItalic.textContent = data.mobile.italic;
    }

    const mobileFlatBadgesContainer = document.getElementById('mobile-flat-badges');
    if (mobileFlatBadgesContainer) {
        mobileFlatBadgesContainer.innerHTML = data.mobile.badges
            .map(badge => `<span class="inline-flex h-6 items-center rounded-full border border-[#494748]/22 bg-[#ada6a6]/10 px-[13px] text-[12px] font-semibold uppercase tracking-[1.1px] text-[#d5d1d1] font-sans">${badge}</span>`)
            .join('');
    }

    const mobileDescription = document.getElementById('mobile-description');
    if (mobileDescription) {
        mobileDescription.textContent = data.mobile.description;
    }

    // Update Card top-right badges (mobile-only)
    const cardTopBadgesContainer = document.getElementById('card-top-badges');
    if (cardTopBadgesContainer) {
        cardTopBadgesContainer.innerHTML = data.cardBadges
            .map(badge => `<span class="inline-flex h-6 items-center rounded-full border border-[#a2a2a2]/22 bg-black/40 px-[9px] text-[12px] font-semibold uppercase tracking-[1.1px] text-[#e8294a]">${badge}</span>`)
            .join('');
    }
}

// Mobile Carousel Indicators Sync
const carousel = document.getElementById('mobile-carousel');
const indicators = document.querySelectorAll('#carousel-indicators span');

if (carousel && indicators.length > 0) {
    carousel.addEventListener('scroll', () => {
        const scrollLeft = carousel.scrollLeft;
        const cardWidth = carousel.firstElementChild.offsetWidth + 16; // width + gap
        const activeIndex = Math.round(scrollLeft / cardWidth);
        
        indicators.forEach((dot, idx) => {
            if (idx === activeIndex) {
                dot.className = 'h-2 rounded-full w-6 bg-[#ed0331] transition-all duration-300';
            } else {
                dot.className = 'h-2 w-2 rounded-full bg-[#3b3b3f] transition-all duration-300';
            }
        });
    });
}

// Upcoming Cohorts Carousel Navigation
const upcomingCarousel = document.getElementById('upcoming-carousel');
const upcomingPrevBtn = document.getElementById('upcoming-prev-btn');
const upcomingNextBtn = document.getElementById('upcoming-next-btn');

if (upcomingCarousel && upcomingPrevBtn && upcomingNextBtn) {
    upcomingPrevBtn.addEventListener('click', () => {
        const cardWidth = upcomingCarousel.firstElementChild.offsetWidth;
        upcomingCarousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
    
    upcomingNextBtn.addEventListener('click', () => {
        const cardWidth = upcomingCarousel.firstElementChild.offsetWidth;
        upcomingCarousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
    
    upcomingCarousel.addEventListener('scroll', () => {
        const scrollLeft = upcomingCarousel.scrollLeft;
        const maxScroll = upcomingCarousel.scrollWidth - upcomingCarousel.clientWidth;
        
        upcomingPrevBtn.disabled = scrollLeft <= 0;
        upcomingNextBtn.disabled = scrollLeft >= maxScroll - 5;
        
        if (upcomingPrevBtn.disabled) {
            upcomingPrevBtn.classList.add('opacity-50');
            upcomingPrevBtn.setAttribute('disabled', 'true');
        } else {
            upcomingPrevBtn.classList.remove('opacity-50');
            upcomingPrevBtn.removeAttribute('disabled');
        }
        
        if (upcomingNextBtn.disabled) {
            upcomingNextBtn.classList.add('opacity-50');
            upcomingNextBtn.setAttribute('disabled', 'true');
        } else {
            upcomingNextBtn.classList.remove('opacity-50');
            upcomingNextBtn.removeAttribute('disabled');
        }
    });
}
