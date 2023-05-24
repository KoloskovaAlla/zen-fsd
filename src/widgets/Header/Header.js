import { useNav, useLang } from 'shared/model/hooks';
import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './Header.module.scss';
import { classNames } from 'shared/lib';
import { useTheme } from 'shared/model/hooks';
import { IconLogoHeader, IconSun, IconMoon } from 'shared/icons';
import { Select } from 'shared/ui';
import { useDispatch } from 'react-redux';

/** 
 * @typedef {import('./types').HeaderProps} Props
 */

export const Header = () => {
  // const { lang, setLang } = useLang();
  const { theme, setTheme } = useTheme();
  const [isMenuActive, setIsMenuActive] = useState(false);
  // const {
  //   fetchHeaderData,
  //   headerData: data,
  // } = useHeader();

  const {
    getData: getDataNav,
    navItems,
  } = useNav();

  const {
    getData: getDataLang,
    lang,
    setLang,
  } = useLang();

  const dispatch = useDispatch();

  const endPointNav = `${lang}/header/menuItems`;
  const endPointLang = `${lang}/header/languages`;

  useEffect(() => {
    // @ts-ignore
    dispatch(getDataNav(endPointNav));
  }, [dispatch, getDataNav, endPointNav]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getDataLang(endPointLang));
  }, [dispatch, getDataLang, endPointLang]);

  const handleItemClick = () => {
    isMenuActive
      ? setIsMenuActive(false)
      : setIsMenuActive(true);
  };

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
        <div className={classes.navigation}>
          <Link to='/' className={classes.logo}>
            <IconLogoHeader />
          </Link>

          {navItems && (
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
        </div>

        {/* {data && (
          <div className={classes.language}>
            <Select
              options={data.languages}
              className={classes.select}
              onChange={({ target: { value } }) => onLanguageChange(value)}
              value={localStorage.getItem('lang') ?? 'en'}
            />
          </div>
        )
        } */}

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

  // useEffect(() => {
  //   // @ts-ignore
  //   dispatch(fetchHeaderData(lang));
  // }, [dispatch, fetchHeaderData, lang]);
