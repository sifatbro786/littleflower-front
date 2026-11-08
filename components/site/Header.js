import { ChevronDown, LogIn, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { navigation, quickLinks, school } from "@/config/school";

import { Flower } from "../ui/Decor";
import MobileMenu from "./MobileMenu";
import { FacebookIcon, YouTubeIcon } from "./SocialIcons";

export function Logo({ compact = false, invert = false }) {
    return (
        <Link href="/" className="group flex items-center gap-2.5" aria-label={`${school.name} home`}>
            <Image
                src={school.logo.crest}
                alt=""
                width={school.logo.width}
                height={school.logo.height}
                className={`${compact ? "h-10" : "h-11 sm:h-12"} w-auto`}
                priority
            />
            <span className="leading-none whitespace-nowrap">
                <span className={`block text-[19px] font-bold tracking-[0.04em] ${invert ? "text-white" : "text-brand"}`}>
                    {school.shortName.toUpperCase()}
                </span>
                <span className={`mt-1 block text-[11.5px] font-medium tracking-wide ${invert ? "text-white/70" : "text-ink-soft"}`}>
                    {school.subName}
                </span>
            </span>
        </Link>
    );
}

export default function Header() {
    const social = [
        school.social.facebook && { href: school.social.facebook, label: "Facebook page", Icon: FacebookIcon },
        school.social.youtube && { href: school.social.youtube, label: "YouTube channel", Icon: YouTubeIcon },
    ].filter(Boolean);
    return (
        <header className="sticky -top-9 z-40">
            {/* Utility strip */}
            <div className="bg-brand text-[13px] text-white/80">
                <div className="container-x flex h-9 items-center justify-between gap-4">
                    <p className="truncate">
                        <span className="font-semibold text-sun">Govt. approved · {school.registration.label} {school.registration.code}</span>
                        <span className="mx-2 text-white/25">|</span>
                        {school.contact.addressShort}
                    </p>
                    <div className="flex shrink-0 items-center gap-4">
                        <a href={school.contact.phoneHref} className="hidden items-center gap-1.5 hover:text-white md:flex">
                            <Phone className="size-3.5" aria-hidden="true" />
                            {school.contact.phone}
                        </a>
                        {social.map(({ href, label, Icon }) => (
                            <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:text-white">
                                <Icon className="size-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main bar */}
            <div className="border-b border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
                <div className="container-x flex h-[76px] items-center justify-between gap-4">
                    <Logo />

                    <nav aria-label="Main" className="hidden lg:block">
                        <ul className="flex items-center">
                            {navigation.map((item) => (
                                <li key={item.label} className="group relative">
                                    <Link
                                        href={item.href}
                                        className="relative flex items-center gap-1 px-2.5 py-3 text-[15px] font-medium whitespace-nowrap text-ink transition-colors after:absolute after:inset-x-2.5 after:bottom-1.5 after:h-[3px] after:origin-left after:scale-x-0 after:rounded-full after:bg-sun after:transition-transform hover:after:scale-x-100 group-focus-within:after:scale-x-100"
                                    >
                                        {item.label}
                                        {item.children && <ChevronDown className="size-3.5 opacity-50" aria-hidden="true" />}
                                    </Link>
                                    {item.children && (
                                        <div className="invisible absolute top-full left-0 pt-1 opacity-0 transition-all duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                                            <ul className="min-w-60 rounded-[1.1rem] border border-line bg-white p-2 shadow-[0_22px_44px_-22px_rgba(46,27,16,.45)]">
                                                {item.children.map((c) => (
                                                    <li key={c.href}>
                                                        <Link href={c.href} className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[14.5px] text-ink hover:bg-sun-soft">
                                                            <Flower className="size-3.5 text-coral" centre="var(--sun)" />
                                                            {c.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-2">
                        <Link href={quickLinks[1].href} className="hidden min-h-10 items-center gap-1.5 rounded-full px-3 text-sm font-semibold whitespace-nowrap text-ink hover:bg-brand-soft xl:inline-flex">
                            <LogIn className="size-4" aria-hidden="true" />
                            {quickLinks[1].label}
                        </Link>
                        <Link href="/admission/information" className="btn-marigold hidden min-h-10 px-4 text-sm whitespace-nowrap sm:inline-flex">
                            Admission
                        </Link>
                        <MobileMenu navigation={navigation} quickLinks={quickLinks} phone={school.contact} />
                    </div>
                </div>
            </div>
        </header>
    );
}
