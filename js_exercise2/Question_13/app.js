let str = prompt("Enter String","RapidOpsSolution");
let num = prompt("Enter chop range","2");

window.onload=function(){
    document.getElementById("ip1").innerHTML+=str;
    document.getElementById("ip2").innerHTML+=num;
    document.getElementById("op1").innerHTML+=string_chop(str,Number(num));
}

function string_chop(str,num){
    let len=str.length;
    let final=[];
    let start = 0;
    let n=num;
    while(len>0){
        final.push(str.slice(start,n));
        n+=num;
        start+=num;
        len-=num;
    }
    return final;
}