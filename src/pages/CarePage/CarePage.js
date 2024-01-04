import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCarePage, useLang, useDocumentTitle } from 'shared/hooks';
import { SectionBase } from 'widgets';

/**
 * @function CarePage
 * @returns {null | JSX.Element}
 */

const CarePage = () => {
  const dispatch = useDispatch();
  const {
    getCarePage,
    ...carePageState
  } = useCarePage();

  const { carePage } = carePageState;
  const { lang } = useLang();
  const title = lang === 'en'
    ? 'ZEN | Care'
    : 'ZEN | Помощь';

  useDocumentTitle(title);

  useEffect(() => {
    dispatch(getCarePage());
  }, [dispatch, getCarePage, lang]);

  if (!carePage) return null;
  return (
    <main>
      {carePage?.intro && (
        <SectionBase
          data={carePage.intro}
          type="primary"
          reverse={false}
        />
      )}
      {carePage?.core && (
        <SectionBase
          data={carePage.core}
          type="secondary"
          reverse
        />
      )}
      {carePage?.final && (
        <SectionBase
          data={carePage.final}
          type="secondary"
          reverse={false}
        />
      )}
    </main>
  );
};

export default CarePage;
