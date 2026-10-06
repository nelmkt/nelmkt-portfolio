# nelmkt.com · Press Start

A pink, retro arcade-style portfolio for **Nelly Almaktoum**: undergraduate researcher and innovator working on ML engineering, remote sensing and green tech.

**Live:** [nelmkt.com](https://nelmkt.com)

## Stages

| Stage | | What's there |
| --- | --- | --- |
| Start | Title screen | Synthwave sunset, scrolling grid and a running pixel sprite |
| 1-1 | Player Select | Profile, stats and interests |
| 1-2 | Bonus Stage | *Language Rush*, a mini-game for collecting my programming languages |
| 1-3 | Quest Log | Research projects: Wahaj and Aykah |
| 1-4 | Trophy Room | Awards, recognition and the Aykah patent |
| 1-5 | Academy & Side Quests | Education, competitions and events |
| 1-6 | Skill Tree | Languages, ML engineering, data, remote sensing, web and hardware |
| 1-7 | Party & Guilds | Community and leadership roles |
| 1-8 | Save Point | Contact links |

There are a couple of hidden extras for curious players.

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
