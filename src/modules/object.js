module.exports = {
	is: function (possibleObj) {
		return (!!possibleObj) && (possibleObj.constructor === Object);
	},
	length: function(obj) {
		return Object.keys(obj).length;
	},
	has: function(obj, property) {
		return obj.hasOwnProperty(property);
	},
	get: function(obj, key) {
		if(typeof obj === 'undefined') return false;
		var index = prop.indexOf('.');

		if(index > -1) {
			return this.get(obj[prop.substring(0, index)], prop.substr(index + 1));
		}
		
		return obj[prop];
	},
};