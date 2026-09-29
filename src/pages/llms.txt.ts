import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

// A Markdown summary of the portfolio for LLM tools (https://llmstxt.org), built from the same content collections as the homepage.
const byOrder = (a: { data: { order: number } }, b: { data: { order: number } }) => a.data.order - b.data.order;
const bullets = (items: string[], indent = "  ") => items.map((i) => `${indent}- ${i}`).join("\n");

export const GET: APIRoute = async () => {
  const experience = (await getCollection("experience")).sort(byOrder).map((e) => e.data);
  const education = (await getCollection("education")).sort(byOrder).map((e) => e.data);
  const projects = (await getCollection("projects")).sort(byOrder).map((p) => p.data);
  const certifications = (await getCollection("certifications")).sort(byOrder).map((c) => c.data);

  const sections = [
    "# Jabriel Ho",
    "> Software engineer based in Singapore.",
    [
      "## Links",
      "- [Portfolio](https://jabrielho.com/)",
      "- [GitHub](https://github.com/JabrielHo)",
      "- [LinkedIn](https://linkedin.com/in/jabrielho)",
    ].join("\n"),
    "## Experience\n" +
      experience
        .map((e) => `- **${e.title}, ${e.company}** (${e.startDate} – ${e.endDate})\n${bullets(e.highlights)}`)
        .join("\n"),
    "## Education\n" +
      education
        .map((e) => `- **${e.degree}, ${e.institution}** (${e.startDate} – ${e.endDate})\n${bullets(e.highlights)}`)
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
