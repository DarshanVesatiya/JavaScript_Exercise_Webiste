let date1 = prompt("Enter Staring Date as mm/dd/yy","01/01/1999");
let date2 = prompt("Enter Ending Date as mm/dd/yy","02/12/2020");

window.onload = function(){
    document.getElementById("ip1").innerHTML+=date1;
    document.getElementById("ip2").innerHTML+=date2;
    document.getElementById("op1").innerHTML+=getDateDiff(date1,date2);
}


function getDateDiff(date1,date2){
    let sdate = new Date(new Date(date1).toISOString().substr(0,10));
    let edate = new Date(new Date(date2).toISOString().substr(0,10));

    if (sdate > edate) {
        var swap = sdate;
        sdate = edate;
        edate = swap;
    }

    let syear = sdate.getFullYear();

    var february = (syear % 4 === 0 && syear % 100 !== 0) || syear % 400 === 0 ? 29 : 28;
    let daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let yeardiff = edate.getFullYear() - syear;
    let monthdiff = edate.getMonth() - sdate.getMonth();

    if(monthdiff < 0){
        yeardiff--;
        monthdiff+=12;
    }

    let daydiff = edate.getDate() - sdate.getDate();

    if(daydiff<0){
        if(monthdiff>0){
            monthdiff--;
        }
        else{
            yeardiff--;
            monthdiff=11;
        }
        daydiff += daysInMonth[sdate.getMonth()];
    }
    return yeardiff+' year '+monthdiff+' month '+daydiff+' day';
}