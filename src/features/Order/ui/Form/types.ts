export interface OtherFormProps {
  handleFormSubmit: any;
  orderData: any;
  name: any;
  isValidName: any;
  onNameChange: any;
  tel: any;
  isValidTel: any;
  onTelChange: any;
  email: any;
  isValidEmail: any;
  onEmailChange: any;
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
  type: string;
  placeholder: string;
};

export interface TelOptions {
  value: string;
  isValidField: boolean;
  onFieldChange: Function;
  invalidMessage: string;
  type: string;
  placeholder: string;
};

export interface EmailOptions {
  value: string;
  isValidField: boolean;
  onFieldChange: Function;
  invalidMessage: string;
  type: string;
  placeholder: string;
};

export interface FormProps {
  otherFormProps: OtherFormProps;
  nameOptions: NameOptions;
  telOptions: TelOptions;
  emailOptions: EmailOptions;
};