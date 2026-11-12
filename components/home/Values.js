import { school } from "@/config/school";
import { img } from "@/content/media";

import { Flower } from "../ui/Decor";
import Photo from "../ui/Photo";
import SectionHeading from "../ui/SectionHeading";

/** Faith, manners and steady study, written out on exercise-book paper beside two real photos. */
export default function Values() {
    const items = school.home.values;
    if (!items?.length) return null;
    return (
        <section className="bg-leaf-soft/60 py-20 sm:py-28" aria-labelledby="values-title">
            <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
                <figure className="relative mx-auto w-full max-w-xl pb-10">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] ring-8 ring-white shadow-[0_34px_70px_-36px_rgba(46,27,16,.6)]">
                        <Photo image={img.quranPrizeDay} fill ratio={4 / 3} sizes="(min-width:1024px) 560px, 92vw" />
                    </div>
                    <div className="absolute -right-2 bottom-0 aspect-square w-[34%] overflow-hidden rounded-full border-8 border-paper shadow-[0_20px_40px_-24px_rgba(46,27,16,.6)] sm:-right-6">
                        <Photo image={img.girlWriting} fill ratio={1} sizes="(min-width:1024px) 190px, 34vw" />
                    </div>
                    <figcaption className="mt-4 flex max-w-[62%] items-center gap-2 text-[14px] font-medium text-ink-soft">
                        <Flower className="size-4 shrink-0 text-coral" centre="var(--sun)" />
                        Our young Quran learners, honoured by their teachers.
                    </figcaption>
                </figure>

                <div>
                    <SectionHeading eyebrow="What we promise parents" title={<span id="values-title">Good results, good manners, and faith at the heart of the day</span>} />
                    <ul className="ruled mt-9 rounded-[1.25rem] border border-line pt-[2.25rem] pr-5 pb-[1.125rem] pl-14 text-[15.5px] shadow-[0_18px_40px_-30px_rgba(46,27,16,.45)]">
                        {items.map((v) => (
                            <li key={v.title} className="relative leading-[2.25rem]">
                                <Flower className="absolute top-[0.6rem] -left-[2.15rem] size-4 text-coral" centre="var(--sun)" />
                                <span className="font-semibold text-ink">{v.title}.</span> <span className="text-ink-soft">{v.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
