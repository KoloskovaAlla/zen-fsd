import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrder, setIsModalActive } from '../reducers/orderSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.modalReducer;

/**
 * @typedef {import('./types').OrderState} State
 * @type {() => State}
 */
export const useOrder = () => {
  const {
    isModalActive,
    isLoading,
    orderData,
    errorMessage,
  } = useSelector(callback);

  useEffect(() => {
    localStorage.setItem('isModalActive', isModalActive);
  }, [isModalActive]);

  return {
    isModalActive,
    setIsModalActive,
    isLoading,
    orderData,
    errorMessage,
    getOrder,   
  };
};
