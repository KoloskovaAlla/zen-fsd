import './styles/index.scss';
import { useState, useEffect } from 'react';
import { useTheme, usePost, useLang } from 'shared/hooks';
import { POST_ERRORS } from 'shared/constants/api';
import { Order, Modal } from 'features';
import { Header, Footer, Clients, Posts } from 'widgets';
import { Router } from 'pages';

/**
 * @function App
 * @returns {JSX.Element}
 */

export const App = () => {
  const { theme } = useTheme();
  const { lang } = useLang();
  const { postErrorMessage } = usePost();

  const [displayedErrorMessage, setDisplayedErrorMessage] = useState('');
  const [isModalActive, setIsModalActive] = useState(false);

  const { modalTitle, postDisplayedErrorMessage } = POST_ERRORS[lang];

  useEffect(() => {
    const isPostError = postErrorMessage !== '' && postErrorMessage !== null;

    if (isPostError) {
      setIsModalActive(true);
      setDisplayedErrorMessage(postDisplayedErrorMessage);
    }
  }, [postErrorMessage, lang]);

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
          isModalActive
          setIsModalActive={setIsModalActive}
          title={modalTitle}
          content={displayedErrorMessage}
        />
      )}
    </div >
  );
};
