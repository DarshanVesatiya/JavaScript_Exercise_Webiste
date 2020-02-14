function createTableDynamically(){
    let dymictbl = document.getElementById("dymictbl");
    let table = document.createElement("TABLE");
    let row = parseInt(document.getElementById("ip1").value);
    let column = parseInt(document.getElementById("ip2").value);
    table.border =".2";

    for(let i=0;i<row;i++){
        let dymicrow = table.insertRow(-1);
        console.log("IN tab le");
        for(let j=0;j<column;j++){
            let dymiccol = dymicrow.insertCell(-1);
            dymiccol.innerHTML=" ROW: "+i+" COLUMN: "+j;
        }
    }
    dymictbl.appendChild(table);
    document.getElementById("ip1").value="";
    document.getElementById("ip2").value="";
}