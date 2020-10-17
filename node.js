const VERSION = "0.0.2";
const fs = require('fs');
const commandLineArgs = require('command-line-args');
const axios = require('axios');
const {really_converter} = require('./index.js');

const optionDefinitions = [
  { name: 'help', alias: 'h', type: Boolean },
  { name: 'version', alias: 'v', type: Boolean },
  { name: 'input', alias: 'i', type: String },
  { name: 'webinput', alias: 'w', type: String },
  { name: 'output', alias: 'o', type: String }
]

const options = commandLineArgs(optionDefinitions);

if(options.version){
	console.log(VERSION);
} else if(options.help){
	console.log(`node.js Really Converter v${VERSION}

node filename.js [-v] [-h] [--input file.js] [--webinput URL.js] [--output file.really]

-v, --version: Show version number and exit
-h, --help: Show this help and exit
-i, --input: File to read JS from
-w, --webinput: URL to read JS from
-o, --output: File to write Really to (if not specified, writes to console)
At least one of -v, -h, -w and -i must be given. Don't use both -i and -w.

You can use the generated ReallyScript in Webpages by including it as <script type="script/really">⋓"⏏"∨</script> and including index.js, then converting the script by using <body onload="really_converter.convertAll();">.`);
} else {
	if(options.input){
		fs.readFile(options.input, 'utf8', function (err,data) {
			if (err) {
			    return console.log("File error: "+err);
			}
			handleInput(data);
		});
	} else if(options.webinput) {
		var promises = [axios.get(options.webinput)];
		Promise.all(promises).then(
			function(results){
				handleInput(results[0].data);
			}
		).catch(function(err) {
		    return console.log("Error while fetching URL: "+err);
		});
	}
}

function handleInput(data){
	if(options.output) console.log("Read "+data.length+" characters from "+(options.input||options.webinput));
	var converted = really_converter.js2really(data);
	if(options.output) console.log("Converted to "+converted.length+" characters, "+(converted.length/data.length)+" %");
	if(options.output){
		fs.writeFile(options.output, converted, function(err) {
		    if(err) {
		        return console.log("File error: "+err);
		    }
		    console.log("Wrote successfully to "+options.output);
		}); 
	} else {
		console.log(converted);
	}
}