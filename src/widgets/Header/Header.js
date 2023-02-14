import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
import { classNames } from 'shared/lib';
import { API_BASE_URL } from 'shared/constants/api';
import { useLang, useTheme } from 'shared/model/hooks'

const Header = () => {
  const { lang } = useLang();
  const { theme } = useTheme();

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
  }, []);

  const handleItemClick = () => {
    isMenuActive
      ? setIsMenuActive(false)
      : setIsMenuActive(true);
  };

  const classNameMenu = classNames(
    classes.menu,
    {
      [classes.active]: isMenuActive,
      dark: theme === 'dark',
    },
    []
  );

  return (
    <div>
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
    </div>
  );
};

export default Header;
