import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLang, useHomePage, useDocumentTitle } from 'shared/hooks';
import { SectionBase, Cashback } from 'widgets';

const HomePage = () => {
  const dispatch = useDispatch();

  const {
    fetchHomePageData,
    homePageData,
  } = useHomePage();

  const { lang } = useLang();
  const title = lang === 'en'
    ? 'ZEN | Where finance meet ZEN'
    : 'ZEN | Когда финансы постигают Дзен';

  useDocumentTitle(title);

  useEffect(() => {
    dispatch(fetchHomePageData(lang));
  }, [lang, fetchHomePageData, dispatch]);

  return (
    <div>
      {homePageData?.download && <SectionBase data={homePageData.download} type='primary' />}
      {homePageData?.warranty && <SectionBase data={homePageData.warranty} type='secondary' reverse />}
      {homePageData?.care && <SectionBase data={homePageData.care} type='secondary' />}
      {homePageData?.cashback && <Cashback />}
    </div>
  );
};

export default HomePage;
