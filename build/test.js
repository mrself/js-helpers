QUnit.module('Object');
QUnit.test('#is', function() {
	var f = function() {};
	ok(h.obj.is({}));
	ok(h.obj.is(new f()));
	ok(!h.obj.is('a'));
	ok(!h.obj.is(null));
	ok(!h.obj.is(1));
	ok(!h.obj.is(f));
});
QUnit.test('#length', function() {
	ok(h.obj.length({a:1, b:2}) == 2);
	ok(h.obj.length({}) === 0);
});
QUnit.test('#has', function() {
	ok(h.obj.has({a:1}, 'a'));
	ok(!h.obj.has({}, 'a'));
});
QUnit.test('#invert', function() {
	var o = {a:1, b: 2};
	o = h.obj.invert(o);
	ok(o[1] == 'a');
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

QUnit.module('Regexp');
QUnit.test('#execArray', function() {
	var str = 'I am superman. And i am superman';
	var ar = h.reg.execArray(str, /(superman)/g);
	h.g.l(ar);
	ok(ar.length == 2);
	ok(ar[1] == 'superman');
	ok(ar[0] == 'superman');
});


QUnit.module('String');
QUnit.test('#is', function() {
	var is = h.s.is;
	ok(is(''));
	ok(!is(1));
	ok(!is(function(){}));
	ok(!is({}));
	ok(!is(null));
	ok(!is(undefined));
});
QUnit.test('#camelize', function() {
	var fn = h.s.camelize;
	ok(fn('i-am-batman') == 'iAmBatman', '"-" replace');
	ok(fn('oh    yeah   ') == 'ohYeah');
});
QUnit.test('#capitalize', function() {
	ok(h.s.capitalize('lowercase') == 'Lowercase');
});
QUnit.test('#handlize', function() {
	ok(h.s.handlize('you and i') == 'you-and-i');
	ok(h.s.handlize('you and I') == 'you-and-i');
	ok(h.s.handlize('you and I', '_') == 'you_and_i');
});