export const InputText = ({ value, onFieldChange, placeholder }) => {
  return (
    <input
      value={value}
      onChange={onFieldChange}
      type='text'
      placeholder={placeholder}
    />
  );
};
