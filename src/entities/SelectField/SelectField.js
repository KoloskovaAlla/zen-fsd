import { Select } from 'shared/ui';
import classes from './SelectField.module.scss';

export const SelectField = ({
  className,
  value,
  label,
  options,
  isValid,
  invalidMessage,
  onFieldChange
}) => {
  console.log(options)
  return (
    <label className={className}>
      {!value && (
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
      )}
    </label>
  );
};
