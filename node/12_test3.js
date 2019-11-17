var Person=require('./12_test1.js');
var util=require('util');

function Student() {
    Person.call(this);
    this.learn=function () {
        console.log("learning");
    }
}
util.inherits(Student,Person);
module.exports=Student;