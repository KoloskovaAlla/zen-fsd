export const Select = ({options}) => {
  return (
    <select>
      <option value=""></option>
      {options.length > 0 &&
        options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.content}
          </option>
        ))}
    </select>
  );
};
