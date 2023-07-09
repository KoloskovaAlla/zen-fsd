export interface FieldNameProps {
  placeholder: string;
  name: string;
  onNameChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
  // onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  isValidName: boolean;
  setName: Function; 
};
