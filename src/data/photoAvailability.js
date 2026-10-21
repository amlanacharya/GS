// Ids of the photos present in public/photos/<id>.jpg, detected at build/dev time.
// The loaders are never called; only the keys are used, so nothing is bundled.
const found = import.meta.glob("/public/photos/*.jpg");

export const AVAILABLE_PHOTOS = new Set(
  Object.keys(found).map((path) => path.split("/").pop().replace(/\.jpg$/, ""))
);
