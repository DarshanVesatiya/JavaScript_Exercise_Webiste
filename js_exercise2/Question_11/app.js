
function hideEmail(email){
    let index = email.indexOf("@");
    let res = email.replace(email.slice(2,index-1),"*".repeat(index-3));
    return res;
}
function hide(){
    let email = document.getElementById("ip1").value;
    document.getElementById("op1").innerHTML=hideEmail(email);
}