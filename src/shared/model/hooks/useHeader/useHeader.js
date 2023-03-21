import { useSelector } from 'react-redux';
import { fetchHeaderData } from 'shared/model/reducers/headerSlice';

/** @typedef {import('./types').HeaderState} HeaderState */

/** @type {() => HeaderState} */
export const useHeader = () => {
  /** @type {(store: object) => object} */
  const callback = (store) => store.headerReducer;

  const {
    isLoading,
    headerData,
    errorMessage
  } = useSelector(callback);

  return {
    fetchHeaderData,
    isLoading,
    headerData,
    errorMessage,
  };
};
