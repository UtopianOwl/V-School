//one object containing per baddie containing its relevant info. I've created a property for each value
var goomba = {
    name: "Goomba",
    caught: 12,
    price: 5,
    getTotal: function() {
         return this.caught * this.price;
    }
};
var bobomb = {
    name: "Bob-omb",
    caught: 8,
    price: 7,
    getTotal: function() {
        return this.caught * this.price;
    }
};
var cheepCheep = {
    name: "Cheep-cheep",
    caught: 5,
    price: 11,
    getTotal: function() {
        return this.caught * this.price;
    }
};

//change the amount caught in the nested lists
document.getElementById("gcaught").innerHTML = "Caught: " + goomba.caught;
document.getElementById("bcaught").innerHTML = "Caught: " + bobomb.caught;
document.getElementById("ccaught").innerHTML = "Caught: " + cheepCheep.caught;

//Change the total price in the nested lists
document.getElementById("gprice").innerHTML = "Price: " + goomba.getTotal() + " coins";
document.getElementById("bprice").innerHTML = "Price: " + bobomb.getTotal() + " coins";
document.getElementById("cprice").innerHTML = "Price: " + cheepCheep.getTotal() + " coins";

//Compute and display the total cost
document.getElementById("total").innerHTML = "Total Price: " + (goomba.getTotal() + bobomb.getTotal() + cheepCheep.getTotal()) + " coins";