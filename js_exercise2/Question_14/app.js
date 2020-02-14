let str =  prompt("Enter String","<html>Darshan</html>");
window.onload=function(){
    document.getElementById("op1").innerHTML+=str.replace(/<[^>]*>/g,'');
}
