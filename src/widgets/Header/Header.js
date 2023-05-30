import { useNav, useLang } from 'shared/model/hooks';
import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './Header.module.scss';
import { classNames } from 'shared/lib';
import { useTheme } from 'shared/model/hooks';
import { IconLogoHeader, IconSun, IconMoon } from 'shared/icons';
import { Select } from 'shared/ui';
import { useDispatch } from 'react-redux';
import { Navigation } from 'features';
import { Lang } from 'features';

/** 
 * @typedef {import('./types').HeaderProps} Props
 */

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuActive, setIsMenuActive] = useState(false);

  const {
    getNav,
    navItems,
  } = useNav();

  const {
    getLang,
    languages,
    setLang,
  } = useLang();

  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(getNav());
  }, [dispatch, getNav]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getLang());
  }, [dispatch, getLang]);


  const handleItemClick = () => {
    isMenuActive
      ? setIsMenuActive(false)
      : setIsMenuActive(true);
  };

  // @ts-ignore
  const onLanguageChange = (value) => dispatch(setLang(value));

  const classNameMenu = classNames(
    classes.menu,
    {
      [classes.active]: isMenuActive,
      [classes.dark]: theme === 'dark',
    },
    []
  );

  const toggleTheme = () => {
    theme === 'dark'
      ? dispatch(setTheme('light'))
      : dispatch(setTheme('dark'));
  };

  const classNameBurger = classNames(
    classes.burger,
    {
      [classes.active]: isMenuActive,
    }
  );

  const handleBurgerClick = () => {
    isMenuActive
      ? setIsMenuActive(false)
      : setIsMenuActive(true);
  };

  const classNameHeader = classNames(
    classes.header,
    {
      [classes.dark]: theme === 'dark',
    }
  );

  return (
    <header className={classNameHeader}>
      <div className={classes.wrapper}>
        <Link to='/' className={classes.logo}>
          <IconLogoHeader />
        </Link>
        {/* <div className={classes.navigation}>
          <Link to='/' className={classes.logo}>
            <IconLogoHeader />
          </Link>

          {navItems && (
            // @ts-ignore
            <ul className={classNameMenu} theme={theme}>
              {navItems.length > 0 &&
                navItems.map((menuItem, index) => (
                  <li
                    onClick={handleItemClick}
                    className={classes.item}
                    key={index}
                  >
                    <NavLink
                      to={`/${menuItem.target}`}
                      className={({ isActive }) =>
                        isActive ? 'active' : 'inactive'
                      }
                    >
                      {menuItem.text}
                    </NavLink>
                  </li>
                ))}
            </ul>
          )}
        </div> */}
        <Navigation />

        {/* {languages && (
          <div className={classes.language}>
            <Select
              options={languages}
              className={classes.select}
              onChange={({ target: { value } }) => onLanguageChange(value)}
              value={localStorage.getItem('lang') ?? 'en'}
            />
          </div>
        )} */}
        <Lang />

        <button onClick={toggleTheme} className={classes.theme}>
          {
            theme === 'dark'
              ? <IconSun />
              : <IconMoon />
          }
        </button>

        <button
          onClick={handleBurgerClick}
          className={classNameBurger}
          type="button"
        >
          <span></span>
        </button>
      </div>
    </header>
  );
};

