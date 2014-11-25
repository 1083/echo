Echo.geo = {}

Echo.map = null

Echo.geo.tripTypes = {
	primary: [],
	secondary: [1, 6]
}

Echo.geo.createPopup = function(feature) {
	return L.popup()
		.setContent([
			'<h4 class="popup"><em>', feature.properties.title, '</em></h4>',
			'<p class="popup">', feature.properties.description, '</p>',
			'<address class="popup">', feature.properties.address, '</address>'
		].join(''))
}

Echo.geo.markers = {}

Echo.geo.createMarker = function(feature, latlng) {
	var stopId = feature.properties['marker-symbol'],
		options = {
			icon: L.divIcon({
				className: 'point',
				html: '<strong id="'+stopId+'" class="oldtown">'+stopId+'</strong>'
			})
		},
		marker = L.marker(latlng, options)
			.bindPopup(Echo.geo.createPopup(feature))
	Echo.geo.markers[stopId] = marker
	return marker
}

Echo.geo.selectStop = function(stopId) {
	stopId = stopId.toLowerCase()
	if (Echo.geo.markers[stopId]) {
		var marker = Echo.geo.markers[stopId]
		Echo.map.panTo(marker.getLatLng())
		document.getElementById(stopId).click()
		document.body.scrollTop = 0 // TODO check cross-browser
	}
}

Echo.geo.render = function() {

	var route = Echo.routes.oldtown // TODO hardcoded

	var tiles = L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png', {
		attribution: "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors | &copy; <a href=\"http://thunderforest.com\">Thunderforest</a>"
	})

	Echo.map = L.map('map', {
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
					dashArray: Echo.geo.tripTypes[feature.properties.tripType]
				}
			}
		},
		pointToLayer: function(feature, latlng) {
			return Echo.geo.createMarker(feature, latlng)
		}
	}).addTo(Echo.map)

	var reset = L.control({ position: 'topleft' })
	reset.onAdd = function(map) {
		div = L.DomUtil.create('div', 'leaflet-bar')
		div.innerHTML = '<a class="reset" title="Reset">&Equilibrium;</a>'
		div.onclick = function() { // TODO Prevent bubbling up
			Echo.map.setView(route.coords.init, route.zoom.init)
		}
		return div
	}
	reset.addTo(Echo.map)

	// The commentary won't stick around forever
	if (document.location.hash == '#commentary') {
		document.getElementById('commentary').click()
	}

}
