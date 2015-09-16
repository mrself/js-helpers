module.exports = {
	is: function (possibleArr) {
		return (!!a) && (a.constructor === Array);
	},
	remove: function(array, elVal) {
		var index = array.indexOf(elVal);
		if (index != -1) array.splice(index, 1);
		return array;
	}
};