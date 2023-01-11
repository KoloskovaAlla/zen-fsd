import classes from "./Select.module.scss";

export const Select = ({ options }) => {
  return (
    <select className={classes.select}>
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
