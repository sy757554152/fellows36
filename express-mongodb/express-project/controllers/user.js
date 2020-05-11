var mongoose=require('../models/mongoose');
var ObjectID=require('mongodb').ObjectID;
var jwt =require('jsonwebtoken');
var secretky=jwt.sign({foo:'bar'},'shhhhh');

exports.do_newlogin=async function(req,res,next){
    // console.log('login');
    var name=req.body.name;
    var pass=req.body.password;
    console.log(name,pass)
    var token='';
    var monUserid='';
    var userInfo=null;

    // console.log(name);
    // console.log(pass);
    // jwtToken--为了解决多服务器跨域传输 session存储问题  登陆服务器
    //1.服务器建立session文件{'id':1,'name':'laoshan'}  文件名sadsd（公钥和私钥加密）   文件存储在服务器中
    //2.私钥 session_id:"asdqwesdvfad" -->chrome cookie {"id":1,"name":"laoshan"}
    //3.request cookie session_id
    //解决 localstorage和sessionstorage还可以发送


    //1.验证token是否存在
    //2.真正的登录 生成token（回调调回调）
    //处理回调深渊   async/await--new promise
    
    
    await new Promise((resolve,reject)=>{
        var wherestr={"name":name,"pass":pass};
        // mongoose-->connection-->db-->collection('user').find(wherestr1).toArray();
        mongoose.connection.db.collection('users').find(wherestr).toArray((err,result)=>{
            if(err){
                res.json({
                    errno:0,
                    err:'have a error'
                })
                reject();
            }
            if(result.length>0){
                //1.给userInfo赋值
                //2.给monUserid赋值
                //3.生成token（userInfo，monUserid）
                userInfo=result[0];
                monUserid=result[0]._id;
                var _id=result[0]._id.toString();

                token=jwt.sign({"name":name,"UserId":monUserid},secretky,{expiresIn:1000*60*60})
                resolve();
            }
            else{
                res.json({
                    err:'error'
                })
            }
        })
    })
}