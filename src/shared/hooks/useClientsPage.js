import { useSelector } from 'react-redux';
import { getClientsPage } from '../reducers/clientsPageSlice';

/**
 * @typedef {import('./types').ClientsPageState} ClientsPageState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */

const getState = (store) => store.clientsPageReducer;

/**
 * @function useDownloadPage
 * @returns {ClientsPageState}
 */

export const useClientsPage = () => {
  const state = useSelector(getState);

  return {
    ...state,
    getClientsPage,
  };
};
