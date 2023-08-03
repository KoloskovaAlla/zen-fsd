import { InputText } from 'shared/ui';

export const TextField = ({
  className,
  type,
  placeholder,
  label,
  value,
  isValid,
  invalidMessage,
  onFieldChange,
}) => {
  return (
    <label className={className}>
      <InputText
        value={value}
        onChange={onFieldChange}
        type={type}
        placeholder={placeholder}
      />

      {!isValid && <span>{invalidMessage}</span>}
    </label>
  );
};
