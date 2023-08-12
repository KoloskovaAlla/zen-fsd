import { InputText } from 'shared/ui';

/**
 * @typedef {import('./types').TextFieldProps} TextFieldProps
 * @typedef {import('react').ReactElement} Element
 */

/** 
 * @function TextField
 * @param {TextFieldProps} props
 * @returns {Element}
 */

export const TextField = ({ className, options }) => {
  const {
    value,
    isValidField,
    onFieldChange,
    invalidMessage,
    placeholder
  } = options;

  return (
    <label className={className}>
      <InputText
        placeholder={placeholder}
        value={value}
        onFieldChange={onFieldChange}
      />

      {!isValidField && <span>{invalidMessage}</span>}
    </label>
  );
};
