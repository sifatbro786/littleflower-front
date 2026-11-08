import { ArrowRight, Pin } from "lucide-react";
import Link from "next/link";

import { dateParts, formatDate } from "@/lib/format";

import Photo from "../ui/Photo";
import SectionHeading from "../ui/SectionHeading";

/**
 * Notices written on an exercise-book page (ruled lines, margin) + latest news as photo cards.
 * @param {{ notices: import("@/lib/data/types").Notice[], news: import("@/lib/data/types").NewsPost[] }} props
 */
export default function Updates({ notices, news }) {
    return (
        <section className="container-x py-20 sm:py-28" aria-labelledby="updates-title">
            <div className="flex flex-wrap items-end justify-between gap-6">
                <SectionHeading eyebrow="Notices, news & events" title={<span id="updates-title">On the notice board this week</span>} />
                <div className="flex gap-2">
                    <Link href="/notices" className="btn-ghost">All notices</Link>
                    <Link href="/news" className="btn-ghost">All news</Link>
                </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
                <div className="margin-line relative self-start overflow-hidden rounded-[1.25rem] border border-line pl-12 shadow-[0_24px_50px_-36px_rgba(46,27,16,.5)]">
                    <p className="border-b border-coral/40 py-3 pr-5 text-[13px] font-semibold tracking-[0.16em] text-coral uppercase">Notice board</p>
                    {notices.length ? (
                        <ol>
                            {notices.map((n) => {
                                const d = dateParts(n.publishedAt);
                                return (
                                    <li key={n.id} className="border-b border-line last:border-b-0">
                                        <Link href={`/notices/${n.slug}`} className="group grid grid-cols-[3.25rem_1fr] gap-4 py-5 pr-5">
                                            <time dateTime={n.publishedAt} className="text-center leading-none">
                                                <span className="block text-[1.7rem] font-semibold text-ink tabular-nums">{d.day}</span>
                                                <span className="mt-1 block text-[12px] font-semibold tracking-wider text-ink-soft uppercase">{d.month}</span>
                                            </time>
                                            <span>
                                                <span className="flex flex-wrap items-center gap-2 text-[12.5px]">
                                                    <span className="rounded-full bg-brand-soft px-2 py-0.5 font-medium text-brand capitalize">{n.category}</span>
                                                    {n.pinned && (
                                                        <span className="inline-flex items-center gap-1 rounded-full bg-sun-soft px-2 py-0.5 font-medium text-[#7a5300]">
                                                            <Pin className="size-3" aria-hidden="true" /> Pinned
                                                        </span>
                                                    )}
                                                </span>
                                                <span className="mt-1.5 block text-[17px] leading-snug font-semibold text-ink underline-offset-4 group-hover:underline">{n.title}</span>
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ol>
                    ) : (
                        <p className="py-8 pr-5 text-ink-soft">No notices right now.</p>
                    )}
                    <Link href="/notices" className="flex items-center gap-2 border-t border-coral/40 py-4 pr-5 text-[15px] font-semibold text-brand hover:text-ink">
                        Open the notice board <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                </div>

                <ul className="grid gap-5 sm:grid-cols-2">
                    {news.slice(0, 4).map((p, i) => (
                        <li key={p.id} className={i === 0 ? "sm:col-span-2" : ""}>
                            <Link href={`/news/${p.slug}`} className="group block overflow-hidden rounded-[1.25rem] bg-white shadow-[0_18px_40px_-32px_rgba(46,27,16,.5)]">
                                <div className={`relative ${i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"} overflow-hidden`}>
                                    <Photo image={p.cover} fill ratio={i === 0 ? 2 : 4 / 3} sizes={i === 0 ? "(min-width:1024px) 640px, 100vw" : "(min-width:1024px) 320px, 50vw"} className="transition-transform duration-700 group-hover:scale-[1.04]" />
                                </div>
                                <div className="p-5">
                                    <time dateTime={p.publishedAt} className="text-[13px] font-medium text-ink-soft">{formatDate(p.publishedAt)}</time>
                                    <h3 className={`mt-1.5 leading-snug font-semibold text-ink group-hover:text-brand ${i === 0 ? "text-xl sm:text-[1.4rem]" : "line-clamp-2 text-[17px]"}`}>{p.title}</h3>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Link href="/news" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand hover:text-ink sm:hidden">
                More news <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
        </section>
    );
}
