export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  published: boolean;
  featured: boolean;
  content: string;
  readingTime: number;
}
