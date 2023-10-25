import classes from './ClientsPage.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLang, useClients, useDocumentTitle } from 'shared/hooks';

/**
 * @function ClientsPage
 * @returns {JSX.Element | null}
 */

const ClientsPage = () => {
  const dispatch = useDispatch();
  const clientsState = useClients();
  const { lang } = useLang();

  useDocumentTitle('ZEN | ClientsPage');

  useEffect(() => {
    dispatch(clientsState.fetchClientsData());
  }, [lang, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!clientsState) return null;
  return (
    <main>
      {clientsState?.clientsData && (
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <h2 className={classes.title}>
              {clientsState.clientsData?.title?.content}
            </h2>
            {clientsState.clientsData?.texts.map((text, index) => (
              <p
                className={classes.copy}
                key={index}
              >
                {text}
              </p>
            ))}
          </div>
          <div className={classes.logos}>
            <div className={classes.logosWrapper}>
              <ul className={classes.list}>
                {clientsState.clientsData?.logos?.map((client, index) => (
                  <li key={index} className={classes.item}>
                    <img
                      src={client?.source}
                      alt={client?.alternate}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ClientsPage;
