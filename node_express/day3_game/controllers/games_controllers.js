const gamesData=require("../data/games.json");
module.exports.getAllGames=function(req,res){
  // console.log("GET all games");
  // res.status(200).json(gamesData);
  console.log("Get 5 games");

  let offset=0;
  let count = 5;
  if(req.query && req.query.count){
    count=parseInt(req.query.count,10);
  }
  if(req.query && req.query.offset){
    offset=parseInt(req.query.offset,10);
  }
  console.log(offset,count, (offset+count)-count);
  if((offset+count)>(offset+5)){
    count=5;
  }
  const pageGame=gamesData.slice(offset,offset+count);
  
  res.status(200).json(pageGame);
};
module.exports.postAll=function(req,res){
  console.log("JSON POST received");
  res.status(200).json({"JSON DATA":"POST"});
}

module.exports.getSomeGames=function(req,res){
  console.log("Get some games");
  const reqOffset=req.query.reqOffset;
  const reqCount=req.query.reqCount;
  let offset=0;
  let count = 5;
  console.log(reqCount,reqOffset);
  if(req.query && req.query.count){
    count=parseInt(req.query.count);
  }
  if(req.query && req.query.offset){
    offset=parseInt(req.query.offset);
  }
  console.log(offset,count, offset+count);
  const pageGame=gamesData.slice(offset,offset+count);

  res.status(200).json(pageGame);
};

module.exports.getOne=function(req,res){
  const gameId=req.params.gameId;
  const theGame=gamesData[gameId];
  console.log("GET game with gameID", gameId);
  res.status(200).json(theGame);
}

module.exports.multiplyNumber=function(req,res){
  const fistNum=req.params.firstNum;
  const seconNum=req.query.offset;
  const result=parseInt(fistNum) * parseInt(seconNum);
  console.log("Multiplying parameter value and query value of", fistNum,seconNum);
  res.status(200).send("The result is "+result);
};