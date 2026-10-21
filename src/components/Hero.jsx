import { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Photo from "./Photo.jsx";
import { TRIP } from "../data/trip.js";
import { HERO_ID } from "../data/images.js";
import { useCountdown } from "../hooks/hooks.js";
import { releaseLantern } from "../lib/releaseLantern.js";

function Unit({ value, label }) {
  return (
    <div className="flex w-16 flex-col items-center rounded-2xl border border-white/25 bg-navy/50 py-3 backdrop-blur-md sm:w-24 sm:py-4">
      <span className="font-display text-2xl font-bold tabular-nums text-cream sm:text-4xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-xs uppercase tracking-widest text-gold">{label}</span>
    </div>
  );
}

function sleepsLine(days) {
  if (days === 0) return "Tonight is your last sleep at home. Pack the sunscreen.";
  if (days === 1) return "One more sleep until Da Nang.";
  return `${days} sleeps until Da Nang.`;
}

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, 220]);
  const fade = useTransform(scrollY, [0, 450], [1, 0]);
  const time = useCountdown(TRIP.start);

  const lanterns = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        left: `${(i * 8.3 + (i % 3) * 3) % 96}%`,
        delay: `${(i * 1.7) % 10}s`,
        duration: `${14 + (i % 5) * 3}s`,
        scale: 0.7 + (i % 4) * 0.25,
      })),
    []
  );

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy"
      onClick={(e) => {
        if (e.target.closest("a, button")) return;
        releaseLantern(e.clientX, e.clientY);
      }}
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-10 h-[115%]">
        <Photo id={HERO_ID} alt="Da Nang beach at sunset" kind="beach" className="h-full w-full" eager />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/30 to-navy/80" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {lanterns.map((l, i) => (
          <span
            key={i}
            className="lantern"
            style={{ left: l.left, animationDelay: l.delay, animationDuration: l.duration, transform: `scale(${l.scale})` }}
          />
        ))}
      </div>

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="font-script text-xl italic tracking-wide text-gold sm:text-3xl"
        >
          A gift, wrapped in lanterns
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.9 }}
          className="mt-3 font-display text-4xl font-bold leading-tight text-cream drop-shadow-lg sm:text-6xl lg:text-7xl"
        >
          {TRIP.first} <span className="text-gold">&amp;</span> {TRIP.second}
          <span className="block text-3xl font-medium italic sm:text-5xl lg:text-6xl">Vietnam Honeymoon</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.9 }}
          className="mt-5 text-balance font-script text-xl text-cream/95 sm:text-3xl"
        >
          {TRIP.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.9 }}
          className="mt-9"
        >
          {time.done ? (
            <p className="font-display text-2xl text-gold">The adventure has begun.</p>
          ) : (
            <>
              <div className="flex justify-center gap-2 sm:gap-4" role="timer" aria-label="Countdown to the trip">
                <Unit value={time.days} label="Days" />
                <Unit value={time.hours} label="Hours" />
                <Unit value={time.minutes} label="Mins" />
                <Unit value={time.seconds} label="Secs" />
              </div>
              <p className="mx-auto mt-5 w-fit rounded-full bg-navy/40 px-4 py-1 text-balance font-script text-lg italic font-semibold text-cream sm:text-2xl drop-shadow-lg">{sleepsLine(time.days)}</p>
            </>
          )}
        </motion.div>
      </motion.div>

      <a
        href="#overview"
        className="absolute bottom-6 left-1/2 z-10 flex min-h-11 -translate-x-1/2 flex-col items-center gap-1 text-cream/90"
        aria-label="Scroll to begin your journey"
      >
        <span className="font-script text-lg italic">Scroll to begin your journey</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown size={22} className="text-gold" />
        </motion.span>
      </a>
    </section>
  );
}
