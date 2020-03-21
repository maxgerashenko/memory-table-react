import CONFIG from '../config';
import MEMORY_MAP from '../memoryMap';

function getRandom(max=CONFIG.LETTERS_COUNT) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getNumber(lettersCount=CONFIG.NUMBER_LENGTH, randomCount =CONFIG.RANDOM_LETTERS) {
  let number = '';
  let random = 0;
  for(let i=0; i < lettersCount; i++) {
    random = (randomCount - i) > 0 ? getRandom() : random;
    number += random;
  }

  return number;
}

function getCode(numberAsSting){
  return numberAsSting
  .split('')
  .map((l, i) =>  MEMORY_MAP.get(+l)[i]).join(" ")
}
export {
  getRandom,
  getNumber,
  getCode,
}
