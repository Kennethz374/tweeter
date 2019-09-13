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
//------timeHelper function-------
$(document).ready(function() {

  const renderTweets = function(tweets) {
    for (const user of tweets) {
      let value = createTweetElement(user);
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
<footer>
<div class="timeLast">${escape(timeHelper(Date.now() - tweetData.created_at))} </div>
<div class="reportRefreshLike">🚩🔄❤️</div>
</footer>
</article> `);
    return $tweet;
  };

  const loadTweets = function() {
    $.get("/tweets", (data)=>{
      $('#tweet-list').empty();
      renderTweets(data);
    });
  };

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
    }

  });

  loadTweets();

});
