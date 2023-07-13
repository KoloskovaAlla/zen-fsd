export const Field = ({parentClassName, type, placeholder, label, value, isValid, invalidMessage, onChange}) => {
  const className = parentClassName
    ? `${parentClassName}__field`
    : 'field'  
  
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <label className={className}>
      <input value={value} onChange={handleChange} type={type} placeholder={placeholder} />
      {!isValid && <span>{invalidMessage}</span>}
    </label>
  )
};
