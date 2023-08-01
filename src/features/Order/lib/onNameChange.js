export const onNameChange = ({ target }) => { 
  const value = target.value; 
  dispatch(setName(value)); 
  dispatch(setIsValidName(validateName(value))); 
}; 