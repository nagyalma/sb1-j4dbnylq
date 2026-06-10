import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBlogBySlug, BlogSection, BlogFAQ } from '../data/blogs';

interface Props {
  language: 'hu' | 'en';
}

const BASE_URL = 'https://levinagymarketing.com';

function buildBlogPostingSchema(blog: ReturnType<typeof getBlogBySlug>, language: 'hu' | 'en') {
  if (!blog) return null;
  const content = blog[language];
  const url = `${BASE_URL}${language === 'en' ? '/en' : ''}/blog/${blog.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': url,
    headline: content.title,
    description: content.metaDescription,
    keywords: content.keywords.join(', '),
    datePublished: blog.datePublished,
    dateModified: blog.dateModified,
    inLanguage: language === 'hu' ? 'hu-HU' : 'en-US',
    url,
    image: blog.coverImage,
    author: { '@type': 'Person', '@id': `${BASE_URL}/#person-nagylevi`, name: 'Nagy Levi' },
    publisher: { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, name: 'Nagy Levi Marketing' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
}

function buildBreadcrumbSchema(blog: ReturnType<typeof getBlogBySlug>, language: 'hu' | 'en') {
  if (!blog) return null;
  const content = blog[language];
  const homeUrl = `${BASE_URL}${language === 'en' ? '/en' : ''}`;
  const blogListUrl = `${homeUrl}/blog`;
  const postUrl = `${blogListUrl}/${blog.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'hu' ? 'Főoldal' : 'Home', item: homeUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: blogListUrl },
      { '@type': 'ListItem', position: 3, name: content.title, item: postUrl },
    ],
  };
}

function buildFAQSchema(faqs: BlogFAQ[]) {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

function renderSection(section: BlogSection, idx: number) {
  switch (section.type) {
    case 'h2':
      return <h2 key={idx} className="text-2xl font-bold mt-10 mb-4 text-white">{section.content}</h2>;
    case 'h3':
      return <h3 key={idx} className="text-xl font-semibold mt-7 mb-3 text-white">{section.content}</h3>;
    case 'p':
      return <p key={idx} className="text-slate-300 leading-relaxed mb-4">{section.content}</p>;
    case 'ul':
      return (
        <ul key={idx} className="list-disc list-inside space-y-2 mb-5 text-slate-300">
          {section.items?.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    case 'ol':
      return (
        <ol key={idx} className="list-decimal list-inside space-y-2 mb-5 text-slate-300">
          {section.items?.map((item, i) => <li key={i}>{item}</li>)}
        </ol>
      );
    case 'callout':
      return (
        <div key={idx} className="border-l-4 border-violet-500 bg-violet-500/10 rounded-r-xl px-5 py-4 mb-5">
          <p className="text-violet-200 font-medium">{section.content}</p>
        </div>
      );
    case 'cta':
      return (
        <div key={idx} className="bg-slate-700 border border-violet-500/30 rounded-2xl px-6 py-6 my-8 text-center">
          <p className="text-white font-semibold mb-4">{section.content}</p>
          <a
            href="/#contact"
            className="inline-flex items-center px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-lg transition-colors"
          >
            {section.items?.[0] ?? 'Kapcsolatfelvétel'}
          </a>
        </div>
      );
    default:
      return null;
  }
}

const BlogPost: React.FC<Props> = ({ language }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const blog = slug ? getBlogBySlug(slug) : undefined;

  useEffect(() => {
    if (!blog) return;
    const content = blog[language];
    document.title = content.metaTitle;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = content.metaDescription;
  }, [blog, language]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">404 – Blog post not found</p>
          <button
            onClick={() => navigate(language === 'en' ? '/en/blog' : '/blog')}
            className="text-violet-400 hover:underline"
          >
            {language === 'hu' ? '← Vissza a bloghoz' : '← Back to blog'}
          </button>
        </div>
      </div>
    );
  }

  const content = blog[language];
  const schemas = [
    buildBlogPostingSchema(blog, language),
    buildBreadcrumbSchema(blog, language),
    buildFAQSchema(content.faqs),
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Auto-generated JSON-LD schemas */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* Header */}
      <header className="bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate(language === 'en' ? '/en' : '/')}
              className="text-xl font-bold text-white hover:text-violet-400 transition-colors"
            >
              Nagy Levi Marketing
            </button>
            <div className="flex items-center gap-6">
              <button
                onClick={() => navigate(language === 'en' ? '/en/blog' : '/blog')}
                className="text-slate-300 hover:text-white transition-colors text-sm"
              >
                {language === 'hu' ? '← Blog' : '← Blog'}
              </button>
              <button
                onClick={() => {
                  const otherLang = language === 'hu' ? 'en' : 'hu';
                  navigate(otherLang === 'en' ? `/en/blog/${blog.slug}` : `/blog/${blog.slug}`);
                }}
                className="text-slate-300 hover:text-white transition-colors text-sm"
              >
                {language === 'hu' ? '🇺🇸 English' : '🇭🇺 Magyar'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-8">
        <div className="flex flex-wrap items-center gap-3 mb-5 text-sm text-slate-500">
          <span className={`px-3 py-1 rounded-full font-medium text-xs ${
            blog.category === 'Facebook Ads' ? 'bg-blue-500/20 text-blue-400' :
            blog.category === 'Google Ads' ? 'bg-green-500/20 text-green-400' :
            blog.category === 'SEO' ? 'bg-purple-500/20 text-purple-400' :
            'bg-violet-500/20 text-violet-400'
          }`}>
            {blog.category}
          </span>
          <span>{blog.datePublished}</span>
          <span>·</span>
          <span>{blog.readTime} {language === 'hu' ? 'perces olvasás' : 'min read'}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-white">{content.title}</h1>
        <p className="text-slate-300 text-lg leading-relaxed mb-8">{content.intro}</p>

      </div>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-6 pb-16">
        {content.sections.map((section, idx) => renderSection(section, idx))}

        {/* FAQ */}
        {content.faqs.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl font-bold mb-6 text-white">
              {language === 'hu' ? 'Gyakori kérdések' : 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-4">
              {content.faqs.map((faq, i) => (
                <div key={i} className="border border-slate-700 rounded-xl p-5 bg-slate-800">
                  <p className="font-semibold text-white mb-2">{faq.q}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA banner */}
        <div className="mt-14 bg-slate-800 border border-violet-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            {language === 'hu' ? 'Készen állsz több ügyfélre?' : 'Ready for more clients?'}
          </h3>
          <p className="text-slate-400 mb-6">
            {language === 'hu'
              ? '30 napos garanciával segítünk több ügyfelet szerezni Facebook, Google és TikTok hirdetésekkel.'
              : 'We help you get more clients with Facebook, Google, and TikTok ads — 30-day guarantee.'}
          </p>
          <a
            href={language === 'en' ? '/en#contact' : '/#contact'}
            className="inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-lg transition-colors"
          >
            {language === 'hu' ? 'Felveszem a kapcsolatot' : 'Reach Out To Me'}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Author */}
        <div className="mt-12 flex items-center gap-4 border-t border-slate-700 pt-8">
          <img
            src="https://res.cloudinary.com/dduros3xw/image/upload/v1754826429/Win_tdgauq.png"
            alt="Nagy Levi"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-white">Nagy Levi</p>
            <p className="text-slate-400 text-sm">
              {language === 'hu' ? 'Marketing Specialista, Budapest' : 'Marketing Specialist, Budapest'}
            </p>
          </div>
        </div>
      </article>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Nagy Levi Marketing
      </footer>
    </div>
  );
};

export default BlogPost;
