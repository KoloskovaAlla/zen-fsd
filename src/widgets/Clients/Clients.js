import classes from './Clients.module.scss';
import { useTheme, useLang, useClients, useCurrentPage } from 'shared/model/hooks'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Clients = () => {  
  const { theme } = useTheme();
  const { lang } = useLang();
  const [hiddenClients, setHiddenClients] = useState(false);  
  const { currentPage } = useCurrentPage();
  const dispatch = useDispatch();

  const {
    fetchClientsData,  
    clientsData,  
  } = useClients();  

  useEffect(() => {
    dispatch(fetchClientsData(lang));
  }, [theme]);

  useEffect(() => {
    setHiddenClients(currentPage === 'clientsPage');
  }, [currentPage]);

  return (
    <div>
      {clientsData && (
        <section className={classes.clients}>
          {!hiddenClients && (
            <div className={classes.wrapper}>
              <ul className={classes.list}>
                {theme === 'light'
                  ?  clientsData.lightThemeClients.map((client, index) => (
                    <li key={index} className={classes.item}>
                      <img
                        src={client?.source}
                        alt={client?.alternate}
                      />
                    </li>
                  ))
                  :  clientsData.darkThemeClients.map((client, index) => (
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
