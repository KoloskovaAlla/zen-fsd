import { Navigation, Lang, Theme, Burger } from 'features';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { classNames } from 'shared/lib';
import { useNav, useLang, useTheme  } from 'shared/model/hooks';
import { IconLogoHeader } from 'shared/icons';
import classes from './Header.module.scss';

export const Header = () => {
  const { theme } = useTheme(); 
  const { getNav } = useNav();
  const { getLang } = useLang();

  const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(getNav());
  }, [dispatch, getNav]);

  useEffect(() => {  
    dispatch(getLang());
  }, [dispatch, getLang]);

  const classNameHeader = classNames(
    classes.header, { [classes.dark]: theme === 'dark'}
  );

  return (
    <header className={classNameHeader}>
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
