import './styles/index.scss';
import { Router } from 'pages';
import { Header } from 'widgets';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Router />
    </div>
  );
};
