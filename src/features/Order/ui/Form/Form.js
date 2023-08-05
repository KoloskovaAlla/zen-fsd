import { TextField, SelectField } from 'entity'; 
import { Checkbox,  Button } from 'shared/ui'; 
import classes from './Form.module.scss';

/**
 * @typedef {import('./types').FormProps} Props
 * @typedef {import('react').ReactElement} Element
 * @type {(formProps: Props) => Element}
 */
export const Form = (formProps) => {
  const { orderData } = formProps;
  const nameOptions = {
    value: formProps.name, 
    isValidField: formProps.isValidName,
    onFieldChanged: formProps.onNameChange,
    invalidMessage: orderData.inputName.invalidMessage,
    type: orderData.inputName.type,
    placeholder: orderData.inputName.placeholder,    
  };

  const telOptions = {
    value: formProps.tel, 
    isValidField: formProps.isValidTel,
    onFieldChanged: formProps.onTelChange,
    invalidMessage: orderData.inputTel.invalidMessage,
    type: orderData.inputTel.type,
    placeholder: orderData.inputTel.placeholder,    
  };
  const emailOptions = {
    value: formProps.email, 
    isValidField: formProps.isValidEmail,
    onFieldChanged: formProps.onEmailChange,
    invalidMessage: orderData.inputEmail.invalidMessage,
    type: orderData.inputEmail.type,
    placeholder: orderData.inputEmail.placeholder,    
  };

  return (
    <form 
      onSubmit={formProps.handleFormSubmit} 
      className={classes.form} 
    >  
      {orderData?.inputName && ( 
        <TextField 
          className={classes.name} 
          options={nameOptions}         
        /> 
      )}   
      {orderData?.inputTel && ( 
        <TextField 
          className={classes.name} 
          options={telOptions}         
        /> 
      )}   
      {orderData?.inputEmail && ( 
        <TextField 
          className={classes.name} 
          options={emailOptions}         
        /> 
      )}   
      
  
      {formProps.orderData?.connection?.options && ( 
        <SelectField 
          className={classes.connection} 
          value={formProps.connection} 
          label={formProps.orderData.connection.label} 
          options={formProps.orderData.connection.options} 
          isValid={formProps.isValidConnection} 
          invalidMessage={formProps.orderData.connection.invalidMessage} 
          onFieldChange={formProps.onConnectionChange} 
        /> 
      )} 
  
      <label className={classes.policy}> 
        <Checkbox 
          isChecked={formProps.isChecked} 
          setIsChecked={formProps.setIsChecked} 
        /> 
        <a href={formProps.orderData?.inputPolicy?.url}> 
          {formProps.orderData?.inputPolicy?.content} 
        </a> 
      </label> 
  
      <Button 
        className={classes.submit} 
        label='submit' 
        content={'text'} 
        disabled={formProps.isSubmitDisabled} 
      /> 
    </form> 
  );
};
