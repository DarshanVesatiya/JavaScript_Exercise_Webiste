let date = prompt("Enter Date","01/01/2020");
// const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

window.onload = function(){
    document.getElementById("ip1").innerHTML+=date;
    document.getElementById("op1").innerHTML+=getDate(date);
}

function getDate(date){
    let m = date.split('/');
    return (months[Number(m[1])-1]);
}