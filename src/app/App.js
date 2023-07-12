import './styles/index.scss';
import { Router } from 'pages';
import { Header, Footer, Clients, Posts } from 'widgets';
import { Order } from 'features';
import { useSelector } from 'react-redux';
import { useOrder } from 'shared/model/hooks';

export const App = () => {
  /** @type {(store: object) => object} */
  const callback = (store) => store.themeReducer;
  const { theme } = useSelector(callback);

  const { isModalActive } = useOrder();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Router />
      <Posts />
      <Clients />
      <Footer />
      {isModalActive && <Order />}
        
    </div>
  );
};
