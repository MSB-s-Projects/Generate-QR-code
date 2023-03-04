// importing express
var express = require('express')
// import dotenv and configure it
require('dotenv').config()
// importing qrcode
const QRcode = require('qrcode')
// importing uuid
const { v4: uuidV4 } = require('uuid')
// import mongoose
var mongoose = require('mongoose')

// connecting to the database
mongoose.connect(process.env.MONGO + '/QRDB', { useNewUrlParser: true })

// create a URL schema
const urlSchema = mongoose.Schema({
	name: String,
	url: String,
})

// create a URL model
const URL = new mongoose.model('url', urlSchema)

// creating express router
var router = express.Router()

// creating the root route
router
	.route('/')

	// get request
	.get((req, res, next) => {
		// render the homepage of the site
		res.render('index')
	})

	// post request
	.post((req, res) => {
		// if the request body has a text field
		if (req.body.Text) {
			// generating a qr code from the text
			QRcode.toDataURL(req.body.Text, (err, url) => {
				if (!err) {
					// rendering the qr code generated
					res.render('qrcode', { url: url })
				} else {
					console.log(err)
				}
			})
			// if the request body has a url field
		} else if (req.body['URL']) {
			// generating a qr code from the url
			QRcode.toDataURL(req.body['URL'], (err, url) => {
				if (!err) {
					// rendering the qr code generated
					res.render('qrcode', { url: url })
				} else {
					console.log(err)
				}
			})
			// if the request body has a image field
		} else {
			// generating a random string
			var newVar = uuidV4()
			// getting the base64 string of the image
			var base64Str = req.body.ImageString
			// checking if the image already exists
			URL.findOne({ name: newVar })
				.then((url) => {
					if (err) {
						console.log(err)
						res.send('Error')
					} else {
						res.send('Already Exist')
					}
				})
				// if the image does not exist then save it to the database
				.catch((error) => {
					// creating a new URL object
					const ur = new URL({
						name: newVar,
						url: base64Str,
					})
					// saving the object to the database
					ur.save()
					// generating a qr code from the url
					QRcode.toDataURL(process.env.URL + `/image/${newVar}`, (er, ul) => {
						if (!er) {
							// rendering the qr code generated
							res.render('qrcode', { url: ul })
						} else {
							console.log(er)
						}
					})
				})
		}
	})

// creating the image route
router.route('/image/:test').get((req, res) => {
	// finding the image in the database
	URL.findOne({ name: req.params.test })
		.then((rl) => {
			// rendering the image
			res.render('image', { img: rl.url })
		})
		.catch((error) => {
			res.send('Not Found')
		})
})

// exporting the router
module.exports = router
