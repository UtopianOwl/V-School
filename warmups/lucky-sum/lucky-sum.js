function lucky_sum(array) {
    var index = array.indexOf(13);
    var sum = 0;
    while (index > -1) {
        index = array.indexOf(13);
        if (index > -1) {
        array.splice(index, 2);
        }
    };
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(lucky_sum([1, 2, 3]));
console.log(lucky_sum([1, 2, 13]));
console.log(lucky_sum([1, 13, 3]));