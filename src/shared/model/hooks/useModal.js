import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getModal, setIsModalActive } from '../reducers/modalSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.modalReducer;

/**
 * @typedef {import('./types').ModalState} State
 * @type {() => State}
 */
export const useModal = () => {
  const {
    isModalActive,
    isLoading,
    modalData,
    errorMessage,
  } = useSelector(callback);

  useEffect(() => {
    localStorage.setItem('isModalActive', isModalActive);
  }, [isModalActive]);

  return {
    isModalActive,
    setIsModalActive,
    isLoading,
    modalData,
    errorMessage,
    getModal,   
  };
};
