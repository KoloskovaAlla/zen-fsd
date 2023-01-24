export const Select = ({ options, className, value, onChange }) => {
  return (
    <select className={className} value={value} onChange={onChange}>
      <option value=''></option>
      {options.length > 0 &&
        options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.content}
          </option>
        ))}
    </select>
  );
};
