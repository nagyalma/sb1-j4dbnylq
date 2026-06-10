import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogs, Blog } from '../data/blogs';
import LocalSEOHead from '../components/LocalSEOHead';

interface Props {
  language: 'hu' | 'en';
}

const categoryColors: Record<Blog['category'], string> = {
  'Facebook Ads': 'bg-blue-500/20 text-blue-400',
  'Google Ads':   'bg-green-500/20 text-green-400',
  'SEO':          'bg-purple-500/20 text-purple-400',
  'Marketing':    'bg-violet-500/20 text-violet-400',
};

const BlogList: React.FC<Props> = ({ language }) => {
  const navigate = useNavigate();

  const labels = language === 'hu'
    ? { heading: 'Blog', sub: 'Tippek, stratégiák és valós eredmények helyi vállalkozásoknak.', readMore: 'Elolvasom →', minRead: 'perces olvasás', metaTitle: 'Blog | Nagy Levi Marketing', metaDesc: 'Marketing tippek és stratégiák helyi vállalkozásoknak Budapestről.' }
    : { heading: 'Blog', sub: 'Tips, strategies, and real results for local businesses.', readMore: 'Read more →', minRead: 'min read', metaTitle: 'Blog | Nagy Levi Marketing', metaDesc: 'Marketing tips and strategies for local businesses from Budapest.' };

  function goToPost(slug: string) {
    navigate(language === 'en' ? `/en/blog/${slug}` : `/blog/${slug}`);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* SEO head */}
      <title>{labels.metaTitle}</title>

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
            <nav className="flex items-center space-x-6">
              <button
                onClick={() => navigate(language === 'en' ? '/en' : '/')}
                className="text-slate-300 hover:text-white transition-colors text-sm"
              >
                {language === 'hu' ? '← Főoldal' : '← Home'}
              </button>
              <button
                onClick={() => navigate(language === 'hu' ? '/en/blog' : '/blog')}
                className="text-slate-300 hover:text-white transition-colors text-sm"
              >
                {language === 'hu' ? '🇺🇸 English' : '🇭🇺 Magyar'}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Page heading */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{labels.heading}</h1>
        <p className="text-slate-400 text-lg">{labels.sub}</p>
      </div>

      {/* Card grid */}
      <div className="max-w-5xl mx-auto px-6 pb-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => {
          const content = blog[language];
          return (
            <article
              key={blog.slug}
              onClick={() => goToPost(blog.slug)}
              className="group cursor-pointer bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
            >
              <div className="px-5 pt-5">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[blog.category]}`}>
                  {blog.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span>{blog.datePublished}</span>
                  <span>·</span>
                  <span>{blog.readTime} {labels.minRead}</span>
                </div>
                <h2 className="text-base font-semibold leading-snug mb-3 group-hover:text-violet-400 transition-colors line-clamp-3 text-white">
                  {content.title}
                </h2>
                <p className="text-slate-400 text-sm line-clamp-3 mb-4">{content.intro}</p>
                <span className="text-violet-400 text-sm font-medium">{labels.readMore}</span>
              </div>
            </article>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Nagy Levi Marketing
      </footer>
    </div>
  );
};

export default BlogList;
