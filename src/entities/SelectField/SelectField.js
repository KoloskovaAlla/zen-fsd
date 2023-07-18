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
  return (
    <label className={className}>
      {!value && (
        <span className={classes.label}>
          {label}
        </span>
      )}
      <select
        value={value}
        onChange={onFieldChange}
      >
        <option></option>
        {options.length > 0 && options.map(({ value, content }) => (
          content && (
            <option value={value} key={value}>
              {content}
            </option>
          )
        ))}
      </select>
      {!isValid && (
        <span className={classes.invalidMessage}>
          {invalidMessage}
        </span>
      )}
    </label>
  );
};
