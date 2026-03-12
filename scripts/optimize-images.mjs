import sharp from "sharp";
import path from "node:path";
import { promises as fs } from "node:fs";

const root = process.cwd();
const publicDir = path.join(root, "public");

const targets = [
  "office-space-land-o-lakes.jpg",
  "Office-Space-in-Land-O-Lakes-FL.jpg",
  "conference-room-land-o-lakes.jpg",
  "Event-Venue-Land-O-Lakes.jpg",
  "south-tampa-office-exterior.jpg",
  "Conference-Rooms-Land-O-Lakes.jpg",
  "Contact-Copperstone-Executive-Suites-Land-O-Lakes.jpg",
];

for (const fileName of targets) {
  const srcPath = path.join(publicDir, fileName);
  const webpPath = srcPath.replace(/\.(jpg|jpeg)$/i, ".webp");
  const avifPath = srcPath.replace(/\.(jpg|jpeg)$/i, ".avif");

  await fs.access(srcPath);

  await sharp(srcPath).webp({ quality: 80 }).toFile(webpPath);
  await sharp(srcPath).avif({ quality: 50 }).toFile(avifPath);
  console.log(`optimized: ${fileName}`);
}

console.log("done");
