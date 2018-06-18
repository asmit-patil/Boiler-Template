var express = require('express')
var router = express.Router()
var Stack = require('../models/contentstack')


router.get('/', function (req, res) {
    var contentTypeUID = "<<content_type_UID>>" 
    
    Stack.ContentType(contentTypeUID).Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            res.render('<<view_name>>', {   
                entry: result[0],
            })
        }, function error(error) {
            next(error)
    })
})

module.exports = router