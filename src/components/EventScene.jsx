// Place illustrations for itinerary events, keyed by `kind`. Same signature as the scenes in Scene.jsx.

// Vertical gradient background plus a shared blur filter for glows.
const Bg = ({ id, stops }) => (
  <>
    <defs>
      <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
        {stops.map(([offset, color]) => (
          <stop key={offset} offset={offset} stopColor={color} />
        ))}
      </linearGradient>
      <filter id={`${id}-blur`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" />
      </filter>
    </defs>
    <rect width="400" height="300" fill={`url(#${id}-bg)`} />
  </>
);

const Heart = ({ x, y, s = 1, color = "#c41e3a" }) => (
  <path
    transform={`translate(${x} ${y}) scale(${s})`}
    d="M0 6 C -14 -4 -8 -14 0 -7 C 8 -14 14 -4 0 6Z"
    fill={color}
  />
);

const Palm = ({ x, y, s = 1, color = "#1f5c43", trunk = "#6b4f3a" }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M0 0 Q 8 -40 2 -80" stroke={trunk} strokeWidth="5" fill="none" strokeLinecap="round" />
    {[-70, -35, 0, 35, 70].map((a) => (
      <path
        key={a}
        transform={`translate(2 -80) rotate(${a})`}
        d="M0 0 Q 8 -30 34 -22 Q 12 -20 0 0Z"
        fill={color}
      />
    ))}
    <path d="M2 -80 Q -26 -88 -40 -64 Q -18 -74 2 -80Z" fill={color} />
  </g>
);

const eventScenes = {
  pool: (id) => (
    <>
      <Bg id={id} stops={[[0, "#8fd6e6"], [0.45, "#ffe2a8"], [1, "#ffc98a"]]} />
      <circle cx="320" cy="76" r="34" fill="#fff3c9" opacity="0.55" filter={`url(#${id}-blur)`} />
      <circle cx="320" cy="76" r="17" fill="#fff8f0" />
      <rect y="112" width="400" height="26" fill="#2aa7b5" />
      <path d="M0 122 Q 100 116 200 122 T 400 122" stroke="#fff8f0" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
      <path d="M0 138 L400 138 L400 300 L0 300Z" fill="#efe3cf" />
      <rect x="34" y="144" width="332" height="96" rx="10" fill="#fff8f0" />
      <rect x="44" y="152" width="312" height="80" rx="6" fill="#27c3cf" />
      <rect x="44" y="152" width="312" height="22" rx="6" fill="#7fe8ec" opacity="0.7" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path key={i} d={`M${56 + i * 44} ${190 + (i % 2) * 14} q 14 -8 28 0`} stroke="#fff8f0" strokeOpacity="0.65" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      ))}
      <path d="M62 152 V 132 M80 152 V 132 M62 132 Q 71 122 80 132" stroke="#c0c4cc" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="262" cy="206" r="15" fill="none" stroke="#ff6b35" strokeWidth="7" />
      <circle cx="262" cy="206" r="15" fill="none" stroke="#fff8f0" strokeWidth="3" strokeDasharray="12 12" />
      <ellipse cx="200" cy="248" rx="150" ry="4" fill="#1a1a2e" opacity="0.08" />
      <g>
        <path d="M44 270 L132 270 L146 254 L58 254Z" fill="#fff8f0" stroke="#d4a574" strokeWidth="2" />
        <path d="M58 254 L80 232 L96 236 L80 254Z" fill="#2ec4b6" />
        <rect x="196" y="262" width="40" height="14" rx="7" fill="#fff8f0" stroke="#d4a574" strokeWidth="2" />
        <ellipse cx="258" cy="276" rx="18" ry="5" fill="#5a4a42" />
        <ellipse cx="258" cy="270" rx="13" ry="4" fill="#7a665c" />
        <ellipse cx="258" cy="265" rx="8" ry="3" fill="#8e7a6e" />
        <path d="M296 252 q 8 -20 22 -4 q 6 -20 -10 -22 q -14 4 -12 26Z" fill="#f4a3b0" />
        <path d="M310 268 q 6 -14 16 -8" stroke="#ff9a62" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      <Palm x={368} y={250} s={0.85} />
    </>
  ),

  candlelit: (id) => (
    <>
      <Bg id={id} stops={[[0, "#0d0d1f"], [0.6, "#1a1a2e"], [1, "#2a1a30"]]} />
      <rect x="44" y="58" width="104" height="110" rx="6" fill="#16213e" stroke="#d4a574" strokeWidth="3" />
      <path d="M130 72 a14 14 0 1 0 6 24 a11 11 0 1 1 -6 -24Z" fill="#fff8f0" />
      <circle cx="70" cy="92" r="1.5" fill="#fff8f0" />
      <circle cx="92" cy="130" r="1.5" fill="#fff8f0" />
      <circle cx="112" cy="104" r="1" fill="#fff8f0" />
      <line x1="96" y1="58" x2="96" y2="168" stroke="#d4a574" strokeWidth="2" />
      <line x1="44" y1="113" x2="148" y2="113" stroke="#d4a574" strokeWidth="2" />
      <path d="M36 52 L36 190 Q 52 150 52 52Z" fill="#7a2548" opacity="0.85" />
      {[
        [210, 76, 14, "#ff6b35"],
        [250, 108, 9, "#ffd9a0"],
        [300, 70, 12, "#ffd9a0"],
        [340, 104, 16, "#c41e3a"],
        [370, 150, 10, "#ff6b35"],
        [180, 140, 8, "#d4a574"],
        [326, 156, 7, "#ffd9a0"],
      ].map(([cx, cy, r, c]) => (
        <circle key={cx} cx={cx} cy={cy} r={r} fill={c} opacity="0.35" filter={`url(#${id}-blur)`} />
      ))}
      <ellipse cx="200" cy="170" rx="80" ry="70" fill="#ff9a40" opacity="0.28" filter={`url(#${id}-blur)`} />
      <path d="M40 222 Q 200 200 360 222 L380 300 L20 300Z" fill="#fff8f0" />
      <path d="M40 222 Q 200 200 360 222" stroke="#e8dcc6" strokeWidth="2" fill="none" />
      <path d="M90 252 Q 92 280 88 300 M200 258 L200 300 M310 252 Q 308 280 312 300" stroke="#e8dcc6" strokeWidth="2" fill="none" />
      <ellipse cx="116" cy="236" rx="42" ry="9" fill="#e8dcc6" />
      <ellipse cx="116" cy="234" rx="30" ry="6" fill="#fff8f0" stroke="#d4a574" strokeWidth="1.5" />
      <ellipse cx="284" cy="236" rx="42" ry="9" fill="#e8dcc6" />
      <ellipse cx="284" cy="234" rx="30" ry="6" fill="#fff8f0" stroke="#d4a574" strokeWidth="1.5" />
      <circle cx="116" cy="233" r="4" fill="#c41e3a" />
      <circle cx="284" cy="233" r="4" fill="#c41e3a" />
      {[170, 230].map((x) => (
        <g key={x}>
          <rect x={x - 5} y="170" width="10" height="52" rx="2" fill="#fff3d9" />
          <path d={`M${x} 150 Q ${x - 8} 162 ${x} 170 Q ${x + 8} 162 ${x} 150Z`} fill="#ffd9a0" />
          <circle cx={x} cy="162" r="14" fill="#ffd9a0" opacity="0.5" filter={`url(#${id}-blur)`} />
          <ellipse cx={x} cy="223" rx="14" ry="3" fill="#d4a574" />
        </g>
      ))}
      {[150, 250].map((x) => (
        <g key={x}>
          <path d={`M${x - 10} 176 L${x + 10} 176 Q ${x + 12} 200 ${x} 204 Q ${x - 12} 200 ${x - 10} 176Z`} fill="#c41e3a" opacity="0.55" stroke="#fff8f0" strokeWidth="1.2" />
          <line x1={x} y1="204" x2={x} y2="224" stroke="#fff8f0" strokeWidth="1.5" />
          <ellipse cx={x} cy="225" rx="9" ry="2.5" fill="#fff8f0" />
        </g>
      ))}
    </>
  ),

  village: (id) => (
    <>
      <Bg id={id} stops={[[0, "#8fc4ea"], [0.5, "#cfe2f4"], [0.85, "#fde4e8"], [1, "#fff8f0"]]} />
      {[[60, 70, 1], [300, 56, 1.2], [190, 100, 0.8], [350, 120, 0.7]].map(([x, y, s]) => (
        <g key={x} transform={`translate(${x} ${y}) scale(${s})`} fill="#fff8f0">
          <ellipse cx="0" cy="0" rx="34" ry="12" />
          <ellipse cx="-16" cy="-8" rx="18" ry="12" />
          <ellipse cx="12" cy="-10" rx="20" ry="13" />
        </g>
      ))}
      <line x1="0" y1="62" x2="400" y2="104" stroke="#8c8478" strokeWidth="1.5" />
      <g transform="translate(118 84)">
        <line x1="0" y1="0" x2="0" y2="14" stroke="#8c8478" strokeWidth="1.5" />
        <rect x="-16" y="14" width="32" height="22" rx="5" fill="#c41e3a" />
        <rect x="-12" y="19" width="10" height="9" fill="#ffe9c7" />
        <rect x="2" y="19" width="10" height="9" fill="#ffe9c7" />
        <rect x="-18" y="34" width="36" height="3" fill="#8c3a1e" />
      </g>
      <path d="M0 210 Q 100 160 200 175 T 400 160 L400 300 L0 300Z" fill="#7cbf8f" />
      <path d="M120 200 L120 130 L280 130 L280 200Z" fill="#f6c9d4" />
      <rect x="168" y="96" width="64" height="104" fill="#fde4e8" />
      <path d="M160 96 L200 22 L240 96Z" fill="#5a7fb5" />
      <circle cx="200" cy="16" r="4" fill="#d4a574" />
      <circle cx="200" cy="124" r="15" fill="#fff8f0" stroke="#d4a574" strokeWidth="3" />
      <path d="M200 124 L200 114 M200 124 L207 128" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" />
      {[[116, 98, 22], [284, 98, 22], [140, 114, 16], [260, 114, 16]].map(([x, y, w]) => (
        <g key={x}>
          <rect x={x - w / 2} y={y + 18} width={w} height={130 - y - 14} fill="#fde4e8" />
          <path d={`M${x - w / 2 - 4} ${y + 18} L${x} ${y - 24} L${x + w / 2 + 4} ${y + 18}Z`} fill="#7b6bb5" />
        </g>
      ))}
      {[142, 164, 236, 258].map((x) => (
        <path key={x} d={`M${x - 6} 172 L${x - 6} 158 Q ${x} 146 ${x + 6} 158 L${x + 6} 172Z`} fill="#8fb0d4" />
      ))}
      <path d="M186 200 L186 176 Q 200 160 214 176 L214 200Z" fill="#7a2548" />
      <path d="M0 260 Q 150 218 400 252 L400 300 L0 300Z" fill="#4e9a6a" />
      {[20, 80, 140, 200, 260, 320, 375].map((x, i) => (
        <g key={x}>
          <path d={`M${x} 280 q 2 -14 0 -24`} stroke="#2f7d5b" strokeWidth="2" fill="none" />
          <circle cx={x} cy="252" r="9" fill={["#ff6b35", "#f6c9d4", "#ffd9a0", "#c41e3a", "#b69be0", "#fff8f0", "#ff6b35"][i]} />
          <circle cx={x} cy="252" r="3" fill="#f2c14e" />
          <circle cx={x + 14} cy="266" r="7" fill={["#f6c9d4", "#ffd9a0", "#c41e3a", "#b69be0", "#ff6b35", "#f6c9d4", "#fff8f0"][i]} />
        </g>
      ))}
    </>
  ),

  lovebridge: (id) => (
    <>
      <Bg id={id} stops={[[0, "#080818"], [0.5, "#1a1a2e"], [1, "#2a2150"]]} />
      {[[60, 70], [110, 110], [250, 60], [360, 90], [320, 140]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="1.4" fill="#fff8f0" opacity="0.8" />
      ))}
      <circle cx="318" cy="62" r="24" fill="#ffe2a8" opacity="0.25" filter={`url(#${id}-blur)`} />
      <path d="M322 42 a20 20 0 1 0 12 34 a16 16 0 1 1 -12 -34Z" fill="#ffe2a8" />
      <rect y="168" width="400" height="132" fill="#0d1a2e" />
      <path d="M20 170 Q 200 40 380 170" stroke="#2ec4b6" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M20 170 Q 200 40 380 170" stroke="#d6fffa" strokeWidth="2" fill="none" />
      <path d="M20 170 Q 200 40 380 170" stroke="#2ec4b6" strokeWidth="16" fill="none" opacity="0.3" filter={`url(#${id}-blur)`} />
      {[60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((x) => {
        const t = (x - 20) / 360;
        const y = 170 - 4 * 65 * t * (1 - t) * 0.92 - 0;
        return <line key={x} x1={x} y1={y + 3} x2={x} y2="170" stroke="#ffd9a0" strokeWidth="1.2" opacity="0.8" />;
      })}
      <rect y="168" width="400" height="6" fill="#d4a574" />
      <rect y="174" width="400" height="3" fill="#ffd9a0" opacity="0.4" />
      {[60, 150, 240, 330].map((x) => (
        <rect key={x} x={x - 14} y="196" width="28" height="26" fill="#ff6b35" opacity="0.18" />
      ))}
      {[70, 130, 190, 250, 310].map((x, i) => (
        <rect key={x} x={x - 12} y={212 + (i % 2) * 6} width="24" height="2.5" rx="1.2" fill={i % 2 ? "#ff6b35" : "#2ec4b6"} opacity="0.55" />
      ))}
      <path d="M0 232 L400 232" stroke="#d4a574" strokeWidth="3" />
      <path d="M0 262 L400 262" stroke="#d4a574" strokeWidth="3" />
      {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((x) => (
        <line key={x} x1={x} y1="232" x2={x} y2="262" stroke="#8c6a4a" strokeWidth="2" />
      ))}
      <rect y="262" width="400" height="38" fill="#1a1a2e" />
      {[
        [48, 244, "#c41e3a"], [84, 252, "#ff6b35"], [118, 242, "#d4a574"], [160, 252, "#c41e3a"],
        [196, 243, "#2ec4b6"], [240, 252, "#c41e3a"], [276, 243, "#ff6b35"], [318, 252, "#d4a574"], [352, 243, "#c41e3a"],
      ].map(([x, y, c]) => (
        <g key={x}>
          <path d={`M${x - 3} ${y - 8} v-6 a3 3 0 0 1 6 0 v6`} stroke="#d4a574" strokeWidth="1.5" fill="none" />
          <Heart x={x} y={y} s={1.1} color={c} />
        </g>
      ))}
      <g fill="#0d0d1f">
        <circle cx="184" cy="142" r="4" />
        <path d="M180 148 h8 l2 20 h-12Z" />
        <circle cx="198" cy="143" r="3.6" />
        <path d="M194 149 h8 l2 19 h-12Z" />
      </g>
    </>
  ),

  feast: (id) => (
    <>
      <rect width="400" height="300" fill="#4a0e1c" />
      <rect width="400" height="300" fill={`url(#${id}-glowbg)`} />
      <defs>
        <radialGradient id={`${id}-glowbg`} cx="0.5" cy="0.5" r="0.7">
          <stop offset="0" stopColor="#c41e3a" stopOpacity="0.55" />
          <stop offset="1" stopColor="#2a0710" stopOpacity="0.9" />
        </radialGradient>
        <filter id={`${id}-blur`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <rect x="20" y="50" width="360" height="200" rx="10" fill="#6b3a1e" />
      {[78, 106, 134, 162, 190, 218].map((y) => (
        <line key={y} x1="20" y1={y} x2="380" y2={y} stroke="#4a2410" strokeWidth="1.5" />
      ))}
      <rect x="20" y="50" width="360" height="200" rx="10" fill="none" stroke="#d4a574" strokeWidth="2" opacity="0.7" />
      <rect x="40" y="62" width="320" height="176" rx="6" fill="#c41e3a" opacity="0.18" />
      <g>
        <circle cx="200" cy="150" r="60" fill="#ffd9a0" opacity="0.35" filter={`url(#${id}-blur)`} />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <ellipse key={a} cx="200" cy="130" rx="8" ry="17" fill="#ff8fa3" transform={`rotate(${a} 200 150)`} />
        ))}
        {[22, 67, 112, 157, 202, 247, 292, 337].map((a) => (
          <ellipse key={a} cx="200" cy="136" rx="6" ry="12" fill="#ffc2cc" transform={`rotate(${a} 200 150)`} />
        ))}
        <circle cx="200" cy="150" r="9" fill="#ffe2a8" />
      </g>
      {[
        [96, 106, 32, "#2ec4b6", "#f6d18b"],
        [304, 106, 32, "#fff8f0", "#2f7d5b"],
        [100, 196, 34, "#fff8f0", "#ff6b35"],
        [300, 196, 34, "#2ec4b6", "#c41e3a"],
      ].map(([cx, cy, r, rim, food]) => (
        <g key={cx + cy}>
          <circle cx={cx + 3} cy={cy + 4} r={r} fill="#000" opacity="0.3" />
          <circle cx={cx} cy={cy} r={r} fill={rim} />
          <circle cx={cx} cy={cy} r={r - 7} fill={food} />
          <circle cx={cx - 8} cy={cy - 4} r="6" fill="#fff8f0" opacity="0.5" />
          <circle cx={cx + 8} cy={cy + 6} r="5" fill="#1a1a2e" opacity="0.25" />
        </g>
      ))}
      {[[200, 84], [200, 218]].map(([cx, cy]) => (
        <g key={cy}>
          <circle cx={cx} cy={cy + 3} r="22" fill="#000" opacity="0.3" />
          <circle cx={cx} cy={cy} r="22" fill="#2ec4b6" />
          <circle cx={cx} cy={cy} r="16" fill="#fff8f0" />
          <circle cx={cx - 5} cy={cy - 3} r="3" fill="#e8dcc6" />
          <circle cx={cx + 5} cy={cy + 3} r="3" fill="#e8dcc6" />
        </g>
      ))}
      {[[148, 160, 18], [252, 140, -14]].map(([x, y, r]) => (
        <g key={x} transform={`rotate(${r} ${x} ${y})`}>
          <line x1={x - 24} y1={y - 2} x2={x + 24} y2={y - 2} stroke="#d4a574" strokeWidth="3" strokeLinecap="round" />
          <line x1={x - 24} y1={y + 3} x2={x + 24} y2={y + 3} stroke="#e8c48e" strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}
      <circle cx="345" cy="76" r="11" fill="#c41e3a" />
      <circle cx="55" cy="224" r="11" fill="#c41e3a" />
    </>
  ),

  nightbeach: (id) => (
    <>
      <Bg id={id} stops={[[0, "#10243a"], [0.4, "#1d4a5c"], [0.72, "#3a6f78"], [1, "#e0a67a"]]} />
      {[[70, 50], [150, 78], [330, 60], [250, 40]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="1.3" fill="#fff8f0" opacity="0.8" />
      ))}
      <circle cx="200" cy="160" r="70" fill="#ffd9a0" opacity="0.28" filter={`url(#${id}-blur)`} />
      <circle cx="200" cy="164" r="38" fill="#ffe2a8" />
      <circle cx="188" cy="156" r="6" fill="#f2c88a" opacity="0.7" />
      <circle cx="212" cy="172" r="8" fill="#f2c88a" opacity="0.6" />
      <rect y="170" width="400" height="66" fill="#15485a" />
      <rect y="170" width="400" height="66" fill="#0d2a3d" opacity="0.4" />
      {[182, 192, 203, 215, 228].map((y, i) => (
        <rect key={y} x={200 - (46 - i * 8)} y={y} width={(46 - i * 8) * 2} height="2.5" rx="1.2" fill="#ffe2a8" opacity={0.7 - i * 0.1} />
      ))}
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M0 ${200 + i * 14} Q 100 ${194 + i * 14} 200 ${200 + i * 14} T 400 ${200 + i * 14}`} stroke="#8fd3e0" strokeOpacity={0.25 - i * 0.05} strokeWidth="1.5" fill="none" />
      ))}
      <path d="M0 232 Q 130 220 250 230 T 400 224 L400 300 L0 300Z" fill="#d9b48a" />
      <path d="M0 232 Q 130 220 250 230 T 400 224" stroke="#fff8f0" strokeOpacity="0.5" strokeWidth="3" fill="none" />
      <path d="M0 262 Q 200 244 400 268 L400 300 L0 300Z" fill="#b8926a" />
      <g transform="translate(278 238)">
        <path d="M-34 0 Q 0 30 34 0Z" fill="#8c3a1e" stroke="#d4a574" strokeWidth="2" />
        <path d="M-30 0 L34 0" stroke="#d4a574" strokeWidth="2" />
        <path d="M-30 6 Q 0 22 30 6" stroke="#5c2410" strokeWidth="1.5" fill="none" />
        <path d="M30 0 Q 60 8 78 -4" stroke="#d4a574" strokeWidth="1.5" fill="none" />
        <circle cx="78" cy="-4" r="3" fill="#d4a574" />
      </g>
      {[[110, 262], [136, 270], [162, 280], [186, 292]].map(([x, y], i) => (
        <g key={x} fill="#6b4f3a" opacity="0.65">
          <ellipse cx={x} cy={y} rx="4" ry="2.6" transform={`rotate(-12 ${x} ${y})`} />
          <ellipse cx={x + 12} cy={y - 5} rx="4" ry="2.6" transform={`rotate(-12 ${x + 12} ${y - 5})`} />
        </g>
      ))}
      <Palm x={40} y={252} s={1.1} color="#0d3a2c" trunk="#2a1a10" />
      <Palm x={362} y={240} s={0.85} color="#0d3a2c" trunk="#2a1a10" />
    </>
  ),

  tailor: (id) => (
    <>
      <Bg id={id} stops={[[0, "#3a2a2a"], [0.4, "#6b3a2a"], [1, "#a4693e"]]} />
      <line x1="0" y1="52" x2="400" y2="66" stroke="#d4a574" strokeWidth="1.5" />
      {[
        [26, "#c41e3a"], [64, "#2ec4b6"], [102, "#ff6b35"], [140, "#b69be0"], [178, "#f2c14e"],
        [216, "#2f7d5b"], [254, "#e86a92"], [292, "#5fb7d4"], [330, "#c41e3a"], [372, "#ff6b35"],
      ].map(([x, c], i) => (
        <g key={x} transform={`translate(${x} ${54 + x * 0.035}) scale(0.78)`}>
          <line x1="0" y1="0" x2="0" y2={14 + (i % 3) * 14} stroke="#d4a574" strokeWidth="1.2" />
          <g transform={`translate(0 ${14 + (i % 3) * 14 + 16})`}>
            <ellipse cx="0" cy="0" rx="17" ry="20" fill={c} filter={`url(#${id}-blur)`} opacity="0.55" />
            <ellipse cx="0" cy="0" rx="14" ry="18" fill={c} stroke="#d4a574" strokeWidth="1.2" />
            <ellipse cx="0" cy="0" rx="6" ry="18" fill="#ffd9a0" opacity="0.35" />
            <rect x="-6" y="-21" width="12" height="3" fill="#d4a574" />
            <rect x="-6" y="18" width="12" height="3" fill="#d4a574" />
            <line x1="0" y1="21" x2="0" y2="32" stroke={c} strokeWidth="2" />
          </g>
        </g>
      ))}
      <rect x="20" y="118" width="170" height="8" fill="#4a2410" />
      <rect x="20" y="168" width="170" height="8" fill="#4a2410" />
      <rect x="20" y="218" width="170" height="8" fill="#4a2410" />
      {[
        [26, 118, ["#c41e3a", "#fff8f0", "#2ec4b6", "#f2c14e", "#b69be0"]],
        [26, 168, ["#2f7d5b", "#ff6b35", "#e86a92", "#5fb7d4", "#c41e3a"]],
        [26, 218, ["#f2c14e", "#7b6bb5", "#c41e3a", "#2ec4b6", "#fff8f0"]],
      ].map(([x0, y, cols]) =>
        cols.map((c, i) => (
          <g key={`${y}-${i}`}>
            <rect x={x0 + i * 32} y={y - 38} width="26" height="38" rx="3" fill={c} />
            <ellipse cx={x0 + i * 32 + 13} cy={y - 38} rx="13" ry="3.5" fill={c} />
            <ellipse cx={x0 + i * 32 + 13} cy={y - 38} rx="8" ry="2" fill="#000" opacity="0.2" />
            <rect x={x0 + i * 32} y={y - 24} width="26" height="3" fill="#fff8f0" opacity="0.25" />
          </g>
        ))
      )}
      <g>
        <rect x="258" y="150" width="4" height="64" fill="#8c6a4a" />
        <ellipse cx="260" cy="216" rx="30" ry="5" fill="#4a2410" />
        <rect x="256" y="104" width="8" height="12" fill="#d4a574" />
        <circle cx="260" cy="96" r="10" fill="#e8c8a4" />
        <path d="M244 118 Q 260 112 276 118 L272 150 L248 150Z" fill="#c41e3a" />
        <path d="M248 150 L272 150 L282 214 L238 214Z" fill="#c41e3a" />
        <path d="M260 118 L248 150 L238 214 M260 118 L272 150 L282 214" stroke="#ffd9a0" strokeWidth="1.5" fill="none" />
        <path d="M244 124 Q 260 136 276 124" stroke="#ffd9a0" strokeWidth="2" fill="none" />
        <path d="M252 190 q 8 -10 16 0" stroke="#ffd9a0" strokeWidth="1.5" fill="none" />
        <path d="M252 168 q 8 -10 16 0" stroke="#ffd9a0" strokeWidth="1.5" fill="none" />
      </g>
      <rect y="244" width="400" height="56" fill="#3a2410" />
      <rect y="244" width="400" height="4" fill="#d4a574" opacity="0.6" />
      <g transform="translate(318 218)">
        <rect x="-44" y="22" width="88" height="4" fill="#8c6a4a" />
        <path d="M-34 22 L-34 -10 Q -34 -22 -20 -22 L22 -22 L22 -10 L34 -10 L34 22Z" fill="#1a1a2e" stroke="#d4a574" strokeWidth="2" />
        <circle cx="-8" cy="0" r="10" fill="#d4a574" />
        <circle cx="-8" cy="0" r="4" fill="#1a1a2e" />
        <line x1="26" y1="-22" x2="26" y2="-34" stroke="#d4a574" strokeWidth="2.5" />
        <path d="M26 -34 L14 -34" stroke="#d4a574" strokeWidth="2.5" />
        <line x1="14" y1="-34" x2="14" y2="18" stroke="#c41e3a" strokeWidth="1" opacity="0.8" />
        <rect x="-38" y="12" width="20" height="10" rx="2" fill="#c41e3a" />
      </g>
    </>
  ),

  market: (id) => (
    <>
      <Bg id={id} stops={[[0, "#8fd3e0"], [0.5, "#ffe9c7"], [1, "#ffd9a0"]]} />
      <path d="M0 40 Q 100 70 200 44 T 400 56" stroke="#8c3a1e" strokeWidth="1.5" fill="none" />
      {[16, 56, 96, 136, 176, 216, 256, 296, 336, 376].map((x, i) => (
        <path
          key={x}
          d={`M${x} ${48 + Math.sin(i * 0.6) * 6} l 14 0 l -7 16Z`}
          fill={["#c41e3a", "#2ec4b6", "#f2c14e", "#ff6b35", "#fff8f0"][i % 5]}
        />
      ))}
      <g>
        {Array.from({ length: 10 }).map((_, i) => (
          <path key={i} d={`M${i * 40} 84 L${i * 40 + 40} 84 L${i * 40 + 40} 118 Q ${i * 40 + 20} 132 ${i * 40} 118Z`} fill={i % 2 ? "#fff8f0" : "#c41e3a"} />
        ))}
        <rect y="78" width="400" height="8" fill="#8c3a1e" />
      </g>
      {[52, 120, 200, 282, 348].map((x, i) => (
        <g key={x} transform={`translate(${x} ${134 + (i % 2) * 6})`}>
          <line x1="0" y1="-14" x2="0" y2="-2" stroke="#8c6a4a" strokeWidth="1.5" />
          <path d="M-28 22 L0 -2 L28 22 Q 0 30 -28 22Z" fill="#f2d594" stroke="#c9a15a" strokeWidth="1.5" />
          <path d="M-18 18 L0 6 L18 18" stroke="#c9a15a" strokeWidth="1" fill="none" />
          <path d="M-22 21 Q 0 27 22 21" stroke="#c41e3a" strokeWidth="2.5" fill="none" />
        </g>
      ))}
      <rect y="196" width="400" height="104" fill="#8c5a32" />
      <rect y="190" width="400" height="12" fill="#c98a52" />
      <rect y="190" width="400" height="3" fill="#ffd9a0" opacity="0.6" />
      <g>
        <path d="M22 244 L22 214 L132 214 L132 244Z" fill="#a4693e" stroke="#6b3a1e" strokeWidth="2" />
        <line x1="22" y1="229" x2="132" y2="229" stroke="#6b3a1e" strokeWidth="1.5" />
        {[[40, "#ff6b35"], [62, "#ff6b35"], [84, "#f2c14e"], [106, "#f2c14e"]].map(([x, c]) => (
          <circle key={x} cx={x} cy="206" r="10" fill={c} />
        ))}
        {[[52, "#c41e3a"], [95, "#2f7d5b"]].map(([x, c]) => (
          <circle key={x} cx={x} cy="194" r="9" fill={c} />
        ))}
        <path d="M95 184 q 6 -8 12 -4" stroke="#2f7d5b" strokeWidth="2" fill="none" />
      </g>
      <g>
        <path d="M280 244 L280 214 L388 214 L388 244Z" fill="#a4693e" stroke="#6b3a1e" strokeWidth="2" />
        <line x1="280" y1="229" x2="388" y2="229" stroke="#6b3a1e" strokeWidth="1.5" />
        {[[296, "#e86a92"], [318, "#e86a92"], [340, "#fff8f0"], [362, "#f6c9d4"]].map(([x, c]) => (
          <circle key={x} cx={x} cy="206" r="10" fill={c} />
        ))}
        <circle cx="310" cy="194" r="9" fill="#2ec4b6" />
        <circle cx="352" cy="194" r="9" fill="#f2c14e" />
      </g>
      <g>
        <rect x="160" y="196" width="80" height="6" fill="#d4a574" opacity="0.0" />
        <rect x="170" y="176" width="26" height="14" fill="#3a2410" />
        <rect x="166" y="170" width="34" height="6" rx="2" fill="#8c8478" />
        <rect x="177" y="162" width="12" height="8" fill="#8c8478" />
        <rect x="170" y="190" width="26" height="20" rx="3" fill="#fff8f0" opacity="0.85" />
        <rect x="171" y="198" width="24" height="12" rx="3" fill="#6b3a1e" />
        <path d="M212 204 h18 v-10 h-18Z" fill="#fff8f0" />
        <path d="M230 197 q 8 0 0 6" stroke="#fff8f0" strokeWidth="2" fill="none" />
        <rect x="212" y="200" width="18" height="4" fill="#6b3a1e" />
        <path d="M184 156 q -4 -8 2 -14 M192 158 q 4 -8 -2 -14" stroke="#fff8f0" strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round" />
      </g>
      <rect y="262" width="400" height="38" fill="#6b4f3a" />
    </>
  ),

  departure: (id) => (
    <>
      <Bg id={id} stops={[[0, "#5a3b7a"], [0.35, "#e86a92"], [0.7, "#ff9a62"], [1, "#ffd9a0"]]} />
      <circle cx="90" cy="176" r="60" fill="#ffe2a8" opacity="0.4" filter={`url(#${id}-blur)`} />
      <circle cx="90" cy="176" r="28" fill="#fff3c9" />
      {[[250, 74, 1], [330, 130, 0.8], [140, 96, 0.7]].map(([x, y, s]) => (
        <g key={x} transform={`translate(${x} ${y}) scale(${s})`} fill="#fff8f0" opacity="0.55">
          <ellipse cx="0" cy="0" rx="40" ry="8" />
          <ellipse cx="-14" cy="-6" rx="20" ry="8" />
        </g>
      ))}
      <path d="M150 168 L218 120" stroke="#fff8f0" strokeWidth="5" opacity="0.4" strokeLinecap="round" />
      <g transform="translate(260 112) rotate(-24)">
        <path d="M-70 0 Q -70 -12 -50 -12 L50 -12 Q 78 -10 88 0 Q 78 10 50 12 L-50 12 Q -70 12 -70 0Z" fill="#fff8f0" />
        <path d="M-70 -2 L-96 -34 L-80 -34 L-52 -8Z" fill="#c41e3a" />
        <path d="M-10 8 L-40 44 L-22 44 L22 10Z" fill="#e8dcc6" />
        <path d="M-10 -10 L-34 -34 L-20 -34 L16 -10Z" fill="#e8dcc6" />
        <rect x="-58" y="-3" width="130" height="3" fill="#c41e3a" />
        {[-34, -20, -6, 8, 22, 36, 50].map((x) => (
          <circle key={x} cx={x} cy="-5" r="2" fill="#5a3b7a" />
        ))}
        <path d="M70 -9 L82 -4 L72 -3Z" fill="#5a3b7a" />
        <ellipse cx="24" cy="18" rx="12" ry="6" fill="#8c8478" />
      </g>
      <rect y="206" width="400" height="94" fill="#3a2a3e" />
      <rect y="206" width="400" height="5" fill="#ffb677" opacity="0.6" />
      <path d="M0 236 L400 236" stroke="#fff8f0" strokeWidth="2" strokeDasharray="22 16" opacity="0.5" />
      {[30, 80, 130, 180, 230, 280, 330, 380].map((x) => (
        <g key={x}>
          <circle cx={x} cy="222" r="6" fill="#ffd9a0" opacity="0.5" filter={`url(#${id}-blur)`} />
          <circle cx={x} cy="222" r="2.5" fill="#fff3c9" />
        </g>
      ))}
      <path
        fillRule="evenodd"
        d="M0 0 H400 V300 H0Z M62 40 H338 Q 366 40 366 68 V232 Q 366 260 338 260 H62 Q 34 260 34 232 V68 Q 34 40 62 40Z"
        fill="#e8dcc6"
      />
      <path
        fillRule="evenodd"
        d="M34 68 Q 34 40 62 40 H338 Q 366 40 366 68 V232 Q 366 260 338 260 H62 Q 34 260 34 232Z M44 70 Q 44 50 64 50 H336 Q 356 50 356 70 V230 Q 356 250 336 250 H64 Q 44 250 44 230Z"
        fill="#b9ae9c"
      />
      <g transform="translate(316 50)">
        <line x1="0" y1="0" x2="0" y2="40" stroke="#d4a574" strokeWidth="1.5" />
        <ellipse cx="0" cy="56" rx="14" ry="16" fill="#c41e3a" filter={`url(#${id}-blur)`} opacity="0.6" />
        <ellipse cx="0" cy="56" rx="12" ry="15" fill="#c41e3a" stroke="#d4a574" strokeWidth="1.2" />
        <ellipse cx="0" cy="56" rx="5" ry="15" fill="#ffd9a0" opacity="0.5" />
        <rect x="-6" y="39" width="12" height="3" fill="#d4a574" />
        <rect x="-6" y="70" width="12" height="3" fill="#d4a574" />
        <line x1="0" y1="73" x2="0" y2="88" stroke="#d4a574" strokeWidth="1.5" />
        <circle cx="0" cy="90" r="2.5" fill="#d4a574" />
      </g>
    </>
  ),
};

export { eventScenes };
