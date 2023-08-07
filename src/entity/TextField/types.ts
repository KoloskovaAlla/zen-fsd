export interface Options {
  value: string;
  isValidField: boolean;
  onFieldChange: Function;
  invalidMessage: string;
  placeholder: string;
};

export interface TextFieldProps {
  className: string;
  options: Options;
};
