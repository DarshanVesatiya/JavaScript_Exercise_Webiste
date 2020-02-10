window.onload = function(){
    getDateFunction();
    document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
    setInterval(()=>document.getElementById("time").innerHTML = new Date().toLocaleTimeString(),1000);
}

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

let fn; let ln;
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
        adddata(obj[i].firstname,obj[i].lastname);
    }
}
function add(){
    
    if(document.getElementById("add").innerText == "ADD")
    {
        let fname = document.getElementById("FirstName").value;
        let lname = document.getElementById("LastName").value;
        adddata(fname,lname);
    }
    else{
       fn.innerText = document.getElementById("FirstName").value;
       ln.innerText = document.getElementById("LastName").value;
       document.getElementById("FirstName").value="";
       document.getElementById("LastName").value="";
       document.getElementById("add").innerText="ADD";
       alert("Values are Updated.");
    }
}
function adddata(fname,lname){
    
    if(fname==="" || lname===""){
        alert("Please enter values.");
    }
    
    else{
    
    let table = document.getElementById("table");
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let txt1 = document.createTextNode(fname);
    let txt2 = document.createTextNode(lname);
    let btn = document.createElement("button");
    let btntxt = document.createTextNode("EDIT");
    let btn1 = document.createElement("button");
    let btntxt1 = document.createTextNode("DELETE");
    btn.setAttribute("onclick","Edit(this);");
    btn1.setAttribute("onclick","Remove(this);");
    btn.setAttribute("class","btn btn-outline-light");
    btn1.setAttribute("class","btn btn-outline-light");

    btn.appendChild(btntxt);
    btn1.appendChild(btntxt1);
    td1.appendChild(txt1);
    td2.appendChild(txt2);
    td3.appendChild(btn);
    td4.appendChild(btn1);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);        


    table.appendChild(tr);

    document.getElementById("FirstName").value="";
    document.getElementById("LastName").value="";
    
    }    
}
function Edit(button){
    let fname = button.parentNode.previousSibling.previousSibling;
    let lname = button.parentNode.previousSibling;
    //console.log(fname+":"+lname);
    
    document.getElementById("FirstName").value=fname.innerText;
    document.getElementById("LastName").value=lname.innerText;
    document.getElementById("add").innerText="UPDATE";
    fn=fname;
    ln=lname;

}
function Remove(button){
    let row = button.parentNode.parentNode;
    let table = document.getElementById("table");
    table.deleteRow(row.rowIndex);
    document.getElementById("FirstName").value="";
    document.getElementById("LastName").value="";
    document.getElementById("add").innerText="ADD";
}