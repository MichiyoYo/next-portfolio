import { formatDate } from '@/lib/utils';
import { BlogPost } from './types';
import Link from 'next/link';
import { ArrowRight, Calendar, Star } from 'lucide-react';
import { Badge, Tag } from '@/components/ui';

export function BlogPostCard({ post }: { post: BlogPost }) {
  if (!post) {
    return null; // Handle case where post is not found
  }
  return (
    <Link href={`/blog/${post.slug}`} className='group block'>
      <article className='h-full p-6 bg-slate-800/60 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 transform hover:scale-105'>
        <div className='flex items-start justify-between mb-4'>
          <div className='flex gap-2'>
            {post?.featured && <Badge Icon={Star} label='Featured' />}
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
                <Tag key={tag} name={tag} />
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
