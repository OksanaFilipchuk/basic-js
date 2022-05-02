const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(data) {
  
  if(data == null) return 'Unable to determine the time of year!';
else if(typeof data !== 'object') throw new Error ('Invalid date!');
else if((data.getMonth() >= 0 && data.getMonth() < 2) || data.getMonth()==11) return 'winter';
else if(data.getMonth() >= 2 && data.getMonth() < 5) return 'spring';
else if(data.getMonth() >= 5  && data.getMonth() < 8) return 'summer';
else if(data.getMonth() >= 8  && data.getMonth() < 11) return 'autumn';
 
}
module.exports = {
  getSeason
};
