/**
 * @typedef {import('./types').InputTextProps} InputTextProps
 */

/**
 * @function InputText
 * @param {InputTextProps} props
 * @returns {JSX.Element}
 */

export const InputText = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
