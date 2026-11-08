/**
 * School configuration — the ONLY place school-specific identity lives.
 * To launch the platform for another school, duplicate this file's values
 * (and replace /content in Phase 1, or the database from Phase 2).
 * Never write `if (school === ...)` anywhere in the codebase.
 */

/**
 * @typedef {Object} SchoolTheme
 * @property {string} brand        Primary brand colour (logo shield)
 * @property {string} brandDeep    Darker brand tone (logo wordmark)
 * @property {string} brandSoft    Very light brand tint for surfaces
 * @property {string} sun          Accent from the logo flame
 * @property {string} sunSoft
 * @property {string} sky          Playful accent
 * @property {string} skySoft
 * @property {string} coral        Playful accent
 * @property {string} coralSoft
 * @property {string} [leaf]      Optional fourth accent
 * @property {string} [leafSoft]
 * @property {string} paper        Warm page background
 * @property {string} ink          Body text colour
 */

export const school = {
    /** Install id: auth cookie names (<slug>_at / <slug>_rt) and file names. Must equal the API's APP_SLUG. */
    slug: "littleflower",
    name: "Little Flower International English Medium School",
    shortName: "Little Flower",
    /** Second line under the short name in the header/footer lockup */
    subName: "International School",
    motto: "Rabbe Jidni Elma", // on the crest: "My Lord, increase me in knowledge"
    tagline: "Come to learn, go to serve.",
    description:
        "Little Flower International English Medium School in Kafrul, Mirpur, Dhaka has taught children from Play Group to SSC since 2000, in English Medium, English Version and Bangla Medium, with AC classrooms, CCTV, free Hifzul Quran and special care for SSC and scholarship exams.",
    established: 2000, // from the crest ("ESTD 2000")
    firstSessionStarted: "2000-01-01", // TODO(school): exact founding date
    /** Government registration shown on receipts, cards and the footer (EIIN or EMIS, per school) */
    registration: { label: "EMIS", code: "310071577" },
    levels: "Play Group to SSC",
    mediums: ["English Medium", "English Version", "Bangla Medium"],
    locality: "Kafrul, Mirpur, Dhaka",
    /** JSON-LD @type for the home page */
    schemaType: "School",
    seo: {
        titleSuffix: "Kafrul, Mirpur, Dhaka",
        keywords: [
            "Little Flower International English Medium School",
            "Little Flower International School Kafrul",
            "English Medium school Kafrul",
            "English Version school Mirpur",
            "school in Kazipara Mirpur",
            "Play Group admission Mirpur",
            "SSC school Kafrul Dhaka",
            "Hifzul Quran school Dhaka",
        ],
    },

    logo: {
        crest: "/images/logo-crest.png", // transparent, trimmed crest
        full: "/images/logo.jpg",
        width: 264,
        height: 280,
    },

    leadership: {
        // TODO(school): real names, photo and message. The website shows these placeholders until then.
        chairman: {
            name: "Chairman's name",
            knownAs: "",
            title: "Founder & Chairman",
            placeholder: true,
            photo: "", // e.g. "/images/chairman.jpg"
            quote: "We teach every child with care and discipline, so they come to learn and go out to serve their families, their country and their faith.",
        },
        principal: { name: "Principal's name", title: "Principal", placeholder: true },
    },

    contact: {
        phone: "+880 1674-009118",
        phoneHref: "tel:+8801674009118",
        phones: ["+880 1674-009118", "+880 1911-250256", "+880 1711-038213"],
        whatsapp: "+880 1674-009118",
        whatsappHref: "https://wa.me/8801674009118",
        email: "littleflower48@yahoo.com",
        addressLines: ["87 East Kazipara, Itkhola Bazar", "Kafrul, Mirpur, Dhaka 1216, Bangladesh"],
        addressShort: "87 East Kazipara, Kafrul, Dhaka 1216",
        addressLocality: "Kafrul, Dhaka",
        postalCode: "1216",
        // TODO(school): confirm the exact pin; approximate East Kazipara, Kafrul
        geo: { lat: 23.7977, lng: 90.3755 },
        officeHours: "", // TODO: confirm office hours with the school
    },

    social: {
        facebook: "https://www.facebook.com/LittleFlowerInternationalEnglishMediumSchool",
        youtube: "",
    },

    /** No YouTube content for this school: sections that need these hide themselves. */
    videos: {},

    /** Home page copy that belongs to this school (public site reads it; never hard-code it in components). */
    home: {
        heroLead: "Come to learn,",
        heroAccent: "go to serve.",
        heroIntro:
            "Since 2000, families in Kafrul and Mirpur have trusted Little Flower from the first day of Play Group to the SSC exam: lessons finished in class, good manners every day, and free Hifzul Quran for every child who wants it.",
        /** Honours board, as stated by the school on its admission poster. */
        honours: [
            { big: "18 years", text: "of 100% pass in the SSC exam" },
            { big: "201", text: "A+ results in SSC" },
            { big: "531", text: "students won scholarships" },
            { big: "2009 · 2018", text: "Best school award" },
        ],
        honoursNote: "As recorded by the school.",
        mediums: [
            {
                name: "English Medium",
                curriculum: "Cambridge curriculum",
                text: "For families who want an international path, with English as the language of every lesson.",
                tone: "sun",
            },
            {
                name: "English Version",
                curriculum: "National curriculum, in English",
                text: "The Bangladesh board syllabus taught in English, leading to the SSC exam with confidence in both languages.",
                tone: "coral",
            },
            {
                name: "Bangla Medium",
                curriculum: "National curriculum, in Bangla",
                text: "The board syllabus in Bangla, with the same special SSC and scholarship classes and the same care.",
                tone: "sky",
            },
        ],
        values: [
            { title: "Free Hifzul Quran", text: "Taught free of charge alongside regular classes." },
            { title: "Prayers on campus", text: "Zuhr and Asr are held in jamaat every school day." },
            { title: "Learning finished in class", text: "Lessons are taught and practised in class, with regular homework and class tests." },
            { title: "Special classes", text: "Extra classes for SSC and scholarship exams, and for students who need more help." },
            { title: "Safe and watched over", text: "Our own building, AC classrooms and CCTV across the campus." },
        ],
    },

    specialities: [
        "Play Group to SSC",
        "English Medium · English Version · Bangla Medium",
        "AC Classrooms & CCTV",
        "Free Hifzul Quran",
        "Special SSC & Scholarship Classes",
        "Own Campus Building",
    ],

    /**
     * Crest + Marigold palette (8 Nov 2026). Token names are shared with every school install:
     * brand = crest espresso (dashboard primary), sun = marigold (main call to action),
     * coral = petal pink, sky = sky blue, plus leaf green for this school's accents.
     * @type {SchoolTheme}
     */
    theme: {
        brand: "#2E1B10",
        brandDeep: "#1A0E07",
        brandSoft: "#F3EAE0",
        sun: "#E8A317",
        sunSoft: "#FDF1D6",
        sky: "#3B86D1",
        skySoft: "#E3EFFA",
        coral: "#E2557A",
        coralSoft: "#FCE6EC",
        leaf: "#3E9B5F",
        leafSoft: "#E4F3E9",
        paper: "#FBF5EA",
        ink: "#24170E",
    },

    /** Modules switched on for this school. Phase 3 reads this for /admin and /portal menus. */
    enabledModules: ["cms", "students", "results", "attendance", "routine", "cards", "fees", "sms", "portal"],

    /** Public site URL. Override with NEXT_PUBLIC_SITE_URL (Vercel preview / VPS domain). */
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://littleflower-school.vercel.app",
};

/** Primary navigation. Kept in config so another school can rename/hide items. */
export const navigation = [
    {
        label: "About",
        href: "/about/introduction",
        children: [
            { label: "Introduction", href: "/about/introduction" },
            { label: "Our Story", href: "/about/our-story" },
            { label: "Chairman's Message", href: "/about/chairman-message" },
            { label: "Vision & Mission", href: "/about/vision-mission" },
            { label: "Facilities", href: "/facilities" },
        ],
    },
    {
        label: "Academics",
        href: "/academics/classes",
        children: [
            { label: "Our Classes", href: "/academics/classes" },
            { label: "Curriculum & Approach", href: "/academics/curriculum" },
            { label: "Activities", href: "/academics/activities" },
            { label: "Fees Structure", href: "/academics/fees" },
            { label: "Teachers & Staff", href: "/teachers" },
        ],
    },
    {
        label: "Admission",
        href: "/admission/information",
        children: [
            { label: "Admission Information", href: "/admission/information" },
            { label: "Admission Notices", href: "/admission/notices" },
        ],
    },
    { label: "Student Corner", href: "/student-corner" },
    {
        label: "Updates",
        href: "/notices",
        children: [
            { label: "Notice Board", href: "/notices" },
            { label: "News & Events", href: "/news" },
        ],
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
];

/** Quick actions shown as buttons in the header and mobile menu. */
export const quickLinks = [
    { label: "Online Result", href: "/result" },
    { label: "Portal Login", href: "/login" },
];
