module.exports = {
	is: function (possibleObj) {
	    return possibleObj !== null && typeof possibleObj === 'object';
	},
	length: function(obj) {
		return Object.keys(obj).length;
	},
	has: function(obj, property) {
		return obj.hasOwnProperty(property);
	},
	invert: function(obj) {
		var inverted = {};
	    for (var prop in obj)
	        obj.hasOwnProperty(prop) && (inverted[obj[prop]] = prop);
	    return inverted;
	}
};