const VERSION = "0.0.1";
const fs = require('fs');
const commandLineArgs = require('command-line-args');
const {really_converter} = require('./index.js');

const optionDefinitions = [
  { name: 'help', alias: 'h', type: Boolean },
  { name: 'version', alias: 'v', type: Boolean },
  { name: 'input', alias: 'i', type: String },
  { name: 'output', alias: 'o', type: String }
]

const options = commandLineArgs(optionDefinitions);

if(options.version){
	console.log(VERSION);
} else if(options.help){
	console.log(`node.js Really Converter v${VERSION}

node filename.js [-v] [-h] [--input file.js] [--output file.really]

-v, --version: Show version number and exit
-h, --help: Show this help and exit
-i, --input: File to read JS from
-o, --output: File to write Really to (if not specified, writes to console)
At least one of -v, -h and -i must be given.

You can use the generated ReallyScript in Webpages by including it as <script type="script/really">⋓"⏏"∨</script> and including index.js, then converting the script by using <body onload="really_converter.convertAll();">.`);
} else {
	if(options.input){
		fs.readFile(options.input, 'utf8', function (err,data) {
			if (err) {
			    return console.log("File error: "+err);
			}
			if(options.output) console.log("Read "+data.length+" characters from "+options.input);
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
		});
	}
}