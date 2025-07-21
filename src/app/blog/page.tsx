import { getAllBlogPosts } from '@/lib/blog';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { BlogPostCard, FeaturedPostCard } from '@/components/ui';

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

            <div className='text-gray-400 text-sm'>More posts coming soon!</div>
          </div>
        </div>

        {posts?.length > 0 ? (
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
                {posts?.some((post) => post.featured)
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
