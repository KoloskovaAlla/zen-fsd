import classes from './Input.module.scss';
import {
  validateName,
  validateTel,
  validateConnect,
  validateEmail,
} from 'shared/lib';
import { useState } from 'react';

export const Input = ({
  type,
  placeholder,
  name,
  onInputChange,
  validateInput,
}) => {
  const [input, setInput] = useState(null);
  const [isValidInput, setIsValidInput] = useState(false);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    setInput(event.target.value);

    switch (type) {
      case 'text':
        setIsValidInput(validateName(value));
        break;
      case 'tel':
        setIsValidInput(validateTel(value));
        break;
      case 'email':
        setIsValidInput(validateEmail(value));
        break;
      default:
        setIsValidInput(validateConnect(value));
    }

    console.log(isValidInput);
  };

  if (type === 'text' || type === 'tel' || type === 'email')
    return (
      <input
        className={classes.input}
        type={type}
        placeholder={placeholder}
        value={name}
        onChange={handleInputChange}
      />
    );

  if (type === 'checkbox') return <input type={type} />;
};
