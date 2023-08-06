export interface Options {
  value: string; 
  isValidField: boolean;
  onFieldChange: Function;
  invalidMessage: string;
  type: string;
  placeholder: string;
};

export interface TextFieldProps {
  className: string;
  options: Options;
};
