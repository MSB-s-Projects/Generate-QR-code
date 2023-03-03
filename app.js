var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { v4: uuidV4 } = require('uuid');
const QRcode = require("qrcode");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const bodyParser = require("body-parser");
var mongoose=require('mongoose');
mongoose.connect(process.env.MONGO+"/QRDB",{useNewUrlParser:true});
// QRcode.toDataURL()
const urlSchema=mongoose.Schema({
  name:String,
  url:String
});
const URL=new mongoose.model("url",urlSchema);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.get("/",function(req,res){
  res.render("index");
});
app.post("/",function(req,res){
  console.log(req.body);
  if(req.body.Text){
    QRcode.toDataURL(req.body.Text, (err, url) => {
      if (!err) {
        // rendering the qr code generated
        console.log(url);
        res.render("qrcode", { url: url });
      } else {
        console.log(err);
      }
    });
  }
  else if(req.body["URL"]){
    QRcode.toDataURL(req.body["URL"], (err, url) => {
      if (!err) {
        // rendering the qr code generated
        console.log(url);
        res.render("qrcode", { url: url });
      } else {
        console.log(err);
      }
    });
  }
  else{
    var newVar=uuidV4();
    var base64Str=req.body.ImageString;
    URL.findOne({name:newVar}).then((url)=>{
      if(err){
        console.log(err);
        res.send("Error");
      }
      else{
      
          res.send("Already Exist");
        
      }
    }).catch((error)=>{
      const ur=new URL({
        name:newVar,
        url:base64Str
      });
      ur.save();
      QRcode.toDataURL(process.env.URL+`/image/${newVar}`, (er, ul) => {
        if (!er) {
          console.log(ul);
          // rendering the qr code generated
          res.render("qrcode", { url: ul });
        } else {
          console.log(er);
        }
      });
    })

  }
 
})
app.use("/users", usersRouter);
app.get("/image/:test",function(req,res){
  console.log(req.params.test);
  URL.findOne({name:req.params.test}).then((rl)=>{
    
      console.log(rl);
      res.render("image",{img:rl.url});
    
  }).catch((error)=>{
    res.send("Not Found");
  })
  
  // var base64Str=req.query.src;
  // console.log(base64Str);
  // res.render("image",{img:base64Str});
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
