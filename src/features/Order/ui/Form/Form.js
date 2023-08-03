import { TextField, SelectField } from 'entity'; 
import { Checkbox,  Button } from 'shared/ui'; 
import classes from './Form.module.scss';

/**
 * @typedef {import('./types').FormProps} Props
 * @typedef {import('react').ReactElement} Element
 * @type {(formProps: Props) => Element}
 */
export const Form = (formProps) => {
  return (
    <form 
      onSubmit={formProps.handleFormSubmit} 
      className={classes.form} 
    >  
      {formProps.orderData?.inputName && ( 
        <TextField 
          className={classes.name} 
          type={formProps.orderData.inputName.type} 
          placeholder={formProps.orderData.inputName.placeholder} 
          label='' 
          value={formProps.name} 
          isValid={formProps.isValidName} 
          invalidMessage={formProps.orderData.inputName.invalidMessage} 
          onFieldChange={formProps.onNameChange} 
        /> 
      )} 
  
      {formProps.orderData?.inputTel && (
        <TextField 
          className={classes.tel} 
          type={formProps.orderData.inputTel.type} 
          placeholder={formProps.orderData.inputTel.placeholder} 
          label='' 
          value={formProps.tel} 
          isValid={formProps.isValidTel} 
          invalidMessage={formProps.orderData.inputTel.invalidMessage} 
          onFieldChange={formProps.onTelChange} 
        /> 
      )}      
  
      {formProps.orderData?.inputEmail && ( 
        <TextField 
          className={classes.email} 
          type={formProps.orderData.inputEmail.type} 
          placeholder={formProps.orderData.inputEmail.placeholder} 
          label='' 
          value={formProps.email} 
          isValid={formProps.isValidEmail} 
          invalidMessage={formProps.orderData.inputEmail.invalidMessage} 
          onFieldChange={formProps.onEmailChange} 
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
