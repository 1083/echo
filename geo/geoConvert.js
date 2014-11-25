// GPX points -> JSON array
var gpx = ""
gpx = gpx.replace(/"><\/rtept><rtept lat="/,  /\], \[/g)
gpx = gpx.replace(/" lon="/, /, /g)

// Swap coords
var input = JSON.parse(gpx)
var output = []
for (var i in input) {
  var it = []
  it.push(input[i][1])
  it.push(input[i][0])
  output.push(it)
}

var done = JSON.stringify(output)

// Current bounds, as array
var bounds = map.getBounds()
B = [
	[bounds._northEast.lat, bounds._northEast.lng],
	[bounds._southWest.lat, bounds._southWest.lng]
]
