# Portfolio

Personal portfolio site built with [Astro](https://astro.build).

## Setup

```sh
npm install
cp .env.example .env   # then fill in PUBLIC_CARTO_API_KEY
npm run dev
```

Run `npm run check` before committing. It type-checks the components against the content schemas.

The interactive map uses [CARTO basemaps](https://carto.com/basemaps), which require an API key (free at [carto.com/basemaps/apikey](https://carto.com/basemaps/apikey)). Set `PUBLIC_CARTO_API_KEY` locally in `.env` and in your hosting provider's environment variables; without it the map tiles show an "API KEY REQUIRED" watermark.

## Project structure

```text
src/
├── components/        # Page tiles, map, and icons
├── content/
│   ├── projects/      # Portfolio projects
│   ├── experience/    # Work experience
│   ├── education/     # Education history
│   └── certifications/# Certifications
├── layouts/
├── lib/               # Shared types, sorted content loading, profile links
└── pages/
```

## Adding content

All content is stored as Markdown files with YAML frontmatter in `src/content/`. A new `.md` file in the relevant folder shows up on the next build.

Use the `order` field to control display order (lower = appears first).

---

### Add a project

Create `src/content/projects/my-project.md`:

```yaml
---
title: My Project
description:
  - Built X using Y
  - Achieved Z result
tags: [TypeScript, React]
github: https://github.com/you/repo   # optional
link: https://myproject.com           # optional
order: 1
---
```

---

### Add work experience

Create `src/content/experience/my-company.md`:

```yaml
---
title: Software Engineer
company: Acme Corp
startDate: Jan 2025
endDate: Jun 2025
lat: 1.3521
lng: 103.8198
highlights:
  - Built X feature used by Y users
  - Improved performance by Z%
order: 1
---
```

---

### Add education

Create `src/content/education/my-school.md`:

```yaml
---
institution: My University
degree: Bachelor of Computer Science
startDate: Aug 2022
endDate: May 2026
lat: 1.3521
lng: 103.8198
highlights:
  - Dean's List
  - Relevant coursework: Algorithms, Systems
order: 1
---
```

---

### Add a certification

Create `src/content/certifications/my-cert.md`:

```yaml
---
title: AWS Certified Developer
issuer: Amazon Web Services
issueDate: Jan 2025
expiryDate: Jan 2028      # optional
description: Associate-level certification  # optional
link: https://verify.cert.url             # optional
order: 1
---
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview production build locally            |
