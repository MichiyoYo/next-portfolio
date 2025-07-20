import { getAllBlogPosts, formatDate, BlogPost } from '@/lib/blog';
import Link from 'next/link';
import { Calendar, ArrowRight, Star } from 'lucide-react';

// Metadata for the blog index page
export const metadata = {
  title: 'Blog | Cristina Lester',
  description:
    'Thoughts on web development, React, TypeScript, and building great user experiences.',
  keywords: [
    'blog',
    'web development',
    'react',
    'typescript',
    'frontend',
    'programming',
  ],
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 pt-20 px-4'>
      <div className='max-w-6xl mx-auto py-12'>
        {/* TODO: move to layout */}
        <header className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            <span className='bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent'>
              My Blog
            </span>
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Welcome to my corner of the internet! Here I share insights about
            web development, lessons learned from building projects, and
            thoughts on the ever-evolving tech landscape.
          </p>
        </header>

        {/* Posts Count & Status */}
        <div className='mb-8 p-6 bg-slate-800/60 rounded-lg border border-slate-700'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-xl font-semibold text-emerald-400 mb-2'>
                Latest Posts
              </h2>
              <p className='text-gray-300'>
                {posts.length === 0 ? (
                  <span className='text-amber-400'>
                    No blog posts found. Check back soon for new content!
                  </span>
                ) : (
                  <>
                    Found{' '}
                    <span className='text-emerald-400 font-bold'>
                      {posts.length}
                    </span>{' '}
                    published {posts.length === 1 ? 'post' : 'posts'}
                    {posts.some((post) => post.featured) && (
                      <span className='text-gray-400 ml-2'>
                        • {posts.filter((post) => post.featured).length}{' '}
                        featured
                      </span>
                    )}
                  </>
                )}
              </p>
            </div>

            {/* Optional: Add RSS or subscribe link here */}
            <div className='text-gray-400 text-sm'>More posts coming soon!</div>
          </div>
        </div>

        {posts.length > 0 ? (
          <>
            {/* Featured Posts Section - only show if we have featured posts */}
            {posts.some((post) => post.featured) && (
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-2'>
                  <Star className='text-emerald-400' size={24} />
                  Featured Posts
                </h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                  {posts
                    .filter((post) => post.featured)
                    .map((post) => (
                      <FeaturedPostCard key={post.slug} post={post} />
                    ))}
                </div>
              </section>
            )}

            {/* All Posts Section */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                {posts.some((post) => post.featured)
                  ? 'All Posts'
                  : 'Recent Posts'}
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                {posts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          </>
        ) : (
          /* Empty State */
          //   TODO: move to layout
          <div className='text-center py-16'>
            <div className='text-6xl mb-6'>📝</div>
            <h3 className='text-2xl font-bold text-white mb-4'>Coming Soon!</h3>
            <p className='text-gray-300 mb-8 max-w-md mx-auto'>
              I&apos;m working on some great content to share with you. Check
              back soon for posts about web development, React, and more!
            </p>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors'
            >
              Get notified when I publish
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

{
  /* TODO: move to separate file */
}
function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className='group block'>
      <article className='h-full p-8 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105'>
        {/* Featured Badge */}
        <div className='flex items-center justify-between mb-4'>
          <span className='inline-flex items-center gap-1 px-3 py-1 bg-emerald-600 text-white rounded-full text-sm font-medium'>
            <Star size={14} fill='currentColor' />
            Featured
          </span>
          <span className='text-xs text-gray-400 bg-slate-700 px-2 py-1 rounded'>
            {post.readingTime} min read
          </span>
        </div>

        <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors'>
          {post.title}
        </h3>
        <p className='text-gray-300 mb-6 leading-relaxed'>{post.excerpt}</p>

        <div className='space-y-4'>
          <div className='flex items-center text-sm text-gray-400'>
            <Calendar size={16} className='mr-2' />
            {formatDate(post.date)}
          </div>

          {post.tags.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {post.tags.slice(0, 3).map((tag: string) => (
                <span
                  key={tag}
                  className='text-xs bg-emerald-600/30 text-emerald-300 px-2 py-1 rounded'
                >
                  #{tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className='text-xs text-gray-400 px-2 py-1'>
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>

        <div className='flex items-center text-emerald-400 text-sm font-medium mt-6 group-hover:text-emerald-300 transition-colors'>
          <span>Read full post</span>
          <ArrowRight
            size={16}
            className='ml-2 transform group-hover:translate-x-1 transition-transform'
          />
        </div>
      </article>
    </Link>
  );
}

// Regular post card component
// TODO: move to separate component file
function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className='group block'>
      <article className='h-full p-6 bg-slate-800/60 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 transform hover:scale-105'>
        <div className='flex items-start justify-between mb-4'>
          <div className='flex gap-2'>
            {post.featured && (
              <span className='inline-flex items-center gap-1 px-2 py-1 bg-emerald-600 text-white rounded text-xs font-medium'>
                <Star size={12} fill='currentColor' />
                Featured
              </span>
            )}
          </div>
          <span className='text-xs text-gray-400 bg-slate-700 px-2 py-1 rounded'>
            {post.readingTime} min read
          </span>
        </div>

        <h3 className='text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2'>
          {post.title}
        </h3>

        <p className='text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed'>
          {post.excerpt}
        </p>

        <div className='space-y-3 mt-auto'>
          {post.tags.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {post.tags.slice(0, 2).map((tag: string) => (
                <span
                  key={tag}
                  className='text-xs bg-emerald-600/20 text-emerald-300 px-2 py-1 rounded'
                >
                  #{tag}
                </span>
              ))}
              {post.tags.length > 2 && (
                <span className='text-xs text-gray-400 px-2 py-1'>
                  +{post.tags.length - 2}
                </span>
              )}
            </div>
          )}

          <div className='flex items-center justify-between text-xs text-gray-400'>
            <div className='flex items-center'>
              <Calendar size={14} className='mr-1' />
              {formatDate(post.date)}
            </div>

            <div className='flex items-center text-emerald-400 group-hover:text-emerald-300 transition-colors'>
              <span>Read more</span>
              <ArrowRight
                size={14}
                className='ml-1 transform group-hover:translate-x-1 transition-transform'
              />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
