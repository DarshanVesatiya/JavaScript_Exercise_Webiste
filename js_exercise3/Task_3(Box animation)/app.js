// alert("Box 1 will show text 'Click Me First' and Box 2 will start changing its colors in every 3 sec.");
let colors = ['purple','grey','blue','green','yellow','orange','red'];
let i=0,j=0,k=0,temp,cnt=0;

function ascchange(colors){
    if(i>6)
        i=0;   
    document.getElementById("box2").style.backgroundColor=colors[i];
    i++;       
}

function clrchange(colors){
    if(j>6)
        j=0;
    else if(j<0)
        j=6;        
    document.getElementById("box4").style.backgroundColor=colors[j];
    if(k==1)
        j++;
    else
        j--;           
}

window.onload = function(){
    document.getElementById("first").innerText+="\n\nClick ME FIrst";
    setInterval(()=>{
        ascchange(colors)
    },3000);
    box4 = document.getElementById("box4");
}

function showText(){
    document.getElementById("third").innerText+="\n\nOops!";
}

document.addEventListener('keydown',function(e){
    e = e || window.event; 
    if(cnt==0)
        setInterval(()=>{
            clrchange(colors);
            cnt=1;        
    },1000); 
    if (e.keyCode == '38') {
        // up arrow
        k=1;
        if(j<6)
            j=j+1;
        else
            j=0;
    }
    else if (e.keyCode == '40') {
        // down arrow
        k=0;
        if(j>0)
            j=j-1;
        else
            j=6;
    }
    else if (e.keyCode == '37') {
       // left arrow
        k=0; 
        if(j>0)
            j=j-1;
        else
            j=6;
    }
    else if (e.keyCode == '39') {
       // right arrow
        k=1;
        if(j<6)
            j=j+1;
        else
            j=0;
    }
});