import { IconArrow } from 'shared/icons';

/**
 * @typedef {import('./types').SelectProps} Props
 * @typedef {import('react').ReactElement} Element
*/

/** @type {({ options, className, onChange, value }: Props) => Element} */

export const Select = ({ options, className, onChange, value }) => {
  return (
    <label className={className}>
      <select
        value={value}
        onChange={onChange}
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