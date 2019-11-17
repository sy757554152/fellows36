//nodejs 模块 原生模块
//  第三方模块 mysql request   npm中能搜索出来的
// 自定义模块 自己写的
// 模块加载 原生模块 第三方模块加载时不用路径  自定义模块需要加载路径
//是不是所有的原生模块都需要require 加载？
// 不是 global timer buffer module process console stream可以自动加载





// var fs=require("fs");
// var data=fs.readFileSync('./1.txt');
// //读取文件 1读取到缓冲区 2按照stream的pipe的方式读
// console.log(data);
// var data1=fs.readFileSync("./1.txt","utf-8");
// console.log(data1);




// var fs=require("fs");
// // 类似settimeout 等待队列中
// fs.readFile("./1.txt","utf-8",function (err,data) {
//     if(err){
//         throw err;
//     }
//     else{
//         console.log(data);
//     }
// })
// console.log("end");



var fs=require("fs");
fs.readFile("./1.txt","utf-8",function(err,data){
    if(err){
        console.error(err) ;
    }
    else{
        getData(data);
    }
})
function getData(data){
    setTimeout(() => {
        console.log(data);
    }, 2000);
}

