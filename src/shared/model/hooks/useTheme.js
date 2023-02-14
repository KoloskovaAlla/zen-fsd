import { useEffect } from 'react';
import { setTheme } from '../reducers/themeSlice'
import { useSelector } from 'react-redux';

export const useTheme = () => {
  const { theme } = useSelector((state) => state.langReducer);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return {
    theme, setTheme
  }
};