import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrder, setIsModalActive } from '../reducers/orderSlice';

/**
 * @typedef {import('./types').OrderState} OrderState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */
const getState = (store) => store.orderReducer;

/**
 * @function useOrder
 * @returns {OrderState}
 */

export const useOrder = () => {
  const state = useSelector(getState);
  const { isModalActive } = state;

  useEffect(() => {
    localStorage.setItem('isModalActive', isModalActive);
  }, [isModalActive]);

  return {
    ...state,
    getOrder,
    setIsModalActive,
  };
};
