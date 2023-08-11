import {useDispatch} from 'react-redux';
/**
 * @typedef {import('./types').CheckboxProps} CheckboxProps
 * @typedef {import('react').ReactElement} Element
 */

/** 
 * @function Checkbox
 * @param {CheckboxProps} props
 * @returns {Element}
 */

export const Checkbox = ({ options }) => {
  const {isChecked, setIsChecked } = options;
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
