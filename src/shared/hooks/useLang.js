import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getLangs, setLang } from '../reducers/langsSlice';

/**
 * @typedef {import('./types').LangState} LangState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */

const getState = (store) => store.langsReducer;

/**
 * @function useLang
 * @returns {LangState}
 */

export const useLang = () => {
  const state = useSelector(getState);
  const { lang } = state;

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return {
    ...state,
    setLang,
    getLangs,
  };
};
