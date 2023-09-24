import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useCarePage } from 'shared/model/hooks';
import { SectionBase } from 'widgets';

export const CarePage = () => {
  const dispatch = useDispatch();
   const {
    getCarePage,
    ...carePageState
  } = useCarePage();

  const { carePage } =  carePageState;  

  useEffect(() => {
    dispatch(getCarePage());
  }, [dispatch, getCarePage]); 

  if (carePage) return (
    <main>      
      {carePage?.intro && <SectionBase data={carePage.intro} type='secondary' reverse={false}/>}
      {carePage?.core && <SectionBase data={carePage.core} type='secondary' reverse />}
      {carePage?.final && <SectionBase data={carePage.final} type='secondary' reverse={false}/>} 
    </main>
  );
};

export default CarePage;