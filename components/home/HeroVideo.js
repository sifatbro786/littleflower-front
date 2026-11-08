"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Hero background video. Browsers only allow muted autoplay, so it starts muted; visitors can turn sound on
 * and pause it (WCAG 2.2.2). With reduced motion it stays on the poster until the visitor presses play.
 */
export default function HeroVideo({ src, poster, label }) {
    const ref = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        const v = ref.current;
        if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        v.play().then(() => setPlaying(true)).catch(() => {});
    }, []);

    const play = (v) => v.play().then(() => setPlaying(true)).catch(() => {});

    function togglePlay() {
        const v = ref.current;
        if (!v) return;
        if (v.paused) play(v);
        else {
            v.pause();
            setPlaying(false);
        }
    }

    function toggleSound() {
        const v = ref.current;
        if (!v) return;
        const next = !muted;
        v.muted = next;
        if (!next) {
            v.volume = 1;
            if (v.paused) play(v);
        }
        setMuted(next);
    }

    const btn = "inline-flex min-h-11 items-center gap-2 rounded-full bg-white/90 px-3.5 text-[13.5px] font-semibold text-brand shadow-md transition-colors hover:bg-white";
    return (
        <>
            <video ref={ref} className="absolute inset-0 -z-20 size-full object-cover" src={src} poster={poster} muted loop playsInline preload="metadata" aria-label={label} />
            <div className="absolute right-4 bottom-4 z-10 flex gap-2 sm:right-6 sm:bottom-6">
                <button type="button" onClick={toggleSound} aria-pressed={!muted} aria-label={muted ? "Turn video sound on" : "Turn video sound off"} className={btn}>
                    {muted ? <VolumeX className="size-4" aria-hidden="true" /> : <Volume2 className="size-4 text-sun" aria-hidden="true" />}
                    <span className="hidden sm:inline">{muted ? "Sound on" : "Sound off"}</span>
                </button>
                <button type="button" onClick={togglePlay} aria-label={playing ? "Pause video" : "Play video"} className={`${btn} w-11 justify-center px-0`}>
                    {playing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="ml-0.5 size-4" aria-hidden="true" />}
                </button>
            </div>
        </>
    );
}
