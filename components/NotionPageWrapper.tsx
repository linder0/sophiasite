import NotionPage from '@/components/NotionPage';
import PageContainer from '@/components/PageContainer';
import CTAButton from '@/components/CTAButton';
import { getNotionPage, getPageIdFromUrl } from '@/lib/notion';

interface NotionPageWrapperProps {
  pageUrl: string;
  title: string;
}

/**
 * Reusable wrapper for Notion-based pages
 * Handles fetching, error states, and consistent layout
 */
export default async function NotionPageWrapper({ pageUrl, title }: NotionPageWrapperProps) {
  const pageId = getPageIdFromUrl(pageUrl);
  const recordMap = await getNotionPage(pageId);

  if (!recordMap) {
    return (
      <PageContainer>
        <h1 className="text-5xl font-bold mb-8 themed-text">{title}</h1>
        <p className="text-lg opacity-80">Unable to load content. Please try again later.</p>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <NotionPage recordMap={recordMap} title={title} />
      <CTAButton />
    </PageContainer>
  );
}
