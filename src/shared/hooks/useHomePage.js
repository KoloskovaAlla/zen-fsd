import { useSelector } from 'react-redux';
import { fetchHomePageData } from '../reducers/homeSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.homePageReducer;

/**
 * @typedef {import('./types').HomePageState}State
 * @type {() => State}
 */
export const useHomePage = () => {
  const {
    isLoading,
    homePageData,
    errorMessage
  } = useSelector(callback);

  return {
    fetchHomePageData,
    isLoading,
    homePageData,
    errorMessage,
  };
};
