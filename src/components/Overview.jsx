import { CalendarDays, MapPin, HeartHandshake, Hotel, Wallet } from "lucide-react";
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
      <svg viewBox="0 0 100 100" className="block h-72 w-full sm:h-96" role="img" aria-labelledby="route-map-title route-map-desc">
        <title id="route-map-title">Vietnam honeymoon route</title>
        <desc id="route-map-desc">A static route connecting Da Nang, Ba Na Hills, Hai Van Pass, and Hoi An.</desc>
        <rect width="100" height="100" fill="#cfe9ee" />
        <path d="M0 14C19 7 30 17 42 11s18-11 29-5 18 2 29-6v100H0Z" fill="#e9f2e0" />
        <path d="M4 40c16-11 27-3 38-13s28-12 54-1" fill="none" stroke="#b8d8da" strokeWidth="1.5" opacity=".8" />
        <path d="M6 75c18-8 29 5 44-4s30-4 45-16" fill="none" stroke="#b8d8da" strokeWidth="1.5" opacity=".8" />
        <polyline points={route.map((point) => `${point.x},${point.y}`).join(" ")} fill="none" stroke="#c41e3a" strokeWidth="1.6" strokeDasharray="3 2" strokeLinecap="round" strokeLinejoin="round" />
        {points.map((point, index) => (
          <g key={point.name}>
            <circle cx={point.x} cy={point.y} r="4.4" fill="#fff8f0" opacity=".94" />
            <circle cx={point.x} cy={point.y} r="2.5" fill="#c41e3a" />
            <text x={point.x} y={point.y + (index === 2 ? -6 : 8)} textAnchor="middle" fill="#1a1a2e" fontSize="4" fontWeight="700">
              {point.name}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="flex items-center justify-between gap-3 bg-white/80 px-5 py-3 text-sm text-navy/75">
        <span>Da Nang route, drawn for your journey</span>
        <span className="whitespace-nowrap font-semibold text-teal">Not to scale</span>
      </figcaption>
    </figure>
  );
}

const CARDS = [
  { icon: CalendarDays, label: "Dates", value: TRIP.dateLabel, sub: "5 days, 4 nights" },
  { icon: MapPin, label: "Destinations", value: "Da Nang, Hoi An, Hai Van Pass", sub: "Ba Na Hills and Son Tra too" },
  { icon: HeartHandshake, label: "Vibe", value: "Honeymoon | Romance | Adventure", sub: "Slow mornings, golden evenings" },
];

export default function Overview() {
  return (
    <section id="overview" className="bg-cream px-4 py-20 sm:py-28">
      <SectionTitle eyebrow="The plan at a glance" title="Your Journey" />

      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {CARDS.map(({ icon: Icon, label, value, sub }, i) => (
          <Reveal key={label} delay={i * 0.12}>
            <div className="h-full rounded-3xl border border-gold/30 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lift">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-lantern">
                <Icon size={26} />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-teal">{label}</p>
              <p className="mt-1 font-display text-xl font-bold text-navy">{value}</p>
              <p className="mt-1 font-script text-lg italic text-navy/70">{sub}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto mt-10 max-w-6xl">
        <TripMap />
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <div className="h-full rounded-3xl bg-navy p-7 text-cream">
            <div className="flex items-center gap-2 font-display text-xl text-gold">
              <Hotel size={22} /> Where you will stay
            </div>
            <ul className="mt-4 divide-y divide-white/10">
              {TRIP.hotels.map((h) => (
                <li key={h.name} className="py-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.query)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:text-gold hover:underline"
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
          <div className="flex h-full flex-col justify-center rounded-3xl bg-gradient-to-br from-lantern to-sunset p-7 text-center text-cream">
            <Wallet className="mx-auto" size={28} />
            <p className="mt-3 text-xs uppercase tracking-widest text-cream/80">Budget for two</p>
            <p className="mt-1 font-display text-2xl font-bold">{TRIP.budget}</p>
            <p className="mt-1 font-script text-lg italic">{TRIP.budgetNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
