export interface OtherFormProps {
  handleFormSubmit: any;
  orderData: any;
  connection: any;
  isValidConnection: any;
  onConnectionChange: any;
  isChecked: any;
  setIsChecked: any;
  isSubmitDisabled: any;
};

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

export interface ConnectOptions {
  value: string;
  isValidField: boolean;
  onFieldChange: Function;
};

export interface CheckboxOptions {

};

export interface SubmitOptions {
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
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
