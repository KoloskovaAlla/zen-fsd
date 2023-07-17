import { IconArrow } from 'shared/icons';

export const SelectField = ({
  className,
  value,
  label,
  options,
  isValid,
  invalidMessage,
  onFieldChange
}) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onFieldChange(value);
  };
  return (
    <label className={className}>
      <span>CONNECTION</span>
      <select
        value={value}
        onChange={onFieldChange}
      >
        <option></option>
        {Object.values(options).map((option) => (
          <option value={option.value} key={option.value}>
            {option?.content && option.content}
          </option>
        ))}
      </select>

      <IconArrow />
    </label>
  );
};
