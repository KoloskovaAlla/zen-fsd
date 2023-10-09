/**
 * 
 * @param {string} string
 * @param {number } maxLength 
 * @returns {string} Обрезанный текст с сохранением целостности слов
 */

export const trimString = (string, maxLength) => {  
  if (string.length < maxLength) return string;
  string = string.slice(0, maxLength+1)
  let arr = string.split(' ');
  arr.length--;
  string = arr.join(' ')
  return string;
};
