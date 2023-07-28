import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as sendOrderActions from '../reducers/sendOrderSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.sendOrderReducer;

export const useSendOrder = () => {
  const dispatch = useDispatch();

  const orderState = useSelector(callback);

  useEffect(() => {
    checkFormValidity();
  }, Object.values(orderState));

  const checkFormValidity = () => {
    const isFormValid = orderState.name &&
      orderState.isValidName &&
      orderState.tel &&
      orderState.isValidTel &&
      orderState.email &&
      orderState.isValidEmail &&
      orderState.connection &&
      orderState.isValidConnection &&
      orderState.isChecked;

    dispatch(sendOrderActions.setIsSubmitDisabled(!isFormValid));
  };

  return orderState;
  return sendOrderActions;
};
