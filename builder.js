/*----- Global Variables -----*/
var element = "";
var tagname = "";
var src = "";
var href = "";
var classes = "";
var content = "";
var sTag = "<";
var eTag = "</";
var endT = ">";

/*----- Auto initialization of build sequence -----*/
$(window).on("load", startBuild);

/*----- function that attaches the built masterpiece to the body of document to decorate with css -----*/
function startBuild(){
	var b = $("body");
	var descText = "I am a front-end "  + build("a", "web-developer", "", "web") + " and " + build("a", ".NET developer", "", "net") + ".";
	descText += "<br>";
	descText += "I live in Kathmandu and I have completed GCE A-levels.";
	element = build("div", build("div", build("h2", "Hello!") + build("h1","I am Oshan.") + build("h3",descText), "main"), "landing");
	b.html(element);
	createAttributes();
	addCSS();
}

/*----- Ready to build any element with TagName, Content inside the Tag, Class to Add and their IDs as parameters. -----*/
/*----- Can be used again and again and can be nested -----*/
function build(tag, contentHere, classesToBuild, idToAttach){
	if ((!classesToBuild || classesToBuild==="") & (!idToAttach || idToAttach==="")){
		element = sTag + tag + endT + contentHere + eTag + tag + endT;
	} else if(!idToAttach || idToAttach===""){
		element = sTag + tag + " class =" + classesToBuild + endT + contentHere + eTag + tag + endT;
	} else if(!classesToBuild || classesToBuild===""){
		element = sTag + tag + " id =" + idToAttach + endT + contentHere + eTag + tag + endT;
	} else {
		element = sTag + tag + " class =" + classesToBuild + " id =" + idToAttach + endT + contentHere + eTag + tag + endT;
	};
	return element;
}

/*----- function to set link to the anchor tags and thier behavior, all with attributes -----*/
function createAttributes(){
	$("#web")[0].setAttributeNode(document.createAttribute("href"));
	$("#web")[0].setAttributeNode(document.createAttribute("target"));
	document.getElementById("web").setAttribute("href", "https://thisisoshan.github.io/");
	$("#net")[0].setAttributeNode(document.createAttribute("href"));
	$("#web")[0].setAttributeNode(document.createAttribute("target"));
	document.getElementById("net").setAttribute("href", "https://thisisoshan.github.io/v3/");
	document.getElementById("net").setAttribute("target", "_blank");
	document.getElementById("web").setAttribute("target", "_blank");
}

/*----- Basic CSS sttyling of built design -----*/
function addCSS() {
	$("body").css({
		"margin": "0",
		"padding": "0",
		"text-align": "center",
		"user-select": "none"
	})
	$(".landing").css({
		"height": "100%",
		"width": "100%",
		"display": "table",
		"background": "url(img-4.jpg)  no-repeat center scroll",
		"background-size": "cover"
	});
	$(".main").css({
		"height": "100%",
		"width": "100%",
		"display": "table-cell",
		"vertical-align": "middle",
		"color": "#fff",
		"font-family": "'Big John', sans-serif"
	});
	$("h1").css({
		"display": "block",
		"font-size": "4rem",
		"text-decoration": "underline",
		"margin": "0"
	});
	$("h3").css({
		"font-size": "1rem",
		"display": "inline block",
		"font-family": "'Slim Joe', sans-serif"
	});
	$("h2").css({
		"display":"block",
		"font-size": "1.5rem",
		"margin": "0"
	});
	$("html, body").css({
		"height": "100%",
		"width": "100%"
	});
	$("a").css({
		"padding-bottom": "2px",
		"text-decoration":"none",
		"color":"inherit",
		"border-bottom": "1.75px dotted #fff"
	});
}