export const onTelChange = ({ target }) => { 
  const value = target.value; 
  dispatch(setTel(value)); 
  dispatch(setIsValidTel(validateTel(value))); 
}; 