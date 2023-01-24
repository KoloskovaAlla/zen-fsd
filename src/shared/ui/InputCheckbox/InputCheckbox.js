export const InputCheckbox = ({ isChecked, onChange }) => {
  return <input type='checkbox' checked={!isChecked} onChange={onChange} />;
};
