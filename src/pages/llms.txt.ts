import type { APIRoute } from "astro";
import { dateRange, getSortedData } from "../lib/content";
import { profile } from "../lib/profile";

// A Markdown summary of the portfolio for LLM tools (https://llmstxt.org), built from the same content collections as the homepage.
const bullets = (items: string[], indent = "  ") => items.map((i) => `${indent}- ${i}`).join("\n");

export const GET: APIRoute = async ({ site }) => {
  const experience = await getSortedData("experience");
  const education = await getSortedData("education");
  const projects = await getSortedData("projects");
  const certifications = await getSortedData("certifications");

  const sections = [
    `# ${profile.name}`,
    "> Software engineer based in Singapore.",
    [
      "## Links",
      `- [Portfolio](${site})`,
      `- [GitHub](${profile.github})`,
      `- [LinkedIn](${profile.linkedin})`,
    ].join("\n"),
    "## Experience\n" +
      experience
        .map((e) => `- **${e.title}, ${e.company}** (${dateRange(e.startDate, e.endDate)})\n${bullets(e.highlights)}`)
        .join("\n"),
    "## Education\n" +
      education
        .map((e) => `- **${e.degree}, ${e.institution}** (${dateRange(e.startDate, e.endDate)})\n${bullets(e.highlights)}`)
        .join("\n"),
    "## Projects\n" +
      projects
        .map((p) => {
          const title = p.github ? `[${p.title}](${p.github})` : p.title;
          const course = p.course ? ` (${p.course})` : "";
          const demo = p.link ? `\n  - Live demo: [${p.link}](${p.link})` : "";
          return `- **${title}**${course}: ${p.tags.join(", ")}\n${bullets(p.description)}${demo}`;
        })
        .join("\n"),
    "## Certifications\n" +
      certifications
        .map((c) => `- ${c.link ? `[${c.title}](${c.link})` : c.title}, ${c.issuer} (issued ${c.issueDate})`)
        .join("\n"),
  ];

  return new Response(sections.join("\n\n") + "\n", {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
