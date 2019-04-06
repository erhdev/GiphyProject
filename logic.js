$('#search-button').on('click', function(){
    var searchQuery = $('#user-search').val()
    var newButton = $('<button>' + searchQuery + '</button>');
    newButton.attr('class', 'buttons btn btn-success');
    newButton.attr('data-name', searchQuery);
    newButton.appendTo($('#button-container'))
    
    $('.buttons').on('click', function() {
        $('.card').remove();
        var clickQuery = $(event.target).attr('data-name');
        var buttonGiphys ='https://api.giphy.com/v1/gifs/search?' +
                           '&q=' + clickQuery +
                           '&api_key=ARyNec98GC4bQ2lTrznDQjoDX4mZY9az&limit=10';
         $.ajax({
             url: buttonGiphys,
             method: "GET"
         }).then(
             (function(gifs) { console.log(gifs);
                 for (i = 0 ; i < 10; i++) {
                     var newCard = $('<div>');
                     newCard.attr('class', 'card border-success');
                     var gifImg = $('<img>');
                     gifImg.attr('src', gifs.data[i].images.original_still.url);
                     gifImg.attr('class', 'generated-gif card-image-top');
                     gifImg.attr('data-tag', i);
                     gifImg.appendTo(newCard);
    
                     var cardBody = $('<div>');
                     cardBody.attr('class', 'card-body');
                     cardBody.append('<p>' + gifs.data[i].rating);
                     cardBody.appendTo(newCard);
                     newCard.appendTo($('#gif-container'));
                 }
                 $('.generated-gif').on('click', function() {
                     var tag = $(event.target).attr('data-tag');
                     var gifStill = true;
                     if (gifStill) {$(event.target).attr('src', gifs.data[tag].images.original.url), gifStill = false}
                     else {$(event.target).attr('src', gifs.data[tag].images.original_still.url), gifStill = true}
                     
                  })
             }) 
         );
     })         
})

$('.buttons').on('click', function() {
    $('.card').remove();
    var clickQuery = $(event.target).attr('data-name');
    var buttonGiphys ='https://api.giphy.com/v1/gifs/search?' +
                       '&q=' + clickQuery +
                       '&api_key=ARyNec98GC4bQ2lTrznDQjoDX4mZY9az&limit=10';
     $.ajax({
         url: buttonGiphys,
         method: "GET"
     }).then(
         (function(gifs) { console.log(gifs);
             for (i = 0 ; i < 10; i++) {
                 var newCard = $('<div>');
                 newCard.attr('class', 'card border-success');
                 var gifImg = $('<img>');
                 gifImg.attr('src', gifs.data[i].images.original_still.url);
                 gifImg.attr('class', 'generated-gif card-image-top');
                 gifImg.attr('data-tag', i);
                 gifImg.appendTo(newCard);

                 var cardBody = $('<div>');
                 cardBody.attr('class', 'card-body');
                 cardBody.append('<p>' + gifs.data[i].rating);
                 cardBody.appendTo(newCard);
                 newCard.appendTo($('#gif-container'));
             }
             $('.generated-gif').on('click', function() {
                 var tag = $(event.target).attr('data-tag');
                 var gifStill = true;
                 if (gifStill) {$(event.target).attr('src', gifs.data[tag].images.original.url), gifStill = false}
                 else {$(event.target).attr('src', gifs.data[tag].images.original_still.url), gifStill = true}
                 
              })
         }) 
     );
 })         