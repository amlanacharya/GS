import QRCode from "qrcode";

const url = process.argv[2] || "https://honeymoon-vietnam.vercel.app";

await QRCode.toFile("qr-card.png", url, {
  width: 1024,
  margin: 2,
  color: { dark: "#1A1A2E", light: "#FFF8F0" },
});

console.log(`QR code for ${url} written to qr-card.png`);
