import classes from './SelectField.module.scss';
import { Select } from 'shared/ui';

export const SelectField = ({
  className,
  ...otherProps
}) => {
  const {
    value,
    isValidField,
    onFieldChange,
    errorMessage,
    options
  } = otherProps.options;

  return (
    <label className={className}>
      {!value && (
        <span className={classes.label}>
          {isValidField}
        </span>
      )}
      <Select
        options={options}
        onChange={onFieldChange}
        value={value}
      />
      {!isValidField && (
        <span className={classes.errorMessage}>
          {errorMessage}
        </span>
      )}
    </label>
  );
};
