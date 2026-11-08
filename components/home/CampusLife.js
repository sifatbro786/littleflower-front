import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { img } from "@/content/media";

import Photo from "../ui/Photo";
import SectionHeading from "../ui/SectionHeading";

const tiles = [
    { title: "Football on the rooftop", image: img.footballTeams, href: "/gallery/rooftop-football", span: "sm:col-span-2 sm:row-span-2", ratio: 1, sizes: "(min-width:1024px) 600px, 100vw", tag: "bg-sun text-ink" },
    { title: "Green Colour Day", image: img.greenColourDay, href: "/gallery/colour-days-and-celebrations", span: "", ratio: 4 / 3, sizes: "(min-width:1024px) 300px, 50vw", tag: "bg-leaf text-white" },
    { title: "Art competition", image: img.artCompetition, href: "/gallery/art-and-craft", span: "", ratio: 4 / 3, sizes: "(min-width:1024px) 300px, 50vw", tag: "bg-coral text-white" },
    { title: "Our art show", image: img.artShowcase, href: "/gallery/art-and-craft", span: "sm:col-span-2", ratio: 2, sizes: "(min-width:1024px) 600px, 100vw", tag: "bg-sky text-white" },
];

/** A real photo mosaic of school life; every tile opens its gallery album. */
export default function CampusLife() {
    return (
        <section className="container-x py-20 sm:py-28" aria-labelledby="life-title">
            <div className="flex flex-wrap items-end justify-between gap-6">
                <SectionHeading eyebrow="Life at school" title={<span id="life-title">Busy hands, loud cheers, colourful days</span>} />
                <Link href="/gallery" className="btn-ghost">
                    Open the gallery
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
            </div>

            <ul className="mt-12 grid auto-rows-[minmax(12rem,auto)] gap-3 sm:grid-cols-4 sm:gap-4">
                {tiles.map((t) => (
                    <li key={t.title} className={t.span}>
                        <Link href={t.href} className="group relative block size-full min-h-56 overflow-hidden rounded-[1.25rem]">
                            <Photo image={t.image} fill ratio={t.ratio} sizes={t.sizes} className="transition-transform duration-700 group-hover:scale-[1.04]" />
                            <span className={`absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[14px] font-semibold shadow-md ${t.tag}`}>
                                {t.title}
                                <ArrowUpRight className="size-3.5" aria-hidden="true" />
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
