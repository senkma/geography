import zlib from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";

// Minimal dependency-free PNG encoder used to produce PWA app icons.
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, "ascii");
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crc]);
}

function encodePng(size, pixelFn) {
  const raw = Buffer.alloc(size * (size * 4 + 1));
  let p = 0;
  for (let y = 0; y < size; y++) {
    raw[p++] = 0; // filter: none
    for (let x = 0; x < size; x++) {
      const [r, g, b, a] = pixelFn(x, y, size);
      raw[p++] = r;
      raw[p++] = g;
      raw[p++] = b;
      raw[p++] = a;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function mix(a, b, t) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}

const navy = [228, 244, 236];
const deep = [206, 231, 243];
const teal = [124, 196, 160];
const ice = [255, 255, 255];

function pixel(x, y, size) {
  const cx = size / 2;
  const cy = size / 2;
  const dx = (x - cx) / size;
  const dy = (y - cy) / size;
  const dist = Math.sqrt(dx * dx + dy * dy);
  // background diagonal gradient
  const bg = mix(navy, deep, (x + y) / (2 * size));
  // globe disc
  const rOuter = 0.34;
  if (dist <= rOuter) {
    const shade = 0.5 + 0.5 * (1 - (dy + 0.34) / 0.68);
    let col = mix(deep, teal, Math.min(1, shade));
    // latitude/longitude lines
    const lat = Math.abs((y - cy) / size);
    const lon = Math.abs((x - cx) / size);
    const latLine = Math.abs((lat * 10) % 1 - 0.5) > 0.46;
    const lonLine = dist < rOuter - 0.02 && Math.abs((lon * 10) % 1 - 0.5) > 0.46;
    if (latLine || lonLine) col = mix(col, ice, 0.55);
    // rim highlight
    if (dist > rOuter - 0.02) col = mix(col, ice, 0.4);
    return [...col, 255];
  }
  return [...bg, 255];
}

mkdirSync(new URL("../public/icons/", import.meta.url), { recursive: true });
for (const size of [192, 512]) {
  const png = encodePng(size, pixel);
  writeFileSync(new URL(`../public/icons/icon-${size}.png`, import.meta.url), png);
  console.log(`wrote icon-${size}.png (${png.length} bytes)`);
}
