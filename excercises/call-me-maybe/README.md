Javascript application to parctice using callback functions.

It was designed by Drew Nauman as part of the curriculum for the V-School full-stack web development bootcamp.

The original assignment is detailed below

# Call Me Maybe (Javascript Callbacks)
21 JULY 2015 on JavaScript, Warmup, Programming Principles, Level 3

Requirements:

1. Create an array with 10 different first names. If you want, here's an array of names you can use:
```
var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];
```
2. Iterate through those names and execute a function called attemptCall for each name in the array. (It's okay if this for loop is on the global scope.)
3. The attemptCall function should have 4 parameters: the current name in the loop's iteration, as well as 3 callback parameters, dontCall,call, and sendText.
4. If the name has an odd length of characters, invoke the dontCall callback function.
5. If the name has an even length of characters, invoke the call callback function.
6. If the name has more than one letter a (uppercase or lowercase) in it, invoke the sendText callback function. This takes precedence over even/odd conditionals
7. Each of the callback functions (call, dontCall, and sendText) should print a message to the console regarding what happened (i.e.: "You did not call Jon"). Be sure to use the name of the person that was used from the array.
8. (Optional): Use a setTimeout function to make a short wait time before the call/text is made. You can print a message such as Calling Jennifer.