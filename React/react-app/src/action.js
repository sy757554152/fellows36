export let Add=(count)=>{
    return{
        type:"ADD",
        count
    }
}
export let Reduce=(count)=>{
    return{
        type:"REDUCE",
        count
    }
}