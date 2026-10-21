import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, Check, ChevronDown, Droplets, Gem, Shirt, Smartphone } from "lucide-react";
import Reveal, { SectionTitle } from "./Reveal.jsx";
import { PACKING } from "../data/trip.js";
import { useLocalStorage } from "../hooks/hooks.js";

const ICONS = { shirt: Shirt, camera: Camera, droplets: Droplets, smartphone: Smartphone, gem: Gem };

export default function Packing() {
  const [checked, setChecked] = useLocalStorage("vn-packing-v1", {});
  const [collapsed, setCollapsed] = useState({});

  const all = PACKING.flatMap((g) => g.items.map((it) => `${g.cat}:${it}`));
  const done = all.filter((k) => checked[k]).length;
  const pct = Math.round((done / all.length) * 100);

  const toggle = (key) => setChecked((c) => ({ ...c, [key]: !c[key] }));
  const toggleGroup = (cat) => setCollapsed((c) => ({ ...c, [cat]: !c[cat] }));

  return (
    <section id="packing" className="bg-gradient-to-b from-[#fdeedd] to-cream px-4 py-20 sm:py-28">
      <SectionTitle eyebrow="Do not forget a thing" title="Packing Checklist" />

      <div className="mx-auto mb-10 max-w-3xl">
        <div className="flex items-end justify-between">
          <p className="font-display text-lg font-bold text-navy">{pct}% packed</p>
          <p className="text-sm text-navy/70">{done} of {all.length} items</p>
        </div>
        <div className="mt-2 h-4 overflow-hidden rounded-full bg-navy/10" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Packing progress">
          <motion.div className="h-full rounded-full bg-gradient-to-r from-teal to-gold" animate={{ width: `${pct}%` }} transition={{ type: "spring", stiffness: 90, damping: 18 }} />
        </div>
        {pct === 100 && <p className="mt-3 text-center font-script text-2xl italic text-lantern">All packed. Time to fly!</p>}
      </div>

      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
        {PACKING.map((g, gi) => {
          const Icon = ICONS[g.icon];
          const isCollapsed = collapsed[g.cat];
          const groupDone = g.items.filter((it) => checked[`${g.cat}:${it}`]).length;
          return (
            <Reveal key={g.cat} delay={(gi % 2) * 0.1} className={gi === PACKING.length - 1 && PACKING.length % 2 ? "md:col-span-2" : ""}>
              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gold/25">
                <button type="button" onClick={() => toggleGroup(g.cat)} aria-expanded={!isCollapsed} className="flex min-h-12 w-full items-center gap-3 text-left">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-lantern"><Icon size={20} /></span>
                  <span className="flex-1 font-display text-lg font-bold text-navy">{g.cat}</span>
                  <span className="text-xs font-semibold text-teal">{groupDone}/{g.items.length}</span>
                  <ChevronDown size={20} className={`text-navy/60 transition ${isCollapsed ? "" : "rotate-180"}`} />
                </button>
                <AnimatePresence initial={false}>
                  {!isCollapsed && (
                    <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      {g.items.map((it) => {
                        const key = `${g.cat}:${it}`;
                        const on = Boolean(checked[key]);
                        return (
                          <li key={key}>
                            <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-2 py-1 hover:bg-cream">
                              <input type="checkbox" checked={on} onChange={() => toggle(key)} className="peer sr-only" />
                              <span className={`flex h-6 w-6 flex-none items-center justify-center rounded-md border-2 transition peer-focus-visible:ring-4 peer-focus-visible:ring-teal/40 ${on ? "border-teal bg-teal text-white" : "border-gold bg-white"}`}>
                                {on && <Check size={16} strokeWidth={3} />}
                              </span>
                              <span className={`text-sm transition ${on ? "text-navy/40 line-through" : "text-navy"}`}>{it}</span>
                            </label>
                          </li>
                        );
                      })}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
