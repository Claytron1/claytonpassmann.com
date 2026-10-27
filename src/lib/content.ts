import { getCollection } from 'astro:content';

/** Published blog posts, newest first. Drafts show up only in `npm run dev`. */
export async function getPosts() {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Projects sorted by their `order` field (lowest first). */
export async function getProjects() {
	const projects = await getCollection('projects');
	return projects.sort((a, b) => a.data.order - b.data.order);
}
