// Variable dayNumber
// 0,1,2,3,4,5,6
// S,M,T,W,T,F,S
const dayNumber = 1;
// Variable day
let day;
// Switch by dayNumver
switch (dayNumber) {
    // if dayNumber === 0
    case 0:
        day = "Sunday";
        break;
    // if dayNumber === 1
    case 1:
        day = "Monday";
        break;
    // if dayNumber === 2
    case 2:
        day = "Tuesday";
        break;
    // if dayNumber === 3
    case 3:
        day = "Wednesday";
        break;
    // if dayNumber === 4
    case 4:
        day = "Thursday";
        break;
    // if dayNumber === 5
    case 5:
        day = "Friday";
        break;
    // if dayNumber === 6
    case 6:
        day = "Saturday";
        break;
    // if dayNumber > 6
    default:
        day = "Invalid day number";
        break;
}
// Show Output day
console.log(day);

/*
    FOR FUN
*/
// Set All day into array
let arrDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// Condition check if arrDay[dayNumber] === undefined
if(!arrDay[dayNumber]){
    console.log("Invalid day number");
// Condition check if arrDay[dayNumber] >= 0 || arrDay[dayNumber] < 7
}else{
    console.log(arrDay[dayNumber]);
}

// Ternary if else 
!arrDay[dayNumber] ? console.log("Invalid day number") : console.log(arrDay[dayNumber]);

// Arrow Function 
const showDay = (dayNumber) => (!arrDay[dayNumber] ? "Invalid day number" : arrDay[dayNumber]);
console.log(showDay(0));