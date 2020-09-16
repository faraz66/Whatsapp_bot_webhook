var messagebird = require('messagebird')(process.env.ACCESS_KEY, null, ["ENABLE_CONVERSATIONSAPI_WHATSAPP_SANDBOX"]);
const express = require('express');  
const app = express();

// Get your balance
messagebird.balance.read(function (err, data) {          
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
messagebird.conversations.list(20, 0, function (err, response) {
    if (err) {
      return console.log(err);
    }
    console.log(response);
  });

  // VERYFYING SIGNATURES

// var Signature = require('messagebird/lib/signature');
// // Replace <YOUR_SIGNING_KEY> with your actual signing key.
// var verifySignature = new Signature(process.env.Signature);
// // Retrieve the raw body as a buffer.
// app.use(require('body-parser').raw({ type: '*/*' }));
// // Verified webhook.
// app.get('/webhook', verifySignature, function(req, res) {
//     res.send("Signature Verified");
// });

// messagebird.conversations.webhooks.read('985ae50937a94c64b392531ea87a0263', function (err, response) {
//   if (err) {
//   return console.log(err);
//   }
//   console.log(response);
// });