const express = require("express");
const router = express.Router();


// router.route("/json")
// .get(function(req, res){
//   console.log("GET JSON request received");
//   res.status(200).json({"JSON_Data" : "GET"});
// })
// .post(function(req,res){
// console.log("POST JSON request");
// res.status(200).json({"JSON_Data" : "POST"});
// });

const gamesController=require("../controllers/games_controllers");
const studentsController=require("../controllers/studentsController");

router.route("/games").get(gamesController.getAllGames)

router.route("/games/:gameId").get(gamesController.getOne);

router.route("/multiply/:firstNum").get(gamesController.multiplyNumber);

router.route("/students").get(studentsController.getAll);
router.route("/students/:studentId").get(studentsController.getOne);

module.exports=router;
