const math = require('@useless-javascript-modules/math')

module.exports = function sum(terms){
    return terms.reduce((acc,term)=>{
        return acc + term
    },0) 
}
