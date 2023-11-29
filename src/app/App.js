import './styles/index.scss';
import { useState } from 'react';
import { useTheme, usePost } from 'shared/hooks';
import { Order, Modal } from 'features';
import { Header, Footer, Clients, Posts } from 'widgets';
import { Router } from 'pages';
import {useEffect} from 'react';

/**
 * @function App
 * @returns {JSX.Element}
 */

export const App = () => {
  const { theme } = useTheme();

  const [errorMessage, setError] = useState('');
  const [isErrorMessage, setIsErrorMessage] = useState(false)

  const { postErrorMessage } = usePost();
  useEffect(() => {
    if (postErrorMessage!='')
  }, [postErrorMessage]);

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Router />
      <Posts />
      <Clients />
      <Footer />
      <Order />
      <Modal />
    </div>
  );
};
