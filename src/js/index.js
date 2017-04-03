(function() {
  window.onscroll = function() {
    if (window.document.body.scrollTop > 50) {
      document.body.classList.add("changeColor");
      document.querySelector('header').classList.add("changeHeader");
    } else {
      document.body.classList.remove("changeColor");
      document.querySelector('header').classList.remove("changeHeader");
    }
  };
})();

document.querySelector('form').addEventListener("submit", function(e) {
	e.preventDefault();

	if (document.getElementById("luckyNumber").value < 10) {
		alert("Hello!");
		return;
	}
});