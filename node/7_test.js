// for(var i=1;i<=10;i++){
//     getI(i);
// }
// function getI(i){
//     setTimeout(() => {
//         console.log(i);
//     }, 2000);
// }


for(var i=1;i<=10;i++){
    var m=i;
    exec(m,function(m){
        console.log(m);
    })
}
function exec(m,callback){
    setTimeout(() => {
        callback(m);
    }, 2000);
}