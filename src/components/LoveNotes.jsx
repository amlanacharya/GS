import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Pause, Play, Plus, Trash2 } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { NOTES, REASONS, TRIP } from "../data/trip.js";
import { useLocalStorage } from "../hooks/hooks.js";
import { releaseLanterns } from "../lib/releaseLantern.js";

function NoteCarousel({ notes, jump }) {
  const [i, setI] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);
  const [hidden, setHidden] = useState(
    typeof document !== "undefined" && document.hidden
  );
  const reduce = useReducedMotion();
  const count = notes.length;
  const idx = i % count;
  const playing = !reduce && !userPaused && !hovered && !focused && !touching && !hidden;

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (!playing) return undefined;
    const id = setInterval(() => setI((v) => v + 1), 5000);
    return () => clearInterval(id);
  }, [playing]);

  useEffect(() => {
    if (jump.tick > 0) setI(jump.index);
  }, [jump]);

  const go = (d) => setI((v) => (v + d + count) % count);

  return (
    <div
      className="relative max-w-4xl text-cream"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
      }}
      onPointerDown={() => setTouching(true)}
      onPointerUp={() => setTouching(false)}
      onPointerCancel={() => setTouching(false)}
    >
      <div className="min-h-[9rem] sm:min-h-[8rem]" aria-live={playing ? "off" : "polite"}>
        <AnimatePresence mode="wait">
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              if (info.offset.x > 60) go(-1);
            }}
            className="font-script text-3xl italic leading-snug sm:text-5xl"
          >
            {notes[idx]}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => go(-1)} aria-label="Previous note" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20"><ChevronLeft size={22} /></button>
        <div className="flex gap-1.5">
          {notes.map((_, n) => (
            <span key={n} className={`h-2 rounded-full transition-all ${n === idx ? "w-6 bg-gold" : "w-2 bg-white/50"}`} />
          ))}
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next note" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20"><ChevronRight size={22} /></button>
        {!reduce && (
          <button
            type="button"
            onClick={() => setUserPaused((v) => !v)}
            aria-pressed={userPaused}
            aria-label="Pause automatic rotation"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20"
          >
            {userPaused ? <Play size={20} /> : <Pause size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}

function Reason({ text }) {
  return (
    <li className="flex break-inside-avoid gap-3 py-2">
      <Heart size={16} className="mt-2 flex-none text-lantern" fill="currentColor" aria-hidden="true" />
      <p className="font-script text-xl leading-snug text-navy sm:text-2xl">{text}</p>
    </li>
  );
}

export default function LoveNotes() {
  const [custom, setCustom] = useLocalStorage("vn-love-notes-v1", []);
  const [draft, setDraft] = useState("");
  const [jump, setJump] = useState({ tick: 0, index: 0 });

  const add = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setCustom((c) => [...c, text]);
    setJump((j) => ({ tick: j.tick + 1, index: NOTES.length + custom.length }));
    setDraft("");
    const btn = e.nativeEvent.submitter?.getBoundingClientRect();
    if (btn) releaseLanterns(btn.left + btn.width / 2, btn.top, 3);
  };
  const remove = (n) => setCustom((c) => c.filter((_, i) => i !== n));

  const notes = [...NOTES, ...custom];

  return (
    <section id="notes">
      <div className="bg-gradient-to-br from-lantern to-ember px-4 py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-10 max-w-2xl sm:mb-12">
            <p className="font-script text-xl italic text-cream sm:text-2xl">Written from the heart</p>
            <h2 className="mt-1 font-display text-3xl font-bold sm:text-5xl">Love Notes</h2>
          </Reveal>
          <Reveal><NoteCarousel notes={notes} jump={jump} /></Reveal>
        </div>
      </div>

      <div className="bg-cream px-4 py-16 sm:py-24">
        <Reveal className="mx-auto max-w-6xl">
          <h3 className="mb-6 font-display text-2xl font-bold text-navy sm:text-3xl">Reasons I am excited to travel with you</h3>
          <ul className="gap-x-12 sm:columns-2">
            {REASONS.map((r) => <Reason key={r} text={r} />)}
          </ul>
        </Reveal>

      <Reveal className="mx-auto mt-14 max-w-6xl">
        <div className="max-w-2xl border-t border-gold/50 pt-6">
          <h3 className="font-display text-xl font-bold text-navy">Add a note for {TRIP.second}</h3>
          <p className="text-sm text-navy/70">Saved on this device and added to the carousel above.</p>
          <form onSubmit={add} className="mt-4 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="love-note" className="sr-only">Your note</label>
            <input
              id="love-note"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              maxLength={160}
              placeholder="Write something sweet..."
              className="min-h-12 flex-1 rounded-xl border border-gold/50 bg-cream px-4 text-navy placeholder:text-navy/60"
            />
            <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-lantern px-6 font-semibold text-cream transition hover:bg-lantern/90">
              <Plus size={18} /> Add
            </button>
          </form>
          {custom.length > 0 && (
            <ul className="mt-4 space-y-2">
              {custom.map((c, n) => (
                <li key={`${c}-${n}`} className="flex items-center justify-between gap-3 rounded-xl bg-cream px-4 py-2 text-sm text-navy">
                  <span>{c}</span>
                  <button type="button" onClick={() => remove(n)} aria-label="Delete note" className="flex h-10 w-10 flex-none items-center justify-center rounded-full text-lantern hover:bg-lantern/10"><Trash2 size={16} /></button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Reveal>
      </div>
    </section>
  );
}
