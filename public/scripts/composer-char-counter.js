$(function() {
    console.log( "Up and Running Twit!" );
    $('.new-tweet textarea').on('keyup', function(){

      // get variables from input box
      var $input = $(this);
      var $tweetCharecters = $input.val().length;
      var $counter = $input.siblings("span.counter")


      //subtract the charecter input length from 140 and add the invalid class.
      $counter.text(140 - $tweetCharecters);
      if ($tweetCharecters > 140){
        $counter.addClass('maxCount')
      } else {
        $counter.removeClass('maxCount')
      };
    });
});