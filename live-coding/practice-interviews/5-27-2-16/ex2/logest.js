function findLongest(string) {
    var array = string.split(" ");
    var y = 0;
    for (var i = 0; i < array.length; i++) {
        var x = array[i].length;
        if (x > y) {
            y = x;
        }
    }
   console.log(y);
}

findLongest('the quick brown fox jumped over the lazy dog');