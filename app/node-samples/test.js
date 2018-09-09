var files = require('fs');
var https = require('https');
files.writeFile(__dirname+"/index.html","<h1>Html rocks</h1>");
var loveUrl = "https://www.pexels.com/photo/park-garden-gardener-bush-9204/"
var loveImage2 = files.createWriteStream(__dirname+"/heart2.jpg");
var request = https.get(loveUrl, function(response){
    response.pipe(loveImage2);
});