export interface Option {
  text: string;
  value: string;
};

export interface SelectProps {
  options: Option[];
  value: string;
  className?: string;
  onChange?: any;
  disabled?: boolean;
};