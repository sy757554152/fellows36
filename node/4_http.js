var http=require('http');
var fs=require('fs');
var url=require('url')
http.createServer(function(req,res){
    // 文件路径
    var indexUrl=__dirname+'/node/'+url.parse('index.html').pathname;
    //将文件存入内存
    var indexPage=fs.readFileSync(indexUrl,'utf-8');
    // 将文件打成数据包
    res.writeHead(200.,{"Content-type":"text/html"});
    res.end(indexPage);
}).listen(3000);