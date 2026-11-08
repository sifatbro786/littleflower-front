import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { school } from "@/config/school";
import { img, video } from "@/content/media";

import Photo from "../ui/Photo";
import VideoPlayer from "../ui/VideoPlayer";

/**
 * Closing admission band on marigold: the real admission poster pinned on the board, steps, all phone numbers,
 * and a short walk-to-campus video.
 * @param {{ steps: {title:string,text:string}[] }} props
 */
export default function AdmissionVisit({ steps }) {
    const c = school.contact;
    return (
        <section className="px-2 pb-2 sm:px-4 sm:pb-4" aria-labelledby="admission-title">
            <div className="overflow-hidden rounded-[2rem] bg-sun sm:rounded-[2.5rem]">
                <div className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
                    <div className="relative mx-auto w-full max-w-sm">
                        <div className="rotate-[-2.5deg] rounded-[1rem] bg-white p-3 shadow-[0_30px_50px_-28px_rgba(46,27,16,.65)]">
                            <div className="relative aspect-square overflow-hidden rounded-[0.6rem]">
                                <Photo image={img.poster2027} fill ratio={1} sizes="(min-width:1024px) 380px, 85vw" />
                            </div>
                        </div>
                        <span className="absolute -top-3 left-1/2 size-6 -translate-x-1/2 rounded-full bg-coral shadow-[inset_0_-3px_0_rgba(0,0,0,.2),0_4px_8px_rgba(0,0,0,.25)]" aria-hidden="true" />
                    </div>

                    <div className="text-ink">
                        <p className="text-[13px] font-semibold tracking-[0.16em] uppercase">Admission open</p>
                        <h2 id="admission-title" className="mt-3 text-[2.1rem] leading-[1.08] font-semibold tracking-[-0.02em] text-balance sm:text-[2.8rem]">
                            Come and see {school.shortName} for yourself
                        </h2>

                        {steps?.length > 0 && (
                            <ol className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                                {steps.map((s, i) => (
                                    <li key={s.title} className="flex gap-3.5">
                                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ink text-[15px] font-semibold text-sun">{i + 1}</span>
                                        <span>
                                            <span className="block font-semibold">{s.title}</span>
                                            <span className="mt-0.5 block text-[14.5px] leading-snug text-ink/75">{s.text}</span>
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        )}

                        <div className="mt-9 flex flex-wrap gap-3">
                            <Link href="/admission/information" className="btn bg-ink text-white hover:bg-brand-deep">
                                Admission details
                                <ArrowUpRight className="size-4" aria-hidden="true" />
                            </Link>
                            <a href={c.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn border border-ink/25 bg-white/40 hover:bg-white/70">
                                WhatsApp the office
                            </a>
                        </div>

                        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/15 pt-6 text-[15px]">
                            {(c.phones ?? [c.phone]).map((p) => (
                                <li key={p}>
                                    <a href={`tel:${p.replace(/[^\d+]/g, "")}`} className="inline-flex items-center gap-1.5 font-semibold hover:underline">
                                        <Phone className="size-4" aria-hidden="true" /> {p}
                                    </a>
                                </li>
                            ))}
                            <li className="inline-flex items-center gap-1.5 text-ink/80">
                                <MapPin className="size-4" aria-hidden="true" /> {c.addressShort}
                            </li>
                        </ul>
                    </div>
                </div>

                {video.campusTour && (
                    <div className="container-x pb-10 sm:pb-14">
                        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] shadow-[0_30px_60px_-40px_rgba(46,27,16,.7)] sm:aspect-[21/9]">
                            <VideoPlayer src={video.campusTour.src} poster={video.campusTour.poster} title={`A walk to our campus, ${c.addressShort}`} fill />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
