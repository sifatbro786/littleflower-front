import { school } from "@/config/school";
import { img } from "@/content/media";

import { Flower } from "../ui/Decor";
import Photo from "../ui/Photo";

/**
 * Results as an old school honours board: carved rows on dark wood, gold lettering.
 * Static numbers (no count-up), straight from the school's own record.
 */
export default function HonoursBoard() {
    const rows = school.home.honours;
    if (!rows?.length) return null;
    return (
        <section className="px-2 sm:px-4" aria-labelledby="honours-title">
            <div className="board-grain relative overflow-hidden rounded-[2rem] text-white sm:rounded-[2.5rem]">
                <div className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16">
                    <div>
                        <p className="flex items-center gap-2 text-[13px] font-semibold tracking-[0.18em] text-sun uppercase">
                            <Flower className="size-4 text-sun" centre="var(--brand)" />
                            Honours board
                        </p>
                        <h2 id="honours-title" className="mt-4 max-w-xl text-[2rem] leading-[1.1] font-semibold tracking-[-0.015em] text-balance sm:text-[2.6rem]">
                            Results that families in Kafrul have counted on since {school.established}.
                        </h2>

                        <dl className="mt-10 rounded-[1.25rem] border border-sun/35 p-2 shadow-[inset_0_0_0_6px_rgba(0,0,0,.18)]">
                            {rows.map((r) => (
                                <div key={r.text} className="grid grid-cols-1 items-baseline gap-x-6 gap-y-1 border-b border-sun/20 px-4 py-4 last:border-b-0 sm:grid-cols-[12.5rem_1fr] sm:px-6">
                                    <dt className="text-[1.75rem] font-semibold tracking-tight whitespace-nowrap text-sun tabular-nums sm:text-[2rem]">{r.big}</dt>
                                    <dd className="text-[15.5px] leading-snug text-white/85 sm:text-[17px]">{r.text}</dd>
                                </div>
                            ))}
                        </dl>
                        {school.home.honoursNote && <p className="mt-4 text-[13px] text-white/55">{school.home.honoursNote}</p>}
                    </div>

                    <figure className="relative mx-auto w-full max-w-md">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border-[10px] border-[#4a2f1e] shadow-[0_30px_60px_-30px_rgba(0,0,0,.8)]">
                            <Photo image={img.prizeGiving} fill ratio={4 / 5} sizes="(min-width:1024px) 420px, 90vw" />
                        </div>
                        <figcaption className="mt-4 text-center text-[14px] text-white/70">Prize giving ceremony for our SSC achievers</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}
