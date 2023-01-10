import classes from './Input.module.scss'

export const Input = ({
  type,
  placeholder,
  name,
  onInputChange,
  setInput,
  setIsValidInput,
  validateInput,
}) => {
  const handleInputChange = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    setInput(value);
    setIsValidInput(validateInput(value));
  };

  return (
    <input 
      className={classes.input}
      type={type}
      placeholder={placeholder}
      value={name}
      onChange={handleInputChange}
    />
  );
};
