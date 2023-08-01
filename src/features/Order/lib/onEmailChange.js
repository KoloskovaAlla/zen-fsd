export  const onEmailChange = ({ target }) => { 
  const value = target.value; 
  dispatch(setEmail(value)); 
  dispatch(setIsValidEmail(validateEmail(value))); 
}; 