var shopper = {
    name: "Eli",
    idNumber: 1337,
    isMember: true,
    saving: function () {
        console.log("I have saved lots of money with my membership!");
    },
    grocerycart: [
        'steak',
        'eggs',
        'milk',
        'broccoli'
    ]   
}

console.log("My name is " + shopper.name + ". My member number is " + shopper.idNumber + ". ")
if (shopper.isMember == true) {
    shopper.saving()
}
var cart = ""
for (var i = 0; i < shopper.grocerycart.length; i++) {
    if (i < (shopper.grocerycart.length - 1)) {
        cart += shopper.grocerycart[i] + ", "
    } else {
        cart += shopper.grocerycart[i]
    }
}
console.log("This is what I bought today: " + cart)