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
    },];

function compareByAge(a,b){
    let ageA = a.age;
    let ageB = b.age;

    if(ageA>ageB){
        return 1;
    }
    else if(ageA<ageB){
        return -1;
    }   
    return 0;
}

function compareByName(a,b){
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();

    if(nameA>nameB){
        return -1;
    }
    else if(nameA<nameB){
        return 1;
    }   
    return 0;
}

function sortByAge(){
    users.sort(compareByAge);
    document.getElementById("op1").innerHTML+="BY AGE : "+JSON.stringify(users,null,5);
}

function sortByName(){
    users.sort(compareByName);
    document.getElementById("op2").innerHTML+="BY NAME : "+JSON.stringify(users,null,5);
}
