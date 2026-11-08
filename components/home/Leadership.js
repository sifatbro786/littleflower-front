import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { school } from "@/config/school";

/**
 * Chairman's note. While the school has not sent a name/photo (`placeholder: true`)
 * the crest stands in for the portrait and only the title is shown, never a fake name.
 */
export default function Leadership() {
    const c = school.leadership?.chairman;
    if (!c?.quote) return null;
    return (
        <section className="container-x pb-20 sm:pb-28" aria-labelledby="leader-title">
            <div className="grid items-center gap-10 rounded-[2rem] bg-white p-6 shadow-[0_30px_70px_-50px_rgba(46,27,16,.6)] sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-14 lg:p-14">
                <div className="frame-arch relative mx-auto grid aspect-[4/5] w-48 place-items-center overflow-hidden bg-brand-soft sm:w-56">
                    {c.photo ? (
                        <Image src={c.photo} alt={c.name} fill className="object-cover" sizes="224px" />
                    ) : (
                        <Image src={school.logo.crest} alt="" width={school.logo.width} height={school.logo.height} className="w-[58%]" />
                    )}
                </div>
                <div>
                    <p className="eyebrow">From the {c.title}</p>
                    <blockquote id="leader-title" className="mt-4 text-[1.55rem] leading-snug font-semibold tracking-[-0.01em] text-ink sm:text-[2rem]">
                        <span className="text-sun">“</span>
                        {c.quote}
                        <span className="text-sun">”</span>
                    </blockquote>
                    <p className="mt-6 text-[15.5px] text-ink-soft">
                        {c.placeholder ? c.title : `${c.name} · ${c.title}`}, {school.shortName}
                    </p>
                    <Link href="/about/chairman-message" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand hover:text-ink">
                        Read the full message
                        <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
