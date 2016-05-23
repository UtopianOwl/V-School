var clicks = 0;
//var timer = 30;
//
//
//function doStuff() {
//    if (timer > 0) {
//        document.addEventListener('click', function () {
//            clicks++;
//            if (clicks > 99) {
//                document.getElementById("clickCount").innerHTML = clicks;
//            } else if (clicks > 9) {
//                document.getElementById("clickCount").innerHTML = "0" + clicks;
//            } else {
//                document.getElementById("clickCount").innerHTML = "00" + clicks;
//            }
//        }, true);
//
//        document.getElementById("timer").innerHTML = timer;
//        timer--;
//        time();
//    } else {
//        return;
//    }
//}
//
//function time() {
//    var t = setTimeout(doStuff, 1000);
//}
$(document).ready(function () {
    if (localStorage.getItem('clicks')) {
        clicks = localStorage.getItem('clicks');
        if (clicks > 99) {
            document.getElementById("clickCount").innerHTML = clicks;
        } else if (clicks > 9) {
            document.getElementById("clickCount").innerHTML = "0" + clicks;
        } else {
            document.getElementById("clickCount").innerHTML = "00" + clicks;
        }
    }
});

$(document).on('mouseup', '#clickCount', function() {
    clicks = -1;
    $('#clickCount').innerHTML = "000";
    localStorage.setItem('clicks', clicks);
});

document.addEventListener('click', function () {
    clicks++;
    if (clicks > 99) {
        document.getElementById("clickCount").innerHTML = clicks;
    } else if (clicks > 9) {
        document.getElementById("clickCount").innerHTML = "0" + clicks;
    } else {
        document.getElementById("clickCount").innerHTML = "00" + clicks;
    }
    localStorage.setItem('clicks', clicks);
}, true);