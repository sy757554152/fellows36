var Person=require('./12_test1.js');
var util=require('util');

function Programmer() {
    Person.call(this);
    this.playingcode=function () {
        console.log("playing code");
    }
}
util.inherits(Programmer,Person);
module.exports=Programmer;