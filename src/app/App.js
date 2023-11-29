import './styles/index.scss';
import { useState } from 'react';
import { useTheme, usePost } from 'shared/hooks';
import { Order, Modal } from 'features';
import { Header, Footer, Clients, Posts } from 'widgets';
import { Router } from 'pages';
import { useEffect } from 'react';

/**
 * @function App
 * @returns {JSX.Element}
 */

export const App = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  const { theme } = useTheme();
  const { postErrorMessage } = usePost();

  useEffect(() => {
    if (postErrorMessage !== '') {
      setErrorMessage(postErrorMessage);
      setIsErrorMessage(true);
    }
  }, [postErrorMessage]);

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Router />
      <Posts />
      <Clients />
      <Footer />
      <Order />
      {isErrorMessage && <Modal content={errorMessage} />}
    </div>
  );
};
