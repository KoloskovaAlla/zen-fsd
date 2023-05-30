import { useTheme } from 'shared/model/hooks';
import { IconSun, IconMoon } from 'shared/icons';
import classes from './Theme.module.scss';

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
  )
};
