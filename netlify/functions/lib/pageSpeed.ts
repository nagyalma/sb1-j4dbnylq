import axios from 'axios';

export interface PageSpeedData {
  performanceScore: number | null;
  seoScore: number | null;
  lcp: number | null;
  cls: number | null;
  fcp: number | null;
}

export async function fetchPageSpeed(url: string): Promise<PageSpeedData> {
  const apiKey = process.env.PAGESPEED_API_KEY;
  const base = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
  const params = new URLSearchParams({
    url,
    category: 'performance',
    strategy: 'mobile',
  });
  params.append('category', 'seo');
  if (apiKey) params.set('key', apiKey);

  const response = await axios.get(`${base}?${params}`, { timeout: 10000 });
  const data = response.data;

  const cats = data.lighthouseResult?.categories || {};
  const audits = data.lighthouseResult?.audits || {};

  return {
    performanceScore: cats.performance?.score != null ? Math.round(cats.performance.score * 100) : null,
    seoScore: cats.seo?.score != null ? Math.round(cats.seo.score * 100) : null,
    lcp: audits['largest-contentful-paint']?.numericValue ?? null,
    cls: audits['cumulative-layout-shift']?.numericValue ?? null,
    fcp: audits['first-contentful-paint']?.numericValue ?? null,
  };
}
