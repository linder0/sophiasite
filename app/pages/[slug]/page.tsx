import NotionPageWrapper from '@/components/NotionPageWrapper';
import { NOTION_PAGES, NOTION_REVALIDATE_TIME } from '@/lib/config';
import { notFound } from 'next/navigation';

export const revalidate = NOTION_REVALIDATE_TIME;

type PageSlug = keyof typeof NOTION_PAGES;

export default async function DynamicPage({ params }: { params: { slug: string } }) {
  const pageConfig = NOTION_PAGES[params.slug as PageSlug];
  
  if (!pageConfig) {
    notFound();
  }

  const { url, title } = pageConfig;
  return <NotionPageWrapper pageUrl={url} title={title} />;
}

// Generate static params for all known pages
export async function generateStaticParams() {
  return Object.keys(NOTION_PAGES).map((slug) => ({
    slug,
  }));
}
