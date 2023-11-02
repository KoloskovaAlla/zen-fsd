import { useSelector } from 'react-redux';
import { getClients } from '../reducers/clientsSlice';

/**
 * @typedef {import('./types').ClientsState} ClientsState
 */

/**
 * @function getState
 * @param {Object} store
 * @return {Object}
 */

const getState = (store) => { store.clientsReducer };

/**
 * @function useClients
 * @return {ClientsState}
 */

export const useClients = () => {
  const state = useSelector(getState);

  return {
    ...state,
    getClients
  };
};

