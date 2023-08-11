export interface NameOptions {
  value: string;
  isValidField: boolean;
  onFieldChange: Function;
  invalidMessage: string;
  placeholder: string;
};

export interface TelOptions {
  value: string;
  isValidField: boolean;
  onFieldChange: Function;
  invalidMessage: string;
  placeholder: string;
};

export interface EmailOptions {
  value: string;
  isValidField: boolean;
  onFieldChange: Function;
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
};

export interface CheckboxOptions {

};

export interface SubmitOptions {
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  // handleFormSubmit: React.FormEventHandler<HTMLFormElement>;
  // handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => any;
  // handleFormSubmit: any;
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
