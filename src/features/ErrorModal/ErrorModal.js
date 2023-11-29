import { useSelector } from 'react-redux';

export const ErrorModal = () => {
  const callback = (store) => store.errorModalReducer;
  const { isErrorMessage, errorMessage } = useSelector(callback);
  console.log(isErrorMessage);
  if (!isErrorMessage) return null;
  return (
    // <div>{errorMessage}</div>
    <div>test</div>
  );
};
