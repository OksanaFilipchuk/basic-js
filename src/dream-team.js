const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(arr){
  if(arr===null || !Array.isArray(arr)) return false;
  let result = [];
for(let i = 0;i<arr.length; i++){
   
  if (typeof(arr[i])==="string") {
    let elem = arr[i].replace(/\s+/g, '')[0].toUpperCase();
    result.push(elem)
}
}
 if(result.length ===0 || !Array.isArray(arr)) return false
result.sort();
return result.join('');
}

module.exports = {
  createDreamTeam
};
