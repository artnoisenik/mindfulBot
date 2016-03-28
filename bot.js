var Twit = require('twit');

var T = new Twit({
  consumer_key:         'geTSMthBY5UYIsNSJC03MRNNw',
  consumer_secret:      'CwFLZSYKvnk1fRc4GCicavwT6ljlaktsjdWBy2NdG9PVBpuQye',
  access_token:         '714252656504508416-aqJmsxEQTPakJAQI75tdZfr4Miginhz',
  access_token_secret:  'k2UwHnDZdyP11ysv03pfnPlJaZaY4U2QEDYXA39ld1DIQ',
})

// T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//   console.log(data)
//   console.log('working');
// })

// T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
//   console.log(data)
// })

function retweetRecent() {T.get('search/tweets', {q: "#mindful OR #mindfulness", result_type: "recent"}, function (err, data, response) {
  if (!err) {
    var retweetId = data.statuses[0].id_str;
    T.post('statuses/retweet/' + retweetId, { }, function (err, response) {
      if (response) { console.log('Retweeted Tweet ID: ' + retweetId); }
        if (err) { console.log('Retweet Error: ', err); } }); }
        else { console.log('Search Error: ', err); } });}

retweetRecent();
setInterval(retweetRecent, 1800000);
