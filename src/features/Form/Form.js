import { InputText, Select, InputCheckbox } from 'shared/ui';
import {
  validateName,
  validateTel,
  validateEmail,
  validateConnect,
} from 'shared/lib';
import { useState, useEffect } from 'react';
import { classNames } from 'shared/lib';
import classes from './Form.module.scss';

export const Form = ({ form }) => {
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

  if (data) console.log(data);

  const { inputPolicy } = form;

  const [name, setName] = useState('');
  const [isValidName, setIsValidName] = useState(false);

  const [tel, setTel] = useState('');
  const [isValidTel, setIsValidTel] = useState(false);

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const [connect, setConnect] = useState('');
  const [isValidConnect, setIsValidConnect] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

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

  const handleConnectChange = (event) => {
    const value = event.target.value;
    setConnect(value);
    setIsValidConnect(validateConnect(value));
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const classNameName = classNames(
    classes.field,
    {
      [classes.succes]: isValidName,
    },
    []
  );
  const classNameTel = classNames(
    classes.field,
    {
      [classes.succes]: isValidTel,
    },
    []
  );
  const classNameEmail = classNames(
    classes.field,
    {
      [classes.succes]: isValidEmail,
    },
    []
  );


  return (
    <form className={classes.form}>
      <label className={classNameName}>
        <InputText
          placeholder='NAME'
          onChange={handleNameChange}
          onFocus={handleNameFocus}
          onBlur={handleNameBlur}
          className={classes.inputName}
          value={name}
        />
      </label>

      <label className={classNameTel}>
        <InputText
          placeholder='PHONE NUMBER'
          onChange={handleTelChange}
          onFocus={handleTelFocus}
          onBlur={handleTelBlur}
          className={classes.inputTel}
          value={tel}
        />
      </label>

      <label className={classNameEmail}>
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
        <label className={classes.connection}>
          {connect === '' && <span>{data.connection.label}</span>}
          <Select
            onChange={handleConnectChange}
            options={data.connection.options}
            className={classes.select}
            value={connect}
          />
        </label>
      )}

      {data && (
        <label className={classes.policy}>
          <InputCheckbox
            isChecked={isChecked}
            onChange={handleCheckboxChange}
          />
          <a href={data.inputPolicy.url}>{data.inputPolicy.content}</a>
        </label>
      )}
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
