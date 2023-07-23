import { IconClose, IconMoon, IconSun } from 'shared/icons/';

const icons = {
  close: <IconClose />,
  sun: <IconSun />,
  moon: <IconMoon />
}; 

/**
 * @typedef {import('./types').ButtonProps} Props
 * @typedef {import('react').ReactElement} Element
 */

/** @type {(props: Props) => Element} */
export const Button = ({ onClickButton, className, iconName }) => {
  return (
    <button 
      onClick={onClickButton} 
      className={className}   
    >          
      {icons[iconName]}
    </button>
  )
}; 
