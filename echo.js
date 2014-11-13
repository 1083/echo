Echo = {}

Echo.toggleComments = function(self) {
	var text = self['textContent']? 'textContent' : 'innerHTML';
	var mode = self[text].split(/\s/)[0] || "Show";
	self[text] = (mode == "Show"? "Hide" : "Show") + " Design Comments";
	var comments = document.getElementsByTagName('p');
	for (var i=1, l=comments.length; i<l; i++) {
		if (comments[i].className == 'comment') {
			comments[i].style.display = mode == "Show"? 'block' : 'none';
		}
	}
}

Echo.features = [
	{
      "type": "Feature",
      "properties": {
        "title": "Bangor Depot",
        "marker-symbol": "A",
        "marker-size": "large",
        "marker-color": "dd1144",
        "description": "Pickering Square.",
        "address": "100 Broad St, Bangor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [44.799798, -68.770634]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "EMMC",
        "marker-symbol": "B",
        "marker-size": "large",
        "marker-color": "dd1144",
        "description": "Eastern Maine Medical Center.",
        "address": "489 State St, Bangor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [44.809030, -68.751823]
      }
    }
]

Echo.renderMap = function() {

	var map = L.map('map').setView([44.799798, -68.770634], 13)

	L.tileLayer('http://{s}.tiles.mapbox.com/v3/MapID/{z}/{x}/{y}.png', {
		attribution: "",
		maxZoom: 18
	}).addTo(map)

	L.geoJson(features).addTo(map)
}
