import Mock from 'mockjs'
let Random =Mock.Random;
let studentList=()=>{
    let students=[];
    for(let i =0;i<30;i++){
        let student={
            key:Random.id(),
            firstName:Random.first(),
            lastName:Random.last(),
            age:Random.integer(18,22),
            address:Random.county( true ),
            tags:[Random.word(),Random.word()]
        }
        students.push(student);
    }
    return students;
}
Mock.mock("http://www.student.com/studentList", studentList);