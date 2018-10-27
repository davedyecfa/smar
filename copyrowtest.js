// Specify the directive
var copyRow = {
  "rowIds": [145417762563972,8026717110462340],
  "to": {
    "sheetId": 2258256056870788
  }
};

// Set options
var options = {
  sheetId: 4583173393803140,
  body: copyRow
  };

// Copy rows
smartsheet.sheets.copyRowToAnotherSheet(options)
  .then(function(results) {
    console.log(results);
  })
  .catch(function(error) {
    console.log(error);
  });
