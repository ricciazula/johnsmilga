const names=require ('./names')

const SayHi=require ('./utils')
const data = require('./alt-flavour')

require('./7-mind-grenade')

console.log(data)
SayHi(names.john)
SayHi(names.peter)
SayHi('susan')


