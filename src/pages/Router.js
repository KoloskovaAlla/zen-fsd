import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DownloadPage from './DownloadPage';
import WarrantyPage from './WarrantyPage';
import CarePage from './CarePage';
import CashbackPage from './CashbackPage';
import ClientsPage from './ClientsPage';
import PostsPage from './PostsPage';
import PostPage from './PostPage';
import NotFoundPage from './NotFoundPage';

/**
 * @function Router
 * @returns {JSX.Element}
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
