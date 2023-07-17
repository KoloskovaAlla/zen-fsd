import { IconArrow } from 'shared/icons';

export const SelectField = ({
  className,
  value,
  label,
  options,
  isValid,
  inValidMessage,
  onFieldChange
}) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onFieldChange(value);
  };
  return (

    <label className={className}>
      <select
        value={value}
        onChange={onFieldChange}
      >
        {Object.values(options).map((option) => (
          <option value={option.value} key={option.value}>
            {option?.text && option.text}
          </option>
        ))}
      </select>

      <IconArrow />
    </label>
  );
};
