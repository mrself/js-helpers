module.exports = {
	is: function(fn) {
		return {}.toString.call(fn) === '[object Function]';
	},
};