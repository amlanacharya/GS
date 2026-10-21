import { Hotel, Wallet } from "lucide-react";
import Reveal, { SectionTitle } from "./Reveal.jsx";
import { PLACES, TRIP } from "../data/trip.js";

function TripMap() {
  const points = [
    { ...PLACES[0], x: 58, y: 54 },
    { ...PLACES[3], x: 28, y: 64 },
    { ...PLACES[2], x: 68, y: 25 },
    { ...PLACES[1], x: 49, y: 84 },
  ];
  const route = [points[0], points[1], points[2], points[0], points[3]];

  return (
    <figure className="overflow-hidden rounded-3xl bg-[#cfe9ee] shadow-lift">
      <svg viewBox="0 0 100 100" className="block h-72 w-full overflow-visible sm:h-96" role="img" aria-labelledby="route-map-title route-map-desc">
        <title id="route-map-title">Vietnam honeymoon route</title>
        <desc id="route-map-desc">A static route connecting Da Nang, Ba Na Hills, Hai Van Pass, and Hoi An.</desc>
        <rect x="-400" width="900" height="100" fill="#cfe9ee" />
        <path d="M-400 14H0C19 7 30 17 42 11s18-11 29-5 18 2 29-6H500V100H-400Z" fill="#e9f2e0" />
        <path d="M-400 40H4c16-11 27-3 38-13s28-12 54-1H500" fill="none" stroke="#b8d8da" strokeWidth="1.5" opacity=".8" />
        <path d="M-400 75H6c18-8 29 5 44-4s30-4 45-16H500" fill="none" stroke="#b8d8da" strokeWidth="1.5" opacity=".8" />
        <polyline points={route.map((point) => `${point.x},${point.y}`).join(" ")} fill="none" stroke="#c41e3a" strokeWidth="1.6" strokeDasharray="3 2" strokeLinecap="round" strokeLinejoin="round" />
        {points.map((point, index) => (
          <g key={point.name}>
            <circle cx={point.x} cy={point.y} r="4.4" fill="#fff8f0" opacity=".94" />
            <circle cx={point.x} cy={point.y} r="2.5" fill="#c41e3a" />
            <text x={index === 0 ? point.x + 6.5 : point.x} y={index === 0 ? point.y + 1.8 : point.y + (index === 2 ? -6.5 : 9.5)} textAnchor={index === 0 ? "start" : "middle"} fill="#1a1a2e" fontSize="5" fontWeight="700" stroke="#cfe9ee" strokeWidth="1.2" paintOrder="stroke">
              {point.name}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="flex items-center justify-between gap-3 bg-white/80 px-5 py-3 text-sm text-navy/75">
        <span>Da Nang route, drawn for your journey</span>
        <span className="whitespace-nowrap font-semibold text-tealInk">Not to scale</span>
      </figcaption>
    </figure>
  );
}

const FACTS = [
  ["Length", "5 days, 4 nights"],
  ["Stops", "Da Nang, Hoi An, Hai Van Pass"],
  ["Mood", "Slow mornings, golden evenings"],
];

export default function Overview() {
  return (
    <section id="overview" className="bg-cream px-4 py-20 sm:py-28">
      <SectionTitle eyebrow="The plan at a glance" title="Your Journey" />

      <Reveal className="mx-auto max-w-6xl">
        <dl className="grid gap-x-8 gap-y-4 border-y border-gold/40 py-5 sm:grid-cols-3">
          {FACTS.map(([label, value]) => (
            <div key={label} className="text-center sm:text-left">
              <dt className="text-xs font-semibold uppercase tracking-widest text-tealInk">{label}</dt>
              <dd className="mt-1 font-display text-lg font-bold text-navy sm:text-xl">{value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal className="mx-auto mt-10 max-w-6xl">
        <TripMap />
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-[1fr_auto]">
        <Reveal>
          <div className="h-full rounded-3xl bg-navy p-6 text-cream sm:p-7">
            <div className="flex items-center gap-2 font-display text-xl text-gold">
              <Hotel size={22} /> Where you will stay
            </div>
            <ul className="mt-3 grid gap-x-8 divide-y divide-white/10 md:grid-cols-3 md:divide-y-0">
              {TRIP.hotels.map((h) => (
                <li key={h.name} className="py-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.query)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 font-semibold leading-snug underline-offset-4 hover:text-gold hover:underline"
                  >
                    {h.name}
                  </a>
                  <p className="text-sm text-cream/70">{h.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-center rounded-3xl bg-gradient-to-br from-lantern to-ember p-7 text-center text-cream lg:min-w-64">
            <Wallet className="mx-auto" size={28} />
            <p className="mt-3 text-xs uppercase tracking-widest text-cream">Budget for two</p>
            <p className="mt-1 font-display text-2xl font-bold">{TRIP.budget}</p>
            <p className="mt-1 font-script text-lg italic">{TRIP.budgetNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
