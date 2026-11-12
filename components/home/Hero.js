import { ArrowUpRight, Phone } from "lucide-react";
import Link from "next/link";

import { school } from "@/config/school";
import { video } from "@/content/media";

import { Flower, Seal } from "../ui/Decor";
import HeroVideo from "./HeroVideo";

/**
 * Full-bleed hero: the campus video plays behind the words (muted, looping, pause button).
 * A crest-brown wash on the left keeps the text readable; the poster renders first so LCP is an image.
 */
export default function Hero() {
    const h = school.home;
    return (
        <section className="relative isolate overflow-hidden bg-brand-deep text-white" aria-labelledby="hero-title">
            <HeroVideo src={video.hero.src} poster={video.hero.poster} label={`${school.name} campus`} />
            <div className="absolute inset-0 -z-10 bg-brand-deep/35" aria-hidden="true" />
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-brand-deep/75 via-brand-deep/40 to-transparent" aria-hidden="true" />

            <div className="container-x flex min-h-[min(calc(100svh-9.75rem),720px)] items-center pt-12 pb-20 sm:pt-14 lg:pb-24">
                <div className="max-w-2xl">
                    <p className="inline-flex items-center gap-2.5 rounded-full bg-white/12 px-3.5 py-1.5 text-[13.5px] font-semibold ring-1 ring-white/25">
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-sun opacity-70 motion-reduce:hidden" />
                            <span className="relative inline-flex size-2 rounded-full bg-sun" />
                        </span>
                        Admission open · {school.levels}
                    </p>

                    <h1 id="hero-title" className="mt-5 text-[2.6rem] leading-[1.03] font-semibold tracking-[-0.03em] sm:text-[3.4rem] lg:text-[3.9rem]">
                        {h.heroLead}
                        <br />
                        <span className="relative inline-block">
                            <span className="relative z-10">{h.heroAccent}</span>
                            <span className="absolute inset-x-[-0.1em] bottom-[0.06em] h-[0.34em] -rotate-1 rounded-sm bg-sun/80" aria-hidden="true" />
                        </span>
                    </h1>

                    <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/85 sm:text-[17px]">{h.heroIntro}</p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <Link href="/admission/information" className="btn-marigold">
                            Admission information
                            <ArrowUpRight className="size-4" aria-hidden="true" />
                        </Link>
                        <a href={school.contact.phoneHref} className="btn border border-white/35 bg-white/10 text-white hover:bg-white/20">
                            <Phone className="size-4" aria-hidden="true" />
                            {school.contact.phone}
                        </a>
                    </div>

                    <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-white/20 pt-5 text-[14px] font-medium [@media(min-width:1024px)_and_(max-height:680px)]:hidden">
                        {school.mediums.map((m, i) => (
                            <li key={m} className="flex items-center gap-2">
                                <Flower className={`size-4 ${["text-sun", "text-coral", "text-sky"][i % 3]}`} centre="#fff" />
                                {m}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="pointer-events-none absolute right-6 bottom-24 hidden lg:block xl:right-12">
                <Seal text={`SINCE ${school.established} · ${school.shortName.toUpperCase()} · `} className="w-28 drop-shadow-[0_12px_24px_rgba(0,0,0,.35)]" />
            </div>
        </section>
    );
}
