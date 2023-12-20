import './styles/index.scss';
import { useState, useEffect } from 'react';
import { useTheme, usePost, useLang } from 'shared/hooks';
import { Order, ErrorModal } from 'features';
import { Header, Footer, Clients, Posts } from 'widgets';
import { Router } from 'pages';

/**
 * @function App
 * @returns {JSX.Element}
 */

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Router />
      <Posts />
      <Clients />
      <Footer />
      <Order />
      <ErrorModal />
    </div >
  );
};
