import { useState, useEffect } from 'react';
import { SectionBase, Cashback } from 'widgets';
// toDo import Modal from '';
import { useLang, useTheme, useHomePage } from 'shared/model/hooks';
import { useDispatch } from 'react-redux';
// toDo import { setCurrentPage } from 'reducers/currentPageSlice';

const HomePage = () => {
  const { lang } = useLang();
  const { theme } = useTheme();
  const {
    fetchHomePageData,
    isLoading,
    homePageData,
    errorMessage,
  } = useHomePage();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomePageData(lang));
  }, [lang]);

  return (
    <div>
      {homePageData?.download && <SectionBase data={homePageData.download} type='primary' />}
      {homePageData?.warranty && <SectionBase data={homePageData.warranty} type='secondary' reverse />}
      {homePageData?.care && <SectionBase data={homePageData.care} type='secondary' />}
      {homePageData?.cashback && <Cashback data={homePageData.cashback} />}
      {/* {homePageData?.modal && <Modal data={homePageData.modal} />} */}
    </div>
  );
};

export default HomePage;
