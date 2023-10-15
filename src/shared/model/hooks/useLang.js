import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getLang, setLang } from '../reducers/langSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.langReducer;

/**
 * @typedef {import('./types').LangState} State
 * @type {() => State}
 */

export const useLang = () => {
  const {
    isLoading,
    langs,
    errorMessage,
    lang,
  } = useSelector(callback);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return {
    getLang,
    isLoading,
    langs,
    errorMessage,
    setLang,
    lang,
  };
};
