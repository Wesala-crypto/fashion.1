# PERLÉ boutique hero

Open `index.html` in a browser (internet needed: images and fonts load from the web).
Load order matters. Scripts share one global scope, so keep the order in index.html.

## Structure
index.html          page markup only (nav, stage, caption, panels)

css/  (loaded in this order; later files override earlier ones)
  tokens.css          colours, ease, nav scale variables
  base.css            reset, body, buttons, blur behind panels
  stage.css           hero, 1440x900 stage, room plates, rail, headline
  dresses.css         dress layers, hover states, hit columns
  props.css           sticker, shopping bag, credit
  nav.css             wordmark and YOUR BAG pill
  caption.css         caption and toast
  panels.css          scrim, product window, bag panel
  responsive.css      phones (< 820px)
  reduced-motion.css  reduced-motion overrides

js/  (loaded in this order)
  config.js           helpers, image URLs, sprite coordinates, constants
  data.js             the twelve dresses (edit names/prices here)
  dresses.js          builds dresses, slot layout, hover and click
  layout.js           stage scaling, phone swipe rack
  sheets.js           cleans the cut-out sprite sheets
  intro.js            load animation
  panels.js           scrim and product window
  bag.js              put-in-bag flight, bag panel, toast

## Common edits
Change a dress or price      js/data.js
Swap an image                js/config.js (the A = {...} list)
Change colours / fonts       css/tokens.css (fonts: <link> in index.html)
Tune the phone layout        css/responsive.css and js/layout.js
