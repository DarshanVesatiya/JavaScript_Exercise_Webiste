let temp = new Date().getTime();
let ut = prompt("Enter UNIX Timestamp",temp);

window.onload = function(){
    document.getElementById("ip1").innerHTML+=ut;
    document.getElementById("op1").innerHTML+=getTimeFromUnixTimestamp(ut);
}
function getTimeFromUnixTimestamp(ut){
    return new Date(Number(ut)).toLocaleTimeString();
}