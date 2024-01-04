import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLang, useHomePage, useDocumentTitle } from 'shared/hooks';
import { SectionBase, Cashback } from 'widgets';

/**
 * @function HomePage
 * @returns {null | JSX.Element}
 */

const HomePage = () => {
  const dispatch = useDispatch();

  const homePageState = useHomePage();

  const { lang } = useLang();
  const title = lang === 'en'
    ? 'ZEN | Where finance meet ZEN'
    : 'ZEN | Когда финансы постигают Дзен';

  useDocumentTitle(title);

  useEffect(() => {
    dispatch(homePageState.getHomePage(lang));
  }, [lang, homePageState.getHomePage, dispatch]);

  return (
    <div>
      {homePageState.homePage?.download && <SectionBase data={homePageState.homePage.download} type='primary' />}
      {homePageState.homePage?.warranty && <SectionBase data={homePageState.homePage.warranty} type='secondary' reverse />}
      {homePageState.homePage?.care && <SectionBase data={homePageState.homePage.care} type='secondary' />}
      {homePageState.homePage?.cashback && <Cashback />}
    </div>
  );
};

export default HomePage;
