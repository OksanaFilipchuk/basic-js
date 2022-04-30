const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(arg) {
  if(typeof(arg) === "string" && typeof(+arg) === "number" && arg>0 &&arg<=15 ){
    return Math.ceil(((Math.log(15/arg)*5730))/0.693)
  }
  else return false
}

module.exports = {
  dateSample
};
