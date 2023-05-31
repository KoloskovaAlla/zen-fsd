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
    { [classes.active]: isNavActive }
  );

  const dispatch = useDispatch();

  return (
    <button
      // @ts-ignore
      onClick={() => { dispatch(setIsNavActive(!isNavActive)) }}
      className={classNameBurger}
    >
      <span />
    </button>
  )
};
