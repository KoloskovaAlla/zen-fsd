import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setTheme } from '../reducers/themeSlice';
import { useSelector } from 'react-redux';

/**
 * @typedef {import('./types').ThemeState} ThemeState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */
const getState = (store) => store.themeReducer;

/**
 * @function useTheme
 * @returns {ThemeState}
 */

export const useTheme = () => {
  const { theme } = useSelector(getState);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const dispatch = useDispatch();
  const toggleTheme = () => {
    theme === 'dark'
      ? dispatch(setTheme('light'))
      : dispatch(setTheme('dark'));
  };

  return {
    theme,
    setTheme,
    toggleTheme,
  };
};
