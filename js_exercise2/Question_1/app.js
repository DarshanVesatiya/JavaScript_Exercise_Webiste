let arr = ['a','b','c','d','e','f','g','h'];
let n = prompt("how many elemets you want",1);

window.onload =  function(){
    getElement(n);
}

function getElement(n){
    document.getElementById("str").innerHTML+=arr.slice(0,n);
    n==1 ? document.getElementById("end").innerHTML+=arr.slice(-1) : document.getElementById("end").innerHTML+=arr.slice(-1)+','+arr.slice(-n,-1).reverse();
}