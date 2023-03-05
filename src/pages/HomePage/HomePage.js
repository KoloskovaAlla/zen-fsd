import { useState, useEffect } from 'react';
import { API_BASE_URL } from 'shared/constants/api';
import { SectionBase } from 'widgets';
import { Cashback } from 'widgets';
// import Cashback from '';
// import Modal from '';
import { useLang, useTheme, useHomePage } from 'shared/model/hooks';
// import { setCurrentPage } from 'reducers/currentPageSlice';

const HomePage = () => {
  const { lang } = useLang();
  const { theme } = useTheme();
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  const { fetchHomePageData, isLoading, homePageData, errorMessage } = useHomePage();

  useEffect(() => {
    dispatch(fetchHomePageData(lang));
  }, [lang]);

  // useEffect(() => {
  //   dispatch(setCurrentPage('homePage'));
  // }, []);

  return (
    <div>
      {homePageData?.download && <SectionBase data={data.download} type='primary' />}
      {data?.warranty && <SectionBase data={data.warranty} type='secondary' reverse />}
      {data?.care && <SectionBase data={data.care} type='secondary' />}
      {data?.cashback && <Cashback data={data.cashback} />}
      {/* {data?.modal && <Modal data={data.modal} />}      */}
    </div>
  );
};

export default HomePage;
