import classes from './Cashback.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useOrder } from 'shared/model/hooks';
import { useCashback } from 'shared/model/hooks';

/** @typedef {import('react').ReactElement} Element */

/** 
 * @function Cashback 
 * @returns {Element}
 */

export const Cashback = () => {
  const dispatch = useDispatch();
  const {
    getCashback,
    ...cashbackState
  } = useCashback();
  const { cashback } = cashbackState;  

  const { setIsModalActive } = useOrder();

  useEffect(() => {
    dispatch(getCashback());
  }, [dispatch, getCashback]);  


  const handleOrderClick = () => {
    dispatch(setIsModalActive(true));
  }

  // if (!cashback) return null;
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        {cashback && (
          <div className={classes.body}>
          <h2 className={classes.title}>{cashback.title.content}</h2>

          {cashback.texts?.length > 0 &&
            cashback.texts.map((text, index) => (
              <p
                className={classes.copy}
                key={index}
              >
                {text}
              </p>
            ))
          }
          <button
            onClick={handleOrderClick}
            className={classes.button}
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
