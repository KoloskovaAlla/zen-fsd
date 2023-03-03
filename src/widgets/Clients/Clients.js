import classes from './Clients.module.scss';
import { useTheme, useLang } from 'shared/model/hooks'
import { API_BASE_URL } from 'shared/constants/api';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const Clients = () => {
  const [data, setData] = useState();
  const { theme } = useTheme();
  const { lang } = useLang();
  const [error, setError] = useState();
  const [hiddenClients, setHiddenClients] = useState(false);
  const { currentPage } = useSelector((state) => state.pageReducer);

  useEffect(() => {
    (async () => {
      try {
        const url = `${API_BASE_URL}/${lang}/clients.json`;
        const response = await fetch(url);

        if (!response.ok) throw new Error('Data is not received');

        const data = await response.json();
        setData(data);
      }
      catch (error) {
        console.error(error);
        setError(error);
      }
    })();
  }, [theme]);

  useEffect(() => {
    setHiddenClients(currentPage === 'clientsPage');
  }, [currentPage]);

  return (
    <div>
      {data && (
        <section className={classes.clients}>
          {!hiddenClients && (
            <div className={classes.wrapper}>
              <ul className={classes.list}>
                {theme === 'light'
                  ? data.lightThemeClients.map((client, index) => (
                    <li key={index} className={classes.item}>
                      <img
                        src={client?.source}
                        alt={client?.alternate}
                      />
                    </li>
                  ))
                  : data.darkThemeClients.map((client, index) => (
                    <li key={index} className={classes.item}>
                      <img
                        src={client?.source}
                        alt={client?.alternate}
                      />
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </section>
      )}
    </div>
  );
};
