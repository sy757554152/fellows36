var http=require('http');
var url=require('url');
var querystring=require('querystring');
http.createServer(function(req,res){
    
}).listen(3000);

// name password 
// 1.什么时候开始传输 2.什么时候传输结束 3.亲姐缓冲区

// 异步回调***
// 消息循环***
// ********events
function goPost(req,res){
    var postData="";
    req.setEncoding('utf8');
    req.addListener('data',function(postChunkData){
        postData+=postChunkData;
    })
    req.addListener('end',function(){
        var Params=querystring.parse(postData);
    })
}