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
  const cashbackState = useCashback();

  useEffect(() => {
    dispatch(cashbackState.getCashback());
  }, [dispatch, cashbackState.getCashback]);

  useEffect(() => {
    console.log(cashbackState.cashback);
  }, [cashbackState.cashback]);

  /**
   * @function handleOrderClick
   * @returns {void}
   */

  const handleOrderClick = () => {
    dispatch(cashbackState.setIsModalActive(true));
  };

  if (!cashbackState.cashback) return;
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        {cashbackState.cashback && (
          <div className={classes.body}>
            <h2 className={classes.title}>{cashbackState.cashback.title.content}</h2>
            {cashbackState.cashback.texts?.length > 0 && (
              cashbackState.cashback.texts.map((text, index) => (
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
              {cashbackState.cashback?.buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
