var Twit = require('twit');

var T = new Twit({
  consumer_key:         'geTSMthBY5UYIsNSJC03MRNNw',
  consumer_secret:      'CwFLZSYKvnk1fRc4GCicavwT6ljlaktsjdWBy2NdG9PVBpuQye',
  access_token:         '714252656504508416-aqJmsxEQTPakJAQI75tdZfr4Miginhz',
  access_token_secret:  'k2UwHnDZdyP11ysv03pfnPlJaZaY4U2QEDYXA39ld1DIQ',
})

function retweetRecent() {T.get('search/tweets', {q: "#fashion", result_type: "popular"}, function (err, data, response) {
  if (!err) {
    var rando = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    var retweetId = data.statuses[rando].id_str;
    T.post('statuses/retweet/' + retweetId, { }, function (err, response) {
      if (response) { console.log('Retweeted Tweet ID: ' + retweetId); }
        if (err) { console.log('Retweet Error: ', err); } }); }
        else { console.log('Search Error: ', err); } });}

retweetRecent();
setInterval(retweetRecent, 300000);
