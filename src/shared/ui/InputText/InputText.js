/**
 * @typedef {import('react').ReactElement} Element
 * @typedef {import('./types').InputTextProps} InputTextProps
 */

/**
 * @function InputText
 * @param {InputTextProps} props
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
