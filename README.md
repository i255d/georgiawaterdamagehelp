# Georgia Water Damage Help

Local lead site for water damage restoration in Gwinnett and nearby Georgia cities. Domain target: `GeorgiaWaterDamageHelp.com`.

Do not buy the domain until a restoration shop agrees to take the leads.

## Run locally

```bash
cd water-damage-georgia/repos/georgiawaterdamagehelp
npm install
npm run dev
```

Open `http://localhost:4321/`.

## Before launch

1. Put the CallRail number in `PUBLIC_PHONE`.
2. In CallRail, copy Integrations → JavaScript Snippet into `PUBLIC_CALLRAIL_SWAP`.
3. In CallRail, turn on Settings → External Forms for that company.
4. Host on Cloudflare (`npm run build`, then upload `dist`).

## Pages

- `/` home + request form
- `/dacula`, `/hamilton-mill`, `/lawrenceville`, `/snellville`, `/buford`, `/duluth`, `/suwanee`, `/grayson`, `/lilburn`, `/loganville`, `/winder`: custom city pages (one `.astro` file each, listed in the `custom` set in `src/pages/[slug].astro`)
- `/gwinnett-county`, `/atlanta`: shared city template (`src/pages/[slug].astro`)
- `/what-to-do` first-hour checklist
- `/how-it-works` disclosure
- `/privacy`
