let yearChosen =new Date().getFullYear()//2021
let monthChosen =new Date().getMonth()//march

let months=["March"];
function getNumberofDays(year,month){
    let numDays = new Date(year, month ,0).getDate();
    return numDays;
}


function renderCal(getNumDays){
    let yearPTag=document.getElementById("year");
    yearPTag.innerText= yearChosen;
    let monthName = months;
    let monthPTag=document.getElementById("month");
    monthPTag.innerText=monthName;
    for (let i=1; i <= getNumDays; i++){
       let  dayPTag =document.createElement('p');
       dayPTag.style.fontSize ="20px";
       let dayText = document.createTextNode(i.toString());
       dayPTag.appendChild(dayText);
       //trying  to get March 30,2021
       let date = months + " " + i.toString() + ", " + yearChosen;
       //console.log(date);
       let dayOfWeek= new Date(date).getDay();
       dayPTag.addEventListener("click", function(){
        alert("Welcome,  " + date);
      });
       document.getElementById(dayOfWeek.toString()).appendChild(dayPTag);
    } 

}
renderCal(getNumberofDays(yearChosen,monthChosen));