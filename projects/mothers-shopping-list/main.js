var saveList = [];
$(document).ready(function () {
    if (JSON.parse(localStorage.getItem('saveList'))) {
        saveList = JSON.parse(localStorage.getItem('saveList'));
        for (var i = 0; i < saveList.length; i++) {
            var newListItem = $('<li></li>');
            var newListButton = $('<button class="delete"></button>').text("X");
            var newListSpan = $('<span class="item"></span>').text(saveList[i]);
            newListItem.append(newListButton);
            newListItem.append(newListSpan);
            $('#list').append(newListItem);
        }
    }
});

$(document).on("click", "#add", function (event) {
    event.preventDefault();
    var addItem = $('#newItem').val();
    if (addItem) {
        var newListItem = $('<li></li>');
        var newListButton = $('<button class="delete"></button>').text("X");
        var newListSpan = $('<span class="item"></span>').text(addItem);
        newListItem.append(newListButton);
        newListItem.append(newListSpan);
        $('#list').append(newListItem);
        saveList.push(addItem);
        console.log(saveList);
        localStorage.clear();
        localStorage.setItem('saveList', JSON.stringify(saveList));
    }
    document.momList.reset();
});

$(document).on("click", ".delete", function (event) {
    var thisListItem = $(event.target).parent();
    var index = $(event.target).parent().index();
    saveList.splice(index, 1);
    localStorage.clear();
    localStorage.setItem('saveList', JSON.stringify(saveList));
    thisListItem.remove();

});