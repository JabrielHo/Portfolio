import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    highlights: z.array(z.string()).default([]),
    lat: z.number(),
    lng: z.number(),
    location: z.string(),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    course: z.string().optional(),
    description: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    startDate: z.string(),
    endDate: z.string(),
    link: z.string().optional(),
    github: z.string().optional(),
    order: z.number().default(0),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    highlights: z.array(z.string()).default([]),
    lat: z.number(),
    lng: z.number(),
    location: z.string(),
    order: z.number().default(0),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/certifications" }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    issueDate: z.string(),
    expiryDate: z.string().optional(),
    description: z.string().optional(),
    link: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  experience,
  projects,
  education,
  certifications,
};
