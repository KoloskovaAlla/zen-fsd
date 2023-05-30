import { useDispatch } from 'react-redux';
import { useNav } from 'shared/model/hooks';
import { classNames } from 'shared/lib';
import classes from './Burger.module.scss';

export const Burger = () => {
    const {   
    isNavActive, 
    setIsNavActive,
  } = useNav();

    const classNameBurger = classNames(
    classes.burger,
    {
      [classes.active]: isNavActive,
    }
  );

  const dispatch = useDispatch();

  const handleBurgerClick = () => {
    isNavActive
      // @ts-ignore
      ? dispatch(setIsNavActive(false))    
      // @ts-ignore  
      : dispatch(setIsNavActive(true));
  };
  
  return (
    <button
      onClick={handleBurgerClick}
      className={classNameBurger}
      type="button"
    >
      <span></span>
    </button>
  )
};
