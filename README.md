# nelmkt.com

my portfolio site. it's live at [nelmkt.com](https://nelmkt.com)

you can look at it two ways: an arcade version (pink, pixel fonts, a little runner game) or a normal professional one. you pick on the start screen and can switch later from the top bar. there's english and arabic too.

the cv is at /cv and /cv/ar, and /card is the page the qr code on my business card opens.

made with next.js and typescript, static export, hosted on cloudflare. the css is all hand written.

## running it

```bash
npm install
npm run dev
```

to deploy:

```bash
npm run build
npx wrangler deploy
```

there are a couple of secrets hidden in there if you look :)
