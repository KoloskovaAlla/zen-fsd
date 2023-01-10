export const validateEmail = (email) => {
  const regex = /[a-z0-9]+@[a-z]+\.(ru|com)/gi;
  return regex.test(String(email));
};