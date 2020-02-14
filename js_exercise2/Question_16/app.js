let num = prompt("Enter Number","10000.0000");

window.onload = function(){
    document.getElementById("ip1").innerHTML+=num;
    document.getElementById("op1").innerHTML+=addCommaAsThousandSep(num);
}

function addCommaAsThousandSep(num){
    let part = num.split(".");
    part[0]=part[0].replace(/\B(?=(\d{3})+(?!\d))/g,',');
    return part.join(".");
}