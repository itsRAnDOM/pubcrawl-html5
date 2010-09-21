module("Pub");

var pubFixture = new Pub();

test("key getter", function() {
	pubFixture.point = {lat: 1234, long: 5678};
	equals(pubFixture.key, "1234,5678", "Key property did not return comma delimited version of Point");
});

module("Crawl");

var pub1 = new Pub();
var pub2 = new Pub();
var crawlFixture = new Crawl();

test("key getter", function() {
	ok(false, "FAIL!");
});

test("add pubs with no duplicates", function() {
	ok(false, "FAIL!");
});

test("add pubs with duplicates", function() {
	ok(false, "FAIL!");
});