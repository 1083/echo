ECHO
====

Transit tracker. 4D map of spacetime.

Architecture
------------

Echo consists of 3 pages: Map, Routes, and Times.

+ Geo Map

+ Route List

+ Time Table


Construction
------------

+ Overall Process
- Paper sketches
- HTML mockups
- RDD
- TDT
- HTML/CSS "pencils"
- DOM "inks"

+ Geo Map
- OpenLayers -> Google -> Leaflet (OSM)

+ Route List
- Paper sketches -> HTML/CSS sketch -> GTFS-esque JSON -> DOM

+ Time Table
- Paper sketches -> HTML/CSS sketch -> GTFS-esque JSON -> DOM

===

API
---

http://www.gtfs-data-exchange.com/api

Features
--------

JSON
----

GeoJSON
- Feature: Has "geometry", types--
	- Point: 
	- LineString:
	- Polygon: 
	- MultiPoint: 
	- MultiLineString: 
	- MultiPolygon:
- FeatureCollection: Has "features" 

{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands",
    ""
  }
}

{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}

ChronoJSON

TODO
----

+ Switch from GMap to OSM

+ Convert JSON -> GTFS? GeoJSON?
- http://geojson.org/geojson-spec.html

+ Additional Old Town stops
```
coords: {
	s_main: [44.933316, -68.645175],
	n_main: [44.935851, -68.646244],
	stillwater: [44.939136, -68.648176]
}
```

+ Stop pickup & dropoff details
- Something like:
```
pickup: {
	type: 'regular' | 'request' | 'schedule' | null,
	call: '{phone}' // if type == 'schedule'
}
```

+ Arrival and departure times
- Currently just single time
```
time(s): {
	arrive: time,
	depart: time
}
```

+ Instead of Echo.data.trips' `block` and `sequence`, maybe `index(es)`: {block, sequence}?

+ Additional fields from GTFS
- fare_attributes
- fare_rules
- shapes
- frequencies
- transfers

+ More route fields
- Split `name` into `short_name` and `long_name`
- Add `type` (GTFS isn't very extensive: https://developers.google.com/transit/gtfs/reference#routes_fields)
- Add `text_color`

+ Expand address format
- See: https://developers.google.com/maps/documentation/geocoding/#Types
- Something like:
```
address: {
	street_address: "100 Broad St",
	locality: "Bangor",
	region: "ME",
	post_code: "04401",
	country: "US"
}
```

```
address: {
	premise: "EMMC",
	street_number: "489",
	street: "State St",
	route: "US 2",
	locality: "Bangor",
	region: "ME",
	post_code: "04401",
	country: "US"
}
```

+ Release all this as addition to GeoJSON
- TODO "type": ["route", "stop", etc.]

References
----------

= GTFS

GTFS Data Exchange: API Documentation
http://www.gtfs-data-exchange.com/api

GTFS Realtime JSON
https://github.com/YourMapper/GTFS-realtime-JSON

= GeoJSON

Spec
http://geojson.org/geojson-spec.html

Simplestyle
https://github.com/mapbox/simplestyle-spec
https://www.mapbox.com/foundations/an-open-platform/#simplestyle

Mapping geoJSON files on GitHub
https://help.github.com/articles/mapping-geojson-files-on-github

= OpenStreetMap

Public Transport
http://wiki.openstreetmap.org/wiki/Proposed_features/Public_Transport

Simplified Public Transport Scheme
http://wiki.openstreetmap.org/wiki/Proposed_features/Simplified_Public_Transport_Scheme

Shops within a mall
http://wiki.openstreetmap.org/wiki/Tag:shop%3Dmall#Shops_within_a_mall
