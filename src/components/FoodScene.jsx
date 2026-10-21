// One illustration per dish, shown until a real photo is dropped into public/photos/<id>.jpg.
// Keys match the `photo` ids in data/trip.js and data/images.js.

const Steam = ({ x = 200 }) => (
  <path
    d={`M${x - 20} 112 Q ${x - 30} 92 ${x - 17} 76 M${x + 6} 112 Q ${x - 4} 90 ${x + 9} 72 M${x + 30} 112 Q ${x + 20} 94 ${x + 32} 80`}
    stroke="#d4a574"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
    opacity="0.6"
  />
);

const Chopsticks = () => (
  <>
    <line x1="262" y1="118" x2="346" y2="64" stroke="#8c3a1e" strokeWidth="4" strokeLinecap="round" />
    <line x1="274" y1="126" x2="354" y2="78" stroke="#8c3a1e" strokeWidth="4" strokeLinecap="round" />
  </>
);

function NoodleBowl({ bowl, broth, noodle, noodleWidth = 5, tops, steam = true }) {
  return (
    <>
      <ellipse cx="200" cy="232" rx="118" ry="14" fill="#1a1a2e" opacity="0.14" />
      <path d="M86 150 H314 Q306 232 200 238 Q94 232 86 150Z" fill={bowl} />
      <path d="M96 190 H304" stroke="#fff8f0" strokeOpacity="0.35" strokeWidth="3" />
      <ellipse cx="200" cy="150" rx="114" ry="24" fill={broth} />
      <g stroke={noodle} strokeWidth={noodleWidth} fill="none" strokeLinecap="round">
        <path d="M110 150 Q 150 134 190 152 T 290 148" />
        <path d="M116 158 Q 160 144 200 160 T 288 156" />
        <path d="M130 144 Q 170 130 210 146 T 276 142" />
      </g>
      {tops.map((t, i) => (
        <ellipse key={i} cx={t.x} cy={t.y} rx={t.rx} ry={t.ry} fill={t.fill} transform={t.rot ? `rotate(${t.rot} ${t.x} ${t.y})` : undefined} />
      ))}
      {steam && <Steam />}
      <Chopsticks />
    </>
  );
}

const dishes = {
  // Cao lau: thick, brown-tinged noodles, sliced pork, greens, no soup
  "cao-lau": () => (
    <NoodleBowl
      bowl="#2f5d62"
      broth="#e9d3a3"
      noodle="#a9794a"
      noodleWidth={8}
      tops={[
        { x: 160, y: 143, rx: 22, ry: 6, fill: "#c4604a", rot: -12 },
        { x: 210, y: 140, rx: 22, ry: 6, fill: "#d98a6a", rot: 8 },
        { x: 250, y: 148, rx: 14, ry: 6, fill: "#3f9a5a" },
        { x: 130, y: 150, rx: 12, ry: 5, fill: "#6fbf73" },
      ]}
      steam={false}
    />
  ),
  // Mi quang: turmeric-yellow noodles, shrimp, peanuts, quail egg
  "mi-quang": () => (
    <NoodleBowl
      bowl="#c41e3a"
      broth="#f0b429"
      noodle="#ffd24d"
      noodleWidth={7}
      tops={[
        { x: 170, y: 144, rx: 18, ry: 8, fill: "#ff6b35", rot: -20 },
        { x: 215, y: 140, rx: 14, ry: 10, fill: "#fff8f0" },
        { x: 215, y: 140, rx: 6, ry: 5, fill: "#f0b429" },
        { x: 252, y: 150, rx: 5, ry: 4, fill: "#8c3a1e" },
        { x: 262, y: 144, rx: 5, ry: 4, fill: "#8c3a1e" },
        { x: 135, y: 150, rx: 12, ry: 5, fill: "#3f9a5a" },
      ]}
    />
  ),
  // Bun cha: grilled patties in dipping broth, vermicelli plate alongside
  "bun-cha": () => (
    <>
      <ellipse cx="200" cy="232" rx="130" ry="12" fill="#1a1a2e" opacity="0.14" />
      <path d="M62 160 H210 Q204 226 136 230 Q68 226 62 160Z" fill="#8c3a1e" />
      <ellipse cx="136" cy="160" rx="74" ry="16" fill="#d9903a" />
      <circle cx="108" cy="158" r="17" fill="#6b3a1e" />
      <circle cx="144" cy="162" r="17" fill="#7d4524" />
      <circle cx="172" cy="156" r="12" fill="#6b3a1e" />
      <ellipse cx="122" cy="152" rx="7" ry="3" fill="#3f9a5a" />
      <ellipse cx="300" cy="190" rx="86" ry="28" fill="#fff8f0" />
      <ellipse cx="300" cy="184" rx="68" ry="20" fill="#f6efe2" />
      <g stroke="#e8dcc6" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M250 184 Q 280 170 310 186 T 350 180" />
        <path d="M256 192 Q 290 178 320 194" />
      </g>
      <ellipse cx="318" cy="172" rx="12" ry="5" fill="#3f9a5a" />
      <ellipse cx="282" cy="176" rx="10" ry="4" fill="#6fbf73" />
      <Steam x={130} />
    </>
  ),
  // Banh xeo: folded turmeric pancake with herbs
  "banh-xeo": () => (
    <>
      <ellipse cx="200" cy="228" rx="140" ry="16" fill="#1a1a2e" opacity="0.14" />
      <ellipse cx="200" cy="196" rx="136" ry="42" fill="#fff8f0" />
      <path d="M92 196 Q 200 98 308 196 Q 200 220 92 196Z" fill="#f0b429" />
      <path d="M92 196 Q 200 98 308 196" stroke="#d98a1a" strokeWidth="5" fill="none" strokeLinecap="round" />
      <g fill="#d98a1a" opacity="0.7">
        <circle cx="150" cy="178" r="4" />
        <circle cx="205" cy="160" r="4" />
        <circle cx="250" cy="176" r="4" />
        <circle cx="190" cy="190" r="4" />
      </g>
      <path d="M270 190 Q 305 170 330 192 Q 300 214 270 190Z" fill="#3f9a5a" />
      <path d="M72 200 Q 100 178 128 198 Q 100 218 72 200Z" fill="#6fbf73" />
      <ellipse cx="240" cy="196" rx="14" ry="8" fill="#ff6b35" transform="rotate(-20 240 196)" />
    </>
  ),
  // Banh mi: baguette, pate, pork, pickles, chilli
  "banh-mi": () => (
    <>
      <ellipse cx="200" cy="232" rx="140" ry="12" fill="#1a1a2e" opacity="0.14" />
      <g transform="rotate(-14 200 170)">
        <path d="M60 170 Q 60 128 120 124 H 280 Q 340 128 340 170 Q 340 192 300 194 H 100 Q 60 192 60 170Z" fill="#d9a15a" />
        <path d="M100 138 L112 156 M140 132 L152 152 M184 130 L196 150 M228 130 L240 150 M272 134 L284 154" stroke="#a8702e" strokeWidth="5" strokeLinecap="round" />
        <path d="M82 172 H 318 Q 330 184 306 194 H 94 Q 70 184 82 172Z" fill="#8c3a1e" opacity="0.3" />
        <path d="M84 170 Q 120 156 160 170 T 240 170 T 316 168" stroke="#3f9a5a" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M94 176 Q 140 168 190 178 T 306 176" stroke="#f4a3b0" strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M100 182 H 300" stroke="#c4604a" strokeWidth="6" strokeLinecap="round" />
        <circle cx="150" cy="168" r="5" fill="#c41e3a" />
        <circle cx="236" cy="170" r="5" fill="#c41e3a" />
      </g>
    </>
  ),
  // Egg coffee: tall cup, golden foam over dark coffee
  "egg-coffee": () => (
    <>
      <ellipse cx="200" cy="240" rx="110" ry="14" fill="#1a1a2e" opacity="0.14" />
      <ellipse cx="200" cy="224" rx="104" ry="20" fill="#fff8f0" />
      <path d="M140 110 H 260 Q 258 214 200 218 Q 142 214 140 110Z" fill="#fff8f0" stroke="#e5d3b8" strokeWidth="3" />
      <path d="M268 130 Q 312 126 306 170 Q 300 196 262 192" stroke="#fff8f0" strokeWidth="12" fill="none" strokeLinecap="round" />
      <path d="M144 112 H 256 Q 255 150 200 154 Q 145 150 144 112Z" fill="#f6d77a" />
      <path d="M146 146 Q 200 160 254 146 Q 252 212 200 214 Q 148 212 146 146Z" fill="#4a2a18" />
      <ellipse cx="200" cy="112" rx="56" ry="9" fill="#fbe7a0" />
      <line x1="238" y1="214" x2="318" y2="226" stroke="#c0c0c8" strokeWidth="5" strokeLinecap="round" />
      <Steam />
    </>
  ),
  // Vietnamese coffee: phin filter on a glass, milk layer under dark coffee
  "viet-coffee": () => (
    <>
      <ellipse cx="200" cy="244" rx="90" ry="12" fill="#1a1a2e" opacity="0.14" />
      <path d="M150 168 H 250 L 242 238 Q 200 246 158 238Z" fill="#fff8f0" opacity="0.9" stroke="#e5d3b8" strokeWidth="3" />
      <path d="M156 214 H 244 L 241 236 Q 200 243 159 236Z" fill="#f2e2c0" />
      <path d="M154 190 H 246 L 244 214 H 156Z" fill="#3a2010" />
      <path d="M140 140 H 260 L 250 166 H 150Z" fill="#b8bcc4" />
      <rect x="132" y="130" width="136" height="12" rx="5" fill="#d0d4da" />
      <rect x="176" y="106" width="48" height="26" rx="6" fill="#b8bcc4" />
      <circle cx="200" cy="100" r="7" fill="#8e939c" />
      <path d="M196 168 V 188" stroke="#3a2010" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 7" />
    </>
  ),
  // Seafood: red prawns and a crab on a platter, lemon wedge
  seafood: () => (
    <>
      <ellipse cx="200" cy="236" rx="150" ry="14" fill="#1a1a2e" opacity="0.14" />
      <ellipse cx="200" cy="190" rx="150" ry="52" fill="#fff8f0" />
      <ellipse cx="200" cy="190" rx="124" ry="38" fill="#2ec4b6" opacity="0.18" />
      <ellipse cx="190" cy="176" rx="46" ry="30" fill="#e0452f" />
      <path d="M146 166 Q 120 150 128 128 M150 176 Q 110 176 104 152 M234 166 Q 262 150 254 128 M230 176 Q 270 176 276 152" stroke="#e0452f" strokeWidth="9" fill="none" strokeLinecap="round" />
      <circle cx="176" cy="156" r="5" fill="#fff8f0" />
      <circle cx="202" cy="156" r="5" fill="#fff8f0" />
      <path d="M262 200 Q 300 160 330 190 Q 336 206 316 210 Q 290 206 278 218" stroke="#ff7a4d" strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d="M326 188 Q 346 176 352 192" stroke="#ff7a4d" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M96 206 A 24 24 0 0 1 144 206Z" fill="#f6d84a" />
      <path d="M104 204 A 16 16 0 0 1 136 204Z" fill="#fbeb8a" />
    </>
  ),
  // White rose dumplings: pleated, translucent, in a ring
  "white-rose": () => (
    <>
      <ellipse cx="200" cy="236" rx="140" ry="14" fill="#1a1a2e" opacity="0.14" />
      <ellipse cx="200" cy="190" rx="140" ry="48" fill="#2f5d62" />
      <ellipse cx="200" cy="186" rx="124" ry="38" fill="#fff8f0" />
      {[
        [140, 184],
        [200, 172],
        [260, 184],
        [170, 206],
        [232, 206],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="24" fill="#fdfbf6" stroke="#e5d3b8" strokeWidth="2" />
          <circle cx={x} cy={y} r="14" fill="none" stroke="#e5d3b8" strokeWidth="2" />
          <circle cx={x} cy={y} r="6" fill="#f2b8a8" />
        </g>
      ))}
      <ellipse cx="330" cy="206" rx="22" ry="12" fill="#c41e3a" />
      <ellipse cx="330" cy="202" rx="16" ry="7" fill="#7a1c14" />
    </>
  ),
  // Che: tall glass of layered sweet soup
  che: () => (
    <g transform="translate(0 -14)">
      <ellipse cx="200" cy="250" rx="86" ry="11" fill="#1a1a2e" opacity="0.14" />
      <path d="M144 96 H 256 L 244 244 Q 200 252 156 244Z" fill="#fff8f0" opacity="0.9" stroke="#e5d3b8" strokeWidth="3" />
      <path d="M148 130 H 252 L 247 168 H 153Z" fill="#fff8f0" />
      <path d="M153 168 H 247 L 245 196 H 155Z" fill="#7bc47f" />
      <path d="M155 196 H 245 L 244 224 H 156Z" fill="#a8452a" />
      <path d="M156 224 H 244 L 243 242 Q 200 249 157 242Z" fill="#f6d77a" />
      <g fill="#3a2010">
        <circle cx="172" cy="214" r="5" />
        <circle cx="200" cy="208" r="5" />
        <circle cx="226" cy="216" r="5" />
      </g>
      <path d="M148 98 H 252 L 250 130 H 150Z" fill="#fbf4e6" />
      <line x1="226" y1="60" x2="212" y2="190" stroke="#2ec4b6" strokeWidth="6" strokeLinecap="round" />
    </g>
  ),
  // Pho (gallery): clear broth, flat noodles, herbs, lime
  pho: () => (
    <NoodleBowl
      bowl="#1f6f78"
      broth="#e8c98c"
      noodle="#fff8f0"
      tops={[
        { x: 165, y: 144, rx: 26, ry: 7, fill: "#a8452a", rot: -10 },
        { x: 225, y: 142, rx: 20, ry: 6, fill: "#c4604a", rot: 10 },
        { x: 268, y: 150, rx: 10, ry: 5, fill: "#3f9a5a" },
        { x: 130, y: 150, rx: 10, ry: 5, fill: "#6fbf73" },
        { x: 200, y: 156, rx: 8, ry: 4, fill: "#c41e3a" },
      ]}
    />
  ),
};

export const hasDishScene = (id) => Object.prototype.hasOwnProperty.call(dishes, id);

export function renderDish(id) {
  return dishes[id]();
}
