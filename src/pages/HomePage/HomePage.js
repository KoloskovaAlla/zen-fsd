import { useState, useEffect } from 'react';
import { API_BASE_URL } from 'shared/constants/api';
import { SectionBase } from 'widgets';
// import Cashback from '';
// import Modal from '';
import { useLang, useTheme } from 'shared/model/hooks';
// import { setCurrentPage } from 'reducers/currentPageSlice';

const HomePage = () => {
  const { lang } = useLang();
  const { theme } = useTheme();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const url = `${API_BASE_URL}/${lang}/.json`;
        const response = await fetch(url);

        if (!response.ok) throw new Error('Data not received');

        const data = await response.json();
        setData(data);
      }
      catch (error) {
        console.error(error);
        setError(error);
      }
    })();
  }, [lang, setError]);

  // useEffect(() => {
  //   dispatch(setCurrentPage('homePage'));
  // }, []);

  return (
    <div className={`app ${theme}`}>
      {data?.download && <SectionBase data={data.download} type='primary' />}
      {data?.warranty && <SectionBase data={data.warranty} type='secondary' reverse />}
      {data?.care && <SectionBase data={data.care} type='secondary' />}
      {/* {data?.cashback && <Cashback data={data.cashback} />}
      {data?.modal && <Modal data={data.modal} />}      */}
    </div>
  );
};

export default HomePage;
