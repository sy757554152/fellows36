function Animal(){
    this.say=function(){
        console.log('say');
    },
    this.eat=function () { 
        console.log('eat');
    }
}
module.exports=Animal;