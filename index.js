'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

var ZaloOA = require('zalo-sdk').ZaloOA;
 
var zaConfig = {
    oaid: '2491302944280861639',
    secretkey: 'your secret key'
}
var ZOAClient = new ZaloOA(zaConfig);

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {
	res.send('Hello world, I am a chat bot')
})

// for Facebook verification
app.get('/webhook/', function (req, res) {
    console.log(req.params);
	// if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
	// 	res.send(req.query['hub.challenge'])
	// }
    // res.send('Error, wrong token')
    res.sendStatus(200);
})

// Spin up the server
app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
})