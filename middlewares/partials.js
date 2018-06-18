var async = require('async')
var Contentstack = require('contentstack')
var config = require('config')
const Stack = Contentstack.Stack(config.get('apikey'), config.get('accesstoken'), config.get('environment'))

module.exports = function (req, res, next) {

	async.parallel([
		function (callback) {
			// Get Header data
			var Query = Stack.ContentType('header').Query()
				.toJSON()
				.find()
				.spread(function success(result) {
					callback(null, result[0])
				}, function error(error) {
					callback(error)
				})
		},
		function (callback) {
			// Get Footer data
			var Query = Stack.ContentType('footer').Query()
				.toJSON()
				.find()
				.spread(function success(result) {
					callback(null, result[0])
				}, function error(error) {
					callback(error)
				})
		}], function (error, success) {
			if (error) return next(error)
			
			res.locals.partials = {}
			res.locals.partials.header = success[0]
			res.locals.partials.footer = success[1]
			
			
			next()
		})
};