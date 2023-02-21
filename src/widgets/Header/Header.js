import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './Header.module.scss';
import { classNames } from 'shared/lib';
import { API_BASE_URL } from 'shared/constants/api';
import { useLang, useTheme } from 'shared/model/hooks';
import { IconLogoHeader, IconSun, IconMoon } from 'shared/icons';
import { Select } from 'shared/ui';
import { useDispatch } from 'react-redux';

export const Header = () => {
  const { lang, setLang } = useLang();
  const { theme, setTheme } = useTheme();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const url = `${API_BASE_URL}/${lang}/header.json`;
        const response = await fetch(url);

        if (!response.ok) throw new Error('Data not received');

        const data = await response.json();
        setData(data);
      }
      catch (error) {
        console.error(error);
        setError(error);
      }
    })();
  }, [lang]);

  const handleItemClick = () => {
    isMenuActive
      ? setIsMenuActive(false)
      : setIsMenuActive(true);
  };

  const dispatch = useDispatch();

  const onLanguageChange = (value) => dispatch(setLang(value));

  const classNameMenu = classNames(
    classes.menu,
    {
      [classes.active]: isMenuActive,
      dark: theme === 'dark',
    },
    []
  );

  const toggleTheme = () => {
    theme === 'dark'
      ? dispatch(setTheme('light'))
      : dispatch(setTheme('dark'));
  };

  return (
    <div>
      <Link to='/' className={classes.logo}>
        <IconLogoHeader />
      </Link>

      {data && (
        <ul className={classNameMenu} theme={theme}>
          {data.menuItems.length > 0 &&
            data.menuItems.map((menuItem, index) => (
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

      {data && (
        <Select
          options={data.languages}
          className={classes.select}
          onChange={({ target: { value } }) => onLanguageChange(value)}
          value={localStorage.getItem('lang') ?? 'en'}
        />)
      }

      <button onClick={toggleTheme} className={classes.theme}>
        {
          theme === 'dark'
            ? <IconSun />
            : <IconMoon />
        }
      </button>
    </div>
  );
};
