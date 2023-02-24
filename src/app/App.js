import './styles/index.scss';
import { Router } from 'pages';
import { Header, Footer } from 'widgets';
import { useSelector } from 'react-redux';

export const App = () => {
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Router />
      <Footer />
    </div>
  );
};
