import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPosts, formatDate } from '@/lib/blog';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 pt-20'>
      <article className='max-w-4xl mx-auto px-4 py-12'>
        <div className='mb-8'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-200'
          >
            <ArrowLeft size={18} />
            <span>Back to Blog</span>
          </Link>
        </div>
        <header className='mb-12'>
          {post.featured && (
            <div className='mb-4'>
              <span className='inline-flex items-center gap-1 px-3 py-1 bg-emerald-600 text-white rounded-full text-sm font-medium'>
                ⭐ Featured Post
              </span>
            </div>
          )}

          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6 leading-tight'>
            {post.title}
          </h1>

          <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
            {post.excerpt}
          </p>

          <div className='flex flex-wrap items-center gap-6 text-gray-400 text-sm'>
            <div className='flex items-center gap-2'>
              <User size={16} />
              <span>Cristina Lester</span>
            </div>

            <div className='flex items-center gap-2'>
              <Calendar size={16} />
              <span>{formatDate(post.date)}</span>
            </div>

            <div className='flex items-center gap-2'>
              <Clock size={16} />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

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

        <div className='prose prose-lg prose-invert prose-emerald max-w-none'>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* TODO: move footer to a layout */}
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
