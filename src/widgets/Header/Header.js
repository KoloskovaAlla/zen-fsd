import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
import { classNames } from 'shared/lib/classNames';
import { API_BASE_URL } from 'shared/constants/api';

const HeaderPage = () => {
  const lang = 'en';
  const theme = 'light';
  const [isMenuActive, setIsMenuActive] = useState(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/${lang}/header.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch();
  }, [lang]);

  const getData = async (url) => {
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  useEffect(() => {
    (async () => {
      const data = await getData(
        `https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/header.json`
      );
      setData(await data);
    })();
  }, []);

  const handleItemClick = () => {
    isMenuActive ? setIsMenuActive(false) : setIsMenuActive(true);
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

export default HeaderPage;
