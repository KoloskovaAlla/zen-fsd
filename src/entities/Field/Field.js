export const Field = ({className, type, placeholder, label, value, isValid, invalidMessage, onChange}) => {
 
  
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
