import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages';
import { DownloadPage } from 'pages';
import { WarrantyPage } from 'pages';
import { CarePage } from 'pages';
import { CashbackPage } from 'pages';
import { ClientsPage } from 'pages';
import { PostsPage } from 'pages';
import { PostPage } from 'pages';
import { NotFoundPage } from 'pages';

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
