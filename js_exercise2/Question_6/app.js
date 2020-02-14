let start = prompt("Enter starting char","a");
let end = prompt("Enter Ending char","z");
let n = prompt("Enter Range",2);
let final=[];

window.onload = function(){
    num_string_range(start,end,n);
    document.getElementById("ip1").innerHTML+=start;
    document.getElementById("ip2").innerHTML+=end;
    document.getElementById("ip3").innerHTML+=n;
    document.getElementById("op1").innerHTML+='['+final+']';
}

//Actual function
function num_string_range(ch1,ch2,n){
    for(let i=ch1.charCodeAt();i<=ch2.charCodeAt();i=i+Number(n)){
        final.push('"'+String.fromCharCode(i)+'"');
    }
}
