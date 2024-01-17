import classes from './SelectField.module.scss';
import { Select } from 'shared/ui';

/**
 * @typedef {import('./types').SelectFieldProps} SelectFieldProps
 */

/**
 * @function SelectField
 * @param {SelectFieldProps} props
 * @returns {null | JSX.Element}
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
