import classes from './CarePage.module.scss';
import { useCarePage } from 'shared/model/hooks';
import { useEffect, useState} from 'react';
import { SectionBase } from 'widgets';
import { useDispatch } from 'react-redux';


export const CarePage = () => {
   const {
    getCarePage,
    ...carePageState
  } = useCarePage();

  const { carePage } =  carePageState;  

  const dispatch = useDispatch();

  return (
    <main>
      {carePage?.intro && <SectionBase className={classes.into} data ={carePage.intro} />}
      {carePage?.core && <SectionBase className={classes.core} data={carePage.core} reverse />}
      {carePage?.final && <SectionBase className={classes.final} data={carePage.final} />}
    </main>
  );
};
