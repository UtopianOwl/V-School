/*
The parameter weekday is true if it is a weekday, 
and the parameter vacation is true if we are on 
vacation. We sleep in if it is not a weekday or 
we're on vacation. Return true if we sleep in.

sleepIn(false, false) → true
sleepIn(true, false) → false
sleepIn(false, true) → true
*/

function sleepIn (weekday, vacation) {
    if (weekday === true) {
        if (vacation === false) {
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
    
// This is a much simpler way of getting the same result
//    return (!weekday || vacation)
}
console.log(sleepIn(false,false));
console.log(sleepIn(true, false));
console.log(sleepIn(false, true));
console.log(sleepIn(true, true));