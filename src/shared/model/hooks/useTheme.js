import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setTheme } from '../reducers/themeSlice';
import { useSelector } from 'react-redux';

/**  
 * @returns {object}
 */

export const useTheme = () => {
  const callback = (store) => store.themeReducer
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
