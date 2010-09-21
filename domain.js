function Pub() {
	this.__defineGetter__("key", function() {
		   return this.point.lat + "," + this.point.long;
		});
	
	this.name = null;
	this.point = {lat: null, long: null};
	this.address = null;
	this.rating = null;
	this.genre = null;
}

function Crawl() {
	this.__defineGetter__("key", function() {
		   return this.name;
		});
	
	this.name = null;
	this.pubs = [];
	this.pointsOnPath = [];
	
	this.addPoint = function(point) {
		this.pointsOnPath.push(point);
	};
	
	this.addPub = function(pub) {
		for(i=0; i<this.pubs.length; i++) {
			if(this.pubs[i].key === pub.key)
			{
				return;
			}
		}
		
		this.pubs.push(pub);
	};
}