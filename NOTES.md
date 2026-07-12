# Christ Resurrection Church — Kuruman, Northern Cape

**Live:** https://christ-resurrection-church.vercel.app
**Repo:** https://github.com/wdfdev58-hub/christ-resurrection-church
**Pastor:** Odisitsi Victor Kooper

## v1 (generator)
- Base build via `generate.py`, palette `gold`, theme "african worship sunrise".
- Hero: HE IS / RISEN · Scripture: John 11:25 · Gallery heading: "Risen life, together".

## Phase 2 refine — **Raw Form** (design-library/DIRECTIONS.md #2)
Auto-picked: resurrection/sunrise identity reads as revival energy → Raw Form's warm brutalism.
- **Palette:** base `#E4E2DD`, ink `#1E1E1E`, accent `#DB4A2B`, warm-orange `#F8A348`, soft-pink `#FF89A9`.
- **Type:** Clash Display 700 headings (tracking -0.05em, leading 0.75–0.8), Satoshi body — via Fontshare CDN.
- **Layout:** typographic hero at 18vw with 2nd line indented 15vw ("RISEN" in accent); ~11vw uppercase
  section dividers; borderless expect-cards (top rule + huge numerals); hairline ministries grid with
  accent flood on hover; ink (#1E1E1E) blocks for the pinned scripture + visit CTA; giant faded "RISEN"
  footer wordmark.
- **Signature:** three soft radial blobs (accent/orange/pink, `blur(140px)`, `mix-blend: multiply`) pulsing
  behind the type; directional-fill CTAs (white slides L→R, text turns accent).
- **Motion:** all reveals on `expo.out` (≈ cubic-bezier(0.16,1,0.3,1)); intro panel wipes upward; scripture
  section still pinned with scrub-scale verse. Ember canvases from v1 removed. Reduced motion honoured
  (blobs static, intro hidden, reveals visible).
- **Kept:** all copy, all six Pexels images + alts, map embed, section structure.

Tried in v1 (don't repeat): canvas ember-field particles — replaced by CSS blobs in Raw Form.
