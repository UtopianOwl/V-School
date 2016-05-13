
/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
//                            MANDATORY CHALLENGES                             //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////

//1.
function sum(x,y) {
    return x + y;
}
//2.
var largest = function(x,y,z) {
    return Math.max(x,y,z);
}
//3.
function evenOrOdd(x) {
   return x % 2 === 0 ? "Even" : "Odd";
}
//4.
var stringaling = ""
var charCount = function (stringaling) {
    return stringaling.length <= 20 ? stringaling + stringaling : stringaling.slice(0,(stringaling.length / 2));
}
console.info("add")
console.log(sum(3,4));
console.info("largest")
console.log(largest(10,6,14));
console.info("even/odd")
console.log(evenOrOdd(3));
console.info("character count")
console.log(charCount("Ben"));
console.log(charCount("Pseudohermaphroditism"));

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
//                           OPTIONAL CHALLENGES                               //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////

//1. Fibonacci Sequence
console.info("fibonacci function")
var sequence = [0,1];
function fib(n) {
    if (n <= 1) {
        sequence.pop(1);
    } else {
        for (i = 2; i < n; i++) {
            var x = sequence[sequence.length - 1],
                y = sequence[sequence.length - 2];
            sequence.push(x + y);
        }
    }
    console.log(sequence)
    var total = 0;
    for (i = 0; i < n; i++) {
        total += sequence[i];
    }
    console.log(total)
}
fib(9);

//2. Quadratic Formula
console.info("quadratic formula function")

var quadratic = function (a,b,c) {
    var x1,
        x2,
        bsquare = Math.pow(b,2),
        squareroot = Math.sqrt(bsquare - (4 * a * c));
    x1 = (0 - b + squareroot) / (2 * a);
    x2 = (0 - b - squareroot) / (2 * a);
    var answer = [x1, x2];
    return answer;
}
console.log(quadratic(1,4,2))

//3. Frequent Letter
console.info("Frequent Letter Function")
var splitword = [];
var letters = [];
var numbers = [];
var prev;

function frequent(input) {
    splitword = input.split("");
    splitword.sort();
    for (i = 0; i < splitword.length; i++) {
        if (splitword[i] !== prev) {
            letters.push(splitword[i]);
            numbers.push(1);
        } else {
            numbers[numbers.length - 1]++;
        }
        prev = splitword[i];
    }
    if (numbers.length === 0) {
        return -1;
    }
    var max = numbers[0];
    var maxIndex = [];
    for (j = 0; j < numbers.length; j++) {
        if (numbers[j] > max) {
            maxIndex = []
            maxIndex.push(j);
            max = numbers[j];
        } else if (numbers[j] === max) {
            maxIndex.push(j);
            
        }
    }
    for (k = 0; k < maxIndex.length; k++) {
        console.log(letters[maxIndex[k]]) 
    }
}
frequent("mississippi");