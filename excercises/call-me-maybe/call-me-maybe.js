var names = ["Achilles", "Odysseus", "Ajax", "Patroklos", "Agamemnon", "Menelaos", "Diomedes", "Nestor", "Antilochos", "Idomeneus"];

function dontCall(name) {
    console.log("You did not call " + name + ".");
}

function call(name) {
    console.log("Calling " + name + ".")
}

function sendText(name) {
    console.log("You sent " + name + " a text message.")
}

function attemptCall(name, dontCall, call, sendText) {
  var aNames = name.toLowerCase().split("a").length -1;
//    var aNames = 0;
//    for (var j = 0; j < name.length; j++) {
//        if (name[j].toLowerCase() === "a") {
//            aNames++;
//        }
//    }
    if (aNames > 1) {
        sendText(name);
    } else if (name.length % 2 === 0) {
        call(name);
    } else {
        dontCall(name);
    }
}

for (var i = 0; i < names.length; i++) {
    attemptCall(names[i], dontCall, call, sendText)
}