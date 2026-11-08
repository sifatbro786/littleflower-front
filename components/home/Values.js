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
                <div className="relative order-2 mx-auto w-full max-w-lg lg:order-1">
                    <div className="relative aspect-[4/5] w-[78%] overflow-hidden rounded-[1.5rem] shadow-[0_30px_60px_-34px_rgba(46,27,16,.55)]">
                        <Photo image={img.girlWriting} fill ratio={4 / 5} sizes="(min-width:1024px) 380px, 75vw" />
                    </div>
                    <div className="absolute right-0 bottom-[-8%] aspect-square w-[50%] overflow-hidden rounded-full border-8 border-paper shadow-[0_20px_40px_-24px_rgba(46,27,16,.6)]">
                        <Photo image={img.classWriting} fill ratio={1} sizes="(min-width:1024px) 250px, 50vw" />
                    </div>
                </div>

                <div className="order-1 lg:order-2">
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
