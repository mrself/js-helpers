module.exports = {
	is: function (possibleObj) {
		return (!!a) && (a.constructor === Object);
	},
	execArray: function(string, regexp) {
		var array;
		var resultArray = [];
		var error = false;
		while((array = regexp.exec(string)) !== null) {
			if (typeof array[1] == 'undefined') {
				error = true;
				break;
			}
			resultArray.push(array[1]);
		}
		
		if (!error) {
			return resultArray;
		} else {
			return false;
		}
	}
};