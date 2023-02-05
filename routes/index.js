// // importing express
// var express = require("express");
// // importing qrcode
// const QRcode = require("qrcode");
// var mongoose=require('mongoose');
// mongoose.set('strictQuery', true);
// const { v4: uuidV4 } = require('uuid');
// mongoose.connect("mongodb://0.0.0.0:27017/QRDB",{useNewUrlParser:true});
// // creating express router
// var router = express.Router();

// QRcode.toDataURL()

// "/" route
// router
//   .route("/")

//   // get request
//   .get((req, res, next) => {
//     // render the homepage of the site
//     res.render("index");
//   })

//   // post request
//   .post((req, res) => {
//     console.log(req.body);
//     // create a qr code from the form data
//     if(req.body.fd){
//       var newVar=uuidV4();
//       var base64Str=req.body.fd;
//       URL.find({name:newVar},function(err,url){
//         if(err){
//           console.log(err);
//           res.send("Error");
//         }
//         else{
//           if(url.length===0){
//             const ur=new URL({
//               name:newVar,
//               url:base64Str
//             });
//             ur.save();
//             QRcode.toDataURL(`https://generateqrcode-msb.vercel.app/image/${newVar}`, (er, ul) => {
//               if (!er) {
//                 console.log(ul);
//                 // rendering the qr code generated
//                 res.render("qrcode", { url: ul });
//               } else {
//                 console.log(er);
//               }
//             });
//           }
//           else{
//             res.send("Already Exist");
//           }
//         }
//       })
  
//     }
//     else{
//       QRcode.toDataURL(req.body.string, (err, url) => {
//         if (!err) {
//           // rendering the qr code generated
//           res.render("qrcode", { url: url });
//         } else {
//           console.log(err);
//         }
//       });
//     }
   
//   });

// exporting the router
// module.exports = router;
