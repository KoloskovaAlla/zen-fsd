import classes from './Navigation.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useNav, useLang, useTheme } from 'shared/model/hooks';
import { classNames } from 'shared/lib';

/** @typedef {import('react').ReactElement} Element */

/**
 * @function Navigation 
 * @returns {Element}
 */

export const Navigation = () => {
  const dispatch = useDispatch();

  const { theme } = useTheme();
  const { lang } = useLang();

  const {
    getNav,
    navItems,
    isNavActive,
    setIsNavActive,
  } = useNav();

  useEffect(() => {    
    dispatch(getNav());
  }, [dispatch, getNav, lang]);

  const handleItemClick = () => {
    isNavActive      
      ? dispatch(setIsNavActive(false))      
      : dispatch(setIsNavActive(true));
  };  

  const menuClassNames = classNames(classes.menu, {
    [classes.active]: isNavActive,
    [classes.dark]: theme === 'dark',
  });

  return (
    <nav className={classes.navigation}>
      {navItems && (        
        <ul className={menuClassNames} theme={theme}>
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
