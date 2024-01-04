import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCashbackPage, useLang, useDocumentTitle } from 'shared/hooks';
import { SectionBase } from 'widgets';

/**
 * @function CashbackPage
 * @returns {null | JSX.Element}
 */

const CashbackPage = () => {
  const dispatch = useDispatch();
  const {
    getCashbackPage,
    ...cashbackPageState
  } = useCashbackPage();

  const { cashbackPage } = cashbackPageState;

  const { lang } = useLang();
  const title = lang === 'en'
    ? 'ZEN | Cashback'
    : 'ZEN | Кэшбэк';

  useDocumentTitle(title);

  useEffect(() => {
    dispatch(getCashbackPage());
  }, [dispatch, getCashbackPage, lang]);

  if (!cashbackPage) return null;
  return (
    <main>
      {cashbackPage?.intro && (
        <SectionBase
          data={cashbackPage?.intro}
          type="primary"
          reverse={false}
        />
      )}
      {cashbackPage?.core && (
        <SectionBase
          data={cashbackPage?.core}
          type="secondary"
          reverse
        />
      )}
      {cashbackPage?.final && (
        <SectionBase
          data={cashbackPage?.final}
          type="secondary"
          reverse={false}
        />
      )}
    </main>
  );
};

export default CashbackPage;
