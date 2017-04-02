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
	element = build("div", build("div", build("h1","I am Oshan.") + build("h3","Code. Coffee. Music. For Life."), "main"), "landing");
	b.html(element);
	addCSS();
}

/*----- Ready to build any element with TagName, Content inside the Tag and Class to Add parameters. -----*/
/*----- Can be used again and again and can be nested -----*/
function build(tag,contentHere, classesToBuild){
	element = sTag + tag + " class =" + classesToBuild + endT + contentHere + eTag + tag + endT;
	return element;
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
		"text-decoration": "none",
		"font-family": "'Slim Joe', sans-serif"
	});
	$("html, body").css({
		"height": "100%",
		"width": "100%"
	});
}