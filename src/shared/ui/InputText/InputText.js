export const InputText = ({
  className,
  placeholder,
  disabled,
  value,
  onFocus,
  onChange,
  onBlur,
}) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
