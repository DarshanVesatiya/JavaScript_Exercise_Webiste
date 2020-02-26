let arrOfNames=["Ashish Shah","Rashmin Chhatrala","Yash Dubey","Prakash Jain",
"Yashraj Singh","Viraj Sinha","Rajesh Kumar","Mahesh Marwadi","Suresh Sahni",
"Amar Vilas","Virdas Singhania","Rajeshwari Bindra","Birendra Bhalerao",
"Virendra Bhupati","Bhupendra Singh","Bhuvam Bam","Shri Raj","Prashant Kamle",
"Kamlesh Tomar","Risabh Khare","Rishi Kohli","Kunwar Kharwanda","Kartik Koli",
"Komal Jain","Kartikey Pandey"];

let input,filter,ui;

window.onload = function(){
    ui = document.getElementById("myUL");
    dynamiclist(ui,arrOfNames,undefined);
}

function dynamiclist(ui,array,input1){
    ui.innerHTML=" ";
    let input,index;
    for(let i=0;i<array.length;i++){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(array[i]));
        let innerHTML = li.innerHTML;
        if(!(input1 === undefined)){
            input = input1.toUpperCase();
            index = innerHTML.toUpperCase().indexOf(input);
        }
        else{ 
            input = input1;    
            index = innerHTML.indexOf(input);
        }
        if (index >= 0) { 
            innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+input.length) + "</span>" + innerHTML.substring(index + input.length);
            li.innerHTML = innerHTML;
           }
        ui.appendChild(li);
    }
}

function myFunction() {
    input = document.getElementById("search").value;
    let final = arrOfNames.filter(item=>item.toUpperCase().includes(input.toUpperCase()));
    dynamiclist(ui,final,input);
}

