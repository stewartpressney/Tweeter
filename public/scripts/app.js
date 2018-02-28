
$(document).ready(function() {
  //toggle new tweet slider
  $(".new-tweet").hide();
  $(".tweetButton").click(function() {
    $(".new-tweet").slideToggle();
  });
});

const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


function createTweetElement(tweetData){
  return $(

          `<article class="tweet">
            <header class="tweetheader">
              <img class="avatar" src="${tweetData.user.avatars.small}">
              <h2 class="name"> ${tweetData.user.name}</h2>
              <p class="handle">${tweetData.user.handle}</p>
            </header>

            <div class="tweetbody">
              <p>${tweet.content.text}</p>
            </div>

            <footer class="tweetfooter">
             <p class="timestamp"><strong> ${tweetData.created_at} </strong></p>
              <ul class="reactIcons">
                <li><i class="fas fa-flag"></i></li>
                <li><i class="fas fa-share"></i></li>
                <li><i class="fas fa-heart"></i></li>
              </ul>
            </footer>
          </article>`
)}

var $tweet = createTweetElement(tweetData)


function renderTweets(tweetData){
  var $tweets = $('.posts').empty();
  tweetData.forEach(function(tweet){
    $tweets.append(createTweetElement(tweet));
  });
}

renderTweets(data);




//jQuery Solution to css problem.
//tweet mousover animation

// This is INTENTIONALLY LEFT

// $(".tweetheader").css("opacity", ".75");
//   $(".reactIcons").hide();
//   $(".tweet").hover(function() {
//     $(this).find(".reactIcons").show();
//   }, function() {
//     $(this).find(".reactIcons").hide();
//   });
// });