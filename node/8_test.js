// exports module.exports区别
// exports 只能用引用赋值方式公布给外部  只能公布给外部对象
// module.exports 数组


// 1
// function Person() {
//     this.eat=function(){
//         console.log('吃');
//     }
//     this.say=function(){
//         console.log('说')
//     }
// }

// module.exports=Person;


// 2
// module.exports={
//     'eat':function(){
//         console.log('吃');
//     },
//     'say':function(){
//         console.log('说')
//     }
// };

// 或者
// exports.eat=function(){
//     console.log('吃');
// }
// exports.say=function(){
//     console.log('说')
// }




// 3

module.experts=['asd','dgfg','asdqw'];

