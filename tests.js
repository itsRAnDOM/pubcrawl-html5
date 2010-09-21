module("Pub");

var fixture = new Pub();

test("key getter", function() {
	fixture.point = {lat: 1234, long: 5678};
	equals(fixture.key, "1234,5678", "Key property did not return comma delimited version of Point");
});

module("Crawl");

var pub1 = new Pub();
var pub2 = new Pub();
fixture = new Crawl();

test("key getter", function() {
	ok(false, "FAIL!");
});

test("add pubs with no duplicates", function() {
	ok(false, "FAIL!");
});

test("add pubs with duplicates", function() {
	ok(false, "FAIL!");
});