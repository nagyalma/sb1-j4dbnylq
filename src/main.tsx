import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import AuditPage from './pages/AuditPage.tsx';
import BlogList from './pages/BlogList.tsx';
import BlogPost from './pages/BlogPost.tsx';
import PaidAdsPage from './pages/PaidAdsPage.tsx';
import AIAutomationPage from './pages/AIAutomationPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import SzepsegszalonPage from './pages/niches/SzepsegszalonPage.tsx';
import FogorvosPage from './pages/niches/FogorvosPage.tsx';
import AutoskolaPage from './pages/niches/AutoskolaPage.tsx';
import WebaruhazPage from './pages/niches/WebaruhazPage.tsx';
import EdzoTermPage from './pages/niches/EdzoTermPage.tsx';
import DijmentesAuditPage from './pages/DijmentesAuditPage.tsx';
import './index.css';

const router = createBrowserRouter([
  { path: '/audit', element: <AuditPage /> },
  { path: '/en/audit', element: <AuditPage /> },
  { path: '/blog', element: <BlogList language="hu" /> },
  { path: '/blog/:slug', element: <BlogPost language="hu" /> },
  { path: '/en/blog', element: <BlogList language="en" /> },
  { path: '/en/blog/:slug', element: <BlogPost language="en" /> },
  { path: '/fizetett-hirdetesek', element: <PaidAdsPage language="hu" /> },
  { path: '/en/paid-ads', element: <PaidAdsPage language="en" /> },
  { path: '/ai-automatizalas', element: <AIAutomationPage language="hu" /> },
  { path: '/en/ai-automation', element: <AIAutomationPage language="en" /> },
  { path: '/rolunk', element: <AboutPage /> },
  { path: '/en/about', element: <AboutPage /> },
  { path: '/szepsegszalon-marketing', element: <SzepsegszalonPage /> },
  { path: '/fogorvos-marketing', element: <FogorvosPage /> },
  { path: '/autoskola-marketing', element: <AutoskolaPage /> },
  { path: '/webaruhaz-marketing', element: <WebaruhazPage /> },
  { path: '/edzoterm-marketing', element: <EdzoTermPage /> },
  { path: '/dijmentes-audit', element: <DijmentesAuditPage /> },
  { path: '*', element: <App /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
