it('#is', function() {
	assert(h.obj.is({}));
	assert(!h.obj.is(''));
	assert(!h.obj.is([]));
	assert(!h.obj.is(null));
	assert(!h.obj.is(undefined));
	assert(!h.obj.is(function() {}));
});

it('#length', function() {
	expect(h.obj.length({})).to.eql(0);
	expect(h.obj.length({p: 1})).to.eql(1);
	expect(h.obj.length({p: 1, p1: 2})).to.eql(2);
});

it('#invert', function() {
	expect(h.obj.invert({a: 'b', c: 'd'})).to.eql({b: 'a', d: 'c'});
});

describe('#get', function() {
	it('prop arg does not contain a dot', function() {
		expect(h.obj.get({a: 1}, 'a')).to.eql(1);
	});

	it('prop arg contains a dot', function() {
		expect(h.obj.get({a: {b: {c: 1}}}, 'a.b.c')).to.eql(1);
	});
});