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
  // Ba Na lunch: grilled meat skewers on a wooden board, sticky rice, lettuce, dipping sauce
  "ba-na-lunch": () => (
    <>
      <ellipse cx="200" cy="238" rx="150" ry="12" fill="#1a1a2e" opacity="0.14" />
      <rect x="62" y="140" width="276" height="92" rx="18" fill="#a8702e" />
      <rect x="62" y="140" width="276" height="84" rx="18" fill="#c48a4a" />
      <path d="M80 160 H320 M80 190 H320" stroke="#a8702e" strokeWidth="2" opacity="0.5" />
      <path d="M96 176 Q 88 152 114 156 Q 134 140 150 160 Q 160 176 138 184Z" fill="#3f9a5a" />
      <path d="M118 200 Q 108 178 134 182 Q 156 170 170 190 Q 176 208 150 212Z" fill="#6fbf73" />
      {[162, 182, 202].map((y, i) => (
        <g key={i}>
          <line x1="150" y1={y} x2="268" y2={y - 4} stroke="#8c3a1e" strokeWidth="3" strokeLinecap="round" />
          {[178, 202, 226, 250].map((x, j) => (
            <rect
              key={j}
              x={x - 11}
              y={y - 11 - (x - 150) / 30}
              width="22"
              height="18"
              rx="7"
              fill={j % 2 ? "#7d4524" : "#6b3a1e"}
            />
          ))}
          <path d={`M170 ${y - 4} l6 6 M214 ${y - 8} l6 6`} stroke="#2a1608" strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
      <path d="M262 168 H 326 Q 322 206 294 208 Q 266 206 262 168Z" fill="#2f5d62" />
      <ellipse cx="294" cy="168" rx="32" ry="9" fill="#fff8f0" />
      <path d="M268 166 Q 294 148 320 166 Q 294 174 268 166Z" fill="#fdfbf6" />
      <ellipse cx="304" cy="216" rx="24" ry="8" fill="#fff8f0" />
      <ellipse cx="304" cy="214" rx="18" ry="5" fill="#c41e3a" />
      <Steam x={210} />
    </>
  ),
  // River dinner: whole grilled fish on banana leaf, lime, chilli, herbs, rice cup
  "river-dinner": () => (
    <>
      <ellipse cx="200" cy="238" rx="150" ry="12" fill="#1a1a2e" opacity="0.14" />
      <ellipse cx="190" cy="190" rx="142" ry="46" fill="#2f7d46" />
      <path d="M52 192 Q 190 184 328 192" stroke="#6fbf73" strokeWidth="3" fill="none" />
      <path d="M254 168 L 306 148 Q 300 184 310 218 L 254 196Z" fill="#c4863a" />
      <path d="M100 186 Q 110 150 190 150 Q 250 152 262 184 Q 250 220 190 222 Q 110 222 100 186Z" fill="#d9a15a" />
      <path d="M150 154 Q 190 130 232 156Z" fill="#c4863a" />
      <path d="M130 170 L 146 210 M162 160 L 178 216 M196 158 L 212 218 M230 164 L 240 208" stroke="#6b3a1e" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
      <circle cx="124" cy="182" r="7" fill="#fff8f0" />
      <circle cx="123" cy="182" r="3.5" fill="#1a1a2e" />
      <path d="M104 196 Q 116 204 130 198" stroke="#8c3a1e" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M170 176 Q 190 168 214 176" stroke="#3f9a5a" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M176 198 Q 202 206 232 196" stroke="#c41e3a" strokeWidth="6" fill="none" strokeLinecap="round" />
      <g>
        <path d="M70 220 A 22 22 0 0 1 114 220Z" fill="#8cc63f" />
        <path d="M77 218 A 15 15 0 0 1 107 218Z" fill="#d6ec8a" />
        <path d="M118 226 A 18 18 0 0 1 154 226Z" fill="#8cc63f" />
        <path d="M124 224 A 12 12 0 0 1 148 224Z" fill="#d6ec8a" />
      </g>
      <path d="M296 176 H 348 Q 344 214 322 216 Q 300 214 296 176Z" fill="#c41e3a" />
      <ellipse cx="322" cy="176" rx="26" ry="8" fill="#fff8f0" />
      <circle cx="312" cy="174" r="2.5" fill="#e5d3b8" />
      <circle cx="326" cy="172" r="2.5" fill="#e5d3b8" />
      <Steam x={190} />
    </>
  ),
  // Lang Co: grilled shellfish on a tray with scallion oil, lemon and salt-pepper-lime dip
  "lang-co": () => (
    <>
      <ellipse cx="200" cy="238" rx="150" ry="12" fill="#1a1a2e" opacity="0.14" />
      <ellipse cx="200" cy="192" rx="152" ry="52" fill="#9ea3ad" />
      <ellipse cx="200" cy="188" rx="140" ry="44" fill="#d0d4da" />
      {[
        [120, 176],
        [176, 164],
        [234, 170],
        [148, 206],
        [206, 202],
        [264, 204],
      ].map(([x, y], i) => (
        <g key={i} transform={`rotate(${i % 2 ? 8 : -8} ${x} ${y})`}>
          <ellipse cx={x} cy={y} rx="30" ry="19" fill="#4b5a68" />
          <ellipse cx={x} cy={y} rx="25" ry="15" fill="#fff8f0" />
          <ellipse cx={x} cy={y + 1} rx="17" ry="9" fill="#f2b8a8" />
          <path d={`M${x - 14} ${y} Q ${x} ${y - 8} ${x + 14} ${y}`} stroke="#6fbf73" strokeWidth="4" fill="none" strokeLinecap="round" />
          <circle cx={x + 8} cy={y + 2} r="2.5" fill="#3f9a5a" />
        </g>
      ))}
      <path d="M72 214 A 26 26 0 0 1 124 214Z" fill="#f6d84a" />
      <path d="M80 212 A 18 18 0 0 1 116 212Z" fill="#fbeb8a" />
      <ellipse cx="316" cy="178" rx="30" ry="14" fill="#fff8f0" stroke="#e5d3b8" strokeWidth="2" />
      <ellipse cx="316" cy="177" rx="21" ry="8" fill="#f6efe2" />
      <circle cx="308" cy="176" r="3" fill="#1a1a2e" opacity="0.7" />
      <circle cx="318" cy="180" r="3" fill="#1a1a2e" opacity="0.7" />
      <circle cx="324" cy="174" r="3.5" fill="#8cc63f" />
      <Steam x={190} />
    </>
  ),
  // Morning Glory: garlicky water-spinach stir-fry, two crisp spring rolls, dipping sauce
  "morning-glory": () => (
    <>
      <ellipse cx="200" cy="238" rx="150" ry="12" fill="#1a1a2e" opacity="0.14" />
      <ellipse cx="160" cy="194" rx="112" ry="42" fill="#fff8f0" stroke="#e5d3b8" strokeWidth="3" />
      <ellipse cx="160" cy="190" rx="86" ry="28" fill="#f6efe2" />
      <g stroke="#3f9a5a" strokeWidth="7" fill="none" strokeLinecap="round">
        <path d="M92 190 Q 126 168 164 188 T 228 180" />
        <path d="M100 200 Q 138 184 176 204 T 226 196" />
        <path d="M112 182 Q 150 164 190 176" />
      </g>
      <g fill="#6fbf73">
        <ellipse cx="108" cy="178" rx="13" ry="7" transform="rotate(-30 108 178)" />
        <ellipse cx="170" cy="168" rx="13" ry="7" transform="rotate(20 170 168)" />
        <ellipse cx="214" cy="200" rx="13" ry="7" transform="rotate(-15 214 200)" />
        <ellipse cx="140" cy="206" rx="12" ry="6" transform="rotate(10 140 206)" />
      </g>
      <g fill="#d4a574">
        <ellipse cx="132" cy="186" rx="4" ry="2.5" />
        <ellipse cx="186" cy="190" rx="4" ry="2.5" />
        <ellipse cx="156" cy="198" rx="4" ry="2.5" />
        <ellipse cx="206" cy="184" rx="4" ry="2.5" />
      </g>
      <g transform="rotate(-18 296 160)">
        <rect x="256" y="148" width="84" height="26" rx="13" fill="#d9903a" />
        <path d="M268 156 H 328 M266 166 H 330" stroke="#a8601e" strokeWidth="3" strokeLinecap="round" />
        <circle cx="338" cy="161" r="6" fill="#f6d77a" />
      </g>
      <g transform="rotate(-6 296 196)">
        <rect x="256" y="184" width="84" height="26" rx="13" fill="#e0a24a" />
        <path d="M268 192 H 328 M266 202 H 330" stroke="#a8601e" strokeWidth="3" strokeLinecap="round" />
        <circle cx="338" cy="197" r="6" fill="#f6d77a" />
      </g>
      <path d="M262 218 H 322 Q 318 240 292 242 Q 266 240 262 218Z" fill="#2f5d62" />
      <ellipse cx="292" cy="218" rx="30" ry="8" fill="#ff6b35" />
      <ellipse cx="292" cy="217" rx="22" ry="5" fill="#c41e3a" />
      <Steam x={150} />
    </>
  ),
  // Son Tra brunch: sunny plate, tropical fruit bowl, croissant, flat white, honey jar
  "son-tra-brunch": () => (
    <>
      <ellipse cx="200" cy="238" rx="150" ry="12" fill="#1a1a2e" opacity="0.14" />
      <ellipse cx="200" cy="196" rx="152" ry="46" fill="#ffe3a0" />
      <ellipse cx="200" cy="192" rx="138" ry="38" fill="#fff8f0" />
      <path d="M82 158 H 184 Q 180 204 133 206 Q 86 204 82 158Z" fill="#2ec4b6" />
      <ellipse cx="133" cy="158" rx="51" ry="11" fill="#1f9d92" />
      <circle cx="108" cy="152" r="15" fill="#ff8a3d" />
      <circle cx="136" cy="146" r="16" fill="#e8467c" />
      <circle cx="160" cy="154" r="14" fill="#f6c431" />
      <g fill="#1a1a2e">
        <circle cx="130" cy="143" r="1.8" />
        <circle cx="140" cy="149" r="1.8" />
        <circle cx="143" cy="141" r="1.8" />
        <circle cx="112" cy="156" r="1.8" />
        <circle cx="104" cy="149" r="1.8" />
      </g>
      <rect x="206" y="138" width="34" height="34" rx="8" fill="#f0b429" />
      <rect x="203" y="132" width="40" height="12" rx="5" fill="#8c3a1e" />
      <rect x="213" y="148" width="20" height="14" rx="4" fill="#fff8f0" opacity="0.8" />
      <path d="M196 214 Q 214 178 258 184 Q 290 192 282 218 Q 270 206 258 210 Q 238 200 218 222 Q 204 224 196 214Z" fill="#d9903a" />
      <path d="M222 190 L 230 210 M240 186 L 246 206 M258 188 L 262 206" stroke="#a8601e" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="312" cy="196" rx="36" ry="12" fill="#fff8f0" stroke="#e5d3b8" strokeWidth="2" />
      <path d="M292 158 H 332 Q 330 192 312 194 Q 294 192 292 158Z" fill="#fff8f0" stroke="#e5d3b8" strokeWidth="2" />
      <path d="M332 166 Q 350 166 346 178 Q 342 188 328 184" stroke="#fff8f0" strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="312" cy="158" rx="20" ry="5" fill="#8c5a2e" />
      <path d="M312 160 q -7 -6 0 -2 q 7 -4 0 2Z" fill="#fff8f0" />
    </>
  ),
};

export const hasDishScene = (id) => Object.prototype.hasOwnProperty.call(dishes, id);

export function renderDish(id) {
  return dishes[id]();
}
