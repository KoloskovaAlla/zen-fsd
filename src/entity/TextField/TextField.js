import { InputText } from 'shared/ui';

export const TextField = ({
  className,
  options
}) => {
const { value, isValidField, onFieldChange, invalidMessage, type, placeholder } = options;

  return (
    <label className={className}>
      <InputText
        value={value}
        onFieldChange={onFieldChange}
        type={type}
        placeholder={placeholder}
      />

      {!isValidField && <span>{invalidMessage}</span>}
    </label>
  );
};
