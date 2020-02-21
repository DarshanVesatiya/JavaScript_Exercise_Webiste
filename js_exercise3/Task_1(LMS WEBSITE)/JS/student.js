/*--------------------------------------------------------------------CHECKING ADMIN OR STUDENT LOGGED IN--------------------------------------------------------------------------------------*/
let user;
function getUser(){
    if (localStorage.getItem("activeuser").length < 3) {
        window.location.href = "../html/login.html";
    }
    else{
        let tempuser = JSON.parse(localStorage["tempuser1"]);
        let users = JSON.parse(localStorage["activeuser"]);
        let current = users[tempuser];
        user = tempuser;
        document.getElementById("user").innerHTML=current[0]+"("+current[2]+")";
        if(localStorage.getItem("asncurss")!==undefined){
            let obj = JSON.parse(localStorage["asncurss"]);
            if(obj.hasOwnProperty(user)){
                let courses = JSON.parse(obj[user]);
                Object.keys(courses).forEach((key)=>{
                    showCard(courses[key][0],courses[key][1],courses[key][2]);
                })
            }
        }
    
    }
}    

/*---------------------------------------------------------------------------LOGOUT---------------------------------------------------------------------------------------*/

function Logout(){   
   let users = JSON.parse(localStorage["activeuser"]);
   console.log(user);
   delete users[user];
   user=undefined;
   localStorage["activeuser"]=JSON.stringify(users);
   localStorage.removeItem("tempuser");
   window.location.href="../html/login.html";
}


/*--------------------------------------------------------------------------SHOWCARDS-------------------------------------------------------------------------------*/

function showCard(name, link, img) {
    let container = document.getElementById("dycard");

    let div = document.createElement("div");
    div.setAttribute("class", "col-md-4");

    let div1 = document.createElement("div");
    div1.setAttribute("class", "card");

    let img1 = document.createElement("IMG");
    img1.setAttribute("class", "card-img-top");
    img1.setAttribute("src", img);
    img1.setAttribute("alt", "card image cap");

    let div2 = document.createElement("div");
    div2.setAttribute("class", "card-body");

    let h5 = document.createElement("h5");
    let h5txt = document.createTextNode(name);
    h5.setAttribute("class", "card-title");
    h5.appendChild(h5txt);

    let btn1 = document.createElement("button");
    let btn1txt = document.createTextNode("View Course");
    btn1.appendChild(btn1txt);
    btn1.setAttribute("style", "display:inline;");
    btn1.setAttribute("class", "btn btn-primary");
    btn1.setAttribute("onclick", "viewcourse('" + link + "')");

    div2.appendChild(h5);
    div2.appendChild(btn1);

    div1.appendChild(img1);
    div1.appendChild(div2);

    div.appendChild(div1);

    container.appendChild(div);
}

function viewcourse(link) {
    window.open(link);
}