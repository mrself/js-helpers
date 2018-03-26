describe('#setByPath', function() {
	describe('Array target', function() {
		it('set if array is 1 level deep', function() {
			var array = ['a'];
			h.g.setByPath(array, '0', 'b');
			expect(array[0]).to.eql('b');
		});

		it('set if array is 2 level deep', function() {
			var array = [['a']];
			h.g.setByPath(array, '0.0', 'b');
			expect(array[0][0]).to.eql('b');
		});
	});

	describe('Object', function() {
		it('set if object is 1 level deep', function() {
			var obj = {a: 1};
			h.g.setByPath(obj, 'a', 2);
			expect(obj.a).to.eql(2);
		});

		it('set if object is 1 level deep', function() {
			var obj = {a: {b: 1}};
			h.g.setByPath(obj, 'a.b', 2);
			expect(obj.a.b).to.eql(2);
		});

		it('set if last item in object is function', function() {
			var arg = false;
			function fn(param) {
				arg = param;
			}
			
			var obj = {a: {b: fn}};
			h.g.setByPath(obj, 'a.b', 2);
			expect(arg).to.eql(2);
		});
	});
});

describe('#getByPath', function() {
	describe('Object', function() {
		it('get if an object is 1 level deep', function() {
			var obj = {a: 1};
			expect(h.g.getByPath(obj, 'a')).to.eql(1);
		});

		it('get if an object is 2 level deep', function() {
			var obj = {a: {b: 1}};
			expect(h.g.getByPath(obj, 'a.b')).to.eql(1);
		});
	});
});

describe('#getPreLast', function() {
	describe('Object', function() {
		it('get if an object is 1 level deep', function() {
			var obj = {a: 1};
			expect(h.g.getPreLast(obj, 'a')).to.eql({a: 1});
		});

		it('get if an object is 2 level deep', function() {
			var obj = {a: {b: 1}};
			expect(h.g.getPreLast(obj, 'a.b')).to.eql({b: 1});
		});
	});
});