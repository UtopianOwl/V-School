var readline = require("readline-sync");
var dictionary = [];

function DictionaryEntry(word, definition) {
    this.word = word;
    this.definition = definition;
}

function nextMove() {
    var whatNext = readline.question("\n\nWhat would you like to do? [new word || word search || quit]: ")
    if (whatNext === "n" || whatNext === "new word") {
        createEntry();
    } else if (whatNext === "w" || whatNext === "word search") {
        wordSearch();
        nextMove();
    } else if (whatNext === "q" || whatNext === "quit") {
        return;
    } else {
        console.log("\n\nERROR: INVALID COMMAND");
    }
    nextMove();
}

function createEntry() {
    var newWord = readline.question("\n\nWhat is the new word you would like to define? ");
    var dupes = false;
    for (var i = 0; i < dictionary.length; i++) {
        if (newWord.toLowerCase() === dictionary[i].word.toLowerCase()) {
            dupes = true;
        }
    }
    if (dupes) {
        console.log("\n\nA dictionary entry for this word already exists.");
        createEntry();
    } else {
        var newDefinition = readline.question("\n\nWhat is the definition of this new word? ")
    }
    var newEntry = new DictionaryEntry(newWord, newDefinition);
    dictionary.push(newEntry);
}

function wordSearch() {
    var searchWord = readline.question("\n\nWhat is the word you would like to look up? ")
    var wordFound = false;
    for (var i = 0; i < dictionary.length; i++) {
        if (searchWord.toLowerCase() === dictionary[i].word.toLowerCase()) {
            console.log("\n\n" + dictionary[i].word + ": " + dictionary[i].definition)
            wordFound = true;
        }
    }
    if (!wordFound) {
        console.log("\n\nThat word had not been defined yet.")
        var define = readline.question("\n\nWould you like to define it now? [yes || no] ")
        if (define === "yes" || define === "y") {
            var newDefinition = readline.question("\n\nWhat is the definition of this new word? ")
            var newEntry = new DictionaryEntry(searchWord, newDefinition);
            dictionary.push(newEntry);
        } else if (define === "n" || define === "no") {
            wordSearch();
        } else {
            console.log("\n\nERROR: INVALID COMMAND")
            wordSearch();
        }
    }
}
console.log("Welcome to the Console Dictionary!")
nextMove();
console.log("Thank you for using the Console Dictionary!")