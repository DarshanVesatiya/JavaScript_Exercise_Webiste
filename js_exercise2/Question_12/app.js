let str1 = prompt("Enter String1","DVesatiya");
let str2 = prompt("Enter String you want to insert","arshan");
let pos = prompt("Enter position",1);

function insertStringAtPosition(str1,str2,pos){
    let temp=str1.slice(pos);
    str1=str1.substring(0,pos)+str2+temp;
    return str1;
}
window.onload = function(){
    document.getElementById("ip1").innerHTML+=str1;
    document.getElementById("ip2").innerHTML+=str2;
    document.getElementById("ip3").innerHTML+=pos;
    document.getElementById("op1").innerHTML+=insertStringAtPosition(str1,str2,Number(pos));
}

