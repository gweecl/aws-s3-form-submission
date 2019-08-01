var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({ region: 'us-west-2' });
var ses = new AWS.SES();

var RECEIVER = 'contactus@example.com';
var SENDER = 'contactus@example.com';

var response = {
    "isBase64Encoded": false,
    "headers": { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'example.com' },
    "statusCode": 200,
    "body": "{\"result\": \"Success.\"}"
};

exports.handler = function (event, context) {
    console.log('Received event:', event);
    sendEmail(event, function (err, data) {
        context.done(err, data);
    });
};

function sendEmail(event, done) {
    var params = {
        Destination: {
            ToAddresses: [
                RECEIVER
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'name: ' + event.name + '\nphone: ' + event.phone + '\nemail: ' + event.email + '\ndesc: ' + event.desc,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: 'Website Referral Form: ' + event.name,
                Charset: 'UTF-8'
            }
        },
        Source: SENDER
    };
    ses.sendEmail(params, function(err, data) {
        if (err) response.data = err; // console.log(err, err.stack); // an error occurred
        else response.data = data; // console.log(data);  // successful response
        /*
        data = {
            MessageId: "EXAMPLE78603177f-7a5433e7-8edb-42ae-af10-f0181f34d6ee-000000"
        }
        */
        done(err, response);
    });
}