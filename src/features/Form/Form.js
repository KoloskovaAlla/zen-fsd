import { InputText, Select, Checkbox } from 'shared/ui';
import { setIsValidName, validateName } from 'shared/lib';
import { useState } from 'react';

import classes from './Form.module.scss';

export const Form = ({ options, connect, label, url, content, form }) => {
  const { inputPolicy } = form;

  const [name, setName] = useState(null);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    setIsValidName(validateName(value)); //import { setIsValidName, validateName } from 'shared/lib';
  };
  const handleNameFocus = () => {};
  const handleNameBlur = () => {};

  return (
    <div>
      <label className={classes.field}>
        <InputText
          placeholder='NAME'
          onChange={handleNameChange}
          onFocus={handleNameFocus}
          onBlur={handleNameBlur}
          className={classes.inputName}
          value={name}
        />
      </label>

      {/* <label className={classes.field}>
        <InputText
          placeholder='PHONE NUMBER'
          onChange={handleTelChange}
          className={classes.inputTel}
        />
      </label> */}

      <label className={classes.field}>
        <InputText type='email' placeholder='EMAIL' />
      </label>

      <label className={classes.select}>
        {connect === '' && <span>{label}</span>}
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

// const handleInputTextChange = (event) => {
//   console.log(event.target.value);

//   const value = event.target.value;
//   setInput(value);

//   switch (type) {
//     case 'name':
//       setIsValidInput(validateName(value));
//       break;
//     case 'tel':
//       setIsValidInput(validateTel(value));
//       break;
//     case 'email':
//       setIsValidInput(validateEmail(value));
//       break;
//     default:
//       setIsValidInput(validateConnect(value));
//   }

//   console.log(isValidInput);
// };
