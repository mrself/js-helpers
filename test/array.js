describe('#remove', function() {
	it('remove an element from array if it exists', function() {
		var ar = [1, 2];
		h.arr.remove(ar, 1);
		expect(ar).to.eql([2]);
	});

	it('do nothing if an elemtn does not exist', function() {
		var ar = [1, 2];
		h.arr.remove(ar, 3);
		expect(ar).to.eql([1, 2]);
	});
});