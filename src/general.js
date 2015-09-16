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
	}
};