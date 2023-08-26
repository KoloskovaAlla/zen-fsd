import classes from './Navigation.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useNav, useLang, useTheme } from 'shared/model/hooks';
import { classNames } from 'shared/lib';

export const Navigation = () => {
  const { theme } = useTheme();

  const {
    getNav,
    navItems,
    isNavActive,
    setIsNavActive,
  } = useNav();

  const {
    lang,
  } = useLang();

  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(getNav());
  }, [dispatch, getNav, lang]);

  const handleItemClick = () => {
    isNavActive
      // @ts-ignore
      ? dispatch(setIsNavActive(false))
      // @ts-ignore
      : dispatch(setIsNavActive(true));
  };

  const burgerClassNames = classNames(classes.burger, { 
    [classes.active]: isNavActive,
  });

  const classNameMenu = classNames(classes.menu, {
    [classes.active]: isNavActive,
    [classes.dark]: theme === 'dark',
  });

  return (
    <nav className={classes.navigation}>
      {navItems && (
        // @ts-ignore
        <ul className={classNameMenu} theme={theme}>
          {navItems.length > 0 &&
            navItems.map((menuItem, index) => (
              <li
                className={classes.item}
                key={index}
              >
                <NavLink
                  onClick={handleItemClick}
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
    </nav>
  )
};
