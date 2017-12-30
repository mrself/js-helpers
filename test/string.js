it('#is', function() {
	assert(h.s.is(''));
	assert(!h.s.is({}));
	assert(!h.s.is([]));
	assert(!h.s.is(null));
	assert(!h.s.is(undefined));
});

it('#camelize', function() {
	expect(h.s.camelize('first second')).to.eql('firstSecond');
});

it('#handlize', function() {
	expect(h.s.handlize('a  b', '-')).to.eql('a-b');
	expect(h.s.handlize('ab', '-')).to.eql('ab');
});

it('#capitalizeFirstLetter', function() {
	expect(h.s.capitalizeFirstLetter('word')).to.eql('Word');
});