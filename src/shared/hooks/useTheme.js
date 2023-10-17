import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setTheme } from '../reducers/themeSlice';
import { useSelector } from 'react-redux';

/**
 * @type {(store: object) => object}
 */
const callback = (store) => store.themeReducer;

/**
 * @typedef {import('./types').ThemeState} State
 * @type {() => State}
 */

export const useTheme = () => {
  const { theme } = useSelector(callback);

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
