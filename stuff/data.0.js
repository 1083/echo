Echo.data = {
	"agency": {
		"id": "bat",
		"name": "City of Bangor Community Connector",
		"url": "http://www.bangormaine.gov/?id=244&sub_id=268",
		"url_map": "http://www.bangormaine.gov/image_upload/FullMAPWEB2.pdf",
		"timezone": "America/Detroit",
		"lang": "en",
		"phone": "(207) 992-4670",
		"fare_url": "http://www.bangormaine.gov/index.php?id=2&sub_id=2899"
	},
	"stops": [{
		"id": "depot",
		"title": "Bangor Depot",
		"description": "Pickering Square, in the heart of downtown Bangor, next to parking and near dining.",
		"coords": [44.799798, -68.770634],
		"address": "100 Broad St, Bangor, ME, 04401",
		"img": ""
	}, {
		"id": "emmc",
		"title": "E.M.M.C.",
		"description": "Eastern Maine Medical Center.",
		"coords": [44.809030, -68.751823], // TODO
		"address": "489 State St, Bangor, ME, 04401",
		"img": ""
	}, {
		"id": "vz",
		"title": "Veazie",
		"description": "Town of Veazie.",
		"coords": [44.837701, -68.705065],
		"address": "",
		"img": ""
	}, {
		"id": "um-union",
		"title": "UM Union",
		"description": "University of Maine Memorial Union.",
		"coords": [44.899431, -68.667654],
		"img": ""
	}, {
		"id": "old-town",
		"title": "Old Town",
		"description": "",
		"coords": [44.935851, -68.646244],
		"address": "Main St, Old Town, ME, 04468",
		"img": ""
	}, {
		"id": "old-town-plaza",
		"title": "Old Town Plaza",
		"description": "Hannaford, YCMA, etc.",
		"coords": [44.926375, -68.665902],
		"address": "494 Stillwater Ave, Old Town, ME, 04468",
		"img": ""
	}, {
		"id": "university-mall",
		"title": "University Mall",
		"description": "Shopping center, with Bell's IGA, cinemas, etc.",
		"coords": [44.905924, -68.690680],
		"address": "6 Stillwater Ave, Old Town, ME, 04473",
		"img": ""
	}, {
		"id": "orono-research-park",
		"title": "Orono Research Park",
		"description": "...",
		"coords": [44.899933, -68.683380],
		"address": "19 Godfrey Dr, Orono, ME, 04473",
		"img": ""
	}],
	"routes": [{
		"id": "brewer-north",
		"name": "Brewer North",
		"url": "http://www.bangormaine.gov/?id=2&sub_id=2743",
		"color": "bee2bb",
		"type": "bus"
	}, {
		"id": "brewer-south",
		"name": "Brewer South",
		"url": "http://www.bangormaine.gov/?id=2&sub_id=2743",
		"color": "ff9b69",
		"type": "bus"
	}, {
		"id": "capehart",
		"name": "Capehart",
		"url": "http://www.bangormaine.gov/?id=2&sub_id=2753",
		"color": "3c612d",
		"type": "bus"
	}, {
		"id": "hammond-st",
		"name": "Hammond Street / Neighborhood Loop",
		"url": "http://www.bangormaine.gov/?id=2&sub_id=2754",
		"color": "ffd787",
		"type": "bus"
	}, {
		"id": "hampden",
		"name": "Hampden",
		"url": "http://www.bangormaine.gov/?id=2&sub_id=2761",
		"color": "8846a6",
		"type": "bus"
	}, {
		"id": "mall-hopper",
		"name": "Mall Hopper",
		"url": "http://www.bangormaine.gov/?id=2&sub_id=2762",
		"color": "c51446",
		"type": "bus"
	}, {
		"id": "old-town",
		"name": "Old Town",
		"url": "http://www.bangormaine.gov/?id=2&sub_id=2744",
		"color": "2ab098",
		"type": "bus"
	}, {
		"id": "stillwater",
		"name": "Stillwater Avenue",
		"description": "Bangor Mall / Ridgewood Drive / Wal-Mart",
		"url": "http://www.bangormaine.gov/?id=2&sub_id=2763",
		"color": "3e379a",
		"type": "bus"
	}, {
		"id": "center-st",
		"name": "Center Street",
		"description": "Broadway Shopping Center.",
		"url": "http://www.bangormaine.gov/?id=2&sub_id=2755",
		"color": "d2d2d2",
		"type": "bus"
	}, {
		"id": "mount-hope",
		"name": "Mt. Hope Avenue",
		"description": "Bangor Mall / K-Mart / Target",
		"url": "http://www.bangormaine.gov/?id=2&sub_id=2764",
		"color": "ffff4c",
		"text-color": "808080",
		"type": "bus"
	}, {
		"id": "black-bear",
		"name": "Black Bear Orono Express",
		"url": "http://www.bangormaine.gov/?id=2&sub_id=2765",
		"color": "00adff",
		"type": "bus"
	}],
	"schedule": [{
		"id": "weekday",
		"sunday": false,
		"monday": true,
		"tuesday": true,
		"wednesday": true,
		"thursday": true,
		"friday": true,
		"saturday": false,
		"start_date": "2014-07-01",
		"end_date": "2015-01-01",
		"exceptions": {
			"2014-07-04": false,
			"2014-09-01": false,
			"2014-11-27": false,
			"2014-12-25": false
		}
	}, {
		"id": "saturday",
		"sunday": false,
		"monday": false,
		"tuesday": false,
		"wednesday": false,
		"thursday": false,
		"friday": false,
		"saturday": true,
		"start_date": "2014-07-01",
		"end_date": "2015-01-01",
		"exceptions": {
			"2014-07-04": false,
			"2014-09-01": false,
			"2014-11-27": false,
			"2014-12-25": false
		}
	}],
	"trips": [{
		"id": "old-town-out",
		"route_id": "old-town",
		"schedule_id": "standard",
		"headsign": "Veazie, Orono, University of Maine, Old Town",
		"direction": "Outbound",
		"accessibility": {
			"wheelchairs": true,
			"bikes": true,
			"lowering_thingie": true
		}
	}, {
		"id": "old-town-in",
		"route_id": "old-town",
		"schedule_id": "standard",
		"headsign": "Bangor",
		"direction": "Inbound",
		"accessibility": {
			"wheelchairs": true,
			"bikes": true,
			"lowering_thingie": true
		}
	}],
	"times": [],
	"feed": {
		"publisher_name": "Max Terry",
		"publisher_url": "https://github.com/1083/echo/data.js",
		"lang": "en",
		"start_date": "2014-09-01",
		"end_date": "2014-12-31"
	}
}