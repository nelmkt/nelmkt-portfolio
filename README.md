# nelmkt.com - Press Start!

The portfolio of **Nelly Almaktoum**: undergraduate researcher and inventor working on AI/ML, remote sensing and IoT at King Abdulaziz University.

**Live:** [nelmkt.com](https://nelmkt.com) · **Contact card:** [nelmkt.com/card](https://nelmkt.com/card)

## Two ways to view it

Visitors choose on the start screen and can switch any time from the top bar.

- **Arcade** - a pink retro game: pixel fonts, stages, trophies and a mini-game.
- **Professional** - a clean portfolio layout with light and dark themes.

Both are available in English and Arabic.

## Stages

| Stage | Arcade | Professional | What's there |
| --- | --- | --- | --- |
| 1-1 | Player | About | Profile, stats and interests |
| 1-2 | Bonus | - | *Language Rush*, a mini-game for collecting my programming languages |
| 1-3 | Quests | Projects | Wahaj, Maeen and Aykah |
| 1-4 | Trophies | Recognition | Awards, recognition and the Aykah patent, with proof links |
| 1-5 | Academy | Education | Education, competitions and events |
| 1-6 | Skills | Skills | Languages, AI research, ML engineering, data, web and hardware |
| 1-7 | Party | Leadership | Community and leadership roles |
| 1-8 | CV | CV | Full CV preview with a PDF download |
| 1-9 | Save | Contact | Contact links |

The full CV lives at [/cv](https://nelmkt.com/cv/) (English) and [/cv/ar](https://nelmkt.com/cv/ar/) (Arabic), with PDF downloads. There are a couple of hidden extras for curious players.

## Built with

- Next.js and TypeScript, exported as a static site
- Hand-written CSS: pixel fonts, square pixel boxes and a rainbow accent
- Canvas for the mini-game, the sprite and the pixel-rendered Arabic text
- Hosted on Cloudflare (Workers static assets)

## Run locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run build
npx wrangler deploy
```
