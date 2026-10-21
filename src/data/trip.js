// Single place to personalise the whole site.
export const TRIP = {
  first: "Goutham",
  second: "Sowmiya",
  start: "2026-12-20T06:00:00+05:30", // trip start, used by the countdown
  dateLabel: "20 - 26 December 2026",
  tagline: "5 Days of Love, Lanterns & Golden Bridges",
  budget: "Rs 1,08,000 - 1,52,000",
  budgetNote: "estimated total for two",
  hotels: [
    { name: "InterContinental Danang Sun Peninsula", note: "Cliffside luxury on Son Tra, home of La Maison 1888", query: "InterContinental Danang Sun Peninsula Resort" },
    { name: "Fusion Maia Da Nang", note: "All-spa-included villas steps from Non Nuoc beach", query: "Fusion Maia Da Nang" },
    { name: "A La Carte Da Nang Beach", note: "Skyline suites right on My Khe beach", query: "A La Carte Da Nang Beach" },
  ],
};

export const PLACES = [
  { name: "Da Nang", lat: 16.0544, lng: 108.2022, note: "Beaches, bridges and your home base" },
  { name: "Hoi An", lat: 15.8801, lng: 108.338, note: "Lantern town, Day 4" },
  { name: "Hai Van Pass", lat: 16.2, lng: 108.13, note: "The legendary coastal road, Day 3" },
  { name: "Ba Na Hills", lat: 15.9977, lng: 107.9885, note: "Golden Bridge, Day 2" },
];

export const DAYS = [
  {
    n: 1,
    cover: "my-khe",
    title: "Beach Romance & Dragon Fire",
    short: "Beach Romance",
    kind: "beach",
    moods: ["waves", "wine", "flame"],
    blurb: "Sunrise toes in the sand, a candlelit French dinner, and a dragon that breathes fire over the river.",
    items: [
      { time: "06:00", slot: "Morning", title: "Sunrise at My Khe Beach", place: "My Khe Beach", query: "My Khe Beach Da Nang", photo: "my-khe", kind: "beach", desc: "Walk the wide, quiet sand barefoot while the sky turns peach. Fishermen's round basket boats dot the shore.", tip: "Go at first light. It is cool, empty and the best light of the day." },
      { time: "12:30", slot: "Lunch", title: "Seafood by the sea", place: "Be Man Seafood", query: "Be Man Seafood Da Nang", photo: "seafood", kind: "food", food: "Grilled squid, clams with lemongrass and a plate of banh xeo", desc: "Pick your seafood live from the tanks and share a table with the breeze.", tip: "Ask for prices before they weigh your seafood, and share plates." },
      { time: "15:30", slot: "Afternoon", title: "Slow pool and couples spa", place: "InterContinental Danang", query: "InterContinental Danang Sun Peninsula Resort", photo: "son-tra", kind: "pagoda", desc: "Nothing scheduled on purpose. Pool, spa, a nap. Save your energy for tonight.", tip: "Book the couples massage at check-in; evening slots fill first." },
      { time: "18:30", slot: "Dinner", title: "La Maison 1888", place: "La Maison 1888", query: "La Maison 1888 Danang", kind: "lanterns", food: "French tasting menu with a Vietnamese twist", desc: "Candlelit fine dining in a restored French colonial style mansion on the cliff.", tip: "Reserve a week ahead and request the terrace or a corner table for two." },
      { time: "21:00", slot: "Evening", title: "Dragon Bridge fire show", place: "Dragon Bridge", query: "Dragon Bridge Da Nang", photo: "dragon-bridge", kind: "dragon", desc: "The steel dragon breathes real fire and then water over the Han River. Pure spectacle.", tip: "The show runs on weekend nights (Saturday and Sunday, 9 pm). Confirm locally and arrive 30 minutes early for a good spot." },
    ],
    spots: [
      { spot: "Silhouette walking into the surf", best: "Sunrise, 05:40 - 06:20" },
      { spot: "Dragon Bridge flames behind you", best: "Show time, from the east bank" },
      { spot: "Candle table at La Maison 1888", best: "Golden hour into dusk" },
    ],
  },
  {
    n: 2,
    cover: "golden-bridge",
    title: "Golden Bridge & Ba Na Hills Magic",
    short: "Golden Bridge",
    kind: "golden",
    moods: ["mountain", "camera", "sparkles"],
    blurb: "Walk hand in hand on the giant stone hands in the clouds, then end the day on the glowing riverfront.",
    items: [
      { time: "08:00", slot: "Morning", title: "Golden Bridge in the clouds", place: "Golden Bridge, Ba Na Hills", query: "Golden Bridge Ba Na Hills", photo: "golden-bridge", kind: "golden", desc: "Two enormous stone hands lift a golden ribbon of a bridge above the pine forest.", tip: "Take the first cable car. By 10 am the bridge is shoulder to shoulder with tour groups." },
      { time: "12:00", slot: "Lunch", title: "Lunch above the valley", place: "Ba Na Hills restaurants", query: "Ba Na Hills Da Nang", kind: "food", food: "Vietnamese set meal or the international buffet", desc: "Refuel in the hill station before the afternoon wander.", tip: "Eat slightly before noon to dodge the lunch rush." },
      { time: "14:30", slot: "Afternoon", title: "French Village and flower gardens", place: "French Village, Ba Na Hills", query: "French Village Ba Na Hills", photo: "ba-na-french-village", kind: "town", desc: "A storybook European village on a mountaintop, with gardens and a cool breeze.", tip: "Carry a light jacket. It is noticeably cooler up here." },
      { time: "18:30", slot: "Dinner", title: "Riverfront dinner", place: "Han River, Da Nang", query: "Han River Da Nang restaurants", photo: "han-river", kind: "food", food: "Grilled seafood, mi quang and fresh coconut", desc: "Pick a riverside table and watch the city light up.", tip: "Walk a few streets back from the main road for better prices." },
      { time: "20:30", slot: "Evening", title: "Han River and Love Bridge stroll", place: "Han River Bridge", query: "Han River Bridge Da Nang", photo: "han-river", kind: "dragon", desc: "A slow night walk across the glowing bridges with the city reflected in the water.", tip: "The Love Bridge heart locks make a sweet photo prop." },
    ],
    spots: [
      { spot: "Both of you on the golden hands", best: "Opening time, soft light and no crowds" },
      { spot: "Cable car windows over the forest", best: "Morning clouds, before 10:00" },
      { spot: "Han River Bridge reflections", best: "Blue hour, just after sunset" },
    ],
  },
  {
    n: 3,
    cover: "hai-van",
    title: "Hai Van Pass Adventure + Marble Mountains",
    short: "Hai Van Pass",
    kind: "pass",
    moods: ["bike", "mountain", "utensils"],
    blurb: "Chase the coast road over the Pass of the Ocean Clouds, then climb into hidden caves.",
    items: [
      { time: "07:30", slot: "Morning", title: "Hai Van Pass drive", place: "Hai Van Pass", query: "Hai Van Pass viewpoint", photo: "hai-van", kind: "pass", desc: "Switchbacks between jungle and sea. Stop at the summit viewpoint and the old French gate.", tip: "Hire a private car or an easy rider. Start early to beat the cloud and heat." },
      { time: "12:00", slot: "Lunch", title: "Lang Co lagoon seafood", place: "Lang Co", query: "Lang Co Beach", photo: "lang-co", kind: "food", food: "Fresh oysters, grilled prawns and clam rice", desc: "A peaceful lagoon town on the far side of the pass.", tip: "Agree on seafood weight and price before cooking." },
      { time: "15:00", slot: "Afternoon", title: "Marble Mountains caves", place: "Marble Mountains", query: "Marble Mountains Da Nang", photo: "marble-mountains", kind: "marble", desc: "Five limestone hills with pagodas and caves. Huyen Khong cave glows with shafts of sunlight.", tip: "Wear grippy shoes and use the elevator one way if the stairs feel steep." },
      { time: "19:00", slot: "Dinner", title: "Madame Thu", place: "Madame Thu Restaurant", query: "Madame Thu Restaurant Da Nang", kind: "lanterns", food: "Home-style Vietnamese dishes in a lantern-lit setting", desc: "A warm, atmospheric dinner that tastes like a family kitchen.", tip: "Order several small dishes to share; ask about the daily special." },
      { time: "21:00", slot: "Evening", title: "Non Nuoc beach walk", place: "Non Nuoc Beach", query: "Non Nuoc Beach Da Nang", photo: "non-nuoc", kind: "beach", desc: "Slow stroll on the sand with the sound of the waves to end a big day.", tip: "Leave your shoes at the hotel and keep the evening unhurried." },
    ],
    spots: [
      { spot: "Summit viewpoint with the bay behind you", best: "Late morning, clear skies" },
      { spot: "Sunbeam in Huyen Khong cave", best: "Around 15:00 - 16:00" },
      { spot: "Lantern dinner table at Madame Thu", best: "Dusk" },
    ],
  },
  {
    n: 4,
    cover: "hoi-an-lanterns",
    title: "Hoi An Lanterns & Love",
    short: "Hoi An",
    kind: "lanterns",
    moods: ["lamp", "ship", "heart"],
    blurb: "A town of yellow walls, silk lanterns and a candlelit boat ride on the river.",
    items: [
      { time: "08:00", slot: "Morning", title: "Hoi An Ancient Town", place: "Hoi An Ancient Town", query: "Hoi An Ancient Town", photo: "hoi-an-town", kind: "town", desc: "Wander yellow-washed streets, the Japanese Covered Bridge and old merchant houses.", tip: "An Old Town ticket is needed for the heritage sites. Go early before the heat." },
      { time: "12:00", slot: "Lunch", title: "Cao Lau and banh mi", place: "Cao Lau Thanh / Banh Mi Phuong", query: "Cao Lau Thanh Hoi An", photo: "cao-lau", kind: "food", food: "Cao lau noodles, white rose dumplings, banh mi", desc: "Eat Hoi An's signature dishes where locals do.", tip: "Cao lau is only truly made here, so do not skip it." },
      { time: "15:00", slot: "Afternoon", title: "Tailors and lantern workshop", place: "Hoi An tailor street", query: "Hoi An tailor shops", photo: "hoi-an-lanterns", kind: "lanterns", desc: "Get something made in a day and craft your own silk lantern.", tip: "Order clothing early in the day if you want it before you leave." },
      { time: "18:30", slot: "Dinner", title: "Morning Glory", place: "Morning Glory Original", query: "Morning Glory Original Hoi An", kind: "food", food: "Fresh spring rolls, cao lau and banh xeo", desc: "A beloved restaurant serving the town's classic street food in a courtyard.", tip: "Book ahead; evenings are busy." },
      { time: "20:00", slot: "Evening", title: "Lantern boat on the Thu Bon", place: "Hoi An riverfront", query: "Hoi An riverfront lantern boat", photo: "hoi-an-boat", kind: "boat", desc: "Float past glowing lanterns and release a small candle on the river with a wish.", tip: "Agree on the boat price first and bring small notes for the candles." },
    ],
    spots: [
      { spot: "Yellow wall archways in the Old Town", best: "08:00 - 09:00" },
      { spot: "Lantern-lit bridge at dusk", best: "Blue hour, 17:45 - 18:30" },
      { spot: "Candle release from the boat", best: "After dark, by the riverfront" },
    ],
  },
  {
    n: 5,
    cover: "lady-buddha",
    title: "Lady Buddha Blessing & Farewell",
    short: "Farewell",
    kind: "pagoda",
    moods: ["sunset", "landmark", "plane"],
    blurb: "A blessing under a 67 metre Buddha, a peninsula of monkeys and sea views, and one last coffee.",
    items: [
      { time: "07:00", slot: "Morning", title: "Linh Ung Pagoda and Lady Buddha", place: "Linh Ung Pagoda, Son Tra", query: "Linh Ung Pagoda Son Tra", photo: "lady-buddha", kind: "pagoda", desc: "The tallest Buddha statue in Vietnam looks over the sea. Light incense and make a wish together.", tip: "Cover shoulders and knees. Go early for calm and clear views." },
      { time: "10:00", slot: "Lunch", title: "Son Tra Peninsula brunch", place: "Son Tra Peninsula", query: "Son Tra Peninsula Da Nang", photo: "son-tra", kind: "food", food: "Egg coffee and a light bun cha ca", desc: "Take the scenic loop and stop at a viewpoint cafe over the bay.", tip: "Do not feed the langurs; just enjoy watching them." },
      { time: "13:00", slot: "Afternoon", title: "Last souvenirs and coffee", place: "Han Market", query: "Han Market Da Nang", photo: "han-market", kind: "town", desc: "Pick up coffee, dried mango and lanterns to take home.", tip: "Bargain with a smile; start around two-thirds of the asking price." },
      { time: "17:00", slot: "Evening", title: "Departure", place: "Da Nang International Airport", query: "Da Nang International Airport", kind: "beach", desc: "Fly home with a camera full of memories and plans for the next trip.", tip: "Leave for the airport three hours before your flight; it is only about 15 minutes from the city." },
    ],
    spots: [
      { spot: "Lady Buddha with the sea behind", best: "Early morning, soft light" },
      { spot: "Son Tra coast road viewpoint", best: "Mid-morning" },
      { spot: "Last-day coffee cup portrait", best: "Any time, golden light by a window" },
    ],
  },
];

export const FOOD = [
  { name: "Cao Lau", photo: "cao-lau", kind: "food", desc: "Chewy noodles with pork and herbs, a Hoi An original.", where: "Cao Lau Thanh, Hoi An" },
  { name: "Banh Xeo", photo: "banh-xeo", kind: "food", desc: "Crisp turmeric pancake filled with prawn and sprouts, wrapped in herbs.", where: "Banh Xeo Ba Duong, Da Nang" },
  { name: "Mi Quang", photo: "mi-quang", kind: "food", desc: "Da Nang's turmeric noodles in a small amount of rich broth.", where: "Mi Quang Ba Mua, Da Nang" },
  { name: "Bun Cha", photo: "bun-cha", kind: "food", desc: "Grilled pork with rice vermicelli and fresh herbs; look for the Da Nang fish version, bun cha ca.", where: "Neighbourhood eateries in Da Nang" },
  { name: "Egg Coffee", photo: "egg-coffee", kind: "food", desc: "Velvety egg-yolk cream over strong coffee, like liquid tiramisu.", where: "Cong Caphe and local cafes" },
  { name: "Banh Mi", photo: "banh-mi", kind: "food", desc: "Crusty baguette with pate, pork, pickles and chilli.", where: "Banh Mi Phuong, Hoi An" },
  { name: "Fresh Seafood", photo: "seafood", kind: "food", desc: "Grilled squid, clams, prawns and crab picked from the tank.", where: "Be Man, Da Nang and Lang Co" },
  { name: "White Rose Dumplings", photo: "white-rose", kind: "food", desc: "Delicate shrimp dumplings shaped like roses, a Hoi An speciality.", where: "White Rose Restaurant, Hoi An" },
  { name: "Vietnamese Coffee", photo: "viet-coffee", kind: "food", desc: "Slow-drip dark coffee with condensed milk, hot or over ice.", where: "Any street cafe" },
  { name: "Che", photo: "che", kind: "food", desc: "Sweet dessert soups with beans, jelly and coconut milk.", where: "Han Market, Da Nang" },
];

export const PACKING = [
  { cat: "Clothing", icon: "shirt", items: ["Light breathable outfits", "Swimwear (2 sets)", "Modest outfit for temples", "Light rain jacket", "Comfortable walking sandals", "Sunhat and sunglasses", "One elegant dinner outfit each"] },
  { cat: "Camera gear", icon: "camera", items: ["Camera or phone gimbal", "Spare batteries and cards", "Small travel tripod", "Waterproof pouch", "Lens cleaning cloth"] },
  { cat: "Toiletries", icon: "droplets", items: ["Reef-safe sunscreen", "Mosquito repellent", "Basic medicines and plasters", "Lip balm and moisturiser", "Hand sanitiser and tissues"] },
  { cat: "Tech", icon: "smartphone", items: ["Phone chargers and power bank", "Universal travel adapter", "eSIM or local SIM", "Offline maps downloaded", "Headphones"] },
  { cat: "Honeymoon essentials", icon: "gem", items: ["Passports and visas (printed copies)", "Travel insurance papers", "Hotel booking confirmations", "A small surprise gift for each other", "A notebook to write memories"] },
];

export const NOTES = [
  "Every sunrise is better when it is next to you.",
  "Wherever we are on this map, home is wherever you are.",
  "Let us get lost in a lantern-lit alley and never ask for directions.",
  "I cannot wait to share every first bite, every first view, every first laugh.",
  "Here is to golden bridges, quiet beaches and a lifetime of us.",
];

export const REASONS = [
  "I get to hold your hand on the Golden Bridge",
  "We will share cao lau and argue about who gets the last bite",
  "You will say yes to every single photo",
  "Sunsets look better when I am looking at you",
  "Five days with no alarm clocks and only you",
  "Our first dinner as a married couple abroad",
];
