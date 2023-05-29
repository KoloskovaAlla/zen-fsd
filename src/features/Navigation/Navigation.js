import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib';
import { IconLogoHeader } from 'shared/icons';
import { useNav } from 'shared/model/hooks';
import { useTheme } from 'shared/model/hooks';
import classes from './Navigation.module.scss';

export const Navigation = () => {
  const { theme } = useTheme();

  const {
    getNav,
    navItems,
    isNavActive,
    setIsNavActive,
  } = useNav();

  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(getNav());
  }, [dispatch, getNav]);



  const handleItemClick = () => {
    isNavActive
      // @ts-ignore
      ? dispatch(setIsNavActive(false))
      // @ts-ignore
      : dispatch(setIsNavActive(true));
  };

  const classNameMenu = classNames(
    classes.menu,
    {
      [classes.active]: isNavActive,
      [classes.dark]: theme === 'dark',
    },
    []
  );

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
