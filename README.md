# The world in a day

A static, no-build interactive atlas of everyone alive. Plain HTML, CSS, and JavaScript, with Alpine.js, Tailwind, and DaisyUI loaded from CDNs. No React, no npm.

## Structure

```
index.html          Page layout and components
css/style.css       Animations and small styles
js/app.js           Alpine.js app: donut chart, drill-down, search, tabs
data/atlas.js       The tree: groups and niches with head counts (millions) and descriptions
data/hours.js       Average day for each niche: [sleep, work or study, chores and commute, meals and family, leisure]
data/profiles.js    Deep profiles, batch 1 (full object format)
data/profiles-2.js  Deep profiles, batch 2 (compact P(...) format, easiest to extend)
data/emoji.js       Icon for each group (niches inherit their group's icon)
img/                Drop photos here
```

## Extend it

- Add a niche: add `L('Name', millions, 'description')` inside a group in `data/atlas.js`, then add its hours to `data/hours.js`.
- Add a deep profile: add a `P(...)` entry to `data/profiles-2.js` (or a new `profiles-3.js`, and add its script tag to `index.html`) keyed by the exact niche name.
- Add a photo: put a file in `img/` and add an `img` field to the node, for example `{...L('Nurses and midwives',30,'...'), img:'img/nurses.jpg'}`.
- Group head counts and hours are calculated from their niches, so only edit the leaves.

## Deploy

1. Create a GitHub repo and push this folder as the repo root.
2. In Vercel, choose Add New Project and import the repo.
3. Set Framework Preset to Other, and leave Build Command and Output Directory empty.
4. Deploy.

Or run locally with `python3 -m http.server` and open http://localhost:8000.
