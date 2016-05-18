$(document).ready(function () {
    $('#add').click(function (event) {
        event.preventDefault();
        var newItem = document.momList.newItem.value;
        if (newItem) {
            var $listItem = $('<li id="' + newItem + '"><button class="delete">X</button></li>');
            var $item = $('<span class="item">').text(newItem);
            $listItem.append($item);
            $('#list').append($listItem);
        }
    });
    $('.delete').click(function () {
        console.log("im here");
        $(this).parent().remove();
    });
});