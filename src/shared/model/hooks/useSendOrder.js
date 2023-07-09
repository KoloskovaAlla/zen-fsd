import { useSelector } from 'react-redux';
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
