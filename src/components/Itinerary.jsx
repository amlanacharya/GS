import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bike, Camera, ChevronDown, Clock, Flame, Heart, Lamp, Landmark, Lightbulb, MapPin,
  Mountain, Plane, Ship, Sparkles, Sunset, Utensils, Waves, Wine,
} from "lucide-react";
import Photo from "./Photo.jsx";
import Reveal, { SectionTitle } from "./Reveal.jsx";
import { DAYS, TRIP } from "../data/trip.js";

const MOODS = { waves: Waves, wine: Wine, flame: Flame, mountain: Mountain, camera: Camera, sparkles: Sparkles, bike: Bike, utensils: Utensils, lamp: Lamp, ship: Ship, heart: Heart, sunset: Sunset, landmark: Landmark, plane: Plane };

const mapsUrl = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

function TimelineItem({ item, last }) {
  return (
    <li className="relative flex gap-4 pb-8 last:pb-0 sm:gap-6">
      {!last && <span className="absolute left-[11px] top-6 h-full w-px bg-gold/50 sm:left-[13px]" aria-hidden="true" />}
      <span className="relative z-10 mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full border-2 border-gold bg-cream sm:h-7 sm:w-7">
        <span className="h-2 w-2 rounded-full bg-lantern" />
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="inline-flex items-center gap-1 font-semibold text-tealInk">
            <Clock size={14} /> {item.time}
          </span>
          <span className="rounded-full bg-gold/20 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-navy">{item.slot}</span>
        </div>

        <div className="mt-2 flex gap-4">
          <Photo id={item.photo} alt={item.title} kind={item.kind} className="hidden h-24 w-32 flex-none rounded-2xl sm:block" />
          <div className="min-w-0">
            <h4 className="font-display text-xl font-bold text-navy">{item.title}</h4>
            <a
              href={mapsUrl(item.query)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-lantern underline-offset-4 hover:underline"
            >
              <MapPin size={15} /> {item.place}
            </a>
            <p className="mt-1 text-sm leading-relaxed text-navy/80">{item.desc}</p>
          </div>
        </div>

        {item.food && (
          <p className="mt-3 inline-flex items-start gap-2 rounded-xl bg-sunset/10 px-3 py-2 text-sm text-navy">
            <Utensils size={16} className="mt-0.5 flex-none text-sunset" />
            <span><strong>Order:</strong> {item.food}</span>
          </p>
        )}

        <div className="mt-3 flex items-start gap-2 rounded-xl border border-teal/40 bg-teal/10 px-3 py-2 text-sm text-navy">
          <Lightbulb size={16} className="mt-0.5 flex-none text-teal" />
          <span><strong>Pro tip:</strong> {item.tip}</span>
        </div>
      </div>
    </li>
  );
}

function todayIndex() {
  const start = new Date(TRIP.start);
  if (Number.isNaN(start.getTime())) return 0;
  const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const n = Math.round((today - startDay) / 86400000) + 1;
  return n >= 1 && n <= DAYS.length ? n : 0;
}

function MoodChips({ moods, size = 16, box = "h-8 w-8", tone }) {
  return (
    <span className="flex gap-2" aria-hidden="true">
      {moods.map((m) => {
        const Icon = MOODS[m];
        return (
          <span key={m} className={`flex ${box} items-center justify-center rounded-full ${tone}`}>
            <Icon size={size} />
          </span>
        );
      })}
    </span>
  );
}

function DayCard({ day, open, onToggle, isToday }) {
  const panelId = `day-panel-${day.n}`;
  const todayTag = isToday && (
    <span className="rounded-full bg-ember px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white">Today</span>
  );
  return (
    <Reveal>
      <article id={`day-${day.n}`} className="scroll-mt-32 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gold/30">
        <h3 className="m-0">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-controls={panelId}
            className="relative block w-full text-left"
          >
            {open ? (
              <>
                <Photo id={day.cover} alt={`Day ${day.n} cover: ${day.short}`} kind={day.kind} className="h-52 w-full sm:h-64" />
                <span className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-end gap-4 p-5 sm:p-7">
                  <span className="flex h-16 w-16 flex-none flex-col items-center justify-center rounded-full bg-gold text-navy shadow-glow sm:h-20 sm:w-20">
                    <span className="text-xs font-semibold uppercase tracking-widest">Day</span>
                    <span className="-mt-1 font-display text-3xl font-bold leading-none sm:text-4xl">{day.n}</span>
                  </span>
                  <span className="min-w-0 flex-1">
                    {todayTag && <span className="mb-1 block">{todayTag}</span>}
                    <span className="block font-display text-xl font-bold leading-tight text-cream sm:text-3xl">{day.title}</span>
                    <span className="mt-2 block"><MoodChips moods={day.moods} tone="bg-white/20 text-cream backdrop-blur" /></span>
                  </span>
                  <span className="mb-1 flex h-11 w-11 flex-none rotate-180 items-center justify-center rounded-full bg-white/20 text-cream backdrop-blur">
                    <ChevronDown size={22} />
                  </span>
                </span>
              </>
            ) : (
              <span className="flex min-h-24 items-center gap-3 p-3 sm:gap-5 sm:p-4">
                <span className="relative flex-none">
                  <Photo id={day.cover} alt="" kind={day.kind} className="h-[72px] w-[72px] rounded-2xl sm:h-20 sm:w-28" />
                  <span className="absolute -left-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gold font-display text-base font-bold text-navy shadow-sm">{day.n}</span>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-tealInk">Day {day.n} · {day.short}</span>
                    {todayTag}
                  </span>
                  <span className="mt-0.5 block font-display text-lg font-bold leading-tight text-navy sm:text-xl">{day.title}</span>
                  <span className="mt-1.5 hidden sm:block"><MoodChips moods={day.moods} size={14} box="h-7 w-7" tone="bg-gold/20 text-lantern" /></span>
                </span>
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold/20 text-navy">
                  <ChevronDown size={22} />
                </span>
              </span>
            )}
          </button>
        </h3>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="p-5 sm:p-8">
                <p className="mb-7 font-script text-xl italic text-navy/80 sm:text-2xl">{day.blurb}</p>
                <ol>
                  {day.items.map((item, i) => (
                    <TimelineItem key={item.time} item={item} last={i === day.items.length - 1} />
                  ))}
                </ol>

                <div className="mt-8 rounded-2xl bg-navy p-5 text-cream sm:p-6">
                  <h4 className="flex items-center gap-2 font-display text-lg text-gold">
                    <Camera size={20} /> Instagram photo spots
                  </h4>
                  <ul className="mt-3 space-y-3">
                    {day.spots.map((s) => (
                      <li key={s.spot} className="flex flex-col gap-0.5 border-t border-white/10 pt-3 first:border-0 first:pt-0 sm:flex-row sm:justify-between">
                        <span className="font-medium">{s.spot}</span>
                        <span className="text-sm text-gold">Best: {s.best}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Reveal>
  );
}

export default function Itinerary() {
  const today = todayIndex();
  const [openDay, setOpenDay] = useState(today || 1);
  const frame = useRef(0);
  const stop = () => cancelAnimationFrame(frame.current);
  useEffect(() => stop, []);

  const select = (n) => {
    setOpenDay(n);
    stop();
    // Day panels collapse and expand while we scroll, so keep pinning the chosen day
    // under the sticky rail until the layout settles (or the user scrolls themselves).
    const started = performance.now();
    let settledSince = 0;
    const cancel = () => {
      stop();
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
    };
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    const tick = (now) => {
      const el = document.getElementById(`day-${n}`);
      if (el) {
        const offset = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
        // ignore the Reveal wrapper's slide-in transform so we pin the final layout position
        const slide = new DOMMatrixReadOnly(getComputedStyle(el.parentElement).transform).m42;
        const diff = el.getBoundingClientRect().top - slide - offset;
        if (Math.abs(diff) > 1) {
          window.scrollBy({ top: diff, behavior: "instant" });
          settledSince = 0;
        } else if (!settledSince) {
          settledSince = now;
        }
      }
      const elapsed = now - started;
      if (elapsed > 2500 || (elapsed > 600 && settledSince && now - settledSince > 300)) cancel();
      else frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
  };

  return (
    <section id="itinerary" className="bg-gradient-to-b from-cream to-[#fdeedd] px-4 pb-24 pt-16 sm:pb-32 sm:pt-24">
      <SectionTitle eyebrow="Five days, one love story" title="Day by Day" />

      <nav aria-label="Jump to day" className="sticky top-16 z-30 -mx-4 mb-6 bg-cream px-4 py-2 shadow-[0_1px_0_rgba(212,165,116,0.4)]">
        <ul className="no-scrollbar mx-auto flex max-w-4xl gap-2 overflow-x-auto sm:grid sm:grid-cols-5">
          {DAYS.map((d) => {
            const active = openDay === d.n;
            return (
              <li key={d.n} className="flex-none sm:flex-auto">
                <button
                  type="button"
                  onClick={() => select(d.n)}
                  aria-pressed={active}
                  className={`flex min-h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors ${
                    active ? "bg-navy text-cream" : "bg-white text-navy ring-1 ring-gold/40 hover:bg-gold/20"
                  }`}
                >
                  <span className={`font-display text-base ${active ? "text-gold" : "text-lantern"}`}>{d.n}</span>
                  {d.short}
                  {today === d.n && <span className="h-2 w-2 rounded-full bg-ember" role="img" aria-label="today" />}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mx-auto max-w-4xl space-y-4">
        {DAYS.map((day) => (
          <DayCard
            key={day.n}
            day={day}
            isToday={today === day.n}
            open={openDay === day.n}
            onToggle={() => setOpenDay(openDay === day.n ? 0 : day.n)}
          />
        ))}
      </div>
    </section>
  );
}

