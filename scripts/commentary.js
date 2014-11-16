Echo.commentary = function(self) {
	var text = self['textContent']? 'textContent' : 'innerHTML';
	var mode = self[text].split(/\s/)[0] || "Show";
	self[text] = (mode == "Show"? "Hide" : "Show") + " Design Commentary";
	var comments = document.getElementsByTagName('p');
	for (var i=0, l=comments.length; i<l; i++) {
		if (i == l-1) { // Reached end of commentary
			window.scrollTo(0, 0)
		}
		else if (comments[i].className == 'comment') {
			comments[i].style.display = mode == "Show"? 'block' : 'none';
		}
	}
}
