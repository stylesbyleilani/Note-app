
import React from 'react'

const useCreateDate = () => {
    const dateObject = new Date()
  const  month = dateObject.getMonth()
  let monthName ;
  switch (month) {

        case 0: monthName = "jan"
        break;
        case 1: monthName = "feb"
        break;
        case 2: monthName = "Mar"
        break;
        case 3: monthName = "Apri"
        break; 
        case 4: monthName = "May"
        break;
        case 5: monthName = "jun"
        break;
        case 6: monthName = "jul"
        break;
        case 7: monthName = "Aug"
        break;
        case 8: monthName = "Sep"
        break;
        case 9: monthName = "Oct"
        break;
        case 10: monthName = "Nov"
        break;
        case 11: monthName = "Dec"
        break;
  
    default:
        break;
  }
  const date = `${monthName}, ${dateObject.getDate()}, ${dateObject.getFullYear()} [${dateObject.getHours()}: ${dateObject.getMinutes()} ] `;
  return date;


  
}

export default useCreateDate
