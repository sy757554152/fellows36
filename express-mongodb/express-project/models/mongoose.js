const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/laoshan',{
    useNewUrlParser:true
})
module.exports=mongoose;