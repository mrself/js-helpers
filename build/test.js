QUnit.module('Object');
QUnit.test('#is', function() {
	ok(h.obj.is({}));
	ok(!h.obj.is('a'));
	ok(!h.obj.is(null));
	ok(!h.obj.is(1));
	ok(!h.obj.is(function() {}));
});
QUnit.test('#length', function() {
	ok(h.obj.length({a:1, b:2}) == 2);
	ok(h.obj.length({}) === 0);
});
QUnit.test('#has', function() {
	ok(h.obj.has({a:1}, 'a'));
	ok(!h.obj.has({}, 'a'));
});