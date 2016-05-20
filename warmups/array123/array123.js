var has1 = false,
    has2 = false,
    has3 = false;

function hasTest(element) {
    switch (parseInt(element)) {
    case 1:
        has1 = true;
        break;
    case 2:
        has2 = true;
        break;
    case 3:
        has3 = true;
        break;
    default:
        break;
    }
}

function find123(array) {
    has1 = false;
    has2 = false;
    has3 = false;
    array.forEach(hasTest);
    return has1 && has2 && has3;
//    if (has1 && has2 && has3) {
//        return true;
//    } else {
//        return false;
//    }
}

var array1 = [1, 1, 2, 3, 1],
    array2 = [1, 1, 2, 4, 1],
    array3 = [1, 1, 2, 1, 2, 3],
    array4 = [1, 4, 5, 6, 7, 8, 9, 0],
    array5 = [1, 3, 4, 5, 6],
    array6 = [123, 321, 132, 312, 213, 231]
    masterArray = [array1, array2, array3, array4, array5, array6];

masterArray.forEach(function (element) {
    console.log(find123(element));
});