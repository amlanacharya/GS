import { useId } from "react";
import { hasDishScene, renderDish } from "./FoodScene.jsx";

const SKIES = {
  dawn: ["#3b2a5e", "#c41e3a", "#ff6b35", "#ffd9a0"],
  night: ["#0d0d1f", "#1a1a2e", "#3a1c4a", "#c41e3a"],
  day: ["#5fb7d4", "#8fd3e0", "#ffe9c7", "#fff8f0"],
  dusk: ["#1a1a2e", "#7a2548", "#ff6b35", "#ffd9a0"],
  fog: ["#4b6d7a", "#8fb0b5", "#cfe2dc", "#fff8f0"],
};

function Sky({ id, palette }) {
  const [a, b, c, d] = SKIES[palette];
  return (
    <>
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="0.45" stopColor={b} />
          <stop offset="0.8" stopColor={c} />
          <stop offset="1" stopColor={d} />
        </linearGradient>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <rect width="400" height="300" fill={`url(#${id}-sky)`} />
    </>
  );
}

const Sea = ({ y = 190, color = "#2ec4b6" }) => (
  <g>
    <rect y={y} width="400" height={300 - y} fill={color} />
    {[0, 1, 2, 3, 4].map((i) => (
      <path
        key={i}
        d={`M0 ${y + 14 + i * 18} Q 50 ${y + 8 + i * 18} 100 ${y + 14 + i * 18} T 200 ${y + 14 + i * 18} T 300 ${y + 14 + i * 18} T 400 ${y + 14 + i * 18}`}
        stroke="#fff8f0"
        strokeOpacity={0.35 - i * 0.05}
        strokeWidth="1.5"
        fill="none"
      />
    ))}
  </g>
);

const Sun = ({ cx = 200, cy = 190, r = 46, color = "#ffe2a8" }) => (
  <g>
    <circle cx={cx} cy={cy} r={r + 22} fill={color} opacity="0.25" />
    <circle cx={cx} cy={cy} r={r} fill={color} />
  </g>
);

const Lantern = ({ x, y, s = 1, color = "#c41e3a", id }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <line x1="0" y1="-60" x2="0" y2="-14" stroke="#d4a574" strokeWidth="1.2" />
    <ellipse cx="0" cy="0" rx="13" ry="16" fill={color} filter={`url(#${id}-glow)`} opacity="0.7" />
    <ellipse cx="0" cy="0" rx="12" ry="15" fill={color} stroke="#d4a574" strokeWidth="1.2" />
    <ellipse cx="0" cy="0" rx="5" ry="15" fill="#ffd9a0" opacity="0.5" />
    <rect x="-6" y="-17" width="12" height="3" fill="#d4a574" />
    <rect x="-6" y="14" width="12" height="3" fill="#d4a574" />
    <line x1="0" y1="17" x2="0" y2="26" stroke="#d4a574" strokeWidth="1.4" />
  </g>
);

const scenes = {
  beach: (id) => (
    <>
      <Sky id={id} palette="dawn" />
      <Sun cy={196} />
      <Sea y={196} />
      <path d="M0 262 Q 120 240 230 258 T 400 250 L400 300 L0 300Z" fill="#f2d3a6" />
      <path d="M60 300 Q 90 250 120 300Z" fill="#1a1a2e" opacity="0.8" />
    </>
  ),
  dragon: (id) => (
    <>
      <Sky id={id} palette="night" />
      <Sea y={210} color="#16213e" />
      <path d="M0 200 Q 100 120 200 160 T 400 130" stroke="#d4a574" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M0 200 Q 100 120 200 160 T 400 130" stroke="#c41e3a" strokeWidth="3" fill="none" strokeDasharray="14 10" />
      <circle cx="372" cy="124" r="14" fill="#c41e3a" />
      <g filter={`url(#${id}-glow)`}>
        <circle cx="392" cy="122" r="12" fill="#ff6b35" />
        <circle cx="388" cy="112" r="8" fill="#ffd9a0" />
      </g>
      {[40, 110, 170, 250, 320].map((x, i) => (
        <rect key={x} x={x} y={228 + (i % 2) * 6} width="40" height="3" rx="1.5" fill="#ff6b35" opacity="0.5" />
      ))}
    </>
  ),
  golden: (id) => (
    <>
      <Sky id={id} palette="fog" />
      <path d="M0 220 Q 90 150 180 200 T 400 170 L400 300 L0 300Z" fill="#2f7d5b" opacity="0.85" />
      <path d="M0 250 Q 120 190 240 240 T 400 220 L400 300 L0 300Z" fill="#1f5c43" />
      <path d="M30 230 Q 200 120 370 230" stroke="#d4a574" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M30 230 Q 200 120 370 230" stroke="#ffe2a8" strokeWidth="2" fill="none" />
      <path d="M40 300 L40 240 Q 28 226 40 214 L82 236 Q 100 262 80 300Z" fill="#8c8478" />
      <path d="M360 300 L360 240 Q 372 226 360 214 L318 236 Q 300 262 320 300Z" fill="#8c8478" />
    </>
  ),
  pass: (id) => (
    <>
      <Sky id={id} palette="day" />
      <Sun cx={310} cy={90} r={26} />
      <Sea y={200} />
      <path d="M0 210 L80 120 L160 190 L240 100 L330 190 L400 150 L400 300 L0 300Z" fill="#3d7a5a" />
      <path d="M0 250 L100 190 L220 230 L400 200 L400 300 L0 300Z" fill="#2a5c44" />
      <path d="M200 300 Q 120 270 220 245 T 260 215" stroke="#e8dcc6" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M200 300 Q 120 270 220 245 T 260 215" stroke="#8c8478" strokeWidth="1" strokeDasharray="6 6" fill="none" />
    </>
  ),
  marble: (id) => (
    <>
      <Sky id={id} palette="dawn" />
      <path d="M20 240 L90 90 L130 150 L170 70 L230 240Z" fill="#cfc4b4" />
      <path d="M170 240 L260 110 L300 170 L350 100 L400 240Z" fill="#b5a897" />
      <path d="M140 300 Q 140 200 200 200 Q 260 200 260 300Z" fill="#1a1a2e" />
      <path d="M200 200 L170 300 L230 300Z" fill="#ffe2a8" opacity="0.4" />
      <rect y="262" width="400" height="38" fill="#4a3b2e" />
      <g fill="#c41e3a">
        <rect x="108" y="76" width="26" height="12" />
        <path d="M104 76 L121 64 L138 76Z" />
      </g>
    </>
  ),
  lanterns: (id) => (
    <>
      <Sky id={id} palette="night" />
      <line x1="0" y1="40" x2="400" y2="60" stroke="#d4a574" strokeWidth="1.5" />
      {[30, 90, 150, 215, 275, 335, 385].map((x, i) => (
        <Lantern key={x} x={x} y={90 + (i % 3) * 32} s={0.9 + (i % 2) * 0.35} color={i % 3 === 0 ? "#ff6b35" : i % 3 === 1 ? "#c41e3a" : "#d4a574"} id={id} />
      ))}
      <rect y="250" width="400" height="50" fill="#16213e" />
    </>
  ),
  boat: (id) => (
    <>
      <Sky id={id} palette="dusk" />
      <rect y="160" width="400" height="140" fill="#0d1a2e" />
      <Lantern x={70} y={90} id={id} s={0.8} />
      <Lantern x={330} y={80} id={id} s={0.9} color="#ff6b35" />
      <path d="M110 215 L290 215 L260 245 L140 245Z" fill="#8c3a1e" stroke="#d4a574" strokeWidth="2" />
      <path d="M170 215 Q 200 170 230 215Z" fill="#c41e3a" />
      {[40, 80, 130, 270, 320, 360].map((x, i) => (
        <g key={x} filter={`url(#${id}-glow)`}>
          <circle cx={x} cy={262 + (i % 3) * 8} r="6" fill="#ffd9a0" />
        </g>
      ))}
    </>
  ),
  pagoda: (id) => (
    <>
      <Sky id={id} palette="dawn" />
      <Sea y={230} />
      <path d="M0 250 Q 100 190 200 230 T 400 220 L400 300 L0 300Z" fill="#2f7d5b" />
      <path d="M200 120 Q 178 130 182 170 L170 230 L230 230 L218 170 Q 222 130 200 120Z" fill="#fff8f0" />
      <circle cx="200" cy="104" r="14" fill="#fff8f0" />
      <circle cx="200" cy="104" r="26" fill="none" stroke="#d4a574" strokeWidth="2" opacity="0.8" />
      <rect x="176" y="230" width="48" height="10" fill="#d4a574" />
    </>
  ),
  town: (id) => (
    <>
      <Sky id={id} palette="day" />
      {[
        [10, 150, 90, "#f2c14e"],
        [100, 130, 100, "#e8a838"],
        [200, 155, 90, "#f2c14e"],
        [290, 135, 110, "#e8a838"],
      ].map(([x, y, w, c]) => (
        <g key={x}>
          <rect x={x} y={y} width={w} height={300 - y} fill={c} />
          <path d={`M${x - 6} ${y} L${x + w / 2} ${y - 22} L${x + w + 6} ${y}Z`} fill="#8c3a1e" />
          <rect x={x + 12} y={y + 22} width="18" height="28" fill="#1a1a2e" opacity="0.7" />
          <rect x={x + w - 30} y={y + 22} width="18" height="28" fill="#1a1a2e" opacity="0.7" />
        </g>
      ))}
      <Lantern x={60} y={120} s={0.7} id={id} />
      <Lantern x={250} y={110} s={0.7} id={id} color="#ff6b35" />
      <rect y="268" width="400" height="32" fill="#6b4f3a" />
    </>
  ),
  food: (id) => (
    <>
      <rect width="400" height="300" fill="#ffe9c7" />
      <rect width="400" height="300" fill={`url(#${id}-bg)`} />
      <defs>
        <radialGradient id={`${id}-bg`} cx="0.5" cy="0.5" r="0.7">
          <stop offset="0" stopColor="#fff8f0" />
          <stop offset="1" stopColor="#f2c79a" />
        </radialGradient>
        <filter id={`${id}-glow`}>
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <ellipse cx="200" cy="165" rx="120" ry="36" fill="#1a1a2e" opacity="0.15" />
      <path d="M90 150 Q 200 150 310 150 Q 300 230 200 236 Q 100 230 90 150Z" fill="#c41e3a" />
      <ellipse cx="200" cy="150" rx="110" ry="22" fill="#f6d18b" />
      <path d="M110 150 Q 150 138 190 152 T 290 150" stroke="#e8a838" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="170" cy="146" r="7" fill="#2ec4b6" />
      <circle cx="230" cy="148" r="7" fill="#ff6b35" />
      <path d="M180 120 Q 170 100 185 85 M210 120 Q 200 100 215 80" stroke="#d4a574" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
      <line x1="250" y1="110" x2="330" y2="60" stroke="#8c3a1e" strokeWidth="4" strokeLinecap="round" />
      <line x1="262" y1="118" x2="340" y2="72" stroke="#8c3a1e" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
};

export default function Scene({ kind = "beach", dish, className = "" }) {
  const id = useId().replace(/:/g, "");
  const render = scenes[kind] || scenes.beach;
  const dishScene = kind === "food" && hasDishScene(dish);
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-hidden="true"
    >
      {dishScene ? (
        <>
          <rect width="400" height="300" fill="#ffe9c7" />
          <rect width="400" height="300" fill="#fff8f0" opacity="0.55" />
          {renderDish(dish)}
        </>
      ) : (
        render(id)
      )}
    </svg>
  );
}
