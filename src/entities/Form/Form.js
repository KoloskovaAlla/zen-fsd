import { Input, Select, Checkbox } from "shared/ui";

import classes from "./Form.module.scss";

export const Form = ({ options, connect, label, url, content, form }) => {
  const { inputPolicy } = form;
  return (
    <div>
      <label className={classes.field}>
        <Input type="text" placeholder="NAME" />
      </label>

      <label className={classes.field}>
        <Input type="tel" placeholder="PHONE NUMBER" />
      </label>

      <label className={classes.field}>
        <Input type="email" placeholder="EMAIL" />
      </label>

      <label className={classes.select}>
        {connect === "" && <span>{label}</span>}
        <Select options={options} />
      </label>

      <Checkbox inputPolicy={inputPolicy} />
    </div>
  );
};

// type,
// placeholder,
// name,
// onInputChange,
// setInput,
// setIsValidInput,
// validateInput,
