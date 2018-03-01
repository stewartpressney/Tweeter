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



//temp database
// const tweetData = [{
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "Vinyl bitters disrupt truffaut man braid kombucha leggings slow-carb af taiyaki. Vaporware vexillologist single-origin coffee blue bottle vegan bespoke bicycle rights lo-fi mustache roof party. Hot chicken coloring book locavore pork belly live-edge."
//     },
//     "created_at":1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd"
//     },
//     "content": {
//       "text": "Thundercats affogato edison bulb leggings farm-to-table, authentic before they sold out bicycle rights chicharrones fingerstache ethical taiyaki franzen. Craft beer wayfarers truffaut trust fund authentic."
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Ethical 8-bit letterpress listicle vape retro blog green juice church-key. Food truck tattooed slow-carb sartorial waistcoat. Gluten-free viral beard tote bag vice hashtag post-ironic fingerstache sriracha."
//     },
//     "created_at": 1461116232227
//   },{
//     "user": {
//       "name": "Duder",
//       "avatars": {
//         "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@Dudder"
//     },
//     "content": {
//       "text": "Vinyl bitters disrupt truffaut man braid kombucha leggings slow-carb af taiyaki. Vaporware vexillologist single-origin coffee blue bottle vegan bespoke bicycle rights lo-fi mustache roof party. Hot chicken coloring book locavore pork belly live-edge."
//     },
//     "created_at": 1461116232227
//   }
// ];


// This is INTENTIONALLY LEFT

// $(".tweetheader").css("opacity", ".75");
//   $(".reactIcons").hide();
//   $(".tweet").hover(function() {
//     $(this).find(".reactIcons").show();
//   }, function() {
//     $(this).find(".reactIcons").hide();
//   });
// });