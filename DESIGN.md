# CozyHome — Decor & More

React + Vite + Tailwind CSS v4 + GSAP recreation of the Dribbble shot
**"Online Store | Landing page"** by **gapsystudio** — full scrolling homepage.

- Original design: https://dribbble.com/shots/26872268-Online-Store-Landing-page
- Reference image: `design/original-design.png`
- All images are **palette-matched placeholders** (see below) — swap them freely.

## Run

```bash
npm install
npm run dev

# layout-check mode (skips all animation):
# open http://localhost:5173/?static
```

## Project structure

One file per section, in scroll order — everything a section needs (markup,
content, and its own GSAP animations) lives in its own file:

```
src/
  App.jsx            # just the section list, no logic
  anim.js            # isStatic() — honors ?static query param
  index.css          # Tailwind theme (design tokens)
  assets/            # all images — replace these with your own
  sections/
    Hero.jsx         # salmon hero: nav, DECOR & MORE, product block, stats
    About.jsx        # About Us: two-column editorial + maroon band
    Categories.jsx   # Product Categories: 3 staggered cards
    BestProduct.jsx  # Flora Bag Vase: color swatches + variant thumbnails
    TopSelling.jsx   # 4 product cards with ratings + quick actions
    Testimonials.jsx # auto-rotating quotes (hover to pin a card)
    Footer.jsx       # centered logo, links, socials
```

GSAP conventions:
- Each section owns its animations in a `useGSAP` scope; `App.jsx` has none.
- Single-element animations target **refs**; class selectors are used only for
  groups animated together (staggered/simultaneous sets).
- Scroll reveals use `gsap.set()` (hidden state) + `gsap.to()` (explicit end
  values), which is robust against ScrollTrigger refreshes re-recording
  `from()` tween end-values.
- Nav links and the hero scroll button anchor-scroll to section ids.

## Replacing the placeholder images

All imagery lives in `src/assets/`. Drop your own files over them (keep the
same filename) and Vite hot-reloads — no code changes needed.

| File                        | Slot                                    |
| --------------------------- | --------------------------------------- |
| `teddy.jpg`                 | hero, left rectangular photo            |
| `flower.png`                | hero, center arrangement (transparent)  |
| `circle-1/2/3.jpg`          | hero, three circular photos             |
| `about-1.jpg`               | About, left photo (face vases)          |
| `about-2.jpg`               | About, right photo (candles)            |
| `cat-1/2/3.jpg`             | category cards                          |
| `flora.jpg`                 | best product main image                 |
| `flora-thumb-1/2/3.jpg`     | best product color-variant thumbnails   |
| `top-1/2/3/4.jpg`           | top selling product cards               |
| `avatar-1/2/3.jpg`          | testimonial avatars                     |

`flower.png` needs a transparent background so the maroon block shows through.
Circles/avatars/thumbnails are masked by CSS, so any square-ish image works.

## Design tokens (sampled from the shot)

| Token    | Hex     | Use                          |
| -------- | ------- | ---------------------------- |
| salmon   | #cc7971 | hero background              |
| maroon   | #640620 | hero product block + band    |
| ink      | #220c09 | text, buttons                |
| cream    | #eac9bc | headline, text on maroon     |
| blush    | #e7b3a6 | placeholder art              |
| dusty    | #cea99e | placeholder art              |
| taupe    | #9d8b73 | placeholder art              |
| terra    | #a8655c | accents, active states       |

Fonts: Italiana (display serif) + Inter (body) via Google Fonts.

## Animation overview

- **Hero** (plays on load): nav drops in → headline words rise through masks →
  maroon block scales up → photo circles pop in → stats count up → flower
  blooms with overshoot, then floats gently; scroll arrow loops.
- **On scroll** (ScrollTrigger): headings/paragraphs fade up, images reveal
  with directional clip wipes, cards stagger up, testimonial cards slide in.
- **Interactions**: color swatches + variant thumbnails hue-rotate the product
  image, testimonial highlight auto-rotates every 3.5s (hover to pin),
  card hovers zoom images, buttons scale on hover.

Design © gapsystudio — this build is for learning/portfolio use.
