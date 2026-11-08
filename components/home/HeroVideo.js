"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Muted, looping campus video behind the hero text. Respects reduced motion (stays on the poster)
 * and gives a pause button (WCAG 2.2.2 for moving content longer than 5 s).
 */
export default function HeroVideo({ src, poster, label }) {
    const ref = useRef(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const v = ref.current;
        if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        v.play().then(() => setPlaying(true)).catch(() => {});
    }, []);

    function toggle() {
        const v = ref.current;
        if (!v) return;
        if (v.paused) v.play().then(() => setPlaying(true)).catch(() => {});
        else {
            v.pause();
            setPlaying(false);
        }
    }

    return (
        <>
            <video ref={ref} className="absolute inset-0 -z-20 size-full object-cover" src={src} poster={poster} muted loop playsInline preload="metadata" aria-label={label} />
            <button
                type="button"
                onClick={toggle}
                aria-label={playing ? "Pause video" : "Play video"}
                className="absolute right-4 bottom-4 z-10 grid size-11 place-items-center rounded-full bg-white/90 text-brand shadow-md transition-colors hover:bg-white sm:right-6 sm:bottom-6"
            >
                {playing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="ml-0.5 size-4" aria-hidden="true" />}
            </button>
        </>
    );
}
