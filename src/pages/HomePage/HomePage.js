import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLang, useHomePage, useDocumentTitle } from 'shared/hooks';
import { SectionBase, Cashback } from 'widgets';

const HomePage = () => {
  const dispatch = useDispatch();

  const {
    getHomePage,
    homePage,
  } = useHomePage();

  const { lang } = useLang();
  const title = lang === 'en'
    ? 'ZEN | Where finance meet ZEN'
    : 'ZEN | Когда финансы постигают Дзен';

  useDocumentTitle(title);

  useEffect(() => {
    dispatch(getHomePage(lang));
  }, [lang, getHomePage, dispatch]);

  return (
    <div>
      {homePage?.download && <SectionBase data={homePage.download} type='primary' />}
      {homePage?.warranty && <SectionBase data={homePage.warranty} type='secondary' reverse />}
      {homePage?.care && <SectionBase data={homePage.care} type='secondary' />}
      {homePage?.cashback && <Cashback />}
    </div>
  );
};

export default HomePage;
