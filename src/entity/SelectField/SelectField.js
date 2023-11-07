import classes from './SelectField.module.scss';
import { Select } from 'shared/ui';

/**
 * @typedef {import('./types').SelectFieldProps} SelectFieldProps
 * @typedef {import('react').ReactElement} Element
 */

/**
 * @function SelectField
 * @param {SelectFieldProps} props
 * @returns {Element}
 */

export const SelectField = ({
  className,
  ...otherProps
}) => {
  const {
    value,
    isValidField,
    onFieldChange,
    errorMessage,
    label,
    options,
  } = otherProps.options;

  console.log(options);

  return (
    <label className={className}>
      {!value && (
        <span className={classes.label}>
          {label}
        </span>
      )}
      <Select
        options={options}
        value={value}
        onChange={onFieldChange}
        emptyOption
      />
      {!isValidField && (
        <span className={classes.errorMessage}>
          {errorMessage}
        </span>
      )}
    </label>
  );
};
