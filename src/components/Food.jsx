import { MapPin } from "lucide-react";
import Photo from "./Photo.jsx";
import Reveal, { SectionTitle } from "./Reveal.jsx";
import { FOOD } from "../data/trip.js";

export default function Food() {
  return (
    <section id="food" className="bg-cream px-4 py-20 sm:py-28">
      <SectionTitle eyebrow="Taste your way through Vietnam" title="Food & Drink Guide" />

      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FOOD.map((f, i) => (
          <Reveal key={f.name} delay={(i % 3) * 0.08}>
            <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gold/25 transition duration-300 hover:-translate-y-2 hover:shadow-lift">
              <Photo id={f.photo} alt={f.name} kind="food" className="h-44 w-full" />
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-navy">{f.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy/75">{f.desc}</p>
                <p className="mt-3 inline-flex items-start gap-1.5 text-sm font-medium text-lantern">
                  <MapPin size={15} className="mt-0.5 flex-none" /> {f.where}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
