const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr){
  let result = [];
if(!Array.isArray(arr)){
  throw new Error("'arr' parameter must be an instance of the Array!")
}
  for (let i =0; i< arr.length; i++){
if(typeof(arr[i]) == 'number'){
  result.push(arr[i])
}
    else if(typeof(arr[i])=='string' && arr[i] == "--discard-next"){
      i=i+1
    }
    else if(typeof(arr[i])=='string' && arr[i] == "--discard-prev" && result.length>0){
      result.pop(result[result.length-1])
    }
    else if(typeof(arr[i])=='string' && arr[i] == "--double-next" && arr[i+1]){
      result.push(arr[i+1])
  }
    else if(typeof(arr[i])=='string' && arr[i] == "--double-prev" && arr[i-1]){
      result.push(arr[i-1])
    }
  
}
  return result
}

module.exports = {
  transform
};
