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
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  const { theme } = useTheme();
  const { postErrorMessage } = usePost();
  const postState = usePost();

  useEffect(() => {
    if (postErrorMessage !== '' && postErrorMessage !== null) {
      setErrorMessage('Поста пока нет, но он скоро здесь появится');
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
      {/* {isErrorMessage && <Modal setIsModalActive={setIsErrorMessage} content={errorMessage} />} */}
      {isErrorMessage && (
        <Modal
          isModalActive={isErrorMessage}
          setIsModalActive={setIsErrorMessage}
          title={`Сообщение об ошибке`}
          content={errorMessage}
        />
      )}
    </div >
  );
};
