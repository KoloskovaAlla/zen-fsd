export const InputText = ({ value, onChange, type, placeholder }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  )
};