$ (document).ready(function(){

  // Costruire una griglia con 8x8 quadrati
  // Random 15 rossi, gli altri verdi



// creo 64 quadrati
   for(i = 1; i <= 64; i++) {
     var quadrati = $('.container').append('<div class="square"></div>');
   }

   for (var i = 0; i < 15; i++) {
    var random = Math.floor(Math.random()* (64 + 1));
    console.log(random);
    // A ogni numero devo associare il quadrato corrispondente

    var quadrato = $('.square').get(random - 1);
    console.log(quadrato);
    // tutti i quadrati devono essere verdi
    $('.square').click(
      function(){
        $ (this).css('background', 'green');



      }
    )
    // tranne quelli random che sono rossi
    // Do un background blu di debug
    $ (quadrato).css('background', 'blue').addClass('rossi');
    $ ('.rossi').click(
      function () {
        $ (this).css('background', 'red');

      }
    )
  }

  // Devo assegnare un punteggio per ogni quadrato verde
 }
)
