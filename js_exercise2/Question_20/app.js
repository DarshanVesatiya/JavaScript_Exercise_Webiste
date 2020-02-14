let users = [
    {
        id:1,
        name:'Darshan',
        age:20,
        hobbies:["reading","travelling","music","cricket"]
    },
    {
        id:2,
        name:'Random',
        age:20,
        hobbies:["travelling","music","cricket"]
    },
    {
        id:3,
        name:'Temp',
        age:18,
        hobbies:["reading","travelling","cricket"]
    },
    {
        id:4,
        name:'Forth',
        age:40,
        hobbies:["music","cricket"]
    },
    {
        id:5,
        name:'Yummmy',
        age:69,
        hobbies:["reading","travelling","music"]
    },];



window.onload = function(){
    let map = getListByHobbies(users);
    document.getElementById("op1").innerHTML+="["+map.get("reading")+"]";
    document.getElementById("op2").innerHTML+="["+map.get("travelling")+"]";
    document.getElementById("op3").innerHTML+="["+map.get("music")+"]";
    document.getElementById("op4").innerHTML+="["+map.get("cricket")+"]";
}


function getListByHobbies(users){
    let map = new Map();
    let user=[];
    for(let i=0;i<users.length;i++)
    {
        for(let j=0;j<users[i].hobbies.length;j++)
        {
            if(map.has(users[i].hobbies[j]))
            {
                user = map.get(users[i].hobbies[j]);
                user.push(users[i].name);
                map.set(users[i].hobbies[j],user);
            }
            else{
                let user=[];
                user.push(users[i].name);
                map.set(users[i].hobbies[j],user);
            }    
            /* Static Way
            if(users[i].hobbies[j]==="reading")
                Reading.push("'"+users[i].name+"'");
            else if(users[i].hobbies[j]==="travelling")
                Travelling.push("'"+users[i].name+"'");
            else if(users[i].hobbies[j]==="music")
                Music.push("'"+users[i].name+"'");
            else if(users[i].hobbies[j]==="cricket")
                Cricket.push("'"+users[i].name+"'");
            */                        
        }
    }
    return map;
}
