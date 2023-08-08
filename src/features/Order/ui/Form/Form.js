import classes from './Form.module.scss';

import {
  TextField,
  SelectField,
} from 'entity';

import {
  Checkbox,
  Button,
} from 'shared/ui';

/**
 * @typedef {import('./types').FormProps} FormProps
 * @typedef {import('react').ReactElement} Element
 */

/** 
 * @function Form
 * @param {FormProps} props
 * @returns {Element}
 */

export const Form = ({ formOptions }) => {
  const {
    nameOptions,
    telOptions,
    emailOptions,
    selectOptions,
    checkboxOptions,
    submitOptions,
  } = formOptions;

  const {
    handleFormSubmit,
    isSubmitDisabled,
  } = submitOptions;

  return (
    <form
      className={classes.form}
      onSubmit={handleFormSubmit}
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

      {/* {otherFormProps.orderData?.connection?.options && (
        <SelectField
          className={classes.connection}
          value={otherFormProps.connection}
          label={otherFormProps.orderData.connection.label}
          options={otherFormProps.orderData.connection.options}
          isValid={otherFormProps.isValidConnection}
          invalidMessage={otherFormProps.orderData.connection.invalidMessage}
          onFieldChange={otherFormProps.onConnectionChange}
        />
      )} */}

      {/* <label className={classes.policy}>
        <Checkbox
          isChecked={otherFormProps.isChecked}
          setIsChecked={otherFormProps.setIsChecked}
        />
        <a href={otherFormProps.orderData?.inputPolicy?.url}>
          {otherFormProps.orderData?.inputPolicy?.content}
        </a>
      </label> */}

      <Button
        className={classes.submit}
        label='submit'
        content={'text'}
        disabled={isSubmitDisabled}
      />
    </form>
  );
};
