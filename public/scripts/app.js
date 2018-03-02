$(document).ready(function() {

  //Load Tweets from DB
  loadTweets();
  //toggle new tweet slider
  $(".new-tweet").hide();
  //click event for slide toggle
  $(".tweetButton").click(function() {
    $(".new-tweet").slideToggle();
    //focus on input text
    $("#inputText").focus();
  });


  //On submit from .newTweet
  $(".newTweet").submit(function(event) {
    //likeCount()
    var text = $('#inputText').val();
    //Stop defalt redirect
    event.preventDefault();
    if (validate(text)) {
      //Define action / route
      let post_url = $(this).attr("action");
      //Steralize input into jquery string
      let tweetContent = $('#inputText').serialize();
      //post tweet content
      $.post(post_url, tweetContent).done(function() {
        //Call the loadTweets function
        loadTweets();
        //reset the input value to an empty string
        $('#inputText').val('');
        //reset counter text.
        $('.counter').text(140);
      });
    } else {
      //alert("What's up with your Tweet Bro? Take another look!");
    }
  });


  // validate that tweet length is
  function validate(tweetText) {
    if (!tweetText) {
      alert("You must have more to say!")
      return false;
    }
    if (tweetText.length > 140) {
      alert("Your Tweet is too long Twit!")
      return false;
    }
    return true;
  }


  //render tweets to homepage
  function renderTweets(tweetData) {
    //create destination for template
    var $tweets = $('.posts').empty();
    //forn each tweet in tweetData
    tweetData.forEach(function(tweet) {
      //append destination with staging HTML Template
      $tweets.prepend(createTweetElement(tweet));
    });
  };

  //Load tweet data ready to render
  function loadTweets() {
    $.ajax({
      url: "http://localhost:8080/tweets",
      type: "GET",
      success: function(data) {
        // Could Sort That Here
        renderTweets(data)
      }
    });
  }


  //Staging HTML Template
  function createTweetElement(tweetData) {
    //likeCount()
    //set livestamp middleware
    var timestamp = tweetData.created_at / 1000;
    //return staging HTML Template with Tweet Data
    return $(
      `<article class="tweet">
              <header class="tweetheader">
                <img class="avatar" src="${tweetData.user.avatars.small}">
                <h2 class="name"> ${tweetData.user.name}</h2>
                <p class="handle">${tweetData.user.handle}</p>
              </header>

              <div class="tweetbody">
                <p>${tweetData.content.text}</p>
              </div>

              <footer class="tweetfooter">
               <p class="timestamp" data-livestamp=` + timestamp + `></p>
                <ul class="reactIcons">
                  <li><i class="fas fa-flag"></i></li>
                  <li><i class="fas fa-share"></i></li>
                  <li><i class="fas fa-heart"></i></li>
                </ul>
              </footer>
            </article>`
    )
  };
});

  /////STRETCHHHHHHHHHHHHHHHHHH

  // function likeCount() {
  //   console.log('hi')
  //   var clicks = 0;

  //   $("#clicks").text = clicks;

  //   $('#like-counter').on("click", function() {
  //     clicks += 1;
  //     console.log(clicks);
  //     $("#clicks").text = clicks;
  //     $('#like-counter').addClass("liked");
  //   });
  // };


// <li href="#" id="like-counter"><i class="fas fa-heart"></i><span class="click-text"><a id="clicks"></span></li>