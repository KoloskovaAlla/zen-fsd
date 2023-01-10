export const validateName = (name) => {
  return name ? true : false
  // const regex = /(^[A-Z])[a-z]{0,15}|(^[А-Я])[а-я]{0,15}/    
  // return regex.test(String(name)) 
}