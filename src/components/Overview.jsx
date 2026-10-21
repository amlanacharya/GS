import { useEffect, useRef } from "react";
import L from "leaflet";
import { CalendarDays, MapPin, HeartHandshake, Hotel, Wallet } from "lucide-react";
import Reveal, { SectionTitle } from "./Reveal.jsx";
import { PLACES, TRIP } from "../data/trip.js";

function TripMap() {
  const ref = useRef(null);

  useEffect(() => {
    const map = L.map(ref.current, { scrollWheelZoom: false, zoomControl: true }).setView([16.0, 108.2], 9);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      maxZoom: 18,
      attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
    }).addTo(map);

    const icon = L.divIcon({ className: "", html: '<div class="pin"></div>', iconSize: [28, 28], iconAnchor: [14, 28], popupAnchor: [0, -26] });

    PLACES.forEach((p) => {
      L.marker([p.lat, p.lng], { icon, title: p.name })
        .addTo(map)
        .bindPopup(`<strong>${p.name}</strong><br/>${p.note}`);
    });

    L.polyline(
      [PLACES[0], PLACES[3], PLACES[2], PLACES[0], PLACES[1]].map((p) => [p.lat, p.lng]),
      { color: "#C41E3A", weight: 3, dashArray: "6 8", opacity: 0.8 }
    ).addTo(map);

    const timer = setTimeout(() => map.invalidateSize(), 300);
    return () => {
      clearTimeout(timer);
      map.remove();
    };
  }, []);

  return <div ref={ref} className="h-72 w-full rounded-3xl shadow-lift sm:h-96" role="application" aria-label="Map of Da Nang, Hoi An and Hai Van Pass" />;
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
                <li key={h.name} className="py-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.query)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline-offset-4 hover:text-gold hover:underline"
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
