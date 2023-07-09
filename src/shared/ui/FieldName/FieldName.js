import classes from './FieldName.module.scss';
import { classNames } from 'shared/lib';

/** 
 * @typedef {import('./types').FieldNameProps} Props
 * @typedef {import('react').ReactElement} ReactElement
 * @type {({placeholder, name, onNameChange, isValidName, setName}: Props) => ReactElement}
 */  

export const FieldName = ({ 
  placeholder,
  name,
  onNameChange,
  isValidName,
}) => {  
  const className = classNames(
    classes.name,
    { [classes.succes]: isValidName },
    []
  );
  return (
    <label className={className}>
      <input
        type='text'
        placeholder={placeholder}
        value={name}
        onChange={onNameChange}
      />
      {!isValidName && name && <span>Некорректное имя</span>}
    </label>
  );
};
