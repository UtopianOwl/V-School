// First function
function lower(x, y) {
// First attempt; wanted to use 'switch' but false case icludes 'equal case' so the default will never run
//    switch (x > y) {
//        case true:
//            return y;
//            break;
//        case false:
//            return x;
//            break;
//        default:
//            return "Equal";
//    }
    if (x > y) {
        return y;
    } else if (x === y) {
        return "Equal";
    } else {return x;
    }
}
console.log(lower(10,3));
console.log(lower(3,10));
console.log(lower(10,10));


//Second Function
function monkeyTrouble(asmile,bsmile) {
    if ((asmile === true && bsmile === true ) || (asmile === false && bsmile === false)) {
        console.log(true)
    } else {
        console.log(false)
    }
}
monkeyTrouble(true, true)
monkeyTrouble(false, false)
monkeyTrouble(true, false)

//Third function
switch (new Date().getHours()) {
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
            console.log("Good morning!");
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
            console.log("Good Afternoon!");
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
            console.log("Good Evening!");
}