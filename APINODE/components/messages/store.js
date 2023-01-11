const list =[];

const addmessage=(message)=>{
    list.push(message)
}

const getMessage = ()=>{
    return list 
}
module.exports=({
    add:addmessage, 
    list:getMessage
})