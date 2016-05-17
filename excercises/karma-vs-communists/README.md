Simple Javascript program designed to be run in node for the UNIX terminal.

It was designed by Drew Nauman as part of the curriculum for the V-School full-stack web development bootcamp.


the original assignment is below:

# Penguins vs. Communists
20 JULY 2015 on Exercise, JavaScript, Problem Solving, Programming Principles, Level 3

The year is 1950 during the Cold War. The Soviet communists are making plans to invade Antarctica. The penguins of the south aren't going down without a fight.

You will decide the fate of the penguins or communists through Javascript callbacks.

*Requirements:
  1. Create two parties (Use Javascript function objects using the ```new``` keyword to instantiate):
    *Each party has a starting population of 1,000,000
    *Each party has a name (Penguins and Communists - or whatever you want)
  2. Flip a coin (make a random between 1 and 2) to see which party attacks first
  3. Create a function called ```sendNuke(party, onHit, onMiss)``` where:
    *the first parameter ```party`` is the Javascript object of the party that will be attacked
    *the second parameter ```onHit``` is a callback function that will be called if the attack is successful
    *the third parameter ```onMiss``` is a callback function that will be called if the attack is unsuccessful
    *the ```onHit``` and ```onMiss``` functions each take one parameter of type party (just forwarding the party you already passed into sendNuke)
  4. Print messages in the callbacks that are appropriate - ie if the attack missed then it would print, 'Penguins nuke missed the Communists and instead landed in the ocean'
  5. A random algorithm will be used to determine if the attack is a miss or a hit (this can happen in ```sendNuke``` function
  6. If an attack is successful initiate a random damage amount
  7. After an attack is completed (or missed) the opposing party will initiate an attack.
  8. This process will repeat until one of the parties reaches a 0 population

Hints:

For a better user experience add some delay between attacks using setTimeout 
Set Timeout