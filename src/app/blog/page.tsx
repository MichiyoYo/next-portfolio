import { getAllBlogPosts, formatDate } from '@/lib/blog';

export default async function TestBlogPage() {
  // This function runs on the server during build time
  // It reads all our blog posts and processes them
  const posts = await getAllBlogPosts();

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 pt-20 px-4'>
      <div className='max-w-4xl mx-auto py-12'>
        <h1 className='text-4xl font-bold text-white mb-8'>Blog System Test</h1>

        <div className='mb-8 p-6 bg-slate-800/60 rounded-lg border border-slate-700'>
          <h2 className='text-xl font-semibold text-emerald-400 mb-4'>
            System Status
          </h2>
          <p className='text-gray-300'>
            Found{' '}
            <span className='text-emerald-400 font-bold'>{posts.length}</span>{' '}
            blog posts
          </p>
          {posts.length === 0 && (
            <p className='text-amber-400 mt-2'>
              No blog posts found. Make sure you&apos;ve created the
              content/blog directory and added your hello-world.md file.
            </p>
          )}
        </div>

        {posts.length > 0 && (
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold text-white'>Your Blog Posts</h2>

            {posts.map((post) => (
              <div
                key={post.slug}
                className='p-6 bg-slate-800/60 rounded-lg border border-slate-700'
              >
                <div className='flex items-start justify-between mb-4'>
                  <h3 className='text-xl font-bold text-white'>{post.title}</h3>
                  <div className='flex gap-2'>
                    {post.featured && (
                      <span className='px-2 py-1 text-xs bg-emerald-600 text-white rounded'>
                        Featured
                      </span>
                    )}
                    <span className='px-2 py-1 text-xs bg-slate-700 text-gray-300 rounded'>
                      {post.readingTime} min read
                    </span>
                  </div>
                </div>

                <p className='text-gray-300 mb-4'>{post.excerpt}</p>

                <div className='flex items-center justify-between text-sm text-gray-400'>
                  <span>{formatDate(post.date)}</span>
                  <div className='flex gap-2'>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className='px-2 py-1 bg-emerald-600/20 text-emerald-300 rounded text-xs'
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Show a preview of the HTML content */}
                <details className='mt-4'>
                  <summary className='cursor-pointer text-emerald-400 hover:text-emerald-300'>
                    Preview HTML Content
                  </summary>
                  <div className='mt-2 p-4 bg-slate-900/60 rounded text-xs text-gray-400 overflow-auto'>
                    <pre>{post.content.substring(0, 500)}...</pre>
                  </div>
                </details>
              </div>
            ))}
          </div>
        )}

        <div className='mt-12 p-6 bg-emerald-900/20 border border-emerald-600/30 rounded-lg'>
          <h3 className='text-lg font-semibold text-emerald-400 mb-2'>
            🎉 Next Steps
          </h3>
          <p className='text-gray-300'>
            If you can see your blog post above, congratulations! Your markdown
            reading system is working perfectly. We&apos;re ready to build the
            actual blog pages next.
          </p>
        </div>
      </div>
    </div>
  );
}
