let users = [
    {
        id:1,
        name:"Darshan",
        age:20
    },
    {
        id:2,
        name:"AKbar",
        age:28
    },
    {
        id:3,
        name:"Zara",
        age:81
    },
    {
        id:4,
        name:"Random",
        age:51
    },
    {
        id:5,
        name:"Temp",
        age:30
    },
    {
        id:6,
        name:"Aman",
        age:20
    },
    {
        id:7,
        name:"Bhuvneshwar",
        age:12
    },
    {
        id:8,
        name:"Xender",
        age:2
    },
    {
        id:9,
        name:"Kabir",
        age:23
    },
    {
        id:10,
        name:"Risky",
        age:69
    },
];

let obj = {
    id:11,
    name:"new",
    age:0
}

window.onload = function(){
    document.getElementById("ip1").innerHTML+=JSON.stringify(users,null,4);
    let delidx = prompt("Enter Deletion Index",1);
    this.deleteByIndex(users,delidx);
    document.getElementById("op1").innerHTML+="After Deleting the item from "+delidx+" position : "+JSON.stringify(users,null,4);
    let isrtidx = prompt("Enter InsertionIndex",0);
    this.insertByIndex(users,isrtidx,obj);
    document.getElementById("op2").innerHTML+="After inserting the object at "+isrtidx+" position : "+JSON.stringify(users,null,4);
}

function deleteByIndex(users,index){
    users.splice(index,1);
}    
function insertByIndex(users,index,item){
    users.splice(index,0,item);
}
