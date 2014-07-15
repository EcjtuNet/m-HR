$(document).ready(function() {
	initializer();
	hr2next();
	submitForm();
});

function initializer () {
	var hr = $("#hr"),
		edit = $("#edit"),
		intro = $("#intro");
	edit.css('display', 'none');
	intro.css('display', 'none');
}

function hr2next () {
	var hr = $("#hr"),
		edit = $("#edit"),
		intro = $("#intro");
	var tech = $("#tech"),
		news = $("#news"),
		prd = $("#prd"),
		manage = $("#manage"),
		register = $("#register");
	register.bind('click', function() {
		hr.css('display', 'none');
		edit.css('display', 'block');
	});
}

function submitForm () {
	
}
