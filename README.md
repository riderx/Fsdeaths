# Fsdeaths

Astro site for tracking Europe's FSD approval bottleneck on Cloudflare.

This build deliberately avoids unsupported claims that named politicians
personally caused specific deaths. The site is framed as an institutional
accountability tracker:

- RDW approval timeline and current EU-wide bottleneck
- Country ladder based on official road-fatality and EV-stock data
- Transparent scenario sliders for Tesla share and safety benefit assumptions
- Cloudflare Workers static-assets deployment via Wrangler

## Run

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

## Deploy to Cloudflare

```bash
bun run deploy
```

The project uses an assets-only `wrangler.jsonc`, so deployment targets a
static Cloudflare Worker with the built `dist/` directory.
