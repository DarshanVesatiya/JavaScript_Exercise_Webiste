window.onload = function(){
    getDateFunction();
    document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
    setInterval(()=>document.getElementById("time").innerHTML = new Date().toLocaleTimeString(),1000);
    table=document.getElementById("table");
}

//Date function
function getDateFunction(){
    let date = new Date();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let tempDate="0";
        if(date.getDate()<10){
            tempDate+=date.getDate();
        }else{tempDate=date.getDate();}
    document.getElementById("date").innerHTML = tempDate;
    document.getElementById("date").innerHTML += " "+monthNames[date.getMonth()];
    document.getElementById("date").innerHTML += " "+date.getFullYear();   
}

//STOPWATCH FUNCTION
let temptime;
let milsec = 0;
let sec = 0;
let min = 0;
let hour = 0;

let click = 0;
let stp=0;
let rsm=0;

function start(){
    ++click;
    if(click==1){
    temptime =  setInterval(time,10);}
}
function time(){
    ++milsec;
    if(milsec == 100){
        milsec=0;
        ++sec;
    }
    if(sec == 60){
        ++min;
        sec=0;
    }
    if(min == 60){
        min = 0;
        ++hour;
    }
    document.getElementById("milsec").innerHTML=check(milsec);
    document.getElementById("sec").innerHTML=check(sec);
    document.getElementById("min").innerHTML=check(min);
    document.getElementById("hour").innerHTML=check(hour);
}
function stop(){
    if(click==1)stp++;
    clearInterval(temptime);
    rsm=0;
}
function resume(){
    rsm++;
    if(stp>0 && rsm==1)
    {temptime =  setInterval(time,10);}
}
function reset(){
    milsec=0;
    sec=0;
    min=0;
    hour=0;

    click=0;
    stp=0;
    rsm=0;
    clearInterval(temptime);
    document.getElementById("milsec").innerHTML=check(milsec);
    document.getElementById("sec").innerHTML=check(sec);
    document.getElementById("min").innerHTML=check(min);
    document.getElementById("hour").innerHTML=check(hour);
}
function check(num){
    if(num<10){
        num="0"+num;
    }
    return num;
}

//Table javascript

let table;
let darray=[];
let id=0;
let fid;
let obj = [
    {
        firstname:"Darshan",
        lastname:"Vesatiya"
    },
    {
        firstname:"Arshit",
        lastname:"Vagashiya"
    },
    {
        firstname:"Meet",
        lastname:"Valani"
    },
    {
        firstname:"Varun",
        lastname:"Shah"
    },
    {
        firstname:"Chirag",
        lastname:"Vadodariya"
    },
    {
        firstname:"Chintan",
        lastname:"Sutariya"
    },
    {
        firstname:"Purvesh",
        lastname:"Tamboli"
    },
    {
        firstname:"Harshil",
        lastname:"Umrethwala"
    },
    {
        firstname:"Poojan",
        lastname:"Ajani"
    },
    {
        firstname:"Dhiraj",
        lastname:"Patel"
    },
]
function staticData(){
    for(let i=0;i<obj.length;i++){
        darray.push({
            id:id++,
            firstname:obj[i].firstname,
            lastname:obj[i].lastname
        })
        show();
    }
}
function add(){
    if(document.getElementById("add").innerText == "ADD")
    {
        let fname = document.getElementById("FirstName").value;
        let lname = document.getElementById("LastName").value;
        if(checkdata(fname,lname)){
            darray.push({
                id:id++,
                firstname:fname,
                lastname:lname
            });
        }
        document.getElementById("FirstName").value="";
        document.getElementById("LastName").value="";
        show();
        console.log(darray);
    }
    else{
            darray[fid].firstname=document.getElementById("FirstName").value;
            darray[fid].lastname=document.getElementById("LastName").value;
            show();
            document.getElementById("FirstName").value="";
            document.getElementById("LastName").value="";
            document.getElementById("add").innerText="ADD";
            alert("Values are Updated.");
    }
}
function checkdata(fname,lname){
    var reWhiteSpace = new RegExp("/^\s+$/");
    if(fname==="" || lname===""){
        alert("Please enter values.");
        return false;
    }
    else{
        return true;
    }    
}
function show(){
    table.innerHTML=" ";
    for(let i=0;i<darray.length;i++){
        let fname = darray[i].firstname;
		let lname = darray[i].lastname;
		table.innerHTML += `<tr id="${darray[i].id}">
							<td>${fname}</td>
							<td>${lname}</td>
							<td><button onclick="Edit(${i})" class="btn btn-outline-light">EDIT</button></td>
							<td><button onclick="Remove(${i})" class="btn btn-outline-light">DELETE</button></td>
							</tr>`;
    }
}
function Edit(i){
    document.getElementById("FirstName").value=darray[i].firstname;
    document.getElementById("LastName").value=darray[i].lastname;
    document.getElementById("add").innerText="UPDATE";
    fid=i;
}
function Remove(i){
    darray.splice(i,1);
    show();
}