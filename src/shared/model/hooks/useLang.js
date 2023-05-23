// import { useEffect } from 'react';
// import { setLang } from '../reducers/langSlice';
// import { useSelector } from 'react-redux';

// /**
//  * @returns {object}
//  */

// export const useLang = () => {
//   const { lang } = useSelector((state) => state.langReducer);

//   useEffect(() => {
//     localStorage.setItem('lang', lang);
//   }, [lang]);

//   return {
//     lang,
//     setLang
//   };
// };

import { useSelector } from 'react-redux';
import { getData } from '../reducers/dataSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.dataReducer;

/** 
 * @typedef {import('./types').LangState} State 
 * @type {() => State}
*/

export const useLang = () => {
  const {
    isLoading,
    data: languages,
    errorMessage
  } = useSelector(callback);

  return {
    getData,
    isLoading,
    languages,
    errorMessage,
  };
};



