import { CONFIG } from '../config';
import MEMORY_MAP from './memoryMap';

function getRandomInteger(
  max = CONFIG.LETTERS_COUNT, 
  min = CONFIG.LETTERS_COUNT - CONFIG.LETTERS_LEART_AT_ONCE ) {
  return Math.floor( Math.random() * (max - min + 1) + min );
}

function getNumber(lettersCount=CONFIG.NUMBER_LENGTH, randomCount =CONFIG.RANDOM_LETTERS) {
  let number = '';
  let random = 0;
  for(let i=0; i < lettersCount; i++) {
    random = (randomCount - i) > 0 ? getRandomInteger() : random;
    number += random;
  }

  return number;
}

function getCode(numberAsSting){
  return numberAsSting
  .split('')
  .map((l, i) =>  MEMORY_MAP.get(+l)[i]).join(",")
}
export {
  getRandom,
  getNumber,
  getCode,
}
