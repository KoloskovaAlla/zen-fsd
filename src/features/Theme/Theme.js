import classes from './Theme.module.scss';
import { useTheme } from 'shared/hooks';
import { IconSun, IconMoon } from 'shared/icons';

/**
 * @function Theme
 * @returns {null | JSX.Element}
 */

export const Theme = () => {
  const { theme, toggleTheme } = useTheme();
  const handleThemeClick = () => toggleTheme();

  const IconTheme = theme === 'dark'
    ? <IconSun />
    : <IconMoon />;

  return (
    <button
      className={classes.theme}
      onClick={handleThemeClick}
    >
      {IconTheme}
    </button>
  );
};
