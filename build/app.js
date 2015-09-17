(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Usage example
 * require('./helpers') return helpers obj
 */

window.h = require('./helpers');
},{"./helpers":4}],2:[function(require,module,exports){
module.exports = {
	is: function (possibleArr) {
		return (!!possibleArr) && (possibleArr.constructor === Array);
	},
	remove: function(array, element) {
		var i = array.indexOf(element);
		if (i != -1) array.splice(i, 1);
		return array;
	}
};
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
var helpers = {};
helpers.g = require('./general');
helpers.obj = require('./object');
helpers.arr = require('./array');
helpers.s = require('./string');
helpers.reg = require('./reg');
module.exports = helpers;
},{"./array":2,"./general":3,"./object":5,"./reg":6,"./string":7}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
module.exports = {
	execArray: function(string, regexp) {
		var array,
			resultArray = [],
			error = false;
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
},{}],7:[function(require,module,exports){
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
	}
};
},{}]},{},[1]);
