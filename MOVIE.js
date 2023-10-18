$(document).ready(function() {
    $.ajax({
      url: 'https://it-its.id/api/movies',
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        displayMovies(data);
      },
      error: function(err) {
        console.log('Error:', err);
      }
    });
  });
  
  function displayMovies(data) {
    var movieTable = $('#movieTable');
    var row = $('<div class="row"></div>');
  
    data.forEach(function(movie, index) {
      var card = `
        <div class="col-md-6">
          <div class="card my-3">
            <div class="card-body">
              <h5 class="card-title">${movie.Title}</h5>
              <p class="card-text">${movie.Plot}</p>
            </div>
          </div>
        </div>
      `;
      row.append(card);
  
      if ((index + 1) % 2 === 0 || index === data.length - 1) {
        movieTable.append(row);
        row = $('<div class="row"></div>');
      }
    });
  }
