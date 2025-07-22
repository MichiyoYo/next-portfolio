import Link from 'next/link';
import { ArrowRight, Calendar, Star } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from './types';
import { Badge } from '../Badge';
import { Tag } from '@/components/ui';

export function FeaturedPostCard({ post }: { post: BlogPost }) {
  if (!post) {
    return null; // Handle case where post is not found
  }
  return (
    <Link href={`/blog/${post.slug}`} className='group block'>
      <article className='h-full p-8 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105'>
        <div className='flex items-center justify-between mb-4'>
          <Badge Icon={Star} label='Featured' />
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
                <Tag key={tag} name={tag} />
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
