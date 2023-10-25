import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useWarrantyPage, useLang, useDocumentTitle } from 'shared/hooks';
import { SectionBase } from 'widgets';

/**
 * @function WarrantyPage
 * @returns {JSX.Element | null}
 */

const WarrantyPage = () => {
  const dispatch = useDispatch();
  const {
    getWarrantyPage,
    ...warrantyPageState
  } = useWarrantyPage();

  const { warrantyPage } = warrantyPageState;

  const { lang } = useLang();
  const title = lang === 'en'
    ? 'ZEN | Warranty'
    : 'ZEN | Гарантия';

  useDocumentTitle(title);

  useEffect(() => {
    dispatch(getWarrantyPage());
  }, [dispatch, getWarrantyPage, lang]);

  if (!warrantyPage) return null;
  return (
    <main>
      {warrantyPage?.intro && (
        <SectionBase
          data={warrantyPage?.intro}
          type="primary"
          reverse={false}
        />
      )}
      {warrantyPage?.core && (
        <SectionBase
          data={warrantyPage?.core}
          type="secondary"
          reverse
        />
      )}
      {warrantyPage?.final && (
        <SectionBase
          data={warrantyPage?.final}
          type="secondary"
          reverse={false}
        />
      )}
    </main>
  );
};

export default WarrantyPage;
