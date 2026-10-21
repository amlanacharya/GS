import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Photo from "./Photo.jsx";
import Reveal, { SectionTitle } from "./Reveal.jsx";
import { CREDITS, GALLERY } from "../data/images.js";

const FILTERS = [
  ["all", "All"],
  ["da-nang", "Da Nang"],
  ["hoi-an", "Hoi An"],
  ["food", "Food"],
  ["beach", "Beach"],
];

const RATIO = { tall: "aspect-[3/4]", wide: "aspect-[4/3]", square: "aspect-square" };

const creditLine = (p) => (CREDITS[p.id] ? `Photo: ${CREDITS[p.id]}` : "");

function Lightbox({ items, index, onClose, onMove }) {
  const item = items[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onMove(1);
      if (e.key === "ArrowLeft") onMove(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onMove]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/95 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      onClick={onClose}
    >
      <button type="button" onClick={onClose} aria-label="Close" className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream">
        <X size={26} />
      </button>
      <button type="button" onClick={(e) => { e.stopPropagation(); onMove(-1); }} aria-label="Previous photo" className="absolute left-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream sm:left-6">
        <ChevronLeft size={28} />
      </button>
      <button type="button" onClick={(e) => { e.stopPropagation(); onMove(1); }} aria-label="Next photo" className="absolute right-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream sm:right-6">
        <ChevronRight size={28} />
      </button>

      <motion.figure
        key={item.id}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.5}
        onDragEnd={(_, info) => {
          if (info.offset.x < -80) onMove(1);
          if (info.offset.x > 80) onMove(-1);
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-3xl cursor-grab active:cursor-grabbing"
        onClick={(e) => e.stopPropagation()}
      >
        <Photo id={item.id} alt={item.caption} kind={item.kind} className="aspect-[4/3] w-full rounded-2xl" eager />
        <figcaption className="mt-4 text-center text-cream">
          <p className="font-display text-xl">{item.caption}</p>
          <p className="mt-1 font-script text-lg italic text-gold">{item.tip}</p>
          <p className="mt-1 text-xs text-cream/60">{creditLine(item)}</p>
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);

  const items = filter === "all" ? GALLERY : GALLERY.filter((p) => p.cat === filter);

  const move = useCallback(
    (dir) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="gallery" className="bg-navy px-4 py-20 sm:py-28">
      <SectionTitle eyebrow="A little preview of what is waiting" title="Moments to Capture" light />

      <div className="no-scrollbar mx-auto mb-10 flex max-w-6xl gap-2 overflow-x-auto pb-1 sm:justify-center" role="tablist" aria-label="Photo filters">
        {FILTERS.map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={filter === id}
            onClick={() => setFilter(id)}
            className={`min-h-11 flex-none rounded-full px-5 text-sm font-semibold transition ${
              filter === id ? "bg-gold text-navy" : "bg-white/10 text-cream hover:bg-white/20"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="masonry mx-auto max-w-6xl">
        {items.map((p, i) => (
          <Reveal key={p.id} y={24}>
            <button type="button" onClick={() => setActive(i)} className="group relative block w-full overflow-hidden rounded-2xl text-left" aria-label={`Open photo: ${p.caption}`}>
              <Photo id={p.id} alt={p.caption} kind={p.kind} className={`${RATIO[p.ratio]} w-full transition duration-500 group-hover:scale-105`} />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy/85 via-transparent to-transparent p-3 opacity-100 sm:opacity-0 sm:transition sm:duration-300 sm:group-hover:opacity-100">
                <p className="font-display text-sm font-bold text-cream sm:text-base">{p.caption}</p>
                <p className="text-xs text-gold">{p.tip}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && <Lightbox items={items} index={active} onClose={close} onMove={move} />}
      </AnimatePresence>
    </section>
  );
}
