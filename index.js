express =require('express'),
bodyParser =require("body-parser"),
app =express().use(bodyParser.json())  // creates express http 
require('dotenv').config();
var messagebird = require('messagebird')("1u7STbqsQu1UjrEekvffMDyGs"); 
var request =require("request");
const fetch = require('node-fetch');

app.listen(process.env.PORT || 4000,() =>
    console.log("Webhook Listening"));

var params = {
       //'originator': 'FarazShaikh',
        'to': '+917777036680',
        'from': '72489681aca34bb7a8c6f7366200fa58',
        'channelId': '72489681aca34bb7a8c6f7366200fa58',
        'type': 'sms',
        "url":"https://f28e755489ea.ngrok.io",
        'content': {'text': 'Hello!'},
        'source': { 'foo': 'bar' },
        'events':['message.created','message.updated']
  }

//Creating a Webhook
messagebird.conversations.webhooks.create(params, function (err, response) {
    if (err) {return console.log(err);}
    console.log("Webhook Sucessfully Created");
    //console.log(response);
});

// expecting post req from the server so that server can send body
// if we use get we wont get body from the server 
app.post('/webhook', function(req, res) {
    console.log('Webhook received:');
    //handleMessage(); 

    let body = req.body;
    //console.log(req.body);
    res.send('OK');
    let text = body.message.content;
    let to   = body.message.to;
    let from = body.message.from;
    let type = body.message.type;
    console.log(text,"From: ",from,"To :",to,);
    if (body.message.content) { 
        if(body.message.from === "+917777036680"){              // if user sends a message
        handleMessage();
        } 
    }
  });
async function handleMessage(){
    console.log("inside message func");
var params = {
    'to': '+917777036680',
    'from': '72489681aca34bb7a8c6f7366200fa58',
    'type': 'text',
    'content': {
      'text': 'Hello!'
    },
    'reportUrl': 'https://example.com/reports'
  };
  messagebird.conversations.send(params, function (err, response) {
    if (err) {
    return console.log("error while sending message",err);
    }
    console.log("response after sending message",response);
  });
    // console.log("sEND",sendObject);
    // messagebird.conversations.send(sendObject, function (err, response) {
    //     if (err) {
    //     return console.log(err);
    //     }
    //     console.log(response);
    //   });
}
//handleMessage()
//     return fetch(
//         `https://conversations.messagebird.com/v1/send`,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           method: 'POST',
//           body: JSON.stringify({
//             messaging_type: 'RESPONSE',
//             recipient:
//             {
//               id: from,
//             },
//             message: 
//             {
//               text
//             }
//           })
//         }
//       );
//  });
//    // console.log(response);
// }
// messagebird.conversations.webhooks.list(100, 0, function (err, response) {
//     if (err) {
//     return console.log(err);
//     }
//     console.log(response);
//   });
// messagebird.conversations.webhooks.read('72489681aca34bb7a8c6f7366200fa58', function (err, response) {
//     if (err) {return console.log(err);}
//     console.log(response);
// });
// CREATING THE SERVER WITHOUT THIS IT WONT CONNECT
// messagebird.verify.create('+447418310508', params, function (err, response) {
//     if (err) {
//         return console.log(err);
//         }
//         console.log(response);
//  });

 // giving not authorisezd recepient
// messagebird.conversations.start(params, function (err, response) {
//   if (err) {
//    return console.log(err);
//   }
//   console.log(response);
// });


//giving unkown error
// messagebird.conversations.read('72489681aca34bb7a8c6f7366200fa58', function (err, response) {
//   if (err) {
//   return console.log(err);
//   }
//   console.log(response);
// });

// messagebird.conversations.send(params, function (err, response) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log(response);
// });

// messagebird.conversations.reply('72489681aca34bb7a8c6f7366200fa58',
//     {
//       type: 'text',
//       content: {
//         text: 'hello brother',
//       },
//     },
//     function(err, response) {
//       if (err) {
//         return console.log(err);
//       }
//       console.log(response);
//     },
//   );
 // Retreving Conversation History
//   messagebird.conversations.list(20, 0, function(err, response) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(response);
//   });

// messagebird.conversations.listMessages(process.argv[2], function(err, response) {
//     if (err) {
//       return console.log(err);
//     }
//     for (var i in response.items) {
//       console.log(response.items[i]);
//     }
//   });
// messagebird.messages.list('72489681aca34bb7a8c6f7366200fa58',function (err, response) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(response);
//   });

// messagebird.conversations.webhooks.read('985ae50937a94c64b392531ea87a0263', function (err, response) {
//     if (err) {
//     return console.log(err);
//     }
//     console.log(response);
// });

// messagebird.conversations.webhooks.update('985ae50937a94c64b392531ea87a0263', params, function (err, response) {
//     if (err) {
//     return console.log(err);
//     }
//     console.log(response);
// });


// app.post('/webhook',(req,res) =>{
//     var ws = new websocket({URL:"wss://tataaia.slashrtc.com/aiManager"});
// });
// app.get('/webhooks',(req,res) =>{
//    let id =req.id;

// });
// // VERYFYING SIGNATURES
// var Signature = require('messagebird/lib/signature');
// // Replace <YOUR_SIGNING_KEY> with your actual signing key.
// var verifySignature = new Signature(process.env.Signature);
// // Retrieve the raw body as a buffer.
// app.use(require('body-parser').raw({ type: '*/*' }));
// // Verified webhook.
// app.get('/webhooks', verifySignature, function(req, res) {
//     res.send("Signature Verified");
//     console.log("Webhook Verified");
// });

// // Get your balance
// messagebird.balance.read(function (err, data) {          
//     if (err) {
//       return console.log(err);
//     }
//     console.log(data);
//   });
