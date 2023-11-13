<<<<<<< HEAD
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCarePage, useLang, useDocumentTitle } from 'shared/hooks';
import { SectionBase } from 'widgets';

/**
 * @function CarePage
 * @returns {JSX.Element | null}
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
=======
import classes from './CarePage.module.scss';
import { useEffect, useState} from 'react';
// import SectionBase from 'components/layout/SectionBase';
// import LangContext from "contexts/LangContext";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { setCurrentPage } from 'reducers/currentPageSlice';

export const CarePage = () => {
  const [data, setData] = useState(null);
  // const { lang } = useSelector((state) => state.langReducer);
  // const {currentPage} = useSelector((state) => state.currentPageReducer)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   fetch(
  //     `https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/pages/care.json`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch();
  // }, [lang]);

  useEffect(() => {
    // dispatch(setCurrentPage('carePage'))
  }, [])

  return (
    <main>
      {/* {data?.intro && <SectionBase className={classes.into} data={data.intro} />}
      {data?.core && <SectionBase className={classes.core} data={data.core} reverse />}
      {data?.final && <SectionBase className={classes.final} data={data.final} />} */}
    </main>
  );
};
>>>>>>> e3ff2989761b0aaab690a3d1c7c005f07bb75584
