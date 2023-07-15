import { useEffect } from 'react';

export const Field = ({className, type, placeholder, label, value, isValid, invalidMessage, onChange}) => {  
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  switch (type) {
    case 'text':
      return (
      <label className={className}>
        <input value={value} onChange={handleChange} type={type} placeholder={placeholder} />
        {!isValid && <span>{invalidMessage}</span>}
      </label>
      );    
    // case 'select': 
    //   return (
    //     <select
    //       value={value}
    //       onChange={handleChange} 
    //     >
    //       <option value=''></option>
    //       {options.length > 0 && (options.map((option, index) =>
    //         <option value={option.value} key={index}>
    //           {option.content}
    //         </option>
    //       ))}
    //     </select>
    //   );
    default:
      return ''   
  }

  // return (
  //   <label className={className}>
  //     <input value={value} onChange={handleChange} type={type} placeholder={placeholder} />
  //     {!isValid && <span>{invalidMessage}</span>}
  //   </label>
  // )
};
