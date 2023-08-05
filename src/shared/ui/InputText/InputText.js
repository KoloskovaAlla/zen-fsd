export const InputText = ({ value, onFieldChange, type, placeholder }) => {
  return (
    <input
      value={value}
      onChange={onFieldChange}
      type={type}
      placeholder={placeholder}
    />
  )
};