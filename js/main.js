$(document).ready(function () {
  $('#submit-btn').on('click', function(event) {
      event.preventDefault();
      var value = $('#joke_src').val();   
    $.ajax({url: "https://api.chucknorris.io/jokes/search?query=" + value, success: function(result){       
        $('#result').html('<br>' + '<h3>' + 'Total result of search: ' + result.total + '</h3>' + '<br>');
        var x = '';
        for (i = 0; i < result.result.length; i++) {          
           x += '<p class="joke-paragraph">' + result.result[i].value + '</p>'; 
         }    
          $('#result').append(x);              
    }});
  });
});
