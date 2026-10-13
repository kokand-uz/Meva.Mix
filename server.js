require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json({ limit: "30kb" }));
app.use(express.static(path.join(__dirname, "public")));

const PRODUCTS = {
  "Tarvuz": 5000, "Qovun": 8000, "Mango": 20000, "Dragon Fruit": 25000,
  "Shaftoli": 25000, "Junli shaftoli": 25000, "Oq shaftoli": 25000,
  "Anjir shaftoli": 25000, "Uzum": 30000, "Apelsin": 30000,
  "Yashil olma": 25000, "Banan": 20000, "Anjir": 25000, "Nok": 40000,
  "Qulupnay": 100000, "Ananas": 50000, "Laym": 100000, "Limon": 50000,
  "Golubika": 40000, "Kiwi": 70000, "Ejevika": 70000, "Malina": 100000,
  "Mandarin": 40000, "Kokos": 50000, "Avokado": 30000, "Olxo‘ri": 10000
};
const PIECE_ITEMS = new Set(["Mango", "Dragon Fruit", "Ananas", "Kokos", "Avokado"]);

app.post("/api/order", async (req, res) => {
  try {
    const { name, phone, address, deliveryTime, comment, items, promoCode } = req.body || {};
    if (!name?.trim() || !phone?.trim() || !address?.trim() || !Array.isArray(items) || !items.length) {
      return res.status(400).json({ error: "Ism, telefon, manzil va savatcha ma’lumotlarini to‘ldiring." });
    }
    if (name.length > 100 || phone.length > 40 || address.length > 300 || (comment || "").length > 500 || items.length > 40) {
      return res.status(400).json({ error: "Kiritilgan ma’lumot juda uzun." });
    }

    let subtotal = 0;
    const cleanItems = [];
    for (const item of items) {
      const price = PRODUCTS[item.name];
      const qty = Number(item.qty);
      if (!price || !Number.isInteger(qty) || qty < 1 || qty > 100) {
        return res.status(400).json({ error: "Savatchada noto‘g‘ri mahsulot yoki miqdor bor." });
      }
      subtotal += price * qty;
      cleanItems.push({ name: item.name, qty, price, unit: PIECE_ITEMS.has(item.name) ? "dona" : "kg" });
    }
    const discount = String(promoCode || "").trim().toUpperCase() === "MEVAMIX10" ? Math.round(subtotal * 0.1) : 0;
    const total = subtotal - discount;
    const money = n => n.toLocaleString("en-US").replace(/,/g, " ") + " so‘m";
    const lines = cleanItems.map(i => `• ${i.name} — ${i.qty} ${i.unit} × ${money(i.price)} = ${money(i.price * i.qty)}`).join("\n");
    const message = [
      "🍉 MEVA MIX — YANGI BUYURTMA",
      "",
      `👤 Ism: ${name.trim()}`,
      `📞 Telefon: ${phone.trim()}`,
      `📍 Manzil: ${address.trim()}`,
      `🕒 Yetkazish vaqti: ${(deliveryTime || "Kelishiladi").toString().slice(0, 100)}`,
      "",
      "🛒 MAHSULOTLAR:",
      lines,
      "",
      `💰 Mahsulotlar jami: ${money(subtotal)}`,
      ...(discount ? [`🎟 Promo chegirma: −${money(discount)}`] : []),
      `✅ JAMI: ${money(total)}`,
      `💬 Izoh: ${(comment || "Yo‘q").toString().slice(0, 500)}`
    ].join("\n");

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
      console.error("Telegram sozlamalari .env faylida kiritilmagan.");
      return res.status(503).json({ error: "Telegram hali sozlanmagan. .env faylini to‘ldiring." });
    }
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message })
    });
    const result = await tg.json();
    if (!tg.ok || !result.ok) {
      console.error("Telegram API xatosi:", result.description || tg.status);
      return res.status(502).json({ error: "Telegramga yuborilmadi. Bot tokeni va chat IDni tekshiring." });
    }
    res.json({ ok: true, message: "Buyurtmangiz Telegramga yuborildi!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Serverda xatolik yuz berdi." });
  }
});

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.listen(PORT, () => console.log(`Meva Mix ishlayapti: http://localhost:${PORT}`));
