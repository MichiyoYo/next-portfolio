import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

// Define the shape of our blog post data
export interface BlogPost {
  slug: string; // URL-friendly version of the title (e.g., "hello-world")
  title: string; // The actual title from frontmatter
  date: string; // Publication date
  excerpt: string; // Short description for previews
  tags: string[]; // Array of tags for categorization
  published: boolean; // Whether the post should be visible
  featured: boolean; // Whether to highlight this post
  content: string; // The processed HTML content
  readingTime: number; // Estimated reading time in minutes
}

// Get the path to our content directory
// path.join helps us build file paths that work on any operating system
const postsDirectory = path.join(process.cwd(), 'content/blog');

/**
 * Get all blog post slugs (filenames without extension)
 * This is like getting a list of all the books in our library
 */
export function getBlogPostSlugs(): string[] {
  try {
    // Read all files in the blog directory
    const fileNames = fs.readdirSync(postsDirectory);

    // Filter for markdown files and remove the .md extension
    // This gives us clean slugs we can use in URLs
    return fileNames
      .filter((name) => name.endsWith('.md'))
      .map((name) => name.replace(/\.md$/, ''));
  } catch (error) {
    // If the directory doesn't exist yet, return empty array
    console.warn('Blog posts directory not found:', postsDirectory);
    console.error(error);
    return [];
  }
}

/**
 * Read and process a single blog post by its slug
 * This is like taking a specific book off the shelf and reading it
 */
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  try {
    // Build the full path to the markdown file
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    // Read the file contents
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to separate frontmatter from content
    // This is like separating the book's catalog card from its pages
    const { data, content } = matter(fileContents);

    // Process the markdown content into HTML
    // This is like translating the book into a language the browser understands
    const processedContent = await remark()
      .use(remarkGfm) // Enable GitHub Flavored Markdown
      .use(remarkHtml) // Convert to HTML
      .process(content);

    // Calculate reading time (average 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    // Return our processed blog post
    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      tags: data.tags || [],
      published: data.published !== false, // Default to true if not specified
      featured: data.featured || false,
      content: processedContent.toString(),
      readingTime,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all blog posts, sorted by date (newest first)
 * This is like getting all the books from our library and arranging them by publication date
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = getBlogPostSlugs();

  // Process each blog post
  const posts = await Promise.all(slugs.map((slug) => getBlogPostBySlug(slug)));

  // Filter out any posts that failed to load and unpublished posts
  const validPosts = posts.filter(
    (post): post is BlogPost => post !== null && post.published
  );

  // Sort by date, newest first
  return validPosts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Get featured blog posts
 * This is like getting the "staff picks" from our library
 */
export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.featured);
}

/**
 * Get blog posts by tag
 * This is like finding all books in a specific genre
 */
export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) =>
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Utility function to format dates consistently
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Utility function to generate URL-friendly slugs from titles
 * This converts "Hello World!" into "hello-world"
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}
