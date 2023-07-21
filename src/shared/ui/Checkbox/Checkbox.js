export const Checkbox = ({
  type,
  isChecked,
  setIsChecked
}) => {
  return (
    <input
      type={type}
      checked={isChecked}
      onChange={() => {
        setIsChecked(!isChecked);
      }}
    />
  )
};
