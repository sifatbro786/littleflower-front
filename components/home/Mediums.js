import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { school } from "@/config/school";

import SectionHeading from "../ui/SectionHeading";

const tones = {
    sun: { band: "bg-sun", soft: "bg-sun-soft", ink: "text-[#7a5300]" },
    coral: { band: "bg-coral", soft: "bg-coral-soft", ink: "text-[#9b2445]" },
    sky: { band: "bg-sky", soft: "bg-sky-soft", ink: "text-[#1d5a96]" },
};

/** Three mediums under one roof, set like the spines of three exercise books. */
export default function Mediums() {
    const list = school.home.mediums;
    if (!list?.length) return null;
    return (
        <section className="container-x py-20 sm:py-24" aria-labelledby="mediums-title">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-14">
                <div className="lg:pt-6">
                    <SectionHeading
                        eyebrow="One school, three mediums"
                        title={<span id="mediums-title">Choose the language your child learns in</span>}
                        intro="Every medium has its own sections, its own class teachers and the same Little Flower care, from Play Group to SSC."
                    />
                    <Link href="/academics/curriculum" className="mt-7 inline-flex items-center gap-2 font-semibold text-brand hover:text-ink">
                        How we teach
                        <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                </div>

                <ol className="grid gap-4 sm:grid-cols-3">
                    {list.map((m, i) => {
                        const t = tones[m.tone] ?? tones.sun;
                        return (
                            <li key={m.name} className={`group relative flex flex-col overflow-hidden rounded-[1.5rem] ${t.soft} pl-6`}>
                                <span className={`absolute inset-y-0 left-0 w-3 ${t.band}`} aria-hidden="true" />
                                <div className="flex flex-1 flex-col p-6 pl-2">
                                    <span className={`text-[13px] font-semibold tracking-[0.14em] uppercase ${t.ink}`}>Medium {String(i + 1).padStart(2, "0")}</span>
                                    <h3 className="mt-10 text-[1.6rem] leading-tight font-semibold tracking-tight text-ink sm:mt-16">{m.name}</h3>
                                    <p className={`mt-1 text-[14.5px] font-semibold ${t.ink}`}>{m.curriculum}</p>
                                    <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{m.text}</p>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
