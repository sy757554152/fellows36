var Animal=require('./11_test.js');
var util=require('util');
function Duck() {
    Animal.call(this);
    this.say=function (){
        console.log('ggagaga')
    }
}
util.inherits(Duck, Animal);
module.exports=Duck;