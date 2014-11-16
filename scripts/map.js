Echo.map = {}

Echo.map.element = null

Echo.map.tripTypes = {
	primary: [],
	secondary: [1, 6]
}

Echo.map.createPopup = function(feature, stopId) {
	// stopId = stopId || ''
	return L.popup()
		.on('close', function() {
			document.location.hash = ''
		})
		.on('open', function() {
			document.location.hash = stopId
		})
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
		.bindPopup(Echo.map.createPopup(feature, stopId))
	Echo.map.markers[stopId] = marker
	return marker
}

Echo.map.getStop = function(stopId) {
	if (Echo.map.markers[stopId]) {
		var marker = Echo.map.markers[stopId]
		Echo.map.element.panTo(marker.getLatLng())
		document.getElementById(stopId).click()
	}
}

window.onhashchange = function(scrollTop) {
	var hash = document.location.hash.substr(1).toLowerCase()
	hash == 'commentary'? Echo.commentary() : Echo.map.getStop(hash)
	if (scrollTop !== false) document.body.scrollTop = 0 // TODO check cross-browser
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
			Echo.map.element.setView([44.8665, -68.70])
			// Echo.map.element.setZoom(route.zoom.init)
		}
		return div
	}
	reset.addTo(Echo.map.element)

	window.onhashchange(false)

}
