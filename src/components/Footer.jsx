import { Heart } from "lucide-react";
import { TRIP } from "../data/trip.js";
import { CREDITS } from "../data/images.js";
import { PHOTO_SEARCH } from "../data/photoSearch.js";

function VietnamFlag() {
  return (
    <svg viewBox="0 0 30 20" width="36" height="24" className="rounded-sm shadow" role="img" aria-label="Flag of Vietnam">
      <rect width="30" height="20" fill="#DA251D" />
      <polygon fill="#FFFF00" points="15,4 16.76,9.42 22.46,9.42 17.85,12.77 19.61,18.19 15,14.84 10.39,18.19 12.15,12.77 7.54,9.42 13.24,9.42" />
    </svg>
  );
}

export default function Footer() {
  const credited = Object.entries(CREDITS);

  return (
    <footer className="bg-navy px-4 py-16 text-center text-cream">
      <p className="font-script text-3xl italic text-gold sm:text-5xl">Bon voyage!</p>
      <p className="mx-auto mt-3 max-w-md text-cream/80">Pack light, hold hands, and let Vietnam do the rest.</p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <VietnamFlag />
        <span className="text-sm tracking-wide">{TRIP.dateLabel}</span>
      </div>
      <p className="mt-8 inline-flex items-center gap-2 text-sm">
        Made with <Heart size={16} className="text-lantern" fill="currentColor" aria-label="love" /> for {TRIP.first} &amp; {TRIP.second}
      </p>

      {credited.length > 0 && (
        <details className="mx-auto mt-8 max-w-2xl text-left text-xs text-cream/60">
          <summary className="min-h-11 cursor-pointer text-center leading-[2.75rem]">Photo credits</summary>
          <ul className="space-y-1 pb-2">
            {credited.map(([id, text]) => (
              <li key={id}>
                <span className="text-cream/80">{PHOTO_SEARCH[id] || id}:</span> {text}
              </li>
            ))}
          </ul>
        </details>
      )}
    </footer>
  );
}
