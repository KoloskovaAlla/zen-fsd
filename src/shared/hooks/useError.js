import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsErrorMessage, setErrorMessage } from 'shared/reducers/errorModalSlice';

export const useError = (message) => {
  console.log(message);
};
