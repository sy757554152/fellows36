var Person=require('./12_test1.js');
var util=require('util');

function Teacher() {
    Person.call(this);
    this.teach=function () {
        console.log('teaching');      
    }
}
util.inherits(Teacher,Person);
module.exports=Teacher;