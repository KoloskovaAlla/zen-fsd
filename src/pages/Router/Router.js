import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const LazyHomePage = lazy(() => import('../HomePage'));
const LazyDownloadPage = lazy(() => import('../DownloadPage'));
const LazyWarrantyPage = lazy(() => import('../WarrantyPage'));
const LazyCarePage = lazy(() => import('../CarePage'));
const LazyCashbackPage = lazy(() => import('../CashbackPage'));
const LazyClientsPage = lazy(() => import('../ClientsPage'));
const LazyPostsPage = lazy(() => import('../PostsPage'));
const LazyPostPage = lazy(() => import('../PostPage'));

/**
 * @typedef {import('react-router-dom').RouteProps['element']} RouteElement
 */

/**
 * @function Router
 * @returns {RouteElement}
 */

export const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LazyHomePage />} />
        <Route path="/download" element={<LazyDownloadPage />} />
        <Route path="/warranty" element={<LazyWarrantyPage />} />
        <Route path="/care" element={<LazyCarePage />} />
        <Route path="/cashback" element={<LazyCashbackPage />} />
        <Route path="/clients" element={<LazyClientsPage />} />
        <Route path="/posts" element={<LazyPostsPage />} />
        <Route path="/posts/:key" element={<LazyPostPage />} />
      </Routes>
    </Suspense>
  );
};
