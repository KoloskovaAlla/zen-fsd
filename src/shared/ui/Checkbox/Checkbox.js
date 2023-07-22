/**
 * @typedef {import('./types').CheckboxProps} Props
 * @typedef {import('react').ReactElement} Element
 */

/** @type {({ isChecked, setIsChecked }: Props) => Element} */

export const Checkbox = ({
  isChecked,
  setIsChecked
}) => {
  return (
    <input
      type='checkbox'
      checked={isChecked}
      onChange={() => {
        setIsChecked(!isChecked);
      }}
    />
  )
};
