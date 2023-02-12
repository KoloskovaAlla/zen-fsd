import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy} from 'react'

export const Router = () => {
  const LazyHomePage = lazy(() => import('./pages/HomePage'));
  const LazyDownloadPage = lazy(() => import('./pages/DownloadPage'));
  const LazyWarrantyPage = lazy(() => import('./pages/WarrantyPage'));
  const LazyCarePage = lazy(() => import('./pages/CarePage'));
  const LazyCashbackPage = lazy(() => import('./pages/CashbackPage'));
  const LazyClientsPage = lazy(() => import('./pages/ClientsPage'));
  const LazyPostsPage = lazy(() => import('./pages/PostsPage'));

return (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path='/' element={<LazyHomePage />} />
      <Route path='/download' element={<LazyDownloadPage />} />
      <Route path='/warranty' element={<LazyWarrantyPage />} />
      <Route path='/care' element={<LazyCarePage />} />
      <Route path='/cashback' element={<LazyCashbackPage />} />
      <Route path='/clients' element={<LazyClientsPage />} />
      <Route path='/posts' element={<LazyPostsPage />} />
    </Routes>
</Suspense>
)
}