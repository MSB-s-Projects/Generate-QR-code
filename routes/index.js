// importing express
var express = require('express')

require('dotenv').config()
var express = require('express')
// importing qrcode
const QRcode = require('qrcode')

// creating express router
var router = express.Router()
const { v4: uuidV4 } = require('uuid')
router
	.route('/')

	// get request
	.get((req, res, next) => {
		// render the homepage of the site
		res.render('index')
	})

	// post request
	.post((req, res) => {
		// create a qr code from the form data
		console.log(req.body)
		if (req.body.Text) {
			QRcode.toDataURL(req.body.Text, (err, url) => {
				if (!err) {
					// rendering the qr code generated
					console.log(url)
					res.render('qrcode', { url: url })
				} else {
					console.log(err)
				}
			})
		} else if (req.body['URL']) {
			QRcode.toDataURL(req.body['URL'], (err, url) => {
				if (!err) {
					// rendering the qr code generated
					console.log(url)
					res.render('qrcode', { url: url })
				} else {
					console.log(err)
				}
			})
		} else {
			var newVar = uuidV4()
			var base64Str = req.body.ImageString
			URL.findOne({ name: newVar })
				.then((url) => {
					if (err) {
						console.log(err)
						res.send('Error')
					} else {
						res.send('Already Exist')
					}
				})
				.catch((error) => {
					const ur = new URL({
						name: newVar,
						url: base64Str,
					})
					ur.save()
					QRcode.toDataURL(process.env.URL + `/image/${newVar}`, (er, ul) => {
						if (!er) {
							console.log(ul)
							// rendering the qr code generated
							res.render('qrcode', { url: ul })
						} else {
							console.log(er)
						}
					})
				})
		}
	})

// exporting the router
module.exports = router
