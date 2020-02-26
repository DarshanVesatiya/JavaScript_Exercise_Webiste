
/*--------------------------------------------------------------------CHECKING ADMIN OR STUDENT LOGGED IN--------------------------------------------------------------------------------------*/
let user;
function getUser() {
    if (localStorage.getItem("activeuser")==undefined || localStorage.getItem("tempuser")==undefined ||localStorage.getItem("activeuser").length < 3) {
        window.location.href = "../html/login.html";
    }
    else {
        let tempuser = JSON.parse(localStorage["tempuser"]);
        let users = JSON.parse(localStorage["activeuser"]);
        let current = users[tempuser];
        user = tempuser;
        document.getElementById("user").innerHTML = current[0] + "(" + current[2] + ")";
        if (localStorage.getItem("courses") !== undefined) {
            let obj = JSON.parse(localStorage["courses"]);
            Object.keys(obj).forEach((key) => {
                showCard(obj[key][0], obj[key][1], obj[key][2]);
            })
        }
    }
}

/*---------------------------------------------------------------------------LOGOUT---------------------------------------------------------------------------------------*/

function Logout() {
    let users = JSON.parse(localStorage["activeuser"]);
    delete users[user];
    user = undefined;
    localStorage["activeuser"] = JSON.stringify(users);
    localStorage.removeItem("tempuser");
    window.location.href = "../html/login.html";
}

/*----------------------------------------------------------------------------ADD COURSES--------------------------------------------------------------------------------------*/

function AddCourses() {
    const modal = document.getElementById("Modalcourse");
    let span = document.getElementsByClassName("close1")[0];

    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

/*----------------------------------------------------------------------------ADD CARDS----------------------------------------------------------------------------------------*/

function addCard() {
    let name = document.getElementById("coursename").value;
    let link = document.getElementById("courselink").value;
    let img = document.getElementById("courseimage").value;

    if (localStorage.getItem("courses") == undefined) {
        let obj = {}
        obj[name] = [name, link, img];
        localStorage["courses"] = JSON.stringify(obj);
    }
    else {
        let obj = JSON.parse(localStorage["courses"]);
        obj[name] = [name, link, img];
        localStorage["courses"] = JSON.stringify(obj);
    }
    showCard(name, link, img);

    document.getElementById("coursename").value = "";
    document.getElementById("courselink").value = "";
    document.getElementById("courseimage").value = "";
}

function viewcourse(link) {
    window.open(link);
}

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
    btn1.setAttribute("class", "btn btn-primary specific");
    btn1.setAttribute("onclick", "viewcourse('" + link + "')");

    let btn = document.createElement("button");
    let btntxt = document.createTextNode("Assign Course");
    btn.appendChild(btntxt);
    btn.setAttribute("style", "display:inline;");
    btn.setAttribute("class", "btn btn-primary");
    btn.setAttribute("onclick", "assignCourse('"+name+" $ "+link+" $ "+img+"')");

    div2.appendChild(h5);
    div2.appendChild(btn1);
    div2.appendChild(btn);

    div1.appendChild(img1);
    div1.appendChild(div2);

    div.appendChild(div1);

    container.appendChild(div);
}
/*----------------------------------------------------------------------------Dynamic Modal------------------------------------------------------------------------------------------*/
function getUserList() {
    let users = JSON.parse(localStorage["user"]);
    let student = {};
    Object.keys(users).forEach((key, index) => {
        if (users[key][3] != "admin") {
            student[users[key][1]] = users[key][0];
        }
    })
    return student;
}

function assignCourse(name) {
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];
    listOfStudent(name);
    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}

function listOfStudent(name){
    let data = name.split("$");
    let table = document.getElementById("table");
    table.innerHTML=" ";
    let student = getUserList();
    Object.keys(student).forEach((key)=>{
        let fname = student[key];
    
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let txt1 = document.createTextNode(fname);
        let btn = document.createElement("button");

        if(localStorage.getItem("asncurss")==undefined)
        {
                let btntxt = document.createTextNode("Assign");
                btn.setAttribute("class","btn btn-success");
                btn.setAttribute("onclick","Assign('"+key+" $ "+name+"')");
                btn.appendChild(btntxt);
        }
        else{
                let obj = JSON.parse(localStorage["asncurss"]);
                    if(obj.hasOwnProperty(key)){
                        let courses = JSON.parse(obj[key]);
                        let prop = data[0].trim();
                        if(courses.hasOwnProperty(prop)){
                            let btntxt = document.createTextNode("Remove");
                            btn.setAttribute("class","btn btn-danger");
                            btn.setAttribute("onclick","Remove('"+key+" $ "+name+"')");
                            btn.appendChild(btntxt);}
                        else{
                                let btntxt = document.createTextNode("Assign");
                                btn.setAttribute("class","btn btn-success");
                                btn.setAttribute("onclick","Assign('"+key+" $ "+name+"')");
                                btn.appendChild(btntxt);
                        }
                    }else{
                        let btntxt = document.createTextNode("Assign");
                        btn.setAttribute("class","btn btn-success");
                        btn.setAttribute("onclick","Assign('"+key+" $ "+name+"')");
                        btn.appendChild(btntxt);
                    }
                } 
        
        td1.appendChild(txt1);
        td2.appendChild(btn);
        tr.appendChild(td1);
        tr.appendChild(td2);       
            
        table.appendChild(tr);
    })
}

function Assign(key){
    let data1 = key.split("$");
    let data = data1.map(str => str.trim());
    if(localStorage.getItem("asncurss")==undefined)
    {
        let obj={};
        let courses={};
        courses[data[1]]=[data[1],data[2],data[3]];
        obj[data[0]]=JSON.stringify(courses);
        localStorage["asncurss"]=JSON.stringify(obj);
        listOfStudent(data.slice(1).join("$"));
    }else{
        let obj = JSON.parse(localStorage["asncurss"]);
        if(obj.hasOwnProperty(data[0])){
            let courses = JSON.parse(obj[data[0]]);
            if(courses.hasOwnProperty(data[1])){
                alert("already assigned");
            }else{
                    courses[data[1]]=[data[1],data[2],data[3]];
                    obj[data[0]]=JSON.stringify(courses);
                    localStorage["asncurss"]=JSON.stringify(obj);
                    listOfStudent(data.slice(1).join("$"));
                }    
        }else{
            let courses={};
            courses[data[1]]=[data[1],data[2],data[3]];
            obj[data[0]]=JSON.stringify(courses);
            localStorage["asncurss"]=JSON.stringify(obj);
            listOfStudent(data.slice(1).join("$"));
        }
    }
}

function Remove(key){
    let data1 = key.split("$");
    let data = data1.map(str => str.trim());
    
    let obj = JSON.parse(localStorage["asncurss"]);
    let courses = JSON.parse(obj[data[0]]);
    console.log(courses[data[1]]);
    delete courses[data[1]];
    if(isEmpty(courses)){
        delete obj[data[0]];
        if(isEmpty(obj)){
            localStorage.removeItem("asncurss");
            listOfStudent(data.slice(1).join("$"));
        }
        else{
        localStorage["asncurss"]=JSON.stringify(obj);
        listOfStudent(data.slice(1).join("$"));
        }
    }else{
    obj[data[0]] = JSON.stringify(courses);
    if(isEmpty(obj)){
        localStorage.removeItem("asncurss");
        listOfStudent(data.slice(1).join("$"));
    }
    else{
    localStorage["asncurss"]=JSON.stringify(obj);
    listOfStudent(data.slice(1).join("$"));
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