var really_converter = (function(){
function replace_all(target, search, replacement) {
    while(target.indexOf(search)>-1) target=target.replace(search,replacement);
    return target;
};

const chars = "↨↪↫↬↭↮↴↶↸↼↽↾↿⇐⇑⇒⇓⇔⇕⇖⇗⇘∠∢∪∹∺∼≁≂≈≉≍≏≐⊕⊘⊙⊛⊞⊢⊣⊤⊥⊦⊧⊨⊩⊪⊫⊬⊭⊮⊯⊱⊲⊳⊴⊵⊶⊷⊸⊹⊺⊻⊼⊽⊾⊿⋀⋁⋃⋄⋆⋇⋈⋉⋊⋋⋌⋍⋎⋏⋐⋑⋒⋓⋔⋕⋖⋗⋘⋙⋚⋛⋜⋝⋞⋟⋠⋡⋢⋣⋤⋥⋦⋧⋨⋩⋪⋫⋬⋭⋮⋯⋰⋱⋲⋳⋴⋵⋶⋷⋸⋹⋺⋻⋼⋽⋾⋿⌀⌁⌂⌃⌄⌅⌆⌇⌈⌉⌊⌋⌌⌍⌎⌏⌐⌑⌒⌓⌔⌕⌖⌗⌘⌙⌚⌛⌜⌝⌞⌟⌢⌣⌥⌦⌧⌨〈⌫⌬⍕⍖⍛⍝⍠⍡⍢⍣⍤⍥⍦⍧⍩⍪⍭⍯⍱⍲⍳⍴⍵⍶⍷⍹⍺⍽⍾⍿⎀⎁⎃⎄⎅⎇⎈⎊⎋⎌⎍⎎⎏⎐⎑⎒⎓⎘⎙⎛⎜⎝⎠⎡⎣⎤⎥⎦⎧⎨⎩⎫⎬⎮⎯⎱⎵⎶⎷⎾⎿⏀⏁⏂⏃⏄⏅⏆⏇⏈⏉⏋⏌⏍⏎⏏⏐⏚⏛⏜⏞⏟⏠⏡⏢⏣⏤⏥⏦⏨⏩⏪⏫⏬⏭⏮⏯⏳⏸⏹⏺⍇⍨⍮⍜⍬⎗⎢⎪⎭⊖⊔⍫⎂⎟∣⍍⍎⍙⎚⍐⍻⎆≑∀≨∁∄∂⎰⎴⎳⍘⍗⍸⏊⎔⎞∵≾⊅≒⊉∩∃∊∈∉≧≪≣⇺⊈≠≡≫≭≲≮⊇⊀≸⊊≿≕⊌≯≝≚≩⊒⇷⊂≺≹≽⊃≳≖≗≻⊏⊄≢≱⊆⊍⊐≶≤≷≥≰≘≔≜⇸⇧≓≟≦≬⇶∜∖∓∆∇∋∏∅⇪⊰∡∤↻↺↹↷≀∦∷⋅∴∨⇙≊∧⊝⊗⇼⇩⇭⇮⇹⇴⇡⇨⇬⇱⇳⇣⇿⇾∛∰⎲⎺⏝⏔⏱⍔⍓⏰⏲↤↥⇟↳∿∞⍊⍼⇰⇵√⇻∔⍰∫∳∬∭⌠≵⌡≼≞⊚⊟⊠⊜≌⊓⊁∑∎∐≋∽↯↲↱∯∱∮⇀⇁∲≙≄∶∸∾≇∍≛∌⊡⊎⌵⌤≎≃∻↰↩∥↵≅⊋⇂⇃⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍≆↦↧⍒⍂⊑⍋⌿⍁⍟Ԃ✎✏✐✑✒✓✔✕✖✗✘✙✚✛✜✝✞✟✠✡✢✣✤✥✦✧✨✨✩✪✫✬✭✮✯✰✱✲✳✴✵✶✷✸✹✺✻✼✽✾✿❀❁❂❃❄❅❆❇❈❉❊❋❌❍❎❎❏❐❑❒❓❓❔❔❕❕❖❗❘❙❚❛❜❝❞❟❟❠❠❡❢❣❤❥❦❧❨❩❪❫❬❭❮❯❰❱❲❳❴❵	❶❷❸❹❺❻❼❽❾❿➀➁➂➃➄➅➆➇➈➉➊➋➌➍➎➏➐➑➒➓➔➕⟿⠀⿰⿱⿲⿳⿴⿵⿶⿷⿸⿹⿺⿻⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿⡀⡁⡂⡃⡄⡅⡆⡇⡈⡉⡊⡋⡌⡍⡎⡏⡐⡑⡒⡓⡔⡕⡖⡗⡘⡙⡚⡛⡜	⡝⡞⡟⡠⡡⡢⡣⡤⡥⡦⡧⡨⡩⡪⡫⡬⡭⡮⡯⡰⡱⡲⡳⡴⡵⡶⡷⡸⡹⡺⡻⡼⡽⡾⡿⢀⢁⢂⢃⢄⢅⢆⢇⢈⢉⢊⢋⢌⢍⢎⢏⢐⢑⢒⢓⢔⢕⢖⢗⢘⢙⢚⢛⢜⢝⢞⢟⢠⢡⢢⢣⢤⢥⢦⢧⢨⢩⢪⢫⢬⢭⢮⢯⢰⢱⢲⢳⢴⢵⢶⢷⢸⢹⢺⢻⢼⢽⢾⢿⣀⣁⣂⣃⣄⣅⣆⣇⣈⣉⣊⣋⣌⣍⣎⣏⣐⣑⣒⣓⣔⣕⣖⣗⣘⣙⣚⣛⣜⣝⣞⣟⣠⣡⣢⣣⣤⣥⣦⣧⣨⣩⣪⣫⣬⣭⣮⣯⣰⣱⣲⣳⣴⣵⣶⣷⣸⣹⣺⣻⣼⳽⳾⳿ⴀⴁⴂⴃⴄⴅⴆⴇⴈⴉⴊⴋⴌⴍⴎⴏⴐⴑⴒⴓⴔⴕⴖⴗⴘⴙⴚⴛⴜⴝⴞⴟⴠⴡⴢⴣⴤⴥⴰⴱⴲⴳⴴⴵⴶⴷⴸⴹⴺⴻⴼⴽⴾⴿⵀⵁⵂⵃⵄⵅⵆⵇⵈⵉⵊⵋⵌⵍⵎⵏⵐⵑⵒ⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕、。〃〄々〆〇〈〉《》「」『』【】〒〓〔〕〖〗〘〙〚〛〜〝〞〟〠〡〢〣〤〥〦〧〨〩〪〭〫〬".split("");

const exprs = [
"\n",
"document.getElementsByClassName(",
"document.getElementsByClassName",
"getElementsByClassName",
"document.getElementsByTagName(",
"document.getElementsByTagName",
"getElementsByTagName",
"document.getElementsByName(",
"document.getElementsByName",
"getElementsByName",
"document.getElementById(",
"document.getElementById",
"getElementById",
"document.createElement(",
"document.createElement",
"createElement",
"document.removeChild(",
"document.removeChild",
"removeChild",
"document.appendChild(",
"document.appendChild",
"appendChild",
"document.replaceChild(",
"document.replaceChild",
"replaceChild",
"document.write(",
"document.write",
"document.anchors",
"document.baseURI",
"document.body.innerHTML",
"document.body",
"document.cookie",
"document.doctype",
"document.documentElement",
"document.documentMode",
"document.documentURI",
"document.domain",
"document.domConfig",
"document.embeds",
"document.forms",
"document.head",
"document.images",
"document.implementation",
"document.inputEncoding",
"document.lastModified",
"document.links",
"document.readyState",
"document.referrer",
"document.scripts",
"document.strictErrorChecking",
"document.title",
"document.URL",
"document.",
"document",

"Math.random(",
"Math.random",
"Math.floor(",
"Math.floor",
"Math.round(",
"Math.round",
"Math.pow(",
"Math.pow",
"Math.sqrt(",
"Math.sqrt",
"Math.abs(",
"Math.abs",
"Math.ceil(",
"Math.ceil",
"Math.min(",
"Math.min",
"Math.max(",
"Math.max",
"Math.log(",
"Math.log",
"Math.sin(",
"Math.cos(",
"Math.tan(",
"Math.sin",
"Math.cos",
"Math.tan",
"Math.",
"Math",

"console.warn(",
"console.error(",
"console.warn",
"console.error",
"console.log(\"",
"console.log(",
"console.log",
"console.",
"console",

"window.location.href",
"window.location.hostname",
"window.location.pathname",
"window.location.protocol",
"window.location.assign",
"window.location.",
"window.location",
"window.innerHeight",
"window.innerWidth",
"window.open();",
"window.open()",
"window.open",
"window.close();",
"window.close()",
"window.close",
"window.resize();",
"window.resize()",
"window.resize",
"window.",
"window",
"history.",
"history.back()",
"history.back",
"history.forward()",
"history.forward",
"navigator.appName",
"navigator.",
"navigator",
"localStorage",
"sessionStorage",

"onmouseover",
"mouseover",
"onmouseenter",
"mouseenter",
"onmouseleave",
"mouseleave",
"ondblclick",
"onclick",
"dblclick",
"click",

"Object.keys(",
"Object.values(",
"Object.create(",
"Object.",
"Object",

"abstract",
".arguments",
"arguments",
"await",
"boolean",
"break;",
"break",
"byte",
"case ",
"case",
"}catch(",
"catch(",
"catch",
"char",
"class",
"const ",
"const",
"continue",
"debugger",
"default",
"delete ",
"delete",
"double",
"do{",
//"do", //Do is at the bottom as many words contain it
"}else{",
"else{",
"}else if(",
"else if(",
"else",
"enum",
"eval(",
"eval",
"export",
"extends",
"false",
"final",
"finally",
"float",
"for(var ",
"for(",
"for",
"=function(){",
"function(){",
"=function(",
"function(",
"function ",
"function",
"=require(",
"require(",
"require",
"goto ",
"goto",
"if(!",
"if(",
"if",
"implements",
"import",
//"in", //In is at the bottom as many words contain it
"instanceof ",
"instanceof",
"int",
"interface",
"let ",
"let",
"long",
"native",
"new ",
"new",
"null",
"package",
"private",
"protected",
"public",
"return 0",
"return \"",
"return ",
"return;",
"return",
"short",
"static",
"super",
"switch(",
"switch",
"synchronized",
"this",
"throws",
"throw ",
"throw",
"transient",
"true",
"try{",
"try",
"typeof ",
"typeof",
"var ",
"var",
"void",
"volatile",
"}while(",
"while(",
"}while",
"while",
"with",
"yield ",
"yield",

"use strict",
"getBoundingClientRect",
"encodeURIComponent",
"navigator.userAgent",
"encodeURIComponent",
".addEventListener",
"addEventListener",
"hasOwnProperty",
"Property",
"EventListener",
"event.subscribe",
"unsubscribe",
"subscribe",
"createElement",
"screen.height",
".innerHTML=",
".removeChild",
".getAttribute",
"getAttribute",
"screen.width",
".toLowerCase",
".toUpperCase",
"console.log",
"console.warn",
"Hello world",
"Infinity;",
"Infinity",
"-Infinity",
"attachEvent",
"native code",
".substring",
".firstChild",
"=JSON.stringify(",
"JSON.stringify(",
"JSON.stringify(",
"stringify",
"=JSON.parse(",
"JSON.parse(",
"JSON.parse",
"parse",
"JSON.",
"toLowerCase",
"toUpperCase",
"=function(){",
"function(){",
"console.log",
"setInterval",
".innerHTML",
".reverse",
"ondblclick",
".substring",
"parentNode",
"instanceof",
"}else if",
"setTimeout",
".indexOf",
".reverse",
"reverse",
".length==",
".location",
"arguments",
"Attribute",
"attribute",
"undefined",
"prototype",
"Exception",
"document",
".indexOf",
"parseInt",
"reverse",
".length=",
".replace",
"replace",
"language",
"disabled",
"configurable",
"erasable",
"writable",
"enabled",
"parents",
"reject",
"checked",
"accept",
"Function",
"location",
"modified",
"confirm",
"prompt",
"Integer",
"indexOf",
".split",
"reverse",
".length",
"onclick",
".apply",
".cookie",
"screen.",
".charAt",
"request",
"promise",
"trigger",
"update",
"prompt",
"confirm",
"===[]",
"void 0",
"delete ",
"delete",
".slice(",
".slice",
".filter(",
".filter",
"style",
"value",
"alert",
"event",
"jQuery",
"React",
"Angular",
"server",
"=[]",
"==={}",
"{}===",
"join",
"push",
".pop",
".trim(",
".trim",
"trim",
"mouse",
"Node",
"call",
"Date",
"bind",
"each",
"body",
"get",
"set",
"key",
"[]",
"=={}",
"{}==",
"||",
"++){",
"**",
"0000",
".pop()",
".pop(",
".pop",
"pop",
"===",
"<<<",
">>>",
"={}",
"{}=",
"+=",
"*=",
"000",
"42",
"!0",
"!1",
"==",
"<<",
">>",
"=>",
">=",
"{}",
"&&",
"!!",
"~~",
"-=",
"/=",
"--))",
"--)",
"--",
"++))",
"++)",
"++",
"on",
"in",
"do",
"};",
")));",
"]));",
"));",
"]);",
");",
")))",
"))}",
"))",
")}",
"])"];

function js2really(what){
	for(var i=0;i<exprs.length;++i){
		if(what.indexOf(chars[i])==-1)
			what = replace_all(what, exprs[i],chars[i]);
	}
	return what;
}

function really2js(what){
	for(var i=0;i<exprs.length;++i){
		what = replace_all(what, chars[i],exprs[i]);
	}
	return what;
}

function convertAll(){
	if(document && document.scripts){
		var s = document.scripts;
		for(var i=0;i<s.length;++i){
			if(s[i].type == "script/really"){
				eval(really2js(s[i].innerHTML));
			}
		}
		return s.length;
	}
	return -1;
}

return {
	convertAll: convertAll,
	js2really: js2really,
	really2js: really2js
}
})();
if(module) module.exports = {really_converter};