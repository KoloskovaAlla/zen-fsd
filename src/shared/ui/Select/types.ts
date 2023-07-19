export interface Option {
  text: string;
  value: string;
  content: string;
};

export interface SelectProps {
  options: Option[];
  value: string;
  className?: string;
  onFieldChange?: any;
  disabled?: boolean;
};