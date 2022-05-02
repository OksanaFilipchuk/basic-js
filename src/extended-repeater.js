const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if(options.separator == null){options.separator = '+'};
  if(options.additionSeparator == null){options.additionSeparator = '|'}
  if(!str) str = str.toString();
  if(!options.addition) options.addition = options.addition.toString();
  let arr = [];
  for(let k =1; k <=options.repeatTimes; k++){

  for (let i =0; i<str.length; i++){
    arr.push(str[i])
  }
  for(let j = 0; j< options.additionRepeatTimes; j++){
    arr.push(options.addition);
    arr.push(options.additionSeparator)
  }
  arr.pop()
  arr.push(options.separator)
}
  arr.pop()
  return arr.join('')
  
}


  
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


module.exports = {
  repeater
};
