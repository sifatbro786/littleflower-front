import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { school } from "@/config/school";

import { Flower } from "../ui/Decor";
import { FacebookIcon, WhatsAppIcon, YouTubeIcon } from "./SocialIcons";

const columns = [
    {
        title: "School",
        links: [
            { label: "Introduction", href: "/about/introduction" },
            { label: "Chairman's Message", href: "/about/chairman-message" },
            { label: "Vision & Mission", href: "/about/vision-mission" },
            { label: "Facilities", href: "/facilities" },
            { label: "Teachers & Staff", href: "/teachers" },
        ],
    },
    {
        title: "Families",
        links: [
            { label: "Admission", href: "/admission/information" },
            { label: "Our Classes", href: "/academics/classes" },
            { label: "Student Corner", href: "/student-corner" },
            { label: "Online Result", href: "/result" },
            { label: "Portal Login", href: "/login" },
        ],
    },
    {
        title: "Updates",
        links: [
            { label: "Notice Board", href: "/notices" },
            { label: "News & Events", href: "/news" },
            { label: "Gallery", href: "/gallery" },
            { label: "Contact", href: "/contact" },
        ],
    },
];

export default function Footer() {
    const c = school.contact;
    return (
        <footer className="mt-auto pt-16">
            <div className="board-grain text-white">
                <div className="container-x flex flex-col gap-6 border-b border-white/10 py-12 sm:flex-row sm:items-end sm:justify-between">
                    <p className="max-w-3xl text-[2.1rem] leading-[1.05] font-semibold tracking-[-0.025em] text-balance sm:text-[3.2rem]">
                        <Flower className="mr-3 mb-1.5 inline-block size-9 align-middle text-sun sm:size-11" centre="var(--brand)" />
                        {school.tagline}
                    </p>
                    {school.motto && <p className="shrink-0 text-[13px] font-semibold tracking-[0.2em] text-white/55 uppercase">{school.motto}</p>}
                </div>
                <div className="container-x grid gap-12 py-14 lg:grid-cols-[1.25fr_2fr] lg:py-16">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="grid size-16 place-items-center rounded-2xl bg-paper p-1.5">
                                <Image src={school.logo.crest} alt="" width={school.logo.width} height={school.logo.height} className="h-full w-auto" />
                            </span>
                            <div className="leading-tight">
                                <p className="text-lg font-bold tracking-[0.06em]">{school.shortName.toUpperCase()}</p>
                                <p className="text-sm text-white/70">{school.subName}</p>
                            </div>
                        </div>
                        <p className="mt-6 max-w-sm text-[15.5px] leading-relaxed text-white/75">{school.levels} · {school.mediums.join(", ")} · since {school.established}.</p>

                        <ul className="mt-7 space-y-3 text-[15px] text-white/85">
                            <li className="flex gap-3">
                                <MapPin className="mt-0.5 size-4.5 shrink-0 text-sun" aria-hidden="true" />
                                <span>
                                    {c.addressLines[0]}
                                    <br />
                                    {c.addressLines[1]}
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="mt-0.5 size-4.5 shrink-0 text-sun" aria-hidden="true" />
                                <a href={c.phoneHref} className="hover:text-white">{c.phone}</a>
                            </li>
                            {c.email && (
                                <li className="flex gap-3">
                                    <Mail className="mt-0.5 size-4.5 shrink-0 text-sun" aria-hidden="true" />
                                    <a href={`mailto:${c.email}`} className="hover:text-white">{c.email}</a>
                                </li>
                            )}
                            {c.officeHours && (
                                <li className="flex gap-3">
                                    <Clock className="mt-0.5 size-4.5 shrink-0 text-sun" aria-hidden="true" />
                                    <span>{c.officeHours}</span>
                                </li>
                            )}
                        </ul>

                        <div className="mt-7 flex gap-2.5">
                            {[
                                school.social.facebook && { href: school.social.facebook, label: "Facebook", Icon: FacebookIcon },
                                school.social.youtube && { href: school.social.youtube, label: "YouTube", Icon: YouTubeIcon },
                                { href: c.whatsappHref, label: "WhatsApp", Icon: WhatsAppIcon },
                            ]
                                .filter(Boolean)
                                .map(({ href, label, Icon }) => (
                                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-sun hover:text-ink">
                                        <Icon className="size-5" />
                                    </a>
                                ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
                        {columns.map((col) => (
                            <div key={col.title}>
                                <p className="text-[13px] font-semibold tracking-wider text-sun uppercase">{col.title}</p>
                                <ul className="mt-4 space-y-1">
                                    {col.links.map((l) => (
                                        <li key={l.href}>
                                            <Link href={l.href} className="inline-block py-1.5 text-[15px] text-white/80 hover:text-white">
                                                {l.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white/10">
                    <div className="container-x flex flex-col gap-2 py-5 text-[13.5px] text-white/60 md:flex-row md:items-center md:justify-between">
                        <p>
                            © {school.name} · {school.registration.label} {school.registration.code}
                        </p>
                        <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-1">
                            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
                        </nav>
                        <p>
                            Website by{" "}
                            <a href="https://strsltd.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                                STR Solutions Ltd.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
