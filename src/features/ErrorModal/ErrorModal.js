import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const ErrorModal = () => {
  const callback = (store) => store.errorModalReducer;
  const { isErrorMessage, errorMessage } = useSelector(callback);
  useEffect(() => {
    console.log(isErrorMessage);
  }, [isErrorMessage]);
  console.log(errorMessage);
  if (!isErrorMessage) return null;
  return (
    // <div>{errorMessage}</div>
    <div>test</div>
  );
};
