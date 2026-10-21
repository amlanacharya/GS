// Downloads one licensed photo per place from Wikimedia Commons into public/photos
// and writes attribution text to src/data/credits.json.
//
// Usage:
//   npm run photos              fetch every missing photo
//   npm run photos -- --force   replace existing photos too
//   npm run photos -- hero golden-bridge   only these ids
//
// Photos you place in public/photos yourself are never overwritten unless --force is used.

import { mkdir, readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PHOTO_SEARCH } from "../src/data/photoSearch.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "photos");
const creditsFile = path.join(root, "src", "data", "credits.json");

const API = "https://commons.wikimedia.org/w/api.php";
const UA = "honeymoon-itinerary-site/1.0 (personal gift project)";
const OK_LICENSE = /^(cc0|cc[ -]by|public domain|pd)/i;

const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));
const ids = only.length ? only : Object.keys(PHOTO_SEARCH);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const exists = (p) => access(p).then(() => true, () => false);
const stripHtml = (s = "") => s.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();

async function getJson(url, tries = 4) {
  for (let i = 0; i < tries; i += 1) {
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (res.ok) return res.json();
    if (res.status === 429 || res.status >= 500) await sleep(2000 * (i + 1));
    else throw new Error(`HTTP ${res.status} for ${url}`);
  }
  throw new Error(`Too many retries for ${url}`);
}

async function getBytes(url, tries = 4) {
  for (let i = 0; i < tries; i += 1) {
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    if (res.status === 429 || res.status >= 500) await sleep(2500 * (i + 1));
    else throw new Error(`HTTP ${res.status} for ${url}`);
  }
  throw new Error(`Too many retries for ${url}`);
}

async function findPhoto(query) {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    generator: "search",
    gsrsearch: `${query} filetype:bitmap`,
    gsrnamespace: "6",
    gsrlimit: "25",
    prop: "imageinfo",
    iiprop: "url|size|mime|extmetadata",
    iiurlwidth: "1600",
  });
  const data = await getJson(`${API}?${params}`);
  const pages = Object.values(data.query?.pages ?? {}).sort((a, b) => a.index - b.index);

  const candidates = pages
    .map((p) => ({ title: p.title, info: p.imageinfo?.[0] }))
    .filter(({ info }) => info && info.mime === "image/jpeg" && info.width >= 1600 && info.width / info.height >= 1.2)
    .filter(({ info }) => OK_LICENSE.test(info.extmetadata?.LicenseShortName?.value ?? ""));

  return candidates[0] ?? null;
}

async function main() {
  await mkdir(outDir, { recursive: true });
  let credits = {};
  try {
    credits = JSON.parse(await readFile(creditsFile, "utf8"));
  } catch {
    credits = {};
  }

  const missing = [];
  for (const id of ids) {
    const query = PHOTO_SEARCH[id];
    if (!query) {
      console.log(`skip   ${id} (no search term)`);
      continue;
    }
    const target = path.join(outDir, `${id}.jpg`);
    if (!force && (await exists(target))) {
      console.log(`keep   ${id} (already in public/photos)`);
      continue;
    }

    try {
      const hit = await findPhoto(query);
      if (!hit) {
        console.log(`none   ${id}  no licensed landscape match for "${query}"`);
        missing.push(id);
        continue;
      }
      const bytes = await getBytes(hit.info.thumburl);
      await writeFile(target, bytes);
      const meta = hit.info.extmetadata ?? {};
      const artist = stripHtml(meta.Artist?.value) || "Unknown author";
      const license = stripHtml(meta.LicenseShortName?.value);
      credits[id] = `${artist}, ${license}, via Wikimedia Commons (${hit.title.replace(/^File:/, "")})`;
      console.log(`saved  ${id}  <- ${hit.title}`);
    } catch (err) {
      console.log(`fail   ${id}  ${err.message}`);
      missing.push(id);
    }
    await sleep(1200);
  }

  await writeFile(creditsFile, `${JSON.stringify(credits, null, 2)}\n`);
  console.log("\nCredits written to src/data/credits.json");
  if (missing.length) {
    console.log(`No photo for: ${missing.join(", ")}`);
    console.log("Put your own files at public/photos/<id>.jpg (1600px wide or more) for these.");
  }
  console.log("Review the photos in public/photos and swap any you do not like.");
}

main();
