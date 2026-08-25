import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import PaidAdsPage from './pages/PaidAdsPage';
import AIAutomationPage from './pages/AIAutomationPage';
import AboutPage from './pages/AboutPage';
import SzepsegszalonPage from './pages/niches/SzepsegszalonPage';
import FogorvosPage from './pages/niches/FogorvosPage';
import AutoskolaPage from './pages/niches/AutoskolaPage';
import WebaruhazPage from './pages/niches/WebaruhazPage';
import EdzoTermPage from './pages/niches/EdzoTermPage';
import DijmentesAuditPage from './pages/DijmentesAuditPage';
import BlogList from './pages/BlogList';
import AuditPage from './pages/AuditPage';

const routeMap: Record<string, React.ReactElement> = {
  '/':                        <App />,
  '/en':                      <App />,
  '/fizetett-hirdetesek':     <PaidAdsPage language="hu" />,
  '/en/paid-ads':             <PaidAdsPage language="en" />,
  '/ai-automatizalas':        <AIAutomationPage language="hu" />,
  '/en/ai-automation':        <AIAutomationPage language="en" />,
  '/blog':                    <BlogList language="hu" />,
  '/en/blog':                 <BlogList language="en" />,
  '/audit':                   <AuditPage />,
  '/en/audit':                <AuditPage />,
  '/rolunk':                  <AboutPage />,
  '/en/about':                <AboutPage />,
  '/szepsegszalon-marketing': <SzepsegszalonPage />,
  '/fogorvos-marketing':      <FogorvosPage />,
  '/autoskola-marketing':     <AutoskolaPage />,
  '/webaruhaz-marketing':     <WebaruhazPage />,
  '/edzoterm-marketing':      <EdzoTermPage />,
  '/dijmentes-audit':         <DijmentesAuditPage />,
};

export function render(url: string): string {
  const component = routeMap[url] ?? <App />;
  return renderToString(
    <StaticRouter location={url}>
      {component}
    </StaticRouter>
  );
}

export const routes = Object.keys(routeMap);
