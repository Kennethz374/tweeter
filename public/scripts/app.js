/* <article class="tweet">
<img class="picture" src="https://i.imgur.com/73hZDYK.png">
<label class="name">Newton</label>
<label class="handle">@SirIsaac</label>
<textarea class="content">If I have seen further it is by standing on the shoulders of giants
 </textarea>
<footer></footer>
<div class="timeLast">10 days ago</div>
<div class="reportRefreshLike">🚩🔄❤️</div>
</article> */
// const timeHelper = require("./timeHelper").timeHelper;
const timeHelper = function(ms) {
  if (ms >= 12 * 30 * 24 * 3600000) {
    return `${Math.floor(ms / (12 * 30 * 24 * 3600000))} years ago`;
  } else if (ms >= 30 * 24 * 3600000) {
    return `${Math.floor(ms / (30 * 24 * 3600000))} months ago`;
  } else if (ms >=  (7 * 24 * 3600000)) {
    return `${Math.floor(ms / (7 * 24 * 3600000))} weeks ago`;
  } else if (ms >= 24 * 3600000) {
    return `${Math.floor(ms / (24 * 3600000))} days ago`;
  } else if (ms >= 3600000) {
    return `${Math.floor(ms / 3600000)} hours ago`;
  } else if (ms >= 60000) {
    return `${Math.floor(ms / 60000)} minutes ago`;
  } else {
    return `Just created Now`;
  }
};

$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
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
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1561113959088
    }];

  const renderTweets = function(tweets) {

    // loops through tweets
    for (const user of tweets) {
    // calls createTweetElement for each tweet
      let value = createTweetElement(user);
      // takes return value and appends it to the tweets container
      $("#tweet-list").prepend(value);
    }

  };
  //------XCC-----
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  //RETURN A DOM NODE OF A GIVEN TWEET DATA
  const createTweetElement = function(tweetData) {
    let $tweet = $(`<article class="tweet">
<img class="picture" src= ${escape(tweetData.user.avatars)}>
<label class="name">${escape(tweetData.user.name)}</label>
<label class="handle">${escape(tweetData.user.handle)}</label>
<textarea class="content">${escape(tweetData.content.text)}
 </textarea>
<footer></footer>
<div class="timeLast">${escape(timeHelper(Date.now() - tweetData.created_at))} </div>
<div class="reportRefreshLike">🚩🔄❤️</div>
</article> `);
    return $tweet;
  };

  renderTweets(data);

  const form = $("form");
  form.on("submit", (event) => {
    event.preventDefault();
    let msgLength = $("#inputContent").val().length;
    if (msgLength > 140 || msgLength === 0) {
      $("#error").slideDown();
    } else {
      $("#error").slideUp();
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: form.serialize()
      }).then(()=>{
        $("#inputContent").val("");//reset input field
        $(".counter").text("140");//reset counter
        loadTweets();
      });
  
  
      const loadTweets = function() {
        $.get("/tweets", (data)=>{
          $('#tweet-list').empty();
          renderTweets(data);
        });
      };
    }

  });

});
