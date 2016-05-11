function processForm() {
    alert(
        document.getElementById("firstName").innerHTML + " " + document.myTravelForm.firstName.value + "\n" +
        document.getElementById("lastName").innerHTML + " " + document.myTravelForm.lastName.value + "\n" +
        document.getElementById("age").innerHTML + " " + document.myTravelForm.age.value + "\n" +
        document.getElementById("gender").innerHTML + " " + document.myTravelForm.gender.value + "\n" +
        document.getElementById("destination").innerHTML + " " + document.myTravelForm.destination.value + "\n" +
        document.getElementById("diet").innerHTML + " " + buildDiestString(document.myTravelForm.diet)
    );
}
function buildDiestString(dietArray) {
    var dietString = "";
    
    for (var i = 0; i < dietArray.length; i++) {
        if (dietArray[i].checked) {
            dietString += dietArray[i].value + ", ";
        }
    }
    if (!dietString) {
        dietString = "None";
    }
    return dietString;
}