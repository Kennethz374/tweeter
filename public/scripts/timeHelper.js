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
module.exports = {timeHelper};

//1 minute = 60000ms
//1 hour   = 360 0000ms
//1 day    = 24 * 360 0000ms
//1 week   = 7 * 24 * 360 0000ms
//1 month  = 30  * 24 * 360 0000ms
//1 year   = 12 * 30 * 24 * 360 0000ms
//1568218105806-1461113959088 = 107104146718 ms