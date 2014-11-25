Echo.commentary = function(self) {
	var text = self['textContent']? 'textContent' : 'innerHTML';
	var mode = self[text].split(/\s/)[0] || "Show";
	self[text] = (mode == "Show"? "Hide" : "Show") + " Commentary";
	var comments = document.getElementsByTagName('p');
	for (var i=0, l=comments.length; i<l; i++) {
		if (comments[i].className == 'comment') {
			comments[i].style.display = mode == "Show"? 'block' : 'none';
		}
	}
	if (mode == "Hide") document.location.hash = '';
}
