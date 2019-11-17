var Person=require('./12_test1.js');
var Teacher=require('./12_test2.js');
var Student=require('./12_test3.js');
var Programmer=require('./12_test4.js');

console.log(Person);
// 实例化对象
var person=new Person();
person.eat();
person.sleep();
var teacher =new Teacher();
teacher.teach();
var student=new Student();
student.learn();
student.eat();
var program=new Programmer();
program.playingcode();
