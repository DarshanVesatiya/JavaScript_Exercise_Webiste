let arr=[1,2,3,4,5,1,2,3,1,1,1,2,2,2,2,2,2]
let map = new Map();

window.onload = function(){
    getFrequentItem();
    console.log(map);

    document.getElementById("ip").innerHTML+=arr;
    document.getElementById("op").innerHTML+=getKey(map,Math.max(...map.values()));
}
function getFrequentItem(){
    for(let i=0;i<arr.length;i++){
        let val=1;
        if(map.has(arr[i])){
            val = map.get(arr[i]);
            map.set(arr[i],++val);
        }else{
            map.set(arr[i],val);
        }
    }
}
function getKey(map,search){
    for (let [key, value] of map.entries()) {
        if (value === search)
          return key;
      }
}