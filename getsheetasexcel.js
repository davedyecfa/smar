var config = require("./config.json");

var token = config.SMARTSHEET_ACCESS_TOKEN;
var fs = require("fs")
const client = require('smartsheet');
var ss = client.createClient({ accessToken: token, logLevel: 'info' });

// Set options
var options = {
  id: 1005542173894532 // Id of Sheet
};

// Get sheet
ss.sheets.getSheetAsExcel(options)
  .then(function(fileContents) {
    // Write sheet to file
    fs.writeFile('output.xlsx', fileContents, 'binary', (err) => {
      if (err) throw err;
      console.log('The sheet has been saved!');
    });
  })
  .catch(function(error) {
    console.log(error);
  });
