import { GraduationCap } from "lucide-react";

import HelpStrip from "@/components/site/HelpStrip";
import PageHeader from "@/components/site/PageHeader";
import { Flower, Tape } from "@/components/ui/Decor";
import Photo from "@/components/ui/Photo";
import { img } from "@/content/media";
import { getStaff } from "@/lib/data";

export const metadata = {
    title: "Our Teachers",
    description: "Meet the highly qualified and experienced teachers of Little Flower International School.",
    alternates: { canonical: "/teachers" },
};

/** School leaders get the featured card. Works off the designation, so no schema change per school. */
const LEAD = /\b(vice[\s-]?principal|principal|head\s?(master|mistress|teacher))\b/i;

/** "Vice Principal (English Version & English Medium)" → ["Vice Principal", "English Version & English Medium"] */
function splitDesignation(d = "") {
    const m = d.match(/^(.*?)\s*\((.+)\)\s*$/);
    return m ? [m[1], m[2]] : [d, null];
}

function initials(name) {
    return name
        .replace(/^(dr|md|mrs?|ms)\.?\s+/i, "")
        .split(/\s+/)
        .map((p) => p[0])
        .slice(0, 2)
        .join("");
}

function LeadCard({ person }) {
    const [role, wing] = splitDesignation(person.designation);
    return (
        <article className="paper-grain relative grid gap-8 overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_30px_70px_-50px_rgba(46,27,16,.6)] sm:p-10 md:grid-cols-[auto_1fr] md:items-center md:gap-12 lg:p-12">
            <Flower className="pointer-events-none absolute -right-10 -bottom-12 size-48 text-brand-soft" centre="var(--sun-soft)" />
            <div className="relative mx-auto w-56 sm:w-64">
                <Tape className="-top-3 left-1/2 z-10 -translate-x-1/2 -rotate-3" />
                <div className="frame-arch relative aspect-[4/5] overflow-hidden bg-brand-soft ring-8 ring-white shadow-[0_24px_50px_-30px_rgba(46,27,16,.55)]">
                    {person.photo ? (
                        <Photo image={{ src: person.photo, alt: person.name }} fill ratio={4 / 5} sizes="256px" priority />
                    ) : (
                        <span className="absolute inset-0 grid place-items-center text-5xl font-semibold text-brand/40">{initials(person.name)}</span>
                    )}
                </div>
            </div>
            <div className="relative">
                <p className="eyebrow">{role}</p>
                <h2 className="mt-3 text-[2rem] leading-tight font-semibold tracking-[-0.015em] text-ink sm:text-[2.5rem]">{person.name}</h2>
                {wing && <p className="mt-3 inline-flex rounded-full bg-sun-soft px-3 py-1 text-[13.5px] font-semibold text-ink">{wing}</p>}
                {person.qualification && (
                    <p className="mt-5 flex items-start gap-2.5 text-[16px] leading-relaxed text-ink-soft">
                        <GraduationCap className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
                        {person.qualification}
                    </p>
                )}
            </div>
        </article>
    );
}

function TeacherCard({ person }) {
    return (
        <li className="overflow-hidden rounded-[1.25rem] border border-line bg-white">
            <div className="relative aspect-[4/5] bg-brand-soft">
                {person.photo ? (
                    <Photo image={{ src: person.photo, alt: person.name }} fill ratio={4 / 5} sizes="(min-width:1024px) 340px, 50vw" />
                ) : (
                    <span className="absolute inset-0 grid place-items-center text-4xl font-semibold text-brand/40">{initials(person.name)}</span>
                )}
            </div>
            <div className="p-4 sm:p-5">
                <p className="font-semibold text-ink sm:text-[17px]">{person.name}</p>
                <p className="text-sm text-brand">{person.designation}</p>
                {person.qualification && <p className="mt-2 text-[13.5px] leading-snug text-ink-soft">{person.qualification}</p>}
            </div>
        </li>
    );
}

export default async function TeachersPage() {
    const all = await getStaff();
    const leads = all.filter((s) => LEAD.test(s.designation));
    const teachers = all.filter((s) => !LEAD.test(s.designation));

    return (
        <>
            <PageHeader
                title="Our Teachers"
                summary="Highly qualified and experienced teachers who know every child by name."
                image={img.prizeGivingTeachers}
                tone="coral"
                crumbs={[{ label: "Our Teachers" }]}
            />
            <div className="container-x py-14 lg:py-20">
                {all.length ? (
                    <>
                        {leads.length > 0 && (
                            <section aria-label="School leadership" className="mb-16 space-y-8">
                                {leads.map((s) => (
                                    <LeadCard key={s.id} person={s} />
                                ))}
                            </section>
                        )}
                        {teachers.length > 0 && (
                            <section aria-labelledby="teachers-title" className="mb-14">
                                <h2 id="teachers-title" className="text-2xl font-semibold text-ink sm:text-3xl">
                                    Our teachers
                                </h2>
                                <ul className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
                                    {teachers.map((s) => (
                                        <TeacherCard key={s.id} person={s} />
                                    ))}
                                </ul>
                            </section>
                        )}
                    </>
                ) : (
                    <div className="grid items-center gap-10 rounded-[1.5rem] bg-white p-6 sm:p-10 lg:grid-cols-2">
                        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.25rem]">
                            <Photo image={img.classWriting} fill ratio={16 / 9} sizes="(min-width:1024px) 520px, 100vw" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-ink">Teacher profiles are coming soon</h2>
                            <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">
                                We are preparing photos and introductions of our teachers. Meanwhile, you are always welcome to visit the campus and
                                meet them in person.
                            </p>
                        </div>
                    </div>
                )}
                <HelpStrip className="mt-14" />
            </div>
        </>
    );
}
