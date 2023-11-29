import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsErrorMessage, setErrorMessage } from 'shared/reducers/errorModalSlice';

const getErrorPost = (store) => store.postReducer;

export const useError = (message) => {
  const dispatch = useDispatch();
  const state = useSelector(getErrorPost);
  const { isErrorMessagePost, errorMessagePost } = state;

  useEffect(() => {
    if (message === 'There is no such post') {
      dispatch(setIsErrorMessage(true));
      dispatch(setErrorMessage('There is no such post'));
    };
  }, []);
};
