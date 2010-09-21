module("Pub");

var pubFixture = new Pub();

test("key getter", function() {
	pubFixture.point = {lat: 1234, long: 5678};
	equals(pubFixture.key, "1234,5678", "Key property did not return comma delimited version of Point");
});

module("Crawl");

var pub1 = new Pub();
pub1.name = "Pub 1"
pub1.point = {lat: 1234, long: 5678};

var pub2 = new Pub();
pub2.name = "Pub 2"
pub2.point = {lat: 12345, long: 56789};

var crawlFixture = new Crawl();

test("key getter", function() {
	crawlFixture.name = "Crawl Name";
	equals(crawlFixture.key, "Crawl Name", "Key property did not return the name");
});

test("add pubs with no duplicates", function() {
	crawlFixture.addPub(pub1);
	crawlFixture.addPub(pub2);
	equals(crawlFixture.pubs.length, 2, "Pubs[] is not equal to 2");
});

test("add pubs with duplicates", function() {
	crawlFixture.addPub(pub1);
	crawlFixture.addPub(pub1);
	equals(crawlFixture.pubs.length, 2, "Pubs[] is not equal to 1");
});