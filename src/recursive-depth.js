const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {

  calculateDepth(arr) {
    let result=0;
    
    for (let i of arr){
      let resultI =0;
      if(Array.isArray(arr[i])){
        
        resultI = resultI +1 + this.calculateDepth(arr[i])
        result = Math.max(result, resultI)

      }
      
    }
    return result+1
  }
}

module.exports = {
  DepthCalculator
};
