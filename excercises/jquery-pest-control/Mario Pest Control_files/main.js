//Wait until after the DOM loads to do stuff
$(document).ready(function () {

//play the pipe down sound when the page is finished loading
  
    var pipeDown = new Audio('down-pipe.wav')
        pipeDown.play();
    
//constructor function creating the object class Pest
    function Pest(name, caught, price) {
        this.name = name;
        this.caught = caught;
        this.price = price;
        this.getTotal = function () {
            return this.caught * this.price;
        }
    }
//instantiate one object per baddie containing its relevant info.
    var goomba = new Pest("Goomba", 12, 5);
    var bobomb = new Pest("Bob-omb", 8, 7);
    var cheepCheep = new Pest("Cheep-cheep", 5, 11) 
    
//Display the number caught on the webpage
    $("#gcaught").html("Caught: " + goomba.caught);
    $("#bcaught").html("Caught: " + bobomb.caught);
    $("#ccaught").html("Caught: " + cheepCheep.caught);

//Display the total price per baddie on the webpage
    $("#gprice").html("Price: " + goomba.getTotal() + " coins");
    $("#bprice").html("Price: " + bobomb.getTotal() + " coins");
    $("#cprice").html("Price: " + cheepCheep.getTotal() + " coins");

//Compute and display the total cost
    $("#total").html("Total Price: " + (goomba.getTotal() + bobomb.getTotal() + cheepCheep.getTotal()) + " coins");
    
//change to night mode
    $("#dayNight")
    
//switch colors based on mode

});