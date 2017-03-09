module.exports = {
	is: function(myVar) {
		return typeof myVar === 'string' || myVar instanceof String;
	},
	camelize: function(string) {
		return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
			return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
		}).replace(/\s+/g, '');
	},
	capitalize: function(string) {
		return string.toLowerCase().replace( /\b\w/g, function (m) {
			return m.toUpperCase();
		});
	},
	handlize: function(str, separator) {
		separator = separator || '-';
		return str.replace(/\s/g, separator).toLowerCase();
	},

	capitalizeFirstLetter: function(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
};