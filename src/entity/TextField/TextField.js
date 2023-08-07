import { InputText } from 'shared/ui';

/**
 * @typedef {import('./types').TextFieldProps} Props
 * @typedef {import('react').ReactElement} Element
 * @type {({ className, options}: Props) => Element}
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
