import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getLang } from '../reducers/langSlice';
import { setLang } from '../reducers/langSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.langReducer;

/** 
 * @typedef {import('./types').LangState} State 
 * @type {() => State}
*/

export const useLang = () => {
  const {
    isLoading,
    languages,
    errorMessage,
    lang
  } = useSelector(callback);


  // /** @type {(store: object) => object} */
  // const callbackLang = (store) => store.langReducer
  // const { lang } = useSelector(callbackLang);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return {
    getLang,
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



