module.exports = {
	is: function (possibleObj) {
		return possibleObj !== null && typeof possibleObj === 'object' && !Array.isArray(possibleObj);
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
	},
	get: function(obj, prop) {
		if(typeof obj === 'undefined') return false;
		var index = prop.indexOf('.');

		if(index > -1) {
			return this.get(obj[prop.substring(0, index)], prop.substr(index + 1));
		}
		
		return obj[prop];
	},
};