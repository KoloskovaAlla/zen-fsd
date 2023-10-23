import classes from './Clients.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useClients, useCurrentPage } from 'shared/hooks';

/**
 * @function Clients
 * @returns {JSX.Element}
 */

export const Clients = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [hiddenClients, setHiddenClients] = useState(false);

  const { fetchClientsData, clientsData, } = useClients();

  useEffect(() => {
    dispatch(fetchClientsData());
  }, [dispatch, fetchClientsData]);

  useEffect(() => {
    const isCurrentPathName = location.pathname === '/clients';
    setHiddenClients(isCurrentPathName);
  }, [location]);

  return (
    <div>
      {!hiddenClients && clientsData?.logos && (
        <section className={classes.clients}>
          <div className={classes.wrapper}>
            <ul className={classes.list}>
              {clientsData?.logos.map((client, index) => (
                <li key={index} className={classes.item}>
                  <img
                    src={client?.source}
                    alt={client?.alternate}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};
