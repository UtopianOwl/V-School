Javascript app that runs in node for the unix terminal. requires readline-syc to take input. Encrypts the users phrase using a ceasar cypher and prints the result.

It was designed by Drew Nauman as part of the curriculum for the V-School full-stack web development bootcamp.

The original assignment is detailed below

# Caeser Cipher
18 MAY 2015 on Exercise, Programming Principles, Level 2
right shift

In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet." -Wikipedia

For this exercise, you will be implementing a Caeser cipher using Javascript. Your program will receive two inputs:

The text to be encoded
The number positions to shift each letter (to the right)
For example: 
[cipher example](http://coursework.vschool.io/content/images/2016/05/Screen-Shot-2016-05-10-at-2-17-56-PM.png)

You only have to shift letters that are part of the 26-letter alphabet. Any other characters (such as spaces) should be printed as they were received. The shift value will always be on the interval [0, 26].

Here is some code to get you started:
```
var ask = require('readline-sync');  
var input = ask.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(ask.question('How many letters would you like to shift? '));
```
