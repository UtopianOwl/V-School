var saveList = [];
document.momList.newItem.focus();
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
    
    var addItem = $('#newItem').val();
    if (addItem) {
        event.preventDefault();
        var newListItem = $('<li></li>');
        var newListButton = $('<button class="delete"></button>').text("X");
        var newListSpan = $('<span class="item"></span>').text(addItem);
        newListItem.append(newListButton);
        newListItem.append(newListSpan);
        $('#list').append(newListItem);
        saveList.push(addItem);
        localStorage.clear();
        localStorage.setItem('saveList', JSON.stringify(saveList));
    }
    document.momList.reset();
});

$(document).on("click", ".delete", function (event) {
    var thisListItem = $(event.target).parent();
    var index = thisListItem.index();
    saveList.splice(index, 1);
    localStorage.clear();
    localStorage.setItem('saveList', JSON.stringify(saveList));
    thisListItem.remove();

});