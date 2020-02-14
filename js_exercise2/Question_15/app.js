function check(){
    let email=document.getElementById("ip1").value;
    if(email.match(/[A-Za-z0-9]+\.?[A-Za-z0-9]+[@][a-z]+\.+[a-z]+/)){
        document.getElementById("op1").innerHTML="VALID EMAIL";
    }
    else
    document.getElementById("op1").innerHTML="INVALID EMAIL";
}