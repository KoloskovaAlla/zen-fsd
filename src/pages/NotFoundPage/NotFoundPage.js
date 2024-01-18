import classes from './NotFoundPage.module.scss';
import { useEffect } from 'react';
import { useLang, useDocumentTitle } from 'shared/hooks';
import { NOT_FOUND_PAGE } from 'shared/constants/api.js';

/**
 * @function NotFoundPage
 * @returns {JSX.Element}
 */

const NotFoundPage = () => {
  const { lang } = useLang();
  const title = lang === 'en'
    ? 'UnknownPage'
    : 'ZEN | Страница не найдена';

  useDocumentTitle(title);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>
          {NOT_FOUND_PAGE[lang].title}
        </h2>
      </div>
    </main>
  );
};

export default NotFoundPage;
