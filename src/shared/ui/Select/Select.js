/**
 * @typedef {import('./types').SelectProps} Props
 * @typedef {import('react').ReactElement} Element
 */

/** @type {({ options, onFieldChange, value }: Props) => Element} */

export const Select = ({ options, onFieldChange, value }) => {
  return (
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
  );
};
