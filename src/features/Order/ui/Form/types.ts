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

export interface FormProps {
  otherFormProps: OtherFormProps;
  nameOptions: NameOptions;
  telOptions: TelOptions;
  emailOptions: EmailOptions;
};
