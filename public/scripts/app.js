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

const timeHelper = function (ms) {
  if(ms >= 12 * 30 * 24 * 3600000) {
    return `${Math.floor(ms/(12 * 30 * 24 * 3600000))} years ago`
  } else if (ms >= 30 * 24 * 3600000) {
    return `${Math.floor(ms/(30 * 24 * 3600000))} months ago`
  } else if (ms >=  (7 * 24 * 3600000)) {
    return `${Math.floor(ms/(7 * 24 * 3600000))} weeks ago`
  } else if (ms >= 24 * 3600000) {
    return `${Math.floor(ms/(24 * 3600000))} days ago`
  } else if (ms >= 3600000) {
    return `${Math.floor(ms/3600000)} hours ago`
  } else if (ms >= 60000) {
    return `${Math.floor(ms/60000)} hours ago`
  }
}

$(document).ready(function() {
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }

// const addNewTweets = $("#addNewTweets");



// addNewTweets.on("click", () => {
// console.log("lalala");
// const tweetContainer = $("#tweet-container");


  // const createNewElement = $(`<article class="tweet">
  // <img class="picture" src= ${tweetData.user.avatars}>
  // <label class="name">${tweetData.user.name}</label>
  // <label class="handle">${tweetData.user.handle}</label>
  // <textarea class="content">${tweetData.content.text}
  //  </textarea>
  // <footer></footer>
  // <div class="timeLast">10 days ago</div>
  // <div class="reportRefreshLike">🚩🔄❤️</div>
  // </article> `)

// tweetContainer.append(createNewElement);
// })
// //----------------------------------renderTweets--------------------------

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
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
  },
  {
    "user": {
      "name": "Ken",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Hello, I m just testing the page with a lot of text in the textarea...."
    },
    "created_at": 1561113959088
  }

]

const renderTweets = function(tweets) {
// loops through tweets
  for(const user of tweets) {
    // calls createTweetElement for each tweet
    let value = createTweetElement(user);
    console.log(user);
    // takes return value and appends it to the tweets container
    $("#tweet-container").append(value);
  }

}

const createTweetElement = function(tweetData) {
let $tweet = $(`<article class="tweet">
<img class="picture" src= ${tweetData.user.avatars}>
<label class="name">${tweetData.user.name}</label>
<label class="handle">${tweetData.user.handle}</label>
<textarea class="content">${tweetData.content.text}
 </textarea>
<footer></footer>
<div class="timeLast">${timeHelper(Date.now() - tweetData.created_at)} </div>
<div class="reportRefreshLike">🚩🔄❤️</div>
</article> `)
return $tweet;
}

renderTweets(data);



});
