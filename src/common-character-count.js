const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

 function getCommonCharacterCount(str1, str2){
  let arr1 = [];
  let arr2=[];
  for(let i =0; i<str1.length; i++){
    arr1.push(str1[i])
  }
  for(let j =0; j<str2.length; j++){
    arr2.push(str2[j])
  }
  let result = 0;
  for(let i =0; i<arr1.length; i++){
    if(arr2.indexOf(arr1[i])>=0){
    arr2.splice(arr2.indexOf(arr1[i]), 1);
    result +=1;
    }
  }
  return result
}
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


module.exports = {
  getCommonCharacterCount
};
