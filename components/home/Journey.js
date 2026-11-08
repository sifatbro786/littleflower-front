import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Flower } from "../ui/Decor";
import SectionHeading from "../ui/SectionHeading";

const STAGES = [
    { id: "early", title: "Early Years", note: "Rhymes, colours, first letters and lots of play.", flower: "text-coral" },
    { id: "primary", title: "Primary", note: "Strong basics, neat writing and the scholarship exam.", flower: "text-sun" },
    { id: "secondary", title: "Secondary & SSC", note: "Board subjects, special classes and model tests.", flower: "text-sky" },
];

/**
 * Play Group to SSC as one path: three stages joined by a solid line, each with its class chips.
 * @param {{ classes: import("@/lib/data/types").SchoolClass[] }} props
 */
export default function Journey({ classes }) {
    const stages = STAGES.map((s) => ({ ...s, list: classes.filter((c) => c.stage === s.id) })).filter((s) => s.list.length);
    return (
        <section className="container-x py-20 sm:py-28" aria-labelledby="journey-title">
            <SectionHeading
                align="center"
                eyebrow="Play Group to SSC"
                title={<span id="journey-title">From the first crayon to the SSC exam</span>}
                intro="Thirteen classes in one building, so children grow up with the same teachers, friends and values."
            />

            <ol className="relative mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
                <span className="absolute top-7 right-[16%] left-[16%] hidden h-[3px] rounded-full bg-line lg:block" aria-hidden="true" />
                {stages.map((s, i) => (
                    <li key={s.id} className="relative text-center">
                        <span className="relative mx-auto grid size-14 place-items-center rounded-full bg-white shadow-[0_8px_20px_-10px_rgba(46,27,16,.4)] ring-4 ring-paper">
                            <Flower className={`size-8 ${s.flower}`} centre="var(--brand)" />
                        </span>
                        <p className="mt-5 text-[13px] font-semibold tracking-[0.14em] text-ink-soft uppercase">Stage {i + 1}</p>
                        <h3 className="mt-1 text-2xl font-semibold text-ink">{s.title}</h3>
                        <p className="mx-auto mt-2 max-w-xs text-[15.5px] leading-relaxed text-ink-soft">{s.note}</p>
                        <ul className="mx-auto mt-6 flex max-w-sm flex-wrap justify-center gap-2">
                            {s.list.map((c) => (
                                <li key={c.id}>
                                    <Link
                                        href={`/academics/classes#${s.id}`}
                                        className="inline-flex min-h-10 items-center gap-1 rounded-full border border-line bg-white px-3.5 text-[14px] font-medium text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
                                    >
                                        {c.name}
                                        <ArrowUpRight className="size-3.5 opacity-50" aria-hidden="true" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </section>
    );
}
