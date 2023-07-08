import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { sendOrder } from '../reducers/sendOrderSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.sendOrderReducer;

export const useSendOrder = () => {
  const {
  isSending,
  errorMessage,
  isOrderSended,
  } = useSelector(callback);

  return {
    isSending,
    errorMessage,
    isOrderSended,
    sendOrder,
  };
};
