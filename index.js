const compareDates = (d1, d2) => {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();
    let difference = date2 - date1;
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;

  };
  
  
const date = new Date();

let currentDay= String(date.getDate()).padStart(2, '0');
  
let currentMonth = String(date.getMonth()+1).padStart(2,"0");
  
let currentYear = date.getFullYear();
  
let currentDate = `${currentMonth}/${currentDay}/${currentYear}`;

let datesince = compareDates("02/20/2023", currentDate);


document.querySelector(".daySince").innerText = "Han pasado: " + datesince + " desde el ultimo tistos";

