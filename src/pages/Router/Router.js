import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  DownloadPage,
  WarrantyPage,
  CarePage,
  CashbackPage,
  ClientsPage,
  PostsPage,
  PostPage
} from 'pages';

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
        <Route path="/" element={<HomePage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/warranty" element={<WarrantyPage />} />
        <Route path="/care" element={<CarePage />} />
        <Route path="/cashback" element={<CashbackPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:key" element={<PostPage />} />
      </Routes>
    </Suspense>
  );
};
