import {Input} from 'shared/ui/Input'
import {Select} from 'shared/ui/Select'
import classes from './Form.module.scss'

export const Form = ({options}) => {
  
  return (
    <div>
      <label className={classes.label}>
        <Input type="text" placeholder="NAME" />
      </label>

      <label className={classes.label}>
        <Input type="tel" placeholder="PHONE NUMBER" />
      </label>

      <label className={classes.label}>
        <Input type="email" placeholder="EMAIL" />
      </label>

      <label>
        <Select options={options} />
      </label>
    </div>
  );
} 

  // type,
  // placeholder,
  // name,
  // onInputChange,
  // setInput,
  // setIsValidInput,
  // validateInput,
