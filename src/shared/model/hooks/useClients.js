import { useSelector } from 'react-redux';
import { fetchClientsData } from '../reducers/clientsSlice';

/**  
 * @returns {object}
 */

export const useClients = () => {
  const {
    isLoading,
    clientsData,
    errorMessage
  } = useSelector((state) => state.clientsReducer);

  return {
    fetchClientsData,
    isLoading,
    clientsData,
    errorMessage,
  };
};
