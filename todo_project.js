const todolist=["working","coding","chatting"]
let input=prompt("operation you want to perform");
while(input!=="quit"){
    input=prompt("something");
if(input==="list"){
    for(let i=0;i<todolist.length;++i){
        console.log(todolist[i]);
    }}
    if(input==="new"){
        let add=prompt("add the new member");
        todolist.push(add);
        console.log(`new list after addition ${todolist}`);
    }
    if(input==="delete"){
        let index= parseInt(prompt("enter index"));
        todolist.splice(index,1);
        console.log(`new list after deletion  :${todolist}`);
    }
}

console.log("ok! exit from app");