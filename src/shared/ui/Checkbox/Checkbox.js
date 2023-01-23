import classes from './Checkbox.module.scss';
import { Input } from '../InputText';

export const Checkbox = ({ inputPolicy }) => {
  const { url, content } = inputPolicy;

  return (
    <label className={classes.policy}>
      <Input type='checkbox' />
      <a href={url}>{content}</a>
    </label>
  );
};
