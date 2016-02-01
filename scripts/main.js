function enter(url) {
	$("#content").load(url);
}

$(window).on("hashchange", function() {

	var hash = location.hash.substr(1);
	var page = "templates/" + hash + ".html";

	$("#content").load(page);
});

enter("templates/home.html");