define("base", function() {
	return {
		name: "base"
	};
});

define("abc", ["base"], function(base) {
	return {
		name: "abc",
		deps: base
	};
});

define("def", ["base", "abc"], function(base, abc) {
	return {
		name: "def",
		base: base,
		abc: abc
	};
});

require(["abc", "def"], function(abc, def) {
	console.log(abc);
	console.log(def);
});