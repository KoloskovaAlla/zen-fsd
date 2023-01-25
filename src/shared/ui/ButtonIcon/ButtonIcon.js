export const ButtonIcon = ({icon, onClick, className}) => {
  return (
    <button onClick={onClick} className={className}>
      {icon}
    </button>
  );
};
