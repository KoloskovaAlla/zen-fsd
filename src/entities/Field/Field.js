import { useEffect } from 'react';
import { Select, InputText } from 'shared/ui';

export const Field = ({
  className,
  type,
  placeholder,
  label,
  value,
  isValid,
  invalidMessage,
  onChange,
}) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  switch (type) {
    case 'text':
      return (
        <label className={className}>
          <InputText
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
          />

          {!isValid && <span>{invalidMessage}</span>}
        </label>
      );
    default:
      return (
        <div></div>
      )
  }

  // return (
  //   <label className={className}>
  //     <input value={value} onChange={handleChange} type={type} placeholder={placeholder} />
  //     {!isValid && <span>{invalidMessage}</span>}
  //   </label>
  // )
};
