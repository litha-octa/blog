# TODO — content to fill in

Every `[...]` placeholder on the site is listed here. Nothing below was invented; fill each in with real facts or remove it.

## Files to add

- [ ] `public/cv.pdf`: your CV. The "Download CV" button in the hero links to it, and it gives a 404 until the file exists.
- [ ] Hero illustration: replace the dashed arch placeholder in `src/components/Hero.tsx` (`[Illustration]`) with your own artwork.
- [ ] Project screenshots: add images to `public/work/<slug>/` and list them in `screenshots` in `src/content/work.ts`. The first one is shown on the home page and at the top of the case study (`[Screenshot]`).

## `src/content/site.ts`

- [ ] LinkedIn URL: the brief says `linkedin.com/in/litha-octa-delistia`, but the old site used `linkedin.com/in/lithaoctadelistia`. Confirm which one is right.
- [ ] Instagram URL for the "More on Instagram" button on `/art` (`[URL]`). The button stays hidden while it's empty.
- Email, GitHub and Upwork were taken from the old site. Check they're still current.

## `src/content/work.ts` (case studies)

- [ ] QMS: "What I learned" (`[Litha will write this herself]`)
- [ ] Feedback Rating Kiosk: "What I learned" (`[What I learned]`)
- [ ] Crealty.id: "The problem" (`[The problem]`) and "What I learned" (`[What I learned]`)
- [ ] RetailSpace: "What I learned" (`[What I learned]`)
- [ ] Role on each of the 4 projects (`[Role]`)
- [ ] Optional: "The interesting parts" for Feedback Kiosk, Crealty.id and RetailSpace. The section stays hidden until you add it.

## `src/content/projects.ts` (side projects)

- [ ] Year for CatchCat, CashClock, Luxeva Therapy and Dessert Recipes (`[Year]`)
- [ ] CashClock stack (`[Stack]`)
- [ ] Code and Live URLs for all four projects (`[URL]`). A link stays hidden while its URL is empty.

## `src/content/art.ts` (gallery)

- [ ] Replace the 6 placeholder images (`public/art/placeholder-*.svg`) with real artwork: `src`, `title` (`[Title]`), `year` (`[Year]`), `alt`, `width`, `height`.
- [ ] The one line about your style in the Art intro (`[One line about your style]`)
