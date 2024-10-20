// switch (key){
//     case value:
//         break

//     default:
//         breakl
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");     
        // break;     // Note :- If we dont put break, then after first match all the code below it is executed except default
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
// march
// april
