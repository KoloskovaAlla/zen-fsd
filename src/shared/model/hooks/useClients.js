import { useSelector } from 'react-redux';
import { fetchClientsData } from '../reducers/clientsSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.clientsReducer;

/**
 * @typedef {import('./types').ClientsState} State 
 * @type {() => State}
 */

export const useClients = () => {
  const {
    isLoading,
    clientsData,
    errorMessage
  } = useSelector(callback);

  return {
    fetchClientsData,
    isLoading,
    clientsData,
    errorMessage,
  };
};
