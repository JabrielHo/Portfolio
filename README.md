# Portfolio

Personal portfolio site built with [Astro](https://astro.build).

## Setup

```sh
npm install
npm run dev
```

## Project Structure

```text
src/
├── components/        # UI components (auto-rendered, no edits needed)
├── content/
│   ├── projects/      # Portfolio projects
│   ├── experience/    # Work experience
│   ├── education/     # Education history
│   └── certifications/# Certifications
├── layouts/
└── pages/
```

## Adding Content

All content is stored as Markdown files with YAML frontmatter in `src/content/`. Create a new `.md` file in the relevant folder — the site will automatically pick it up.

Use the `order` field to control display order (lower = appears first).

---

### Add a Project

Create `src/content/projects/my-project.md`:

```yaml
---
title: My Project
description:
  - Built X using Y
  - Achieved Z result
tags: [TypeScript, React]
startDate: Jan 2025
endDate: Mar 2025
github: https://github.com/you/repo   # optional
link: https://myproject.com           # optional
order: 1
---
```

---

### Add Work Experience

Create `src/content/experience/my-company.md`:

```yaml
---
title: Software Engineer
company: Acme Corp
startDate: Jan 2025
endDate: Jun 2025
location: Singapore
lat: 1.3521
lng: 103.8198
highlights:
  - Built X feature used by Y users
  - Improved performance by Z%
order: 1
---
```

---

### Add Education

Create `src/content/education/my-school.md`:

```yaml
---
institution: My University
degree: Bachelor of Computer Science
startDate: Aug 2022
endDate: May 2026
location: Singapore
lat: 1.3521
lng: 103.8198
highlights:
  - Dean's List
  - Relevant coursework: Algorithms, Systems
order: 1
---
```

---

### Add a Certification

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
