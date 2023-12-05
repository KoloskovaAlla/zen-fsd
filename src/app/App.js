import './styles/index.scss';
import { useState, useEffect } from 'react';
import { useTheme, usePost } from 'shared/hooks';
import { Order, Modal } from 'features';
import { Header, Footer, Clients, Posts } from 'widgets';
import { Router } from 'pages';

/**
 * @function App
 * @returns {JSX.Element}
 */

export const App = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalActive, setIsModalActive] = useState(false);

  const { theme } = useTheme();
  const { postErrorMessage } = usePost();

  useEffect(() => {
    if (postErrorMessage !== '' && postErrorMessage !== null) {
      setErrorMessage('Поста пока нет, но он скоро здесь появится');
      setIsModalActive(true);
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
      {isModalActive && (
        <Modal
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
          title={`Сообщение об ошибке`}
          content={errorMessage}
        />
      )}
    </div >
  );
};
