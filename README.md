# CYBEROXI | آترین آذین فن‌آور

لندینگ شرکت دانش‌بنیان آترین آذین فن‌آور. Next.js ۱۶ روی **Node.js ۲۰** — روی هاست PHP / cPanel معمولی بالا نمی‌آید؛ VPS یا هر سروری که Node داشته باشد لازم است.

ریپو: [github.com/arshia1376/cyberoxi-doc](https://github.com/arshia1376/cyberoxi-doc)

## روی سرور (ساده‌ترین راه)

```bash
sudo apt update
sudo apt install -y git git-lfs nodejs npm
# اگر Node زیر ۲۰ بود: از https://nodejs.org یا nvm نصب کنید

git lfs install
git clone https://github.com/arshia1376/cyberoxi-doc.git
cd cyberoxi-doc
npm ci
npm run build
npm start -- --port 3000
```

ویدیوهای پروژه با Git LFS هستند؛ بدون `git-lfs` فایل‌ها خالی دانلود می‌شوند.

پشت Nginx یا Caddy پورت `3000` را به دامنه وصل کنید. برای ماندن بعد از بستن SSH از `pm2` استفاده کنید:

```bash
sudo npm i -g pm2
pm2 start npm --name cyberoxi -- start -- --port 3000
pm2 save
pm2 startup
```

## با Docker

```bash
docker build -t cyberoxi-doc .
docker run --rm -p 3000:3000 cyberoxi-doc
```

## لوکال

```bash
npm install
npm run dev -- --port 3000
```

`output: "standalone"` در `next.config.ts` برای build تولیدی فعال است.
