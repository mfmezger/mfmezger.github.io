import type { Metadata } from 'next';
import Link from 'next/link';
import PageWrapper from '@/components/Template/PageWrapper';
import blogs from '@/data/blogs';
import { getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Publications and articles by Marc Fabian Mezger on AI, RAG, and Medical Computer Science.',
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
};

interface UnifiedItem {
  title: string;
  url: string;
  date: string;
  description: string;
  isExternal: boolean;
}

// Extracted component to reduce duplication
interface BlogsItemProps {
  item: UnifiedItem;
  showDate?: boolean;
}

function BlogsItem({ item, showDate = true }: BlogsItemProps) {
  const content = (
    <>
      {showDate && item.date && (
        <time className="blogs-date" dateTime={item.date}>
          {formatDate(item.date)}
        </time>
      )}
      <h2 className="blogs-title">{item.title}</h2>
      <p className="blogs-description">{item.description}</p>
      {item.isExternal && (
        <span className="blogs-external" aria-hidden="true">
          ↗
        </span>
      )}
    </>
  );

  if (item.isExternal) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="blogs-item"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.url} className="blogs-item">
      {content}
    </Link>
  );
}

export default function BlogsPage() {
  // Get internal posts from markdown files
  const internalPosts = getAllPosts();
  const internalItems: UnifiedItem[] = internalPosts.map((post) => ({
    title: post.title,
    url: `/blogs/${post.slug}`,
    date: post.date,
    description: post.description,
    isExternal: false,
  }));

  // Get external articles from data file
  const externalItems: UnifiedItem[] = blogs.map((item) => ({
    ...item,
    isExternal: true,
  }));

  // Merge and sort all items
  const allItems = [...internalItems, ...externalItems];
  const dated = allItems
    .filter((item) => item.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const undated = allItems.filter((item) => !item.date);

  return (
    <PageWrapper>
      <article className="blogs-page">
        <header className="blogs-header">
          <div className="blogs-header-row">
            <h1 className="page-title">Blogs</h1>
            <a
              href="/feed.xml"
              className="blogs-rss-link"
              title="RSS Feed"
              aria-label="RSS Feed"
            >
              RSS
            </a>
          </div>
        </header>

        <div className="blogs-list">
          {dated.map((item) => (
            <BlogsItem key={item.url} item={item} />
          ))}

          {undated.length > 0 && (
            <>
              <div className="blogs-section-label">Guides</div>
              {undated.map((item) => (
                <BlogsItem key={item.url} item={item} showDate={false} />
              ))}
            </>
          )}
        </div>
      </article>
    </PageWrapper>
  );
}
