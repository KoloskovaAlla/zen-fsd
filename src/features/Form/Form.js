import { InputText, Select, Checkbox } from 'shared/ui';
import { validateName, validateTel, validateEmail } from 'shared/lib';
import { useState, useEffect } from 'react';

import classes from './Form.module.scss';

export const Form = ({ connect, url, content, form }) => {
  const lang = 'en';

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/.json`)
      // fetch(`${API_BASE_URL}/${lang}/.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.modal);
      })
      .catch();
  }, [lang]);

  if (data) console.log(data.connection);

  const { inputPolicy } = form;

  const [name, setName] = useState('');
  const [isValidName, setIsValidName] = useState(true);

  const [tel, setTel] = useState('');
  const [isValidTel, setIsValidTel] = useState(true);

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    setIsValidName(validateName(value));
  };
  const handleNameFocus = () => {};
  const handleNameBlur = () => {};

  const handleTelChange = (event) => {
    const value = event.target.value;
    setTel(value);
    setIsValidTel(validateTel(value));
  };
  const handleTelFocus = (event) => {};
  const handleTelBlur = (event) => {};

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };
  const handleEmailFocus = (event) => {};
  const handleEmailBlur = (event) => {};

  return (
    <form>
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

      <label className={classes.field}>
        <InputText
          placeholder='PHONE NUMBER'
          onChange={handleTelChange}
          onFocus={handleTelFocus}
          onBlur={handleTelBlur}
          className={classes.inputTel}
          value={tel}
        />
      </label>

      <label className={classes.field}>
        <InputText
          placeholder='EMAIL'
          onChange={handleEmailChange}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          className={classes.inputEmail}
          value={email}
        />
      </label>

      {data && (
        <label className={classes.select}>
          {connect === '' && <span>{data.connection.label}</span>}
          <Select options={data.connection.options} />
        </label>
      )}

      <Checkbox inputPolicy={inputPolicy} />
    </form>
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
