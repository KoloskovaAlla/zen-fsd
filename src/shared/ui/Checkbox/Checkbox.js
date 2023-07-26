/**
 * @typedef {import('./types').CheckboxProps} Props
 * @typedef {import('react').ReactElement} Element
 */

import {useDispatch} from 'react-redux';

/** @type {({ isChecked, setIsChecked }: Props) => Element} */

export const Checkbox = ({
  isChecked,
  setIsChecked
}) => {
  const dispatch = useDispatch();
  return (
    <input
      type='checkbox'
      checked={isChecked}
      onChange={() => {
        dispatch(setIsChecked(!isChecked));
      }}
    />
  )
};
