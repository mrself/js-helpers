module.exports = {
	/* Deprecated. Use Array.isArray insted */
	is: function (possibleArr) {
		return (!!possibleArr) && (possibleArr.constructor === Array);
	},
	remove: function(array, element) {
		var i = array.indexOf(element);
		if (i != -1) array.splice(i, 1);
		return array;
	}
};