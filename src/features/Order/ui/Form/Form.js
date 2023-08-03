import { TextField, SelectField } from 'entity'; 
import { Checkbox,  Button } from 'shared/ui'; 
import classes from './Form.module.scss';

/**
 * @typedef {import('./types').FormProps} Props
 * @typedef {import('react').ReactElement} Element
 * @type {(formProps: Props) => Element}
 */
export const Form = (formProps) => {  
  const {   
    handleFormSubmit, 
    orderData, 
    name, 
    isValidName, 
    onNameChange, 
    tel, 
    isValidTel, 
    onTelChange, 
    email, 
    isValidEmail,   
    onEmailChange, 
    connection,   
    isValidConnection, 
    onConnectionChange, 
    isChecked, 
    setIsChecked, 
    isSubmitDisabled 
  } = formProps;

  return (
    <form 
      onSubmit={handleFormSubmit} 
      className={classes.form} 
    >  
      {orderData?.inputName && ( 
        <TextField 
          className={classes.name} 
          type={orderData.inputName.type} 
          placeholder={orderData.inputName.placeholder} 
          label='' 
          value={name} 
          isValid={isValidName} 
          invalidMessage={orderData.inputName.invalidMessage} 
          onFieldChange={onNameChange} 
        /> 
      )} 
  
      {orderData?.inputTel && (
        <TextField 
          className={classes.tel} 
          type={orderData.inputTel.type} 
          placeholder={orderData.inputTel.placeholder} 
          label='' 
          value={tel} 
          isValid={isValidTel} 
          invalidMessage={orderData.inputTel.invalidMessage} 
          onFieldChange={onTelChange} 
        /> 
      )}      
  
      {orderData?.inputEmail && ( 
        <TextField 
          className={classes.email} 
          type={orderData.inputEmail.type} 
          placeholder={orderData.inputEmail.placeholder} 
          label='' 
          value={email} 
          isValid={isValidEmail} 
          invalidMessage={orderData.inputEmail.invalidMessage} 
          onFieldChange={onEmailChange} 
        /> 
      )} 
  
      {orderData?.connection?.options && ( 
        <SelectField 
          className={classes.connection} 
          value={connection} 
          label={orderData.connection.label} 
          options={orderData.connection.options} 
          isValid={isValidConnection} 
          invalidMessage={orderData.connection.invalidMessage} 
          onFieldChange={onConnectionChange} 
        /> 
      )} 
  
      <label className={classes.policy}> 
        <Checkbox 
          isChecked={isChecked} 
          setIsChecked={setIsChecked} 
        /> 
        <a href={orderData?.inputPolicy?.url}> 
          {orderData?.inputPolicy?.content} 
        </a> 
      </label> 
  
      <Button 
        className={classes.submit} 
        label='submit' 
        content={'text'} 
        disabled={isSubmitDisabled} 
      /> 
    </form> 
  );
};
