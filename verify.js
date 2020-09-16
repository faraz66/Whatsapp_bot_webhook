var messagebird = require('messagebird')(process.env.ACCESS_KEY, null, ["ENABLE_CONVERSATIONSAPI_WHATSAPP_SANDBOX"]); 

var params = {
    originator: 'Faraz Shaikh',
    'events': [
    'message.created',
    'message.updated'
    ],
    'channelId': '72489681aca34bb7a8c6f7366200fa58',
    'url': 'https://example.com/webhook'
  }
messagebird.verify.create('+447418310508', params, function (err, response) {
    if (err) {
        return console.log(err);
        }
        console.log(response);
    });