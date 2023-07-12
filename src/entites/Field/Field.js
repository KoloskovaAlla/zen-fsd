export const Field = ({inputDetails, parentClassName, value, setValue}) => {
  const className = parentClassName
    ? `${parentClassName}__field`
    : 'field'

  const {type, placeholder} = inputDetails

  const handleNameChange = (event) => {
    setValue(event.target.value) 
    
    switch (type) {
      default:
        // handleTextChange()
        break
      case 'tel':
        // handleTelChange()
        break
      case 'email':
        // handleEmailChange()
    }
  }

  return (
    <label className={className}>
      <input onChange={handleNameChange} type={type} placeholder={placeholder} />
    </label>
  )
};
