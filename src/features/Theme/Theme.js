import classes from './Theme.module.scss';
import { useTheme } from 'shared/model/hooks';
import { IconSun, IconMoon } from 'shared/icons';

/** @typedef {import('react').ReactElement} Element */

/**
 * @function Theme 
 * @returns {Element}
 */

export const Theme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={classes.theme}
    >
      {
        theme === 'dark'
          ? <IconSun />
          : <IconMoon />
      }
    </button>
  );
};
