export const ErrorModal = (message, isErrorMessage) => {
  if (!isErrorMessage) return null;
  if (isErrorMessage) return (
    <div>{message}</div>
  );
};
