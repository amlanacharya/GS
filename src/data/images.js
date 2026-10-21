import credits from "./credits.json";

// Drop a photo at public/photos/<id>.jpg and it replaces the illustrated scene for that id (restart dev or rebuild to detect it).
// Ids without a file keep the illustrated scene and make no network request.
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
  { id: "my-khe", cat: "da-nang", kind: "beach", ratio: "wide", caption: "My Khe Beach sunrise", tip: "Go barefoot at first light" },
  { id: "hoi-an-boat", cat: "hoi-an", kind: "boat", ratio: "wide", caption: "Lantern boats on the Thu Bon", tip: "Release a candle and make a wish" },
];

export const HERO_ID = "hero";
