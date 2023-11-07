import classes from './Cashback.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useOrder, useCashback } from 'shared/hooks';

/**
 * @function Cashback
 * @returns {JSX.Element}
 */

export const Cashback = () => {
  const dispatch = useDispatch();
  const {
    getCashback,
    ...cashbackState
  } = useCashback();
  const { cashback } = cashbackState;

  const { orderActions } = useOrder();
  const { setIsModalActive } = orderActions;

  useEffect(() => {
    dispatch(getCashback());
  }, [dispatch, getCashback]);

  /**
   * @function handleOrderClick
   * @returns {void}
   */

  const handleOrderClick = () => {
    dispatch(setIsModalActive(true));
  };

  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        {cashback && (
          <div className={classes.body}>
            <h2 className={classes.title}>{cashback.title.content}</h2>
            {cashback.texts?.length > 0 && (
              cashback.texts.map((text, index) => (
                <p
                  className={classes.copy}
                  key={index}
                >
                  {text}
                </p>
              ))
            )}
            <button
              className={classes.button}
              onClick={handleOrderClick}
              type="button"
            >
              {cashback?.buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
