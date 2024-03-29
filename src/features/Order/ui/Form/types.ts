import { FormEvent } from 'react';
export interface NameOptions {
  value: string;
  isValidField: boolean;
  onFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  invalidMessage: string;
  placeholder: string;
};

export interface TelOptions {
  value: string;
  isValidField: boolean;
  onFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  invalidMessage: string;
  placeholder: string;
};

export interface EmailOptions {
  value: string;
  isValidField: boolean;
  onFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  invalidMessage: string;
  placeholder: string;
};

export interface Option {
  content: string;
  value: string;
};
export interface ConnectOptions {
  value: string;
  isValidField: boolean;
  onFieldChange: Function;
  errorMessage: string;
  options: Option[];
  label: string;
};

export interface CheckboxOptions {
  isChecked: boolean;
  setIsChecked: Function;
  url: string;
  content: string;
};

export interface SubmitOptions {
  handleFormSubmit: (event: FormEvent) => any;
  isSubmitDisabled: boolean;
};

export interface FormProps {
  formOptions: {
    nameOptions: NameOptions;
    telOptions: TelOptions;
    emailOptions: EmailOptions;
    connectOptions: ConnectOptions;
    checkboxOptions: CheckboxOptions;
    submitOptions: SubmitOptions;
  };
};
