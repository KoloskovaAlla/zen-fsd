import './styles/index.scss';
import { Router } from 'pages';
import { Header, Footer, Clients, Blog } from 'widgets';
import { useSelector } from 'react-redux';

export const App = () => {
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Router />
      <Blog />
      <Clients />
      <Footer />
    </div>
  );
};
