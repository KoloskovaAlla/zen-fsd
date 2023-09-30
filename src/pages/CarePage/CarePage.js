import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useCarePage, useLang } from 'shared/model/hooks';
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

  const { carePage } =  carePageState; 
  
  const { lang } = useLang();

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
