import credits from "./credits.json";

// Every photo is a file in public/photos/<id>.jpg. If a file is missing, the illustrated scene is shown.
// Run `npm run photos` to download licensed photos from Wikimedia Commons, or drop your own files in.
// `search` is the Commons query the script uses and a good Unsplash / Pexels search term.

export const CREDITS = credits;

export const GALLERY = [
  { id: "golden-bridge", cat: "da-nang", kind: "golden", ratio: "tall", caption: "Golden Bridge, Ba Na Hills", tip: "Arrive at opening for empty-bridge photos" },
  { id: "hoi-an-lanterns", cat: "hoi-an", kind: "lanterns", ratio: "wide", caption: "Hoi An lanterns at night", tip: "Blue hour, just after sunset" },
  { id: "dragon-bridge", cat: "da-nang", kind: "dragon", ratio: "tall", caption: "Dragon Bridge fire show", tip: "Weekend nights at 9 pm" },
  { id: "hai-van", cat: "da-nang", kind: "pass", ratio: "wide", caption: "Hai Van Pass coastal road", tip: "Start early before the cloud rolls in" },
  { id: "marble-mountains", cat: "da-nang", kind: "marble", ratio: "tall", caption: "Marble Mountains caves", tip: "Light shafts around 3 pm" },
  { id: "lady-buddha", cat: "da-nang", kind: "pagoda", ratio: "tall", caption: "Lady Buddha, Linh Ung Pagoda", tip: "Cover shoulders and knees" },
  { id: "my-khe", cat: "beach", kind: "beach", ratio: "wide", caption: "My Khe Beach sunrise", tip: "Go barefoot at first light" },
  { id: "pho", cat: "food", kind: "food", ratio: "square", caption: "Vietnamese noodle soup", tip: "Add chilli and lime to taste" },
  { id: "hoi-an-town", cat: "hoi-an", kind: "town", ratio: "tall", caption: "Hoi An yellow buildings", tip: "Best before 9 am" },
  { id: "hoi-an-boat", cat: "hoi-an", kind: "boat", ratio: "wide", caption: "Lantern boats on the Thu Bon", tip: "Release a candle and make a wish" },
  { id: "cao-lau", cat: "food", kind: "food", ratio: "square", caption: "Cao lau, Hoi An's signature", tip: "Eat it only in Hoi An" },
  { id: "banh-mi", cat: "food", kind: "food", ratio: "wide", caption: "Banh mi on the street", tip: "Ask for extra herbs" },
  { id: "non-nuoc", cat: "beach", kind: "beach", ratio: "wide", caption: "Non Nuoc Beach", tip: "Quiet and calm at dusk" },
  { id: "han-river", cat: "da-nang", kind: "dragon", ratio: "wide", caption: "Han River bridges at night", tip: "Blue hour reflections" },
  { id: "son-tra", cat: "da-nang", kind: "pass", ratio: "tall", caption: "Son Tra Peninsula", tip: "Mid-morning, clear skies" },
  { id: "ba-na-french-village", cat: "da-nang", kind: "town", ratio: "square", caption: "French Village, Ba Na Hills", tip: "Bring a light jacket" },
  { id: "egg-coffee", cat: "food", kind: "food", ratio: "tall", caption: "Egg coffee", tip: "Stir before the first sip" },
  { id: "couple", cat: "beach", kind: "beach", ratio: "tall", caption: "Goutham & Sowmiya", tip: "Add your own favourite photo as public/photos/couple.jpg", own: true },
];

export const HERO_ID = "hero";
