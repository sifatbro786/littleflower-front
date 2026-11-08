import Link from "next/link";

import { Flower } from "../ui/Decor";
import Photo from "../ui/Photo";

const tones = {
    brand: { bg: "bg-brand-soft", flower: "text-brand" },
    sun: { bg: "bg-sun-soft", flower: "text-sun" },
    sky: { bg: "bg-sky-soft", flower: "text-sky" },
    coral: { bg: "bg-coral-soft", flower: "text-coral" },
};

/**
 * Inner-page header: breadcrumb, title, summary, optional framed photo.
 * @param {{ title: string, summary?: string, crumbs?: {label:string, href?:string}[], image?: import("@/lib/data/types").ImageRef, tone?: "brand"|"sun"|"sky"|"coral" }} props
 */
export default function PageHeader({ title, summary, crumbs = [], image, tone = "brand" }) {
    const t = tones[tone] ?? tones.brand;
    return (
        <section className={`relative overflow-hidden ${t.bg}`}>
            <Flower className={`absolute -right-16 -bottom-20 size-72 opacity-[0.07] ${t.flower}`} centre="transparent" />
            <div className={`container-x relative grid gap-10 py-12 sm:py-16 ${image ? "lg:grid-cols-[1.1fr_0.9fr] lg:items-center" : ""}`}>
                <div className="pb-1">
                    <nav aria-label="Breadcrumb">
                        <ol className="flex flex-wrap items-center gap-1.5 text-[13.5px] text-ink-soft">
                            <li>
                                <Link href="/" className="hover:text-ink">Home</Link>
                            </li>
                            {crumbs.map((c) => (
                                <li key={c.label} className="flex items-center gap-1.5">
                                    <Flower className="size-2.5 text-coral" centre="var(--coral)" />
                                    {c.href ? (
                                        <Link href={c.href} className="hover:text-ink">{c.label}</Link>
                                    ) : (
                                        <span className="font-medium text-ink" aria-current="page">{c.label}</span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                    <h1 className="h-display mt-5 max-w-3xl text-ink">{title}</h1>
                    {summary && <p className="mt-4 max-w-2xl text-[17.5px] leading-relaxed text-ink-soft">{summary}</p>}
                </div>
                {image && (
                    <div className="relative hidden justify-self-end lg:block">
                        <div className="frame-arch relative aspect-[4/3] w-[27rem] overflow-hidden ring-8 ring-white shadow-[0_30px_60px_-34px_rgba(46,27,16,.55)]">
                            <Photo image={image} fill ratio={4 / 3} sizes="(min-width:1024px) 432px, 1px" priority />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
