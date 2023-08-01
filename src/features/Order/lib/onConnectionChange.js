export const onConnectionChange = ({ target }) => { 
  const value = target.value 
  dispatch(setConnection(value)); 
  dispatch(setIsValidConnection(validateConnect(value))); 
 }; 