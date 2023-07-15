export const Form = () => {
  return (
    <form onInput={handleFormInput} onSubmit={handleFormSubmit} className={classes.form}>
      {inputName && (
        <FieldName
          name={name}
          setName={setName}
          onNameChange={handleNameChange}
          isValidName={isValidName}
          placeholder='Name'
        />
      )}

      {/* {inputTel && (
        <FieldTel
          tel={tel}
          onTelChange={handleTelChange}
          isValidTel={isValidTel}
          placeholder='Telphone number'
        />
      )}

      {inputEmail && (
        <FieldEmail
          email={email}
          onEmailChange={handleEmailChange}
          isValidEmail={isValidEmail}
          placeholder='Email'
        />)}

      <Connection
        connect={connect}
        onConnectChange={handleConnectChange}
        isValidConnection={isValidConnect}
        connection={connection}
      />

      <Policy inputPolicy={inputPolicy} isChecked={isChecked} setIsChecked={setIsChecked} />

      <Submit
        buttonText={buttonText}
        disabled={isSubmitDisabled}
      /> */}
    </form>  
  );
};