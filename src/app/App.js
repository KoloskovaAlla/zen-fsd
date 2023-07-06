import './styles/index.scss';
import { Router } from 'pages';
import { Header, Footer, Clients, Posts, Modal } from 'widgets';
import { useSelector } from 'react-redux';
import { useModal } from 'shared/model/hooks';

export const App = () => {
  /** @type {(store: object) => object} */
  const callback = (store) => store.themeReducer;
  const { theme } = useSelector(callback);

  const { isModalActive } = useModal();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Router />
      <Posts />
      <Clients />
      <Footer />
      {isModalActive &&  <Modal />}     
    </div>
  );
};
