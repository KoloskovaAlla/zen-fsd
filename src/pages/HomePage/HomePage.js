import { useEffect } from 'react';
import { SectionBase, Cashback } from 'widgets';

import { useLang, useTheme, useHomePage } from 'shared/model/hooks';
import { useDispatch } from 'react-redux';


const HomePage = () => {
  const { lang } = useLang();
  const { theme } = useTheme();

  const {
    fetchHomePageData,
    homePageData,
  } = useHomePage();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomePageData(lang));
  }, [lang]);

  useEffect(() => {
    if (homePageData) console.log(homePageData.cashback);
  }, [homePageData]);

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
