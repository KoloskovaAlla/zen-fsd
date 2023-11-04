import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderActions, sendOrder } from '../reducers/sendOrderSlice';


/** @type {(store: object) => object} */
const getOrderState = (store) => store.sendOrderReducer;

/**
 * @typedef {import('./types').Order} Order
 * @type {any}
 */

export const useSendOrder = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(getOrderState);

  useEffect(() => {
    const isFormValid = orderState.isValidName &&
      orderState.isValidTel &&
      orderState.isValidEmail &&
      orderState.isValidConnection &&
      orderState.isChecked;
    dispatch(orderActions.setIsSubmitDisabled(!isFormValid));
  }, [dispatch, orderState]);

  Object.assign(orderActions, { sendOrder });
  return {
    orderState,
    orderActions,
  };
};
