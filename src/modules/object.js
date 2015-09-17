module.exports = {
	is: function (possibleObj) {
		return (!!possibleObj) && (possibleObj.constructor === Object);
	},
	length: function(obj) {
		return Object.keys(obj).length;
	},
	has: function(obj, property) {
		return obj.hasOwnProperty(property);
	}
};