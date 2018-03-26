var fn = require('./function');

module.exports = {
	makeClass: function (Class, Prototype) {
		Class.prototype = new Prototype();
		Class.prototype.constructor = Class;
		return Class;
	},
	l: function() {
		console.log.apply(console, arguments);
	},
	isUnf: function(varr) {
		return typeof varr == 'undefined';
	},
	makeInstance: function(F) {
		return new F();
	},

	setByPath: function (obj, path, value) {
		path = this.getPath(path);
		obj = this.getPreLast(obj, path);
		this.setValue(obj, path[path.length - 1], value);
	},

	getPath: function(path) {
		return Array.isArray(path) ? path : path.split('.');
	},

	getPreLast: function(obj, path) {
		path = this.getPath(path);
		for (var i = 0; i + 1 < path.length; i++) {
			obj = obj[path[i]];
		}
		return obj;
	},

	getByPath: function(obj, path) {
		path = this.getPath(path);
		var last = this.getPreLast(obj, path);
		return last[path[path.length - 1]];
	},

	setValue: function(obj, key, value) {
		if (fn.is(obj[key]))
			obj[key](value);
		else obj[key] = value;
	},
};