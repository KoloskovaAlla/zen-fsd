import { useDispatch } from 'react-redux';

export const setDispatch = (setter) => {
  const dispatch = useDispatch();
  dispatch(setter);
};
