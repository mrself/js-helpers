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

QUnit.module('Array');
QUnit.test('#is', function() {
	ok(h.arr.is([]));
	ok(!h.arr.is(''));
	ok(!h.arr.is(null));
	ok(!h.arr.is(undefined));
	ok(!h.arr.is(3));
	ok(!h.arr.is(function() {}));
});
QUnit.test('#remove', function() {
	var a = [1, '3', 0];
	h.arr.remove(a, 1);
	ok(a.indexOf(1) == -1);

	h.arr.remove(a, 0);
	h.arr.remove(a, 'some'); // ensure that array is not modified when element does not exist
	ok(a.indexOf(0) == -1);

	h.arr.remove(a, '3');
	ok(a.indexOf('3') == -1 && a.length === 0);
});