Echo.map = {}

Echo.map.element = null

Echo.map.tripTypes = {
	primary: [],
	secondary: [1, 6]
}

Echo.map.createPopup = function(feature) {
	return L.popup()
		.setContent(
			'<h4 class="popup"><em>'+feature.properties.title+'</em></h4>'+
			'<p class="popup">'+feature.properties.description+'</p>'+
			'<address class="popup">'+feature.properties.address+'</address>'
		)
}

Echo.map.markers = {}

Echo.map.createMarker = function(feature, latlng) {
	var stopId = feature.properties['marker-symbol']
	var options = {
		icon: L.divIcon({
			className: 'point',
			html: '<strong id="'+stopId+'" class="oldtown">'+stopId+'</strong>'
		})
	}
	var marker = L.marker(latlng, options)
		.bindPopup(Echo.map.createPopup(feature))
	Echo.map.markers[stopId] = marker
	return marker
}

Echo.map.selectStop = function(stopId) {
	stopId = stopId.toLowerCase()
	if (Echo.map.markers[stopId]) {
		var marker = Echo.map.markers[stopId]
		Echo.map.element.panTo(marker.getLatLng())
		document.getElementById(stopId).click()
		document.body.scrollTop = 0 // TODO check cross-browser
	}
}

Echo.map.render = function() {

	var route = Echo.routes.oldtown // TODO hardcoded

	var tiles = L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png', {
			attribution: "Data &copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors | Map &copy; <a href=\"http://thunderforest.com\">Thunderforest</a>"
		})

	Echo.map.element = L.map('map', {
		layers: tiles,
		center: route.coords.init,
		zoom: route.zoom.init,
		minZoom: route.zoom.min,
		maxZoom: route.zoom.max,
		scrollWheelZoom: false // because annoying
	})

	L.geoJson(route.features, {
		style: function(feature) {
			if (feature.geometry.type == 'LineString') {
				return {
					opacity: .7,
					color: route.color,
					dashArray: Echo.map.tripTypes[feature.properties.tripType]
				}
			}
		},
		pointToLayer: function(feature, latlng) {
			return Echo.map.createMarker(feature, latlng)
		}
	}).addTo(Echo.map.element)

	var reset = L.control({ position: 'topleft' })
	reset.onAdd = function(map) {
		div = L.DomUtil.create('div', 'leaflet-bar')
		div.innerHTML = '<a class="reset" title="Reset">&Equilibrium;</a>'
		div.onclick = function() {
			// TODO Can set one, or the other, but not both...
			Echo.map.element.setView(route.coords.init)
			// Echo.map.element.setZoom(route.zoom.init)
		}
		return div
	}
	reset.addTo(Echo.map.element)

	// The commentary won't stick around too long
	if (document.location.hash == '#commentary') {
		document.getElementById('commentary').click()
	}

}
