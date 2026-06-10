import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import AuditPage from './pages/AuditPage.tsx';
import BlogList from './pages/BlogList.tsx';
import BlogPost from './pages/BlogPost.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/audit',
    element: <AuditPage />,
  },
  {
    path: '/en/audit',
    element: <AuditPage />,
  },
  {
    path: '/blog',
    element: <BlogList language="hu" />,
  },
  {
    path: '/blog/:slug',
    element: <BlogPost language="hu" />,
  },
  {
    path: '/en/blog',
    element: <BlogList language="en" />,
  },
  {
    path: '/en/blog/:slug',
    element: <BlogPost language="en" />,
  },
  {
    path: '*',
    element: <App />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
