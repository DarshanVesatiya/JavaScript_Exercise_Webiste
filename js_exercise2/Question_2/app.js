let n = prompt("Enter a Number",1221);
let arr=[];

window.onload = function(){
    addDashes();
    document.getElementById("ip").innerHTML+=n;
    document.getElementById("op").innerHTML+=arr.join('');
}

function addDashes(){
    for(let i=0;i<n.length;i++){
        if(n[i]%2==0 && n[i+1]%2==0){
            arr.push(n[i],'-');
        }
        else{
            arr.push(n[i]);
        }
    }
}
