import { useEffect } from 'react';
import { setLang } from '../reducers/langSlice';
import { useSelector } from 'react-redux';

/**  
 * @returns {object}
 */

export const useLang = () => {
  const { lang } = useSelector((state) => state.langReducer);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return {
    lang,
    setLang
  };
};


