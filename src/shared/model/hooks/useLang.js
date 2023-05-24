import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getData } from '../reducers/dataSlice';
import { setLang } from '../reducers/langSlice';

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

  /** @type {(store: object) => object} */
  const callbackLang = (store) => store.langReducer
  const { lang } = useSelector(callbackLang);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return {
    getData,
    isLoading,
    languages,
    errorMessage,
    setLang,
    lang
  };
};

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



