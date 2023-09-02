import classes from './Clients.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useClients, useCurrentPage } from 'shared/model/hooks';

/** 
 * @function Clients
 * @returns {JSX.Element}
 */

export const Clients = () => {  
  const dispatch = useDispatch();

  const [hiddenClients, setHiddenClients] = useState(false);  
 
  const { currentPage } = useCurrentPage();
  const { fetchClientsData, clientsData, } = useClients();  

  useEffect(() => {
    dispatch(fetchClientsData());
  }, [dispatch, fetchClientsData]);

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
                {clientsData.map((client, index) => (
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
