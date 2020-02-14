let date1 = prompt("Enter Staring Date as mm/dd/yy","01/01/1999");
let date2 = prompt("Enter Ending Date as mm/dd/yy","02/12/2020");
let fyear,fmonth,fday;
let yeardiff,monthdiff,daydiff;
let Hours,Days,Minutes,Weeks,rimdays;

window.onload = function(){

    document.getElementById("ip1").innerHTML+=date1;
    document.getElementById("ip2").innerHTML+=date2;
    
    getDateDiff(date1,date2);
    getDiffInHoursAndDays(date1,date2);

    document.getElementById("op1").innerHTML+=fyear+" years "+fmonth+" months "+fday+" days ";
    document.getElementById("op2").innerHTML+=monthdiff+" months "+daydiff+" days ";
    document.getElementById("op3").innerHTML+=Days+" Days ";
    document.getElementById("op4").innerHTML+=Hours+" Hours ";
    document.getElementById("op5").innerHTML+=Minutes+" Minutes ";
    document.getElementById("op6").innerHTML+=Weeks+" Weeks "+rimdays+" Days ";
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

     yeardiff = edate.getFullYear() - syear;
     monthdiff = edate.getMonth() - sdate.getMonth();

    if(monthdiff < 0){
        yeardiff--;
        monthdiff+=12;
    }

    daydiff = edate.getDate() - sdate.getDate();

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
    fyear=yeardiff;fmonth=monthdiff;fday=daydiff;
    while(yeardiff>0){
            monthdiff+=12;
            yeardiff--;
    }
    console.log(fyear+" years "+fmonth+" months "+fday+" days ");
}

function getDiffInHoursAndDays(date1,date2){
    let dateFuture = new Date(date1);
    let dateNow = new Date(date2);

    if(dateFuture<dateNow){
        let swap = dateFuture;
        dateFuture=dateNow;
        dateNow=swap;
    }
    var seconds = Math.floor((dateFuture - (dateNow))/1000);
    Minutes = Math.floor(seconds/60);
    Hours = Math.floor(Minutes/60);
    Days = Math.floor(Hours/24);
    rimdays = Math.floor(Days%7);
    Weeks = Math.floor(Days/7);
}