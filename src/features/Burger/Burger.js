import classes from './Burger.module.scss';
import { useDispatch } from 'react-redux';
import { useNav } from 'shared/model/hooks';
import { classNames } from 'shared/lib';

/** 
 * @typedef {import('./types').NavState} NavState 
 * @typedef {import('react').ReactElement} Element
*/

/**
 * @function Burger 
 * @returns {Element}
 */

export const Burger = () => {
  const dispatch = useDispatch();

  /** @type {NavState} */
  const {    
    isNavActive, 
    setIsNavActive,
  } = useNav();

  const burgerClassName = classNames(
    classes.burger,
    { [classes.active]: isNavActive }
  );

  return (
    <button   
      onClick={() => { dispatch(setIsNavActive(!isNavActive)) }}
      className={burgerClassName}
    >
      <span />
    </button>
  )
};
