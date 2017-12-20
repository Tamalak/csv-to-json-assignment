const csvToJson = require('csvtojson');
const http = require('http');
const fs = require('fs');
const request = require('request');

const csvUrl = 'https://prod-edxapp.edx-cdn.org/assets/courseware/v1/07d100219da1a726dad5eddb090fa215/asset-v1:Microsoft+DEV283x+2T2017+type@asset+block/customer-data.csv';

let doneyet = false;
let buff = [];

csvToJson().fromStream(request.get(csvUrl)).on('json', function(jsonRow) {
    buff.push(jsonRow);
})
.on('done', function(error) {
    console.log(buff);
});