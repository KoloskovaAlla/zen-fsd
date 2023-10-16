import classes from './Burger.module.scss';
import { useDispatch } from 'react-redux';
import { useNav } from 'shared/model/hooks';
import { classNames } from 'shared/lib';

/** @typedef {import('react').ReactElement} Element */

/**
 * @function Burger
 * @returns {Element}
 */

export const Burger = () => {
  const dispatch = useDispatch();

  const { isNavActive, setIsNavActive } = useNav();

  const burgerClassNames = classNames(classes.burger, {
    [classes.active]: isNavActive,
  });

  const handleBurgerClick = () => {
    dispatch(setIsNavActive(!isNavActive));
  };

  return (
    <button
      className={burgerClassNames}
      onClick={handleBurgerClick}
    >
      <span />
    </button>
  );
};
