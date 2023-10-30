/**
 * @typedef {import('react').ReactElement} Element
 */

/**
 * @function InputText
 * @param {any} props
 * @returns {Element}
 */

export const InputText = ({
  value,
  onFieldChange,
  placeholder
}) => {
  return (
    <input
      value={value}
      onChange={onFieldChange}
      type='text'
      placeholder={placeholder}
    />
  );
};
