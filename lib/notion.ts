import { NotionAPI } from 'notion-client';

const notion = new NotionAPI();

// Simple in-memory cache
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_TTL = 1000 * 60 * 60; // 1 hour cache

export async function getNotionPage(pageId: string) {
  try {
    // Check cache first
    const cached = cache.get(pageId);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      console.log(`Cache hit for page: ${pageId}`);
      return cached.data;
    }

    console.log(`Fetching page from Notion: ${pageId}`);
    const recordMap = await notion.getPage(pageId);

    // Store in cache
    cache.set(pageId, { data: recordMap, timestamp: Date.now() });

    return recordMap;
  } catch (error) {
    console.error('Error fetching Notion page:', error);
    return null;
  }
}

// Extract page ID from Notion URL
export function getPageIdFromUrl(url: string): string {
  // Notion URLs look like: https://fan-angora-201.notion.site/What-is-VROOM-2fb8e294c47680afb9fac692c6828a43
  // We need to extract: 2fb8e294c47680afb9fac692c6828a43
  const match = url.match(/([a-f0-9]{32})/);
  return match ? match[1] : '';
}
