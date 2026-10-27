# claytonpassmann.com

Personal site and blog, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Everyday tasks

| Task | How |
| --- | --- |
| Preview locally | `npm run dev` → http://localhost:4321 |
| New blog post | Add `src/content/blog/my-post.md` (copy `hello-world.md` for the frontmatter). Set `draft: true` to hide it from the live site. |
| New project | Add `src/content/projects/my-project.md`. `featured: true` shows it on the homepage; `order` sorts it. |
| Name, tagline, links | `src/consts.ts` |
| Bio, skills, experience | `src/pages/about.astro` |
| Resume | Drop a PDF at `public/resume.pdf` — the download button appears automatically. |
| Colors and fonts | `src/styles/global.css` (variables at the top) |
| Publish | `git add -A && git commit -m "..." && git push` — GitHub Actions builds and deploys. |

Search for `TODO` to find all placeholder content.
