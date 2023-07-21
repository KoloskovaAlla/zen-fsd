import { useState } from 'react';

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <input
      type='checkbox'
      checked={isChecked}
      onChange={() => {
        setIsChecked(!isChecked);
      }}
    />
  )
};
