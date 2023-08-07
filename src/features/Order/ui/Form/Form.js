import { TextField, SelectField } from 'entity';
import { Checkbox, Button } from 'shared/ui';
import classes from './Form.module.scss';

/**
 * @typedef {import('./types').FormProps} Props
 * @typedef {import('react').ReactElement} Element
 * @type {({ nameOptions, telOptions, emailOptions, otherFormProps }: Props) => Element}
 */
export const Form = ({
  nameOptions,
  telOptions,
  emailOptions,
  otherFormProps,
}) => {
  return (
    <form
      className={classes.form}
      onSubmit={otherFormProps.handleFormSubmit}
    >
      {nameOptions && (
        <TextField
          className={classes.name}
          options={nameOptions}
        />
      )}
      {telOptions && (
        <TextField
          className={classes.tel}
          options={telOptions}
        />
      )}
      {emailOptions && (
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
