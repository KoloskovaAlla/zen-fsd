import { useSelector } from 'react-redux';
import { getWarrantyPage } from '../reducers/warrantyPageSlice';

/** @type {(store: object) => object} */
const getState = (store) => store.warrantyPageReducer;

/**
 * @typedef {import('./types').WarrantyPageState} State
 * @type {() => State}
 */

export const useWarrantyPage = () => {
  const warrantyPageState = useSelector(getState);

  return {
    getWarrantyPage,
    ...warrantyPageState,
  };
};
