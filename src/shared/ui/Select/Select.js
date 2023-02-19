import { ArrowIcon } from 'shared/icons';

export const Select = ({ options, className, onChange, value }) => {
  return (
    <label className={className}>
      <select
        value={ value }
        onChange={ onChange }
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.text && option.text}
          </option>
        ))}
      </select>

      <ArrowIcon />
    </label>
  );
};