import { IconArrow } from 'shared/icons';
import { useEffect } from 'react';

export const SelectField = ({
  className,
  value,
  label,
  options,
  isValid,
  invalidMessage,
  onFieldChange
}) => {
  useEffect(() => {
    console.log(options);
  }, [options]);
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
            {option?.content && option.content}
          </option>
        ))}
      </select>

      <IconArrow />
    </label>
  );
};
