var lyrics = ["This","hit","that","ice","cold","Michelle","Pfeiffer","that","white","gold","This","one","for","them","hood","girls","Them","good","girls","straight","masterpieces","Stylin","whilen","livin","it","up","in","the","city","Got","Chucks","on","with","Saint","Laurent","Got","kiss","myself","Im","so","pretty"];  

//console.info("Function 1");
//var forwards = "";
//function printFunction() {
//    for (i = 0; i < lyrics.length; i++) {
//        forwards +=  lyrics[i] + " ";
//    }
//    console.log(forwards);
//}
//printFunction();
//
//console.info("Function 2");
//var backwards = "";
//lyrics.reverse();
//function printBack() {
//    for (i = 0; i < lyrics.length; i++) {
//        backwards +=  lyrics[i] + " ";
//    }
//    console.log(backwards);
//}
//printBack();
//
//lyrics.reverse();
//console.info("Function 3");
//var everyOther = "";
//function printEverOther() {
//    for (i = 0; i < lyrics.length; i += 2) {
//        everyOther += lyrics[i] + " ";
//    }
//    console.log(everyOther);
//}
//printEverOther();

console.info("Function 1");
function printFunction() {
    return lyrics.join(" ");
}
console.log(printFunction());

console.info("Function 2");
function printBack() {
    return lyrics.reverse().join(" ")
}
console.log(printBack());

console.info("Function 3");
var everyOther = "";
lyrics.reverse();
function printEverOther() {
    for (i = 0; i < lyrics.length; i++) {
        if (i % 2 === 0) {
            everyOther += lyrics[i] + " ";
        }
    }
    return everyOther;
}
console.log(printEverOther());
