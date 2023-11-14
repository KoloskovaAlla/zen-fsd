import classes from './ClientsPage.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLang, useClientsPage, useDocumentTitle } from 'shared/hooks';

/**
 * @function ClientsPage
 * @returns {JSX.Element | null}
 */

const ClientsPage = () => {
  const dispatch = useDispatch();
  const clientsPageState = useClientsPage();
  const { lang } = useLang();
  const title = lang === 'en'
    ? 'ZEN | Clients'
    : 'ZEN | Наши клиенты';

  useDocumentTitle(title);

  useEffect(() => {
    dispatch(clientsPageState.getClientsPage());
    // console.log(clientsPageState);
  }, [lang, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!clientsPageState) return null;
  return (
    <main>
      {clientsPageState?.clientsPage && (
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <h2 className={classes.title}>
              {clientsPageState.clientsPage?.title?.content}
            </h2>
            {clientsPageState.clientsPage?.texts.map((text, index) => (
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
                {clientsPageState.clientsPage?.logos?.map((client, index) => (
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
