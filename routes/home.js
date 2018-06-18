var express = require('express')
var router = express.Router()
var Stack = require('../models/contentstack')
var ContentTypeUID = "home" //unique id of your content type

router.get('/', function (req, res) {
    Stack.ContentType(ContentTypeUID).Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            console.log(result[0])
            res.render('home', {   //your view name
                entry: result[0],
            })
        }, function error(error) {
            next(error)
})
})

module.exports = router