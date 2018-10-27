
var config = require("./config.json");
var token = config.SMARTSHEET_ACCESS_TOKEN;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
var fs = require("fs")
const client = require('smartsheet');
var ss = client.createClient({ accessToken: token, logLevel: 'info' });


// Set options
var options = {
  id: 1005542173894532 // Id of Sheet
};

// Get sheet
ss.sheets.getSheet(options)
    .then(function(sheetInfo) {
        console.log(sheetInfo);
        
    })
    .catch(function(error) {
        console.log(error);
    });



