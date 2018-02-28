$(document).ready(function() {
  //toggle new tweet slider
  $(".new-tweet").hide();
  $(".tweetButton").click(function() {
    $(".new-tweet").slideToggle();
    $("#inputText").focus();
  });


  //render tweets to homepage
  function renderTweets(tweetData) {
    $tweets = $('.posts');
    tweetData.forEach(function(tweet) {
      $tweets.append(createTweetElement(tweet));
    });
  };
  renderTweets(tweetData);

//Staging HTML Template
  function createTweetElement(tweetData) {
    var timestamp = tweetData.created_at / 1000;
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
const tweetData = [{
    "user": {
      "name": "Newton",
      "avatars": {
        "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "Vinyl bitters disrupt truffaut man braid kombucha leggings slow-carb af taiyaki. Vaporware vexillologist single-origin coffee blue bottle vegan bespoke bicycle rights lo-fi mustache roof party. Hot chicken coloring book locavore pork belly live-edge."
    },
    "created_at":1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd"
    },
    "content": {
      "text": "Thundercats affogato edison bulb leggings farm-to-table, authentic before they sold out bicycle rights chicharrones fingerstache ethical taiyaki franzen. Craft beer wayfarers truffaut trust fund authentic."
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Ethical 8-bit letterpress listicle vape retro blog green juice church-key. Food truck tattooed slow-carb sartorial waistcoat. Gluten-free viral beard tote bag vice hashtag post-ironic fingerstache sriracha."
    },
    "created_at": 1461116232227
  },{
    "user": {
      "name": "Duder",
      "avatars": {
        "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@Dudder"
    },
    "content": {
      "text": "Vinyl bitters disrupt truffaut man braid kombucha leggings slow-carb af taiyaki. Vaporware vexillologist single-origin coffee blue bottle vegan bespoke bicycle rights lo-fi mustache roof party. Hot chicken coloring book locavore pork belly live-edge."
    },
    "created_at": 1461116232227
  }
];


// This is INTENTIONALLY LEFT

// $(".tweetheader").css("opacity", ".75");
//   $(".reactIcons").hide();
//   $(".tweet").hover(function() {
//     $(this).find(".reactIcons").show();
//   }, function() {
//     $(this).find(".reactIcons").hide();
//   });
// });