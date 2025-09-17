import { Handler } from '@netlify/functions';
import Parser from 'rss-parser';

// --- Configuration ---
// Grouped for easy management.

const FEEDS = [
  { name: 'Reuters Africa', url: 'https://feeds.reuters.com/reuters/AFRICAnews' },
  { name: 'UN OCHA - Ethiopia', url: 'https://reports.unocha.org/en/country/ethiopia/feed/' },
  { name: 'Horn of Africa - The Guardian', url: 'https://www.theguardian.com/world/horn-of-africa/rss' },
  { name: 'Ethiopia Insight', url: 'https://www.ethiopia-insight.com/feed/' },
  { name: 'Borkena', url: 'https://borkena.com/feed/' },
  { name: 'BBC News - Africa', url: 'https://feeds.bbci.co.uk/news/world/africa/rss.xml' }
];

const KEYWORDS = ['tigray', 'tigrayan', 'tigrean', 'tigrinya', 'mekelle', 'axum', 'adwa', 'shire', 'abi adi', 'adigrat', 'humera', 'wukro', 'ayder'];

const DEFAULT_MAX_ARTICLES = 18;
const MIN_ARTICLES = 1;
const MAX_ARTICLES = 50; // Increased max limit

// --- Type Definitions ---

// Type for items parsed from rss-parser
type RssFeedItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  content?: string;
  contentSnippet?: string;
  isoDate?: string;
  enclosure?: {
    url?: string;
  };
};

// Type for our final, structured article object
type Article = {
  title: string;
  description: string;
  publishedAt: string;
  url: string;
  image?: string;
  source: {
    name: string;
  };
};

/**
 * Extracts a relevant image URL from an RSS feed item.
 * @param item The RSS feed item.
 * @returns An image URL string or undefined.
 */
const extractImageUrl = (item: RssFeedItem): string | undefined => {
  // 1. Prefer the 'enclosure' tag if it exists (standard way)
  if (item.enclosure?.url) {
    return item.enclosure.url;
  }
  
  // 2. Fallback: Search for the first <img> tag in the content
  const content = item.content || '';
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }

  return undefined;
};

/**
 * Cleans and truncates a string, typically for a description.
 * @param text The input string (potentially with HTML).
 * @param maxLength The maximum length of the output string.
 * @returns A cleaned and truncated string.
 */
const cleanAndTruncate = (text: string, maxLength: number = 200): string => {
  if (!text) return '';
  const cleaned = text.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.substring(0, maxLength)}...`;
};

/**
* Processes a single RSS feed, filters for keywords, and formats the articles.
* @param feed The feed object containing name and URL.
* @returns A promise that resolves to an array of Article objects.
*/
const processFeed = async (feed: { name: string; url: string }): Promise<Article[]> => {
  const parser = new Parser();
  const relevantArticles: Article[] = [];

  try {
    const parsedFeed = await parser.parseURL(feed.url);
    const items = (parsedFeed.items as RssFeedItem[]) || [];

    for (const item of items) {
      const title = (item.title || '').trim();
      const contentSnippet = (item.contentSnippet || item.content || '').trim();
      const combinedText = `${title} ${contentSnippet}`.toLowerCase();

      // Check if any keyword is present in the title or content
      const isRelevant = KEYWORDS.some(k => combinedText.includes(k));

      if (isRelevant) {
        relevantArticles.push({
          title: title || 'Untitled',
          description: cleanAndTruncate(contentSnippet),
          publishedAt: item.isoDate || item.pubDate || new Date().toISOString(),
          url: item.link || '#',
          image: extractImageUrl(item),
          source: { name: feed.name },
        });
      }
    }
  } catch (error) {
    console.error(`Failed to parse feed: ${feed.name} (${feed.url})`, error);
  }
  
  return relevantArticles;
};

// --- Netlify Handler ---

export const handler: Handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    // --- Fetch and Process All Feeds Concurrently ---
    const allArticlePromises = FEEDS.map(feed => processFeed(feed));
    const nestedArticles = await Promise.all(allArticlePromises);
    const allArticles = nestedArticles.flat();

    // --- De-duplicate by URL ---
    const seenUrls = new Set<string>();
    const uniqueArticles = allArticles.filter(article => {
      if (!article.url || article.url === '#' || seenUrls.has(article.url)) {
        return false;
      }
      seenUrls.add(article.url);
      return true;
    });

    // --- Sort by date (newest first) ---
    const sortedArticles = uniqueArticles.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    // --- Limit results based on query parameter ---
    const maxParam = event.queryStringParameters?.max;
    const max = parseInt(maxParam || `${DEFAULT_MAX_ARTICLES}`, 10);
    const limit = Math.max(MIN_ARTICLES, Math.min(MAX_ARTICLES, isNaN(max) ? DEFAULT_MAX_ARTICLES : max));
    const limitedArticles = sortedArticles.slice(0, limit);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ articles: limitedArticles }),
    };
  } catch (error) {
    console.error('News fetch handler error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to fetch news' }),
    };
  }
};