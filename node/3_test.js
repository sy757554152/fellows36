function havelunch(food,drink,callback){
    console.log('Having lunch of'+'food'+'drink');
    if(callback && typeof(callback)==='function'){
        setTimeout(() => {
            callback();
        }, 5000);
    }
}
havelunch('toast','coffee',function(){
    console.log('lunch finish!');
})