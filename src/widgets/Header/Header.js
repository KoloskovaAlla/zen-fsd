import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
import { classNames } from 'shared/lib/classNames';

const HeaderPage = () => {
  const lang = 'en';
  const theme = 'light';
  const [isMenuActive, setIsMenuActive] = useState(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/header.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch();
  }, [lang]);

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
