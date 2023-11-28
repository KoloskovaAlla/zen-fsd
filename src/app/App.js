import './styles/index.scss';
import { useTheme } from 'shared/hooks';
import { Order } from 'features';
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
      {/* <ErrorModal /> */}
    </div>
  );
};
