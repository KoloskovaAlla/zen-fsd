import { IconClose, IconMoon, IconSun } from 'shared/icons/';
/**
 * @typedef {import('./types').ButtonProps} Props
 * @typedef {import('react').ReactElement} Element
 */

/** @type {({ onClickButton, className, iconName }: Props) => Element} */
export const Button = ({ onClickButton, className, iconName }) => {
  return (
    <button 
      onClick={onClickButton} 
      className={className}   
    >      
      кнопка закрытия
      {iconName === 'close' && <IconClose />}
      {iconName === 'sun' && <IconSun />}
      {iconName === 'moon' && <IconMoon />}
    </button>
  )
}; 