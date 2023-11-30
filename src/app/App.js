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
    if (postErrorMessage !== '' && postErrorMessage !== null) {
      setErrorMessage(postErrorMessage);
      setIsErrorMessage(true);
    }
  }, [postErrorMessage]);

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
<<<<<<< HEAD
      <Modal />
=======
      {isErrorMessage && <Modal content={errorMessage} />}
>>>>>>> a1fbb03df82cd59afca6cef66fa8cdd61060d5df
    </div>
  );
};
