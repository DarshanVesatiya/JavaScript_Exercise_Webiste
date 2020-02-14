let arr=[1,2,3,4,5];
let final=[];

window.onload = function(){
    shuffleArray();
    document.getElementById("ip").innerHTML+=arr;
    document.getElementById("op").innerHTML+=final;
}

function Random(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

function shuffleArray(){
    for(let i=0;i<arr.length;i++){
        let index = Random(0,arr.length-1);
        final.insert(index,arr[i]);        
    }
}

/* optimized shuffled function

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

*/