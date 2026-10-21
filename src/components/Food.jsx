import { MapPin } from "lucide-react";
import Photo from "./Photo.jsx";
import Reveal, { SectionTitle } from "./Reveal.jsx";
import { FOOD } from "../data/trip.js";

const FEATURED = 3;

export default function Food() {
  const featured = FOOD.slice(0, FEATURED);
  const rest = FOOD.slice(FEATURED);

  return (
    <section id="food" className="bg-cream px-4 py-16 sm:py-24">
      <SectionTitle align="left" title="Food & Drink Guide" rule={false} />

      <div className="mx-auto grid max-w-6xl gap-x-6 gap-y-10 md:grid-cols-3">
        {featured.map((f, i) => (
          <Reveal key={f.name} delay={i * 0.08}>
            <article>
              <Photo id={f.photo} alt={f.name} kind="food" className="h-64 w-full rounded-3xl sm:h-80" />
              <h3 className="mt-4 font-display text-2xl font-bold text-navy">{f.name}</h3>
              <p className="mt-1 max-w-prose text-base leading-relaxed text-navy/80">{f.desc}</p>
              <p className="mt-2 inline-flex items-start gap-1.5 text-sm font-semibold text-ember">
                <MapPin size={15} className="mt-0.5 flex-none" /> {f.where}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <h3 className="mx-auto mb-2 mt-16 max-w-6xl font-display text-xl font-bold text-navy sm:mt-20">Also on the list</h3>
      <ul className="mx-auto grid max-w-6xl gap-x-12 border-t border-gold/40 md:grid-cols-2">
        {rest.map((f) => (
          <li key={f.name} className="flex gap-4 border-b border-gold/40 py-4">
            <Photo id={f.photo} alt={f.name} kind="food" className="h-20 w-20 flex-none rounded-2xl" />
            <div className="min-w-0">
              <h4 className="font-display text-lg font-bold leading-tight text-navy">{f.name}</h4>
              <p className="mt-0.5 text-sm leading-snug text-navy/80">{f.desc}</p>
              <p className="mt-1 inline-flex items-start gap-1.5 text-sm font-semibold text-ember">
                <MapPin size={14} className="mt-0.5 flex-none" /> {f.where}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
