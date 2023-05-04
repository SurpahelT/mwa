require("dotenv").config();
const express=require("express");
const app=express();
const path=require("path");
const routes=require("./routes/routes");
const router = require("./routes/routes");

const test=function(req, res){
  res.send("Test Callback");
}
//Set a variable using express object
//app.set("PORT",3000);
//app.set("PORT1", 3245);

// app.listen(app.get("PORT1"));
// app.get("/", test);

// console.log("Listen to port"+app.get("PORT1"));

// const cb=function(){
//   const port=server.address().port;
//   console.log("Listen to port "+port);
// };

// const server=app.listen(app.get("PORT"),cb)

// app.get("/",test);

const server=app.listen(process.env.PORT, function(){
  const port=server.address().port;

  console.log(process.env.MSG_SERVER_START,port);
});



app.use(function(req,res,next){
  console.log(req.method,req.url);
  next();
})



app.use(express.static(path.join(__dirname,process.env.PUBLIC_FOLDER)));

//app.use("/api", routes);
app.use("/api", routes);
//app.use("/api/:index", routes);
// app.get("/", function(req, res){
//   console.log("GET Received");
//   res.status(404).send("Index PAGE NOT FOUND!");
// })

// app.get("/json", function (req, res){
//   console.log("JSON request received");
//   res.status(200).json({"JSON":true});
// })
// app.get("/",function(req,res){
//   console.log("File request Received");
//   res.status(200).sendFile(path.join(__dirname,"package.json"));
// })
//app.use(express.static(path.join(__dirname,"public")));

