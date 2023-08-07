import { TextField, SelectField } from 'entity';
import { Checkbox, Button } from 'shared/ui';
import classes from './Form.module.scss';

/**
 * @typedef {import('./types').FormProps} Props
 * @typedef {import('react').ReactElement} Element
 * @type {({ nameOptions, telOptions, emailOptions, otherFormProps }: Props) => Element}
 */
export const Form = ({ nameOptions, telOptions, emailOptions, otherFormProps }) => {
  const { orderData } = otherFormProps;


  return (
    <form
      onSubmit={otherFormProps.handleFormSubmit}
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
          className={classes.tel}
          options={telOptions}
        />
      )}
      {orderData?.inputEmail && (
        <TextField
          className={classes.email}
          options={emailOptions}
        />
      )}

      {otherFormProps.orderData?.connection?.options && (
        <SelectField
          className={classes.connection}
          value={otherFormProps.connection}
          label={otherFormProps.orderData.connection.label}
          options={otherFormProps.orderData.connection.options}
          isValid={otherFormProps.isValidConnection}
          invalidMessage={otherFormProps.orderData.connection.invalidMessage}
          onFieldChange={otherFormProps.onConnectionChange}
        />
      )}

      <label className={classes.policy}>
        <Checkbox
          isChecked={otherFormProps.isChecked}
          setIsChecked={otherFormProps.setIsChecked}
        />
        <a href={otherFormProps.orderData?.inputPolicy?.url}>
          {otherFormProps.orderData?.inputPolicy?.content}
        </a>
      </label>

      <Button
        className={classes.submit}
        label='submit'
        content={'text'}
        disabled={otherFormProps.isSubmitDisabled}
      />
    </form>
  );
};
