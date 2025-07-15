import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPosts, formatDate } from '@/lib/blog';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';

// This interface defines what props our page component will receive
interface BlogPostPageProps {
  params: {
    slug: string; // This comes from the [slug] in our file path
  };
}

// This function tells Next.js which blog post pages to pre-generate at build time
// Think of it as giving Next.js a list of all the books in our library
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();

  // Return an array of objects with the slug parameter
  // This creates a static page for each blog post at build time
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// This function generates the page metadata (title, description, etc.)
// It runs before the page component and helps with SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Cristina Lester Blog`,
    description: post.excerpt,
    keywords: ['blog', 'web development', ...post.tags],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

// The main page component that renders our blog post
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Fetch the blog post data using the slug from the URL
  const post = await getBlogPostBySlug(params.slug);

  // If no post is found, show Next.js 404 page
  if (!post) {
    notFound();
  }

  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 pt-20'>
      <article className='max-w-4xl mx-auto px-4 py-12'>
        {/* Navigation Back to Blog */}
        <div className='mb-8'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-200'
          >
            <ArrowLeft size={18} />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className='mb-12'>
          {/* Featured Badge */}
          {post.featured && (
            <div className='mb-4'>
              <span className='inline-flex items-center gap-1 px-3 py-1 bg-emerald-600 text-white rounded-full text-sm font-medium'>
                ⭐ Featured Post
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6 leading-tight'>
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className='flex flex-wrap items-center gap-6 text-gray-400 text-sm'>
            {/* Author */}
            <div className='flex items-center gap-2'>
              <User size={16} />
              <span>Cristina Lester</span>
            </div>

            {/* Publication Date */}
            <div className='flex items-center gap-2'>
              <Calendar size={16} />
              <span>{formatDate(post.date)}</span>
            </div>

            {/* Reading Time */}
            <div className='flex items-center gap-2'>
              <Clock size={16} />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className='flex items-center gap-3 mt-6'>
              <Tag size={16} className='text-gray-400' />
              <div className='flex flex-wrap gap-2'>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className='px-3 py-1 bg-emerald-600/20 text-emerald-300 rounded-full text-sm'
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className='prose prose-lg prose-invert prose-emerald max-w-none'>
          {/* 
            This div contains the processed HTML content from our markdown.
            The 'prose' classes from Tailwind CSS automatically style 
            all the HTML elements (headings, paragraphs, lists, etc.) 
            to look beautiful without us having to write custom CSS.
            
            'dangerouslySetInnerHTML' tells React to render raw HTML.
            It's called "dangerous" because it bypasses React's protection
            against XSS attacks, but it's safe here because we control
            the markdown content.
          */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Article Footer */}
        <footer className='mt-16 pt-8 border-t border-slate-700'>
          <div className='text-center'>
            <p className='text-gray-300 mb-6'>
              Thank you for reading! If you enjoyed this post, feel free to
              share it or reach out to discuss it further.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg font-medium transition-all duration-300'
              >
                Get In Touch
              </Link>
              <Link
                href='/blog'
                className='px-6 py-3 border-2 border-emerald-400/50 hover:border-emerald-400 hover:bg-emerald-400/10 text-white rounded-lg font-medium transition-all duration-300'
              >
                Read More Posts
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
