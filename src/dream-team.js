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
 function createDreamTeam(members) {
  if (! Array.isArray(members)) return false
  if (members == []) return false
  let result = '' ;   
  let temp1 = members.filter(x=> typeof x ==='string');
  let temp=temp1.sort()
  temp.forEach(function(item){
      result +=item[0]
  })
  return  result.toUpperCase()
}
module.exports = {
  createDreamTeam
};
