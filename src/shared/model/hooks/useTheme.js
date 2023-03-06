import { useEffect } from 'react';
import { setTheme } from '../reducers/themeSlice';
import { useSelector } from 'react-redux';

/**  
 * @returns {object}
 */

export const useTheme = () => {
  const { theme } = useSelector((state) => state.themeReducer);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};
