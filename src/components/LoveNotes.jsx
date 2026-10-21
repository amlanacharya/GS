import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Plus, Trash2 } from "lucide-react";
import Reveal, { SectionTitle } from "./Reveal.jsx";
import { NOTES, REASONS, TRIP } from "../data/trip.js";
import { useLocalStorage } from "../hooks/hooks.js";
import { releaseLanterns } from "../lib/releaseLantern.js";

function NoteCarousel({ notes, jump }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = notes.length;
  const idx = i % count;

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => setI((v) => v + 1), 5000);
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    if (jump.tick > 0) setI(jump.index);
  }, [jump]);

  const go = (d) => setI((v) => (v + d + count) % count);

  return (
    <div
      className="relative mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-lantern to-sunset px-6 py-14 text-center text-cream shadow-lift sm:px-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Heart className="mx-auto text-gold" size={28} fill="currentColor" />
      <div className="mt-4 min-h-[8rem] sm:min-h-[7rem]" aria-live="polite">
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
            className="font-script text-2xl italic leading-snug sm:text-4xl"
          >
            {notes[idx]}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button type="button" onClick={() => go(-1)} aria-label="Previous note" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20"><ChevronLeft size={22} /></button>
        <div className="flex gap-1.5">
          {notes.map((_, n) => (
            <span key={n} className={`h-2 rounded-full transition-all ${n === idx ? "w-6 bg-gold" : "w-2 bg-white/50"}`} />
          ))}
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next note" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20"><ChevronRight size={22} /></button>
      </div>
    </div>
  );
}

function ReasonCard({ text }) {
  return (
    <li className="heart-hover relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gold/25 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <span className="absolute bottom-3 right-4 flex gap-1 text-lantern" aria-hidden="true">
        <Heart size={14} fill="currentColor" className="heart-float" />
        <Heart size={18} fill="currentColor" className="heart-float" style={{ animationDelay: "0.25s" }} />
        <Heart size={12} fill="currentColor" className="heart-float" style={{ animationDelay: "0.5s" }} />
      </span>
      <Heart size={18} className="text-lantern" fill="currentColor" />
      <p className="mt-2 font-script text-xl leading-snug text-navy">{text}</p>
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
    <section id="notes" className="bg-cream px-4 py-20 sm:py-28">
      <SectionTitle eyebrow="Written from the heart" title="Love Notes" />

      <Reveal><NoteCarousel notes={notes} jump={jump} /></Reveal>

      <Reveal className="mx-auto mt-14 max-w-5xl">
        <h3 className="mb-6 text-center font-display text-2xl font-bold text-navy sm:text-3xl">Reasons I am excited to travel with you</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => <ReasonCard key={r} text={r} />)}
        </ul>
      </Reveal>

      <Reveal className="mx-auto mt-14 max-w-2xl">
        <div className="rounded-3xl border-2 border-dashed border-gold bg-white p-6">
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
              className="min-h-12 flex-1 rounded-xl border border-gold/50 bg-cream px-4 text-navy placeholder:text-navy/40"
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
    </section>
  );
}
