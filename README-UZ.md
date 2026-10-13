# Meva Mix — VS Code loyihasi

## 1. Kerakli dastur
Kompyuterga Node.js LTS o‘rnating: https://nodejs.org/  
Keyin ushbu papkani VS Code orqali oching.

## 2. Terminalda ishga tushirish
VS Code → Terminal → New Terminal, quyidagilarni navbat bilan yozing:

```bash
npm install
```

`.env.example` faylidan nusxa olib, nusxasini `.env` deb nomlang. `.env` ichiga Telegram bot tokeni va chat ID kiriting.

```bash
npm start
```

Brauzerda oching: http://localhost:3000

> HTML faylini to‘g‘ridan-to‘g‘ri ochmang. Buyurtma backend orqali yuborilishi uchun `npm start` bilan ochilgan `http://localhost:3000` manzilidan foydalaning.

## 3. Telegramni sozlash
1. Telegramda `@BotFather` orqali bot tokenini olasiz. Tokenni hech kimga oshkor qilmang.
2. O‘zingizning botingizni ochib, `/start` yuboring.
3. Chat IDni olish uchun brauzerda quyidagini oching (TOKEN o‘rniga tokenni vaqtincha yozing): `https://api.telegram.org/botTOKEN/getUpdates`
4. Javobdan o‘zingizning `chat.id` raqamingizni topib `.env` fayliga kiriting.
5. `.env` faylini saqlab, serverni qayta ishga tushiring.

Agar guruhga yubormoqchi bo‘lsangiz, botni guruhga qo‘shing va guruh chat ID sini ishlating.

## 4. Muhim
- `.env` faylini GitHub'ga yuklamang. U `.gitignore` ichida.
- Saytning hozirgi dizayni va savatchasi ishlaydi; haqiqiy Telegram buyurtmasi uchun yuqoridagi bot sozlamalari kerak.
- Narxlar frontendda ko‘rinadi, server esa buyurtma kelganda mahsulot nomi va narxini o‘zi qayta tekshiradi.
- Narxlar so‘mda. Mango, Dragon Fruit, Ananas, Kokos va Avokado dona hisobida; qolganlari kg hisobida.
- Yetkazib berish narxi hozircha hisoblanmaydi.
