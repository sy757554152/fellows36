// get post 区别
// get
// 1.get传输数据都在url上
// 2.get一次性传输数据 不更超过4096个字节

// post
// 1.post传输数据不在url上
// 2.post一次性传输数据 不限制
 
// var str="{id:'1234564'}"
// var obj=eval("("+str+")"); //字符串转化为对象 弊端 安全性问题(跨站攻击)



// var str="http://www.163.com/1.rmvb";
// var buffer=Buffer.from(str,'utf-8');
// var base64Str =buffer.toString('base64');
// var thuder="thunder://"+base64Str;

var http=require('http');
var url=require('url');
http.createServer(function(req,res){
    var str =url.parse(res.url).query;
}).listen(3000);
