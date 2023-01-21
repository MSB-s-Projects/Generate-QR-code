// importing express
var express = require("express");
// importing qrcode
const QRcode = require("qrcode");

// creating express router
var router = express.Router();

// QRcode.toDataURL()

// "/" route
router
  .route("/")

  // get request
  .get((req, res, next) => {
    // render the homepage of the site
    res.render("index");
  })

  // post request
  .post((req, res) => {
    // create a qr code from the form data
    QRcode.toDataURL(req.body.string, (err, url) => {
      if (!err) {
        // rendering the qr code generated
        res.render("qrcode", { url: url });
      } else {
        console.log(err);
      }
    });
  });

// exporting the router
module.exports = router;
