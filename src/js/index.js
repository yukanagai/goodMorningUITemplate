$(function() {
 $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
       $('body').addClass('changeColor');
       $('header').addClass('changeHeader');
    }
    if ($(this).scrollTop() < 50) {
       $('body').removeClass('changeColor');
       $('header').removeClass('changeHeader');
    }
 });
});

document.querySelector('form').addEventListener("submit", function(e) {
	e.preventDefault();

	if (document.getElementById("luckyNumber").value < 10) {
		alert("Hello!");
		return;
	}
});