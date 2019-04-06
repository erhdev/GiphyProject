


$('.buttons').on('click', function() {
    $('.generated-gif').remove();
   var clickQuery = $(event.target).attr('data-name');
    var buttonGiphys ='http://api.giphy.com/v1/gifs/search?' +
                      '&q=' + clickQuery +
                      '&api_key=ARyNec98GC4bQ2lTrznDQjoDX4mZY9az&limit=10';
   
   
   
    $.ajax({
        url: buttonGiphys,
        method: "GET"
    }).then(
        (function(gifs) { console.log(gifs) ;
            for (i = 0 ; i < 10; i++) {
                var gifImg = $('<img>');
                gifImg.attr('src', gifs.data[i].images.original.url);
                gifImg.attr('class', 'generated-gif');
                gifImg.appendTo($('#gif-container'));
            }

        })
   
);
   
})





var searchQuery = $('#userSearch').val()
var userGiphys = $.get('http://api.giphy.com/v1/gifs/search?' +
'q=' + searchQuery +
'&api_key=ARyNec98GC4bQ2lTrznDQjoDX4mZY9az&limit=10');


