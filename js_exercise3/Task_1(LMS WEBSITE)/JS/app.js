
/*------------------------------------------------------------------SIGNUP---------------------------------------------------------------------------------------*/

function newUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pswd = document.getElementById("Password1").value;
    let cnfmpswd = document.getElementById("Password2").value;
    let regex = new RegExp(/[A-Za-z0-9]+\.?[A-Za-z0-9]+[@][a-z]+\.+[a-z]+/);
    if(!name.match(/\w/)){
        alert("Please Enter Name");
    }
    else if (!email.match(regex)) {
        alert("Enter Valid Email Address");
    }
    else if(pswd.length===0 || cnfmpswd.length===0){
        alert("Please fill empty fields");
    }
    else{
        if(pswd === cnfmpswd){
                let role = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
                if(localStorage.getItem("user")==undefined){
                   
                                    let credentials=[];
                                    let obj={};
                                    credentials.push(name,email,pswd,role);
                                    obj[email]=credentials;
                                    localStorage["user"]=JSON.stringify(obj);
                                    alert("USER IS SUCCESSFULLY CREATED.");
                                    window.location.href="../html/login.html";
        
                }else{
                    let obj = JSON.parse(localStorage["user"]);
                    if(obj.hasOwnProperty(email)){
                        alert("This user is already exists, try with another Email");
                    }else{
                        let credentials=[];
                        credentials.push(name,email,pswd,role);
                        obj[email]=credentials;
                        localStorage["user"]=JSON.stringify(obj);
                        alert("USER IS SUCCESSFULLY CREATED.");
                        window.location.href="../html/login.html";
                    }   
                }
            }else{
                alert("password and confirm password doesn't match");   
        }
    }
}     
function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}
// console.log(localStorage["user"]);

/*---------------------------------------------------------------------LOGIN-----------------------------------------------------------------------------------------*/

function authenticateUser(){
    let email = document.getElementById("email_login").value;
    let pswd = document.getElementById("password_login").value;
    if(email.length === 0 || pswd.length === 0){
        alert("Enter Email or password.");
    }
    else{
        let users = JSON.parse(localStorage["user"]);
            if(users.hasOwnProperty(email)){
                if(users[email][2]===pswd){
                    if(localStorage.getItem("activeuser")!==null){
                            let obj = JSON.parse(localStorage["activeuser"]);
                            obj[users[email][1]]=[users[email][0],users[email][2],users[email][3]];
                            localStorage["activeuser"]=JSON.stringify(obj);
                            if(users[email][3]==="admin"){
                                localStorage["tempuser"]=JSON.stringify(users[email][1]);
                                window.location.href="../html/adminhome.html";
                            }else{
                                localStorage["tempuser1"]=JSON.stringify(users[email][1]);
                                window.location.href="../html/studenthome.html";
                            }
                    }else{
                            let credentials=[];let obj={};
                            credentials.push(users[email][0],users[email][2],users[email][3]);
                            obj[users[email][1]]=credentials;
                            localStorage["activeuser"]=JSON.stringify(obj);
                            if(users[email][3]==="admin"){
                                localStorage["tempuser"]=JSON.stringify(users[email][1]);
                                window.location.href="../html/adminhome.html";
                            }else{
                                localStorage["tempuser1"]=JSON.stringify(users[email][1]);
                                window.location.href="../html/studenthome.html";
                            }
                    }
                }
                else{
                    alert("Enter correct password");
                }
            } 
            else {
                alert("Please enter Correct Email Address");
            }
    }
}

