import classes from './SelectField.module.scss';
import { Select } from 'shared/ui';

export const SelectField = ({
  className,
  options,
}) => {

  const {
    value,
    isValidField,
    errorMessage,
    options
  } = options;

  return (
    <label className={className}>
      {/* {!value && (
        <span className={classes.label}>
          {label}
        </span>
      )}
      <Select
        options={options}
        onChange={onFieldChange}
        value={value}
      />
      {!isValid && (
        <span className={classes.invalidMessage}>
          {invalidMessage}
        </span>
      )} */}
    </label>
  );
};
