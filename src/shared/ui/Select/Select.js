/**
 * @typedef {import('./types').SelectProps} Props
 * @typedef {import('react').ReactElement} Element
 */

/** @type {({ options, onChange, value }: Props) => Element} */

export const Select = ({ options, onChange, value }) => {
  return (
    <select
      value={value}
      onChange={onChange}
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
