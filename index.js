const math = require('@useless-javascript-modules/math')

module.exports = function sum(terms){
    return terms.reduce((acc,term)=>{
        return math('add', acc, term)
    },0) 
}
