import { img, teacherPhoto } from "./media";

/**
 * Teachers & staff. Live mode: Staff where showOnWebsite = true, ordered.
 * Source: list and portraits sent by the school, Nov 2026. Seeded create-if-missing by name;
 * after launch edit in Admin > Staff (photo, order, "show on website").
 * @type {import("@/lib/data/types").Staff[]}
 */
export const staff = [
    { id: "t-sabira", name: "Dr. Sabira Sultana", designation: "Vice Principal (English Version & English Medium)", qualification: "PhD, Jahangirnagar University", photo: teacherPhoto("sabira-sultana"), group: "teacher", order: 1 },
    { id: "t-tamanna", name: "Tamanna Ishita", designation: "Teacher", qualification: "BSc in Applied Physics, Tejgaon College", photo: teacherPhoto("tamanna-ishita"), group: "teacher", order: 2 },
    { id: "t-romena", name: "Romena Afroz", designation: "Teacher", qualification: "MA in Social Welfare, Jagannath University", photo: teacherPhoto("romena-afroz"), group: "teacher", order: 3 },
    { id: "t-fouzia", name: "Fouzia Akther", designation: "Teacher", qualification: "MSS in Public Administration, University of Chittagong", photo: teacherPhoto("fouzia-akther"), group: "teacher", order: 4 },
    { id: "t-tanzum", name: "Tanzum Tahsin Tanisha", designation: "Teacher", qualification: "O Level, Academia; BSc in Biochemistry (studying)", photo: teacherPhoto("tanzum-tahsin-tanisha"), group: "teacher", order: 5 },
    { id: "t-prokriti", name: "Prokriti Hasan Rodushi", designation: "Teacher", qualification: "BSc in CSE; MBA, University of Dhaka", photo: teacherPhoto("prokriti-hasan-rodushi"), group: "teacher", order: 6 },
    { id: "t-sheuly", name: "Sheuly Akter", designation: "Teacher", qualification: "BBA & MBA in Finance & Banking, Lalmatia Government Women's College (National University)", photo: teacherPhoto("sheuly-akter"), group: "teacher", order: 7 },
];

/**
 * Facilities. Only what the school states on its posters plus what the photos show.
 * @type {import("@/lib/data/types").Facility[]}
 */
export const facilities = [
    {
        id: "f-ac",
        title: "AC classrooms",
        text: "Air-conditioned classrooms keep children fresh and focused through Dhaka's hottest months.",
        image: img.classroomDesks,
        tone: "sky",
    },
    {
        id: "f-cctv",
        title: "CCTV and a safe campus",
        text: "The campus is watched by CCTV cameras, and children stay safe and supervised for the whole school day.",
        image: img.classWriting,
        tone: "brand",
    },
    {
        id: "f-building",
        title: "Our own building",
        text: "Little Flower runs in its own building in East Kazipara, with a rooftop used for assemblies, games and programmes.",
        image: img.rooftopGathering,
        tone: "sun",
    },
    {
        id: "f-hifz",
        title: "Free Hifzul Quran",
        text: "Hifzul Quran is taught free of charge, and Zuhr and Asr prayers are held in jamaat on campus.",
        image: img.girlWriting,
        tone: "coral",
    },
    {
        id: "f-screen",
        title: "Screen-supported lessons",
        text: "Classrooms use a screen for videos and visual lessons, so ideas are easier to see and remember.",
        image: img.smartClass,
        tone: "sky",
    },
    {
        id: "f-art",
        title: "Art, craft and colour days",
        text: "Drawing classes, art competitions and colour days give every child a chance to create and celebrate.",
        image: img.artShowcase,
        tone: "coral",
    },
];

/**
 * Student corner downloads (routines, syllabus, exam schedules). Live mode: published files from the admin panel.
 * TODO(school): class routines, syllabus PDFs and exam schedule.
 * @type {import("@/lib/data/types").Download[]}
 */
export const downloads = [];
