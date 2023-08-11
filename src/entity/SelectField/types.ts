export interface Option {
  content: string;
  value: string;
};

export interface Options {
  value: string;
  isValidField: boolean;
  onFieldChange: Function;
  errorMessage: string;
  placeholder: string;  
  label: string;
  options: Option[]; 
};

export interface SelectFieldProps {
  className: string;
  options: Options;
};