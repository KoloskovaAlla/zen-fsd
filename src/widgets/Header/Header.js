import classes from './Header.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNav, useLang, useTheme, useClients } from 'shared/hooks';
import { Navigation, Lang, Theme, Burger } from 'features';
import { classNames } from 'shared/utils';
import { IconLogoHeader } from 'shared/icons';

/**
 * @function Header
 * @returns {null | JSX.Element}
 */

export const Header = () => {
  const { theme } = useTheme();
  const { getNav } = useNav();
  const { getLangs } = useLang();
  const { getClients } = useClients();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNav());
  }, [dispatch, getNav]);

  useEffect(() => {
    dispatch(getLangs());
  }, [dispatch, getLangs]);

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch, theme]);

  const headerClassNames = classNames(classes.header, {
    [classes.dark]: theme === 'dark',
  });

  return (
    <header className={headerClassNames}>
      <div className={classes.wrapper}>
        <Link to='/' className={classes.logo}>
          <IconLogoHeader />
        </Link>
        <Navigation />
        <Lang />
        <Theme />
        <Burger />
      </div>
    </header>
  );
};
