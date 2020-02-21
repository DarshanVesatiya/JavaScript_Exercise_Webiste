let arr1=[3,6,0,9];
let arr2=[1,2,3,6,7];
let arr3=[];

window.onload = function(){
    document.getElementById("ip1").innerHTML+=arr1;
    document.getElementById("ip2").innerHTML+=arr2;
    document.getElementById("op1").innerHTML+=unionOf(arr1,arr2);
    document.getElementById("op2").innerHTML+=diff(arr1,arr2);
}

function unionOf(arr1,arr2){
	return Array.from(new Set([...arr1,...arr2]));
}
function diff(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        if(!arr2.includes(arr1[i])){
            arr3.push(arr1[i]);
        }
    }
    return arr3;
}
