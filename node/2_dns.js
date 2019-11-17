// dns解析 递归迭代 IP ipv4 ipv6 hosts
// smarthosts 
var dns=require('dns');
var http=require('http')
urls=['http://www.baidu.com','http://www.qq.com','http://www.sohu.com']
function fetchPage(url){
    // http四大关键字 get put post delete
    http.get(url,function(){
        var time =new Date();
        console.log('Got respone from:'+url)
        console.log('Request took:' ,(new Date()-time),"ms")
    })
}
for(var i=0;i<urls.length;i++){
    fetchPage(urls[i]);
}

// 同一域名可以解析很多ip