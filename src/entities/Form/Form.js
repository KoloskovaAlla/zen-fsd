import { Input, Select } from "shared/ui";

import classes from "./Form.module.scss";

export const Form = ({ options }) => {
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
        <Select options={options} />
      </label>
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
