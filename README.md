# Really converter

Really (or ReallyScript) is a "programming language" that basically is JavaScript/ECMAScript Syntax, but with common long-ish words like `document.getElementsByClassName` replaced by single characters not commonly used. This means it's even smaller than regular minified JS, thus being faster to transmit, but needs to be decoded in the browser before it can be used. It usually saves around 25% of characters in common libraries.

The name comes from the expression people often say when I tell them what this does. I can't say they're wrong, it's really a stupid idea noone should ever use for anything other than fun.

## Converting JS to Really

Download this repository and install the npm packages as listed in `package.json`. Then use one of the following commands, where `file.js` is the file you want to convert:
```bash
node node.js --input file.js --output file.really		# Convert file.js to file.really and print stats
node node.js --input file.js							# Convert file.js and output really code
node node.js --webinput https://url.com/file.js			# Download from given URL and output really code
```

## Using Really in Websites

The file `index.js` contains the three minimal methods to work with Really in a Browser:
```javascript
really_converter.js2really(js);			//Given Javascript code as a string, output equivalent Really code
really_converter.really2js(really);		//Inverse function to js2really
really_converter.convertAll();			//Evaluate all Code in <script type="script/really">-Tags as Really
```

The easiest way, which is also used in `test.html`, is to include `<script src="index.js"></script>` in the HTML `<head>`, where `index.js` is the file you find here (you can rename it if you want). Then execute `really_converter.convertAll();` when the document loads, for example like `<body onload="really_converter.convertAll();">`. This converts and executes all really scripts that are in the DOM at the time of the page load automatically.

Really scripts are included like `<script type="script/really">⋓⏐"⇙</script>`. If a really-script is loaded later and should be evaluated, the easiest way is to call `really_converter.js2really(js)` directly.

## Debugging

Really does not convert error messages, it is recommended to only feed it working code. Also don't try to convert index.js to really, as it contains all the special characters, so they can't be used to save code size.

## Other Notes

- It is best to feed it already minified JS files to allow to shorten multiple things at once without worrying about different amounts of whitespace
- Always use the index.js you used to convert the code to deconvert it. When updating, convert all JS code again.
- It works with TypeScript and theoretically with every text file, but the savings will be very small most of the time
- If one of the weird characters is actually used in your file, it won't be used to convert JS Code
- Don't ever use this in production; don't expect this to work at all