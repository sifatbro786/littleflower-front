import { ArrowRight, Eye, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { school } from "@/config/school";
import { img } from "@/content/media";

import Photo from "../ui/Photo";
import { RotatingBadge, Tape } from "../ui/Decor";

export default function About() {
    return (
        <section className="container-x py-20 sm:py-28" aria-labelledby="about-title">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                {/* Overlapping photos + rotating badge */}
                <div className="relative mx-auto w-full max-w-[560px] pb-10 sm:pb-0">
                    <div className="relative aspect-[4/5] w-[68%] overflow-hidden rounded-[1.5rem] shadow-[0_30px_60px_-30px_rgba(21,36,27,.5)]">
                        <Photo image={img.artShowcase} fill ratio={4 / 5} sizes="(min-width:1024px) 380px, 66vw" />
                    </div>
                    <div className="absolute right-0 bottom-0 aspect-[3/4] w-[50%] overflow-hidden rounded-[1.25rem] border-[6px] border-paper shadow-[0_24px_50px_-24px_rgba(21,36,27,.55)] sm:-bottom-6">
                        <Photo image={img.birthday} fill ratio={3 / 4} sizes="(min-width:1024px) 280px, 50vw" />
                    </div>
                    <Tape className="top-[52%] right-[30%] rotate-[-28deg]" tone="coral" />
                    <RotatingBadge
                        text={`ENGLISH VERSION • ESTD ${school.established} • MIRPUR •`}
                        className="absolute top-[38%] left-[52%] w-28 -translate-x-1/2 sm:w-36"
                    >
                        <Image src={school.logo.crest} alt="" width={school.logo.width} height={school.logo.height} className="h-full w-auto" />
                    </RotatingBadge>
                </div>

                <div>
                    <p className="eyebrow">Since {school.established} · {school.locality}</p>
                    <h2 id="about-title" className="h-section mt-3">
                        A small school with a <span className="text-brand">big heart</span> for little learners
                    </h2>
                    <div className="prose-school mt-6">
                        <p>
                            {school.name} teaches children from Play Group to SSC in three mediums.
                            Children learn in bright, air-conditioned classrooms with highly qualified and experienced
                            teachers who know every child by name.
                        </p>
                        <p>
                            Since {school.established} we have kept one promise to parents: lessons finished in class,
                            regular tests, and good manners alongside good results.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        <Link href="/about/vision-mission" className="group flex items-center gap-3 rounded-xl border border-brand/30 bg-white px-4 py-3.5 transition-colors hover:border-brand">
                            <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-brand"><Eye className="size-5" aria-hidden="true" /></span>
                            <span className="font-semibold text-ink">Our vision</span>
                            <ArrowRight className="ml-auto size-4 text-brand transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                        </Link>
                        <Link href="/about/vision-mission" className="group flex items-center gap-3 rounded-xl border border-brand/30 bg-white px-4 py-3.5 transition-colors hover:border-brand">
                            <span className="grid size-10 place-items-center rounded-lg bg-sun-soft text-[#9a7400]"><Target className="size-5" aria-hidden="true" /></span>
                            <span className="font-semibold text-ink">Our mission</span>
                            <ArrowRight className="ml-auto size-4 text-brand transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                        </Link>
                    </div>

                    <Link href="/about/introduction" className="btn-primary mt-8">
                        More about Little Flower
                        <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
